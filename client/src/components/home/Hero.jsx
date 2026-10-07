import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowUpRight, FiArrowDown, FiPause, FiPlay } from 'react-icons/fi'
import './Journey.css'

gsap.registerPlugin(ScrollTrigger)
const initial = () => ({ camX: 0, camY: 3.1, camZ: 25.5, lookX: 0, lookY: 2.1, lookZ: 0, truckX: 0, truckZ: 0, turn: 0, yard: 0, dusk: 0, wire: 0, routes: 0, progress: 0, paused: false })
export default function Hero() {
  const root = useRef(null), stage = useRef(null), canvas = useRef(null), state = useRef(initial()), timeline = useRef(null)
  const [ready,setReady]=useState(false),[failed,setFailed]=useState(false),[paused,setPaused]=useState(false)
  useLayoutEffect(()=>{
    let cancelled=false,disposeScene
    const media=gsap.matchMedia()
    media.add({ reduced:'(prefers-reduced-motion: reduce)', normal:'(prefers-reduced-motion: no-preference)' },context=>{
      const reduced=context.conditions.reduced
      Object.assign(state.current,initial());state.current.paused=reduced
      root.current.classList.toggle('journey-reduced',reduced)
      let disposed=false
      import('../experience/createExperience').then(({createExperience})=>{
        if(cancelled||disposed)return
        try { disposeScene=createExperience(canvas.current,state.current,reduced,()=>setReady(true),()=>setFailed(true)) }
        catch(error){console.warn('3D scene unavailable:',error);setFailed(true)}
      })
      gsap.set('.journey-chapter:not(.chapter-first)',{autoAlpha:0})
      if(!reduced){
        const tl=gsap.timeline({scrollTrigger:{trigger:root.current,pin:stage.current,start:'top top',end:()=>`+=${window.innerHeight*(window.innerWidth<768?2.4:3.2)}`,scrub:.55,anticipatePin:1,invalidateOnRefresh:true},defaults:{ease:'sine.inOut'}})
        timeline.current=tl
        tl.to(state.current,{progress:1,duration:1,ease:'none'},0)
          .to(state.current,{camX:15,camY:9,camZ:23,lookX:-3,lookY:1.6,lookZ:-3,truckX:3,truckZ:-1,turn:-.12,yard:1,duration:.34},.12)
          .to(state.current,{camX:20,camY:22,camZ:21,lookX:0,lookY:0,lookZ:-10,truckX:10,truckZ:-6,turn:.23,dusk:.7,duration:.32},.46)
          .to(state.current,{camX:5,camY:40,camZ:17,lookX:0,lookY:0,lookZ:-12,truckX:15,truckZ:-8,turn:.5,dusk:1,wire:.75,routes:.9,duration:.22},.78)
          .to('.chapter-first',{autoAlpha:0,y:-18,duration:.12},.18)
          .fromTo('.chapter-yard',{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.12},.3)
          .to('.chapter-yard',{autoAlpha:0,y:-18,duration:.1},.57)
          .fromTo('.chapter-network',{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.12},.68)
          .to('.journey-progress-fill',{scaleX:1,duration:1,ease:'none'},0)
        // Keep chapter labels synchronized without React renders on every scroll frame.
        const chapterButtons=root.current.querySelectorAll('.journey-chapters button')
        let activeChapter=-1
        tl.eventCallback('onUpdate',()=>{
          const p=state.current.progress
          const nextChapter=p<.28?0:p<.65?1:2
          if(nextChapter===activeChapter)return
          activeChapter=nextChapter
          chapterButtons.forEach((el,i)=>{
            const active=i===activeChapter
            el.classList.toggle('active',active);el.setAttribute('aria-current',active?'step':'false')
          })
        })
      }
      return ()=>{disposed=true;disposeScene?.();disposeScene=undefined;timeline.current=null}
    },root)
    return ()=>{cancelled=true;media.revert();disposeScene?.()}
  },[])
  const jump=part=>{
    const trigger=timeline.current?.scrollTrigger
    if(trigger)window.scrollTo({top:trigger.start+(trigger.end-trigger.start)*part,behavior:'smooth'})
  }
  const pause=()=>{state.current.paused=!state.current.paused;setPaused(state.current.paused)}
  return <section className={`rio-journey ${ready?'scene-ready':''} ${failed?'scene-fallback-mode':''}`} ref={root}>
    <div className="journey-stage" ref={stage}>
      <div className="journey-poster" />
      <div className="journey-canvas" ref={canvas} role="img" aria-label="Animated Dispatch by RIO semi truck, sunset road, freight yard and connected routes" />
      <div className="journey-vignette" />
      <div className="journey-chapter chapter-first rio-wrap">
        <span className="journey-eyebrow"><i /> YOUR TRUCK. YOUR BUSINESS. OUR SUPPORT.</span>
        <h1>More than dispatch.</h1>
        <p>We help you run the business.</p>
      </div>
      <div className="journey-chapter chapter-yard rio-wrap">
        <span className="journey-eyebrow">01 / THE BUSINESS BEHIND EVERY MILE</span>
        <h2>You drive.<br /><span>We handle<br />the rest.</span></h2>
        <p>From finding freight to broker communication.<br />A dedicated team that moves with you.</p>
      </div>
      <div className="journey-chapter chapter-network rio-wrap">
        <span className="journey-eyebrow">02 / ONE CONNECTED OPERATION</span>
        <h2>Every load.<br />Every detail.<br /><span>One team.</span></h2>
        <p>Dispatch. Paperwork. Factoring. Insurance.<br />Support that keeps your business connected.</p>
      </div>
      <div className="journey-bottom rio-wrap">
        <p>Nationwide support for<br /><strong>owner-operators & growing fleets.</strong></p>
        <Link to="/contact" className="rio-button">Start with Dispatch by RIO <FiArrowUpRight /></Link>
        <a className="journey-skip" href="#about-section">Explore our services <FiArrowDown /></a>
      </div>
      <div className="journey-footer rio-wrap">
        <div className="journey-chapters" aria-label="Explore the journey"><button className="active" onClick={()=>jump(0)} aria-current="step"><b>01</b> THE OPEN ROAD</button><button onClick={()=>jump(.43)}><b>02</b> BEHIND THE MILES</button><button onClick={()=>jump(.92)}><b>03</b> CONNECTED</button></div>
        <span className="journey-hint">SCROLL TO DRIVE THE STORY <FiArrowDown /></span>
        {ready&&!failed&&<button className="journey-pause" onClick={pause} aria-label={paused?'Resume ambient animation':'Pause ambient animation'}>{paused?<FiPlay />:<FiPause />}</button>}
      </div>
      <div className="journey-progress"><div className="journey-progress-fill" /></div>
    </div>
  </section>
}
