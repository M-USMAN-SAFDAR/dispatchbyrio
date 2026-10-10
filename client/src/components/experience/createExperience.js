import * as THREE from 'three'
import { createFreightTruck } from './freightTruck'

export function createExperience(container, state, reduced = false, onReady = () => {}, onFailure = () => {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
  const mobile = () => window.innerWidth < 768
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile() ? 1.25 : 1.5))
  renderer.shadowMap.enabled = !mobile()
  renderer.shadowMap.type = THREE.PCFShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#b98457', .008)
  const camera = new THREE.PerspectiveCamera(40, 1, .1, 350)
  const skyUniforms = { dusk: { value: 0 } }
  const sky = new THREE.Mesh(new THREE.SphereGeometry(180, 24, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, uniforms: skyUniforms,
    vertexShader: 'varying vec3 vPosition; void main(){vPosition=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `varying vec3 vPosition; uniform float dusk;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      void main(){vec3 d=normalize(vPosition);float h=max(d.y,0.);
      vec3 horizon=mix(vec3(1.,.45,.16),vec3(.09,.16,.24),dusk);
      vec3 zenith=mix(vec3(.035,.075,.13),vec3(.012,.027,.05),dusk);
      vec3 col=mix(horizon,zenith,pow(smoothstep(0.,.42,h),.36));
      float clouds=noise(vec2(d.x*7.,d.y*28.))*.6+noise(vec2(d.x*14.,d.y*56.))*.3;
      col+=vec3(.18,.12,.08)*smoothstep(.5,.76,clouds)*smoothstep(.025,.12,h)*(1.-dusk*.8);
      float s=max(dot(d,normalize(vec3(-.75,.065,-1.))),0.);
      col+=vec3(1.,.63,.23)*pow(s,32.)*.4*(1.-dusk);
      col+=vec3(4.,2.5,1.)*smoothstep(.9997,.99995,s)*(1.-dusk);
      col=mix(vec3(.12,.11,.095),col,smoothstep(-.12,.02,d.y));gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,
  })); scene.add(sky)
  const envScene=new THREE.Scene();envScene.add(sky.clone())
  const pmrem=new THREE.PMREMGenerator(renderer)
  const environment=pmrem.fromScene(envScene,.035, .1,300)
  scene.environment=environment.texture;scene.environmentIntensity=.75
  pmrem.dispose()
  const sun=new THREE.DirectionalLight('#ffca8b',3.4);sun.position.set(-25,18,-17);sun.castShadow=true
  sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-30,right:30,top:28,bottom:-28,near:.1,far:90});sun.shadow.bias=-.0003;sun.shadow.normalBias=.03;sun.shadow.radius=3;scene.add(sun)
  const fill=new THREE.HemisphereLight('#8ea6c1','#755036',1.3);scene.add(fill)
  const edge=new THREE.DirectionalLight('#b6d4ed',1.4);edge.position.set(10,12,18);scene.add(edge)
  const canvas=document.createElement('canvas');canvas.width=canvas.height=256
  const context=canvas.getContext('2d'), pixels=context.createImageData(256,256)
  let seed=42
  for(let i=0;i<pixels.data.length;i+=4){seed=(seed*1664525+1013904223)>>>0;const v=90+(seed%45);pixels.data.set([v,v,v,255],i)}
  context.putImageData(pixels,0,0)
  const asphalt=new THREE.CanvasTexture(canvas);asphalt.wrapS=asphalt.wrapT=THREE.RepeatWrapping;asphalt.repeat.set(120,120)
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(350,350),new THREE.MeshStandardMaterial({color:'#48454a',roughness:.93,map:asphalt,bumpMap:asphalt,bumpScale:.035}))
  ground.rotation.x=-Math.PI/2;ground.position.y=-.018;ground.receiveShadow=true;scene.add(ground)
  const ridgePositions=[],ridgeIndices=[]
  for(let i=0;i<80;i++){
    const x=-160+i*4.1,height=.8+Math.sin(i*1.7)*.5+Math.sin(i*.53)*.6
    ridgePositions.push(x,0,-110,x,height,-110)
    if(i<79){const n=i*2;ridgeIndices.push(n,n+1,n+2,n+1,n+3,n+2)}
  }
  const ridgeGeometry=new THREE.BufferGeometry();ridgeGeometry.setAttribute('position',new THREE.Float32BufferAttribute(ridgePositions,3));ridgeGeometry.setIndex(ridgeIndices);ridgeGeometry.computeVertexNormals()
  scene.add(new THREE.Mesh(ridgeGeometry,new THREE.MeshStandardMaterial({color:'#514a44',roughness:1,side:THREE.DoubleSide})))
  const road=new THREE.Group();scene.add(road)
  const markingMat=new THREE.MeshStandardMaterial({color:'#c7b68c',roughness:.86})
  const stripes=new THREE.InstancedMesh(new THREE.BoxGeometry(2.5,.014,.065),markingMat,64)
  const dummy=new THREE.Object3D()
  for(let i=0;i<64;i++){dummy.position.set((i%32-16)*5,0,Math.floor(i/32)?4.4:-3.7);dummy.updateMatrix();stripes.setMatrixAt(i,dummy.matrix)}
  road.add(stripes)
  const {truck,wheels,body,labelTexture}=createFreightTruck();scene.add(truck)
  // Fine edge outlines reveal the connected systems underneath the physical rig.
  const wire=new THREE.Group();truck.add(wire)
  const wireMaterial=new THREE.LineBasicMaterial({color:'#a8e9f2',transparent:true,opacity:0,depthWrite:false})
  for(const part of body.children) if(!part.material.transparent) {
    const outline=new THREE.LineSegments(new THREE.EdgesGeometry(part.geometry,25),wireMaterial)
    outline.position.copy(part.position);outline.rotation.copy(part.rotation);wire.add(outline)
  }
  const yard=new THREE.Group();scene.add(yard)
  const yardMaterials=[]
  const mat=(color,metalness=.15)=>{const m=new THREE.MeshStandardMaterial({color,roughness:.65,metalness,transparent:true});yardMaterials.push(m);return m}
  const building=mat('#53616b'),roof=mat('#465158'),door=mat('#29333a'),trim=mat('#9ca3a2',.7),trailerMat=mat('#b8b3a8',.35)
  const lightMat=mat('#ffcf8a');lightMat.emissive.set('#ffb456');lightMat.emissiveIntensity=2
  function box(parent,sz,pos,m){const o=new THREE.Mesh(new THREE.BoxGeometry(...sz),m);o.position.set(...pos);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o}
  box(yard,[64,8,15],[0,4,-36],building)
  box(yard,[65,.24,16],[0,8.1,-36],roof)
  for(let i=0;i<9;i++){
    const x=-28+i*7
    box(yard,[4.6,4.2,.16],[x,2.1,-28.4],trim)
    box(yard,[4.15,3.9,.2],[x,1.95,-28.25],door)
    box(yard,[.9,.08,.3],[x,4.65,-28.0],lightMat)
    box(yard,[.13,1.15,.13],[x-2.6,.57,-27.7],markingMat)
    box(yard,[.13,1.15,.13],[x+2.6,.57,-27.7],markingMat)
    if(i%3!==1){
      box(yard,[2.5,2.9,12.8],[x,2.6,-21.6],trailerMat)
      box(yard,[2.5,.16,12.8],[x,1.15,-21.6],trim)
      for(const z of [-17.1,-18.35])for(const side of [-1,1]){
        const w=new THREE.Mesh(new THREE.CylinderGeometry(.55,.55,.3,20),door);w.rotation.z=Math.PI/2;w.position.set(x+side*1.15,.55,z);yard.add(w)
      }
    }
  }
  const ribs=new THREE.InstancedMesh(new THREE.BoxGeometry(.06,7.8,.04),trim,96)
  for(let i=0;i<96;i++){dummy.position.set(-31.5+i*.67,4,-28.46);dummy.updateMatrix();ribs.setMatrixAt(i,dummy.matrix)}yard.add(ribs)
  for(const x of [-32,32])for(const z of [-7,-22]){
    box(yard,[.12,10,.12],[x,5,z],trim);box(yard,[2.8,.12,.3],[x,10,z],door)
    box(yard,[2.6,.025,.25],[x,9.92,z],lightMat)
  }
  // Parking guides and animated routes are actual 3D geometry on the yard floor.
  const guides=new THREE.InstancedMesh(new THREE.BoxGeometry(.05,.012,16),markingMat,20)
  for(let i=0;i<20;i++){dummy.position.set(-34+i*3.5,0,-17);dummy.updateMatrix();guides.setMatrixAt(i,dummy.matrix)}yard.add(guides)
  const routeGroup=new THREE.Group();scene.add(routeGroup)
  const routeMat=new THREE.MeshBasicMaterial({color:'#90dce5',transparent:true,opacity:0,depthWrite:false,toneMapped:false})
  const routes=[],beacons=[]
  for(let i=0;i<3;i++){
    const path=new THREE.CatmullRomCurve3([new THREE.Vector3(-34,.07,6+i*2),new THREE.Vector3(-15,.07,6+i*2),new THREE.Vector3(10+i*3,.07,4+i*2),new THREE.Vector3(19+i*3,.07,-6),new THREE.Vector3(18-i*14,.07,-24)])
    routes.push(path);routeGroup.add(new THREE.Mesh(new THREE.TubeGeometry(path,80,.038,6,false),routeMat))
    const dot=new THREE.Mesh(new THREE.SphereGeometry(.18,12,8),routeMat);beacons.push(dot);routeGroup.add(dot)
  }
  let frame=null,visible=true,elapsed=0,last=0,disposed=false,pointerX=0,pointerY=0,firstFrame=true
  let smoothX=0,smoothY=0,narrow=mobile(),width=0,height=0,contextFailed=false
  // Stop the frame loop completely when the scene is offscreen or the tab is hidden.
  const schedule=()=>{if(frame===null&&!disposed&&!contextFailed&&visible&&!document.hidden)frame=requestAnimationFrame(render)}
  const suspend=()=>{if(frame!==null)cancelAnimationFrame(frame);frame=null;last=0}
  const resize=()=>{
    const nextWidth=container.clientWidth,nextHeight=container.clientHeight
    if(!nextWidth||!nextHeight||(nextWidth===width&&nextHeight===height))return
    width=nextWidth;height=nextHeight;narrow=mobile()
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,narrow?1.25:1.5))
    renderer.shadowMap.enabled=!narrow
    renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();schedule()
  }
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(container)
  const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)schedule();else suspend()});observer.observe(container)
  const visibilityChanged=()=>{if(document.hidden)suspend();else schedule()}
  document.addEventListener('visibilitychange',visibilityChanged)
  const point=e=>{if(reduced||e.pointerType==='touch')return;const r=container.getBoundingClientRect();pointerX=(e.clientX-r.left)/r.width-.5;pointerY=(e.clientY-r.top)/r.height-.5}
  const resetPointer=()=>{pointerX=0;pointerY=0}
  container.addEventListener('pointermove',point,{passive:true})
  container.addEventListener('pointerleave',resetPointer)
  const contextLost=event=>{event.preventDefault();contextFailed=true;suspend();onFailure()}
  renderer.domElement.addEventListener('webglcontextlost',contextLost)
  const target=new THREE.Vector3(),fogDay=new THREE.Color('#b98457'),fogNight=new THREE.Color('#142431')
  function render(now){
    frame=null
    if(disposed||contextFailed||!visible||document.hidden)return
    const dt=last?Math.min((now-last)/1000,.05):0;last=now
    const animate=!reduced
    if(animate)elapsed+=dt
    const blend=1-Math.exp(-8*dt),zoom=narrow?1.2:1
    smoothX+=(pointerX-smoothX)*blend;smoothY+=(pointerY-smoothY)*blend
    camera.position.set(state.camX, state.camY+(reduced?0:smoothY*.2), state.camZ*zoom)
    target.set(narrow?state.truckX:state.lookX,state.lookY,narrow?state.truckZ-1:state.lookZ)
    camera.lookAt(target)
    truck.position.set(state.truckX,animate?Math.sin(elapsed*3)*.008:0,state.truckZ)
    truck.rotation.y=state.turn+(reduced?0:smoothX*.018)
    // Distance follows scrolling, so reversing scroll reverses the drive.
    wheels.forEach(w=>{w.rotation.z=-state.progress*48})
    road.position.x=-state.progress*100%5
    yard.visible=state.yard>.005
    yardMaterials.forEach(m=>{m.opacity=state.yard})
    skyUniforms.dusk.value=state.dusk
    sun.intensity=3.4-state.dusk*2.3
    fill.intensity=1.3-state.dusk*.4
    scene.fog.color.copy(fogDay).lerp(fogNight,state.dusk)
    wireMaterial.opacity=state.wire
    wire.visible=state.wire>.005
    routeMat.opacity=state.routes
    routeGroup.visible=state.routes>.005
    if(routeGroup.visible)for(let i=0;i<beacons.length;i++)beacons[i].position.copy(routes[i].getPointAt((state.progress*2+i*.3)%1))
    renderer.render(scene,camera)
    if(firstFrame){firstFrame=false;onReady()}
    // Reduced-motion renders only on initialization, resize, or visibility changes.
    if(!reduced)schedule()
  }
  resize();schedule()
  return ()=>{
    disposed=true;suspend();resizeObserver.disconnect();observer.disconnect();container.removeEventListener('pointermove',point)
    container.removeEventListener('pointerleave',resetPointer);document.removeEventListener('visibilitychange',visibilityChanged)
    renderer.domElement.removeEventListener('webglcontextlost',contextLost)
    const geometries=new Set(),materials=new Set(),textures=new Set([asphalt,labelTexture])
    scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material)})
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());environment.dispose();renderer.dispose();renderer.domElement.remove()
  }
}
