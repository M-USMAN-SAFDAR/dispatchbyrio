import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

// Original parametric model. Metres, nose +X, wheel axles Z.
export function createFreightTruck() {
  const truck = new THREE.Group()
  const body = new THREE.Group(); truck.add(body)
  const wheels = []
  const paint = new THREE.MeshPhysicalMaterial({ color: '#b95722', metalness: .65, roughness: .26, clearcoat: 1, clearcoatRoughness: .15 })
  const ivory = new THREE.MeshStandardMaterial({ color: '#c7b8a0', metalness: .45, roughness: .38 })
  const chrome = new THREE.MeshStandardMaterial({ color: '#bfc7ca', metalness: .95, roughness: .22 })
  const black = new THREE.MeshStandardMaterial({ color: '#111517', metalness: .1, roughness: .68 })
  const glass = new THREE.MeshPhysicalMaterial({ color: '#152b38', metalness: .65, roughness: .08, clearcoat: 1 })
  const rubber = new THREE.MeshStandardMaterial({ color: '#111315', roughness: .93 })
  const glow = new THREE.MeshStandardMaterial({ color: '#fff3d2', emissive: '#ffe5ad', emissiveIntensity: 2.4 })
  const amber = new THREE.MeshStandardMaterial({ color: '#ffc06e', emissive: '#ff7c28', emissiveIntensity: 1.2 })
  const red = new THREE.MeshStandardMaterial({ color: '#aa2414', emissive: '#bf2512', emissiveIntensity: .6 })
  const mesh = (geo, mat, pos, parent = body) => { const o = new THREE.Mesh(geo, mat); o.position.set(...pos); o.castShadow = true; o.receiveShadow = true; parent.add(o); return o }
  const box = (size, pos, mat, radius = .025) => mesh(new RoundedBoxGeometry(...size, 2, radius), mat, pos)
  const cylinder = (radius, depth, pos, mat, axis = 'z', parent = body) => {
    const o = mesh(new THREE.CylinderGeometry(radius, radius, depth, 32), mat, pos, parent)
    if (axis === 'z') o.rotation.x = Math.PI / 2
    if (axis === 'x') o.rotation.z = Math.PI / 2
    return o
  }
  // Smooth lofted cross sections give the hood and sleeper actual curved volume.
  function shell(sections, mat) {
    const positions = [], indices = [], ring = 40
    for (const [x, bottom, top, width] of sections) {
      for (let j = 0; j < ring; j++) {
        const a = j / ring * Math.PI * 2
        const sy = Math.sign(Math.sin(a)) * Math.pow(Math.abs(Math.sin(a)), .48)
        const sz = Math.sign(Math.cos(a)) * Math.pow(Math.abs(Math.cos(a)), .48)
        positions.push(x, (bottom + top) / 2 + sy * (top - bottom) / 2, sz * width)
      }
    }
    for (let i = 0; i < sections.length - 1; i++) for (let j = 0; j < ring; j++) {
      const a = i * ring + j, b = i * ring + (j + 1) % ring, c = a + ring, d = b + ring
      indices.push(a, c, b, b, c, d)
    }
    const end = (sections.length - 1) * ring
    for (let j = 1; j < ring - 1; j++) { indices.push(0, j, j + 1); indices.push(end, end + j + 1, end + j) }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); g.setIndex(indices); g.computeVertexNormals()
    return mesh(g, mat, [0, 0, 0])
  }
  function panel(points, mat) {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3))
    g.setIndex([0, 1, 2, 0, 2, 3]); g.computeVertexNormals()
    const o = mesh(g, mat, [0, 0, 0]); o.material.side = THREE.DoubleSide
    return o
  }
  box([7.6, .25, 1.75], [5.2, .75, 0], black)
  // Long tapered hood with a rounded, low nose.
  shell([[6.1, 1.0, 2.65, .95], [6.5, 1.03, 2.61, 1.02], [7.2, 1.08, 2.46, 1.04], [8.1, 1.1, 2.23, .97], [8.85, 1.05, 2.01, .88], [9.12, 1.08, 1.85, .78]], paint)
  // Aerodynamic cab: tall sleeper flows into the raked windshield.
  shell([[3.1, .98, 3.67, 1.01], [3.2, .94, 3.92, 1.08], [3.5, .92, 4.02, 1.13], [4.3, .92, 4.02, 1.13], [5.0, .94, 3.84, 1.12], [5.7, .98, 3.5, 1.09], [6.35, 1.05, 2.8, 1.02]], paint)
  panel([[6.38,2.59,-.92],[6.38,2.59,.92],[5.65,3.48,.99],[5.65,3.48,-.99]], glass)
  // Windshield divider and wipers.
  const divider=box([.035,1.16,.035],[6.02,3.03,0],black);divider.rotation.z=.68
  for (const side of [-1, 1]) {
    panel([[5.48,2.45,side*1.14],[6.16,2.54,side*1.055],[5.57,3.39,side*1.095],[4.93,3.55,side*1.15]],glass)
    box([.88, .026, .025], [5.54, 2.34, side * 1.15], chrome)
    box([.35,.06,.065],[4.98,2.02,side*1.15],chrome)
    box([.026,1.3,.017],[4.7,1.78,side*1.145],black)
    box([1.62,.2,.32],[5.35,.69,side*1.07],chrome,.04)
    box([1.3,.15,.27],[5.17,.98,side*1.12],black,.04)
    cylinder(.34,1.5,[3.48,.82,side*1.08],chrome,'x')
    box([.5,.18,.05],[6.17,2.63,side*1.32],chrome)
    box([.14,.5,.3],[6.28,2.59,side*1.44],black,.065)
    box([.018,.4,.23],[6.36,2.62,side*1.445],chrome,.009)
    // Smooth wheel arch sweeps, with a dark inner lip.
    const arch = mesh(new THREE.TorusGeometry(.72,.095,10,40,Math.PI),paint,[7.63,.69,side*1.05])
    arch.rotation.z = 0
    box([.065,.19,.42],[9.12,1.32,side*.63],glow,.05)
    box([.1,.12,.19],[8.86,1.54,side*.89],amber,.03)
    cylinder(.055,2.2,[3.17,2.05,side*1.18],chrome,'y')
    box([.55,.17,.026],[4.01,2.43,side*1.142],black,.035)
    box([1.22,.4,.13],[2.11,1.18,side*1.13],paint,.1)
  }
  box([.12,.69,1.24],[9.15,1.29,0],chrome,.08)
  box([.13,.58,1.09],[9.22,1.3,0],black,.035)
  for(let y=1.06;y<1.59;y+=.075) box([.016,.018,1.03],[9.3,y,0],chrome,.007)
  box([.23,.24,2.12],[9.18,.73,0],chrome,.07)
  for(let z=-.7;z<=.71;z+=.35) box([.11,.06,.13],[5.06,3.82,z],amber,.025)
  // Full-size 53-foot style trailer, rivets, rear doors and landing gear.
  box([13.2,2.85,2.48],[-3.58,2.62,0],ivory,.075)
  box([13.25,.13,2.5],[-3.58,1.19,0],chrome,.02)
  box([13.25,.065,2.5],[-3.58,4.055,0],chrome,.02)
  for(const side of [-1,1]) {
    for(let x=-10;x<2.95;x+=.32) box([.018,2.73,.013],[x,2.64,side*1.248],chrome,.004)
    for(let x=-9.9;x<2.9;x+=.65) box([.21,.055,.018],[x,1.28,side*1.261],x%1.3<.65?red:ivory,.005)
    for(let x=-9.8;x<2.9;x+=1.3) box([.11,.065,.025],[x,1.1,side*1.26],amber,.009)
    box([7.8,.45,.045],[-2.2,.89,side*1.2],ivory,.025)
    box([.1,.84,.11],[1.06,.59,side*.9],black)
    box([.4,.06,.28],[1.06,.17,side*.9],black)
    box([.2,.55,.86],[-9.31,.43,side*.8],black)
  }
  box([.028,2.72,.024],[-10.2,2.62,0],black)
  for(const z of [-.83,-.28,.28,.83]) cylinder(.022,2.4,[-10.22,2.6,z],chrome,'y')
  box([.14,.12,2.3],[-10.28,.53,0],chrome)
  for(const z of [-.94,-.66,.66,.94]) box([.035,.12,.17],[-10.3,1.13,z],red)
  // Physically round tires with recessed rims, hub, bolts and tread rings.
  for(const x of [7.63,2.55,1.32,-8.54,-7.23]) for(const side of [-1,1]) {
    const wheel=new THREE.Group();wheel.position.set(x,.61,side*1.11);truck.add(wheel)
    mesh(new THREE.TorusGeometry(.437,.175,14,48),rubber,[0,0,0],wheel)
    cylinder(.405,.24,[0,0,0],rubber,'z',wheel)
    cylinder(.31,.265,[0,0,side*.035],chrome,'z',wheel)
    cylinder(.23,.272,[0,0,side*.041],black,'z',wheel)
    cylinder(.13,.31,[0,0,side*.06],chrome,'z',wheel)
    for(let i=0;i<10;i++) {
      const a=i*Math.PI/5
      cylinder(.055,.285,[Math.cos(a)*.205,Math.sin(a)*.205,side*.046],chrome,'z',wheel)
      cylinder(.023,.33,[Math.cos(a)*.095,Math.sin(a)*.095,side*.073],chrome,'z',wheel)
    }
    for(const z of [-.08,0,.08]) mesh(new THREE.TorusGeometry(.596,.011,4,48),black,[0,0,z],wheel)
    wheels.push(wheel)
  }
  // A small, legible RIO graphic rather than an oversized sticker.
  const c=document.createElement('canvas');c.width=1024;c.height=256
  const ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height)
  ctx.fillStyle='#283033';ctx.font='600 116px Arial';ctx.fillText('DISPATCH',30,125)
  ctx.fillStyle='#ad5328';ctx.font='600 78px Arial';ctx.fillText('by RIO',665,125)
  ctx.fillStyle='#545c5b';ctx.font='23px Arial';ctx.fillText('YOUR TRUCK. YOUR BUSINESS. OUR SUPPORT.',34,192)
  const labelTexture=new THREE.CanvasTexture(c);labelTexture.colorSpace=THREE.SRGBColorSpace
  const labelMat=new THREE.MeshStandardMaterial({map:labelTexture,transparent:true,roughness:.45,depthWrite:false})
  for(const side of [-1,1]) {
    const label=mesh(new THREE.PlaneGeometry(6.6,1.65),labelMat,[-3.3,2.8,side*1.265])
    if(side<0)label.rotation.y=Math.PI
  }
  // Merge stationary pieces by material to keep draw calls low.
  const buckets=new Map()
  for(const child of [...body.children]) {
    if(child.material===labelMat)continue
    child.updateMatrix()
    let g=child.geometry.clone().applyMatrix4(child.matrix)
    if(g.index) {const expanded=g.toNonIndexed();g.dispose();g=expanded}
    g.deleteAttribute('uv');g.deleteAttribute('uv1')
    if(!buckets.has(child.material))buckets.set(child.material,[])
    buckets.get(child.material).push(g)
    child.geometry.dispose();body.remove(child)
  }
  for(const [mat,geos] of buckets) { const g=mergeGeometries(geos);mesh(g,mat,[0,0,0]);geos.forEach(x=>x.dispose()) }
  for(const wheel of wheels) {
    const parts=new Map()
    for(const child of [...wheel.children]) {
      child.updateMatrix()
      let g=child.geometry.clone().applyMatrix4(child.matrix)
      if(g.index){const expanded=g.toNonIndexed();g.dispose();g=expanded}
      g.deleteAttribute('uv')
      if(!parts.has(child.material))parts.set(child.material,[])
      parts.get(child.material).push(g);child.geometry.dispose();wheel.remove(child)
    }
    for(const [mat,geos] of parts){mesh(mergeGeometries(geos),mat,[0,0,0],wheel);geos.forEach(g=>g.dispose())}
  }
  return { truck, wheels, body, paint, labelTexture }
}
