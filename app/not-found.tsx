'use client'
import GradualBlur from './comp/GradualBlur';
import DotGrid from './comp/DotGrid';
import BlurText from "./comp/BlurText";
import FadeContent from "./comp/FadeContent";
import AnimatedContent from "./comp/AnimatedContent";
import { ReactLenis} from 'lenis/react'

export default function Home() {
  return (
    <section className="font relative h-[100vh] sm:overflow-hidden">
      
      <div style={{ width: '100%', height: '100%', position: 'fixed', overflow: 'auto', zIndex: 0 }}>
        <DotGrid
          baseColor="#222222"
          activeColor="#60a5fa"
          proximity={120}
          shockStrength={3}
          resistance={1000}
          dotSize={6}
          gap={16}
        />
      </div>
      <ReactLenis root>
      <section className='z-0 w-[100vw] h-[93vh] flex flex-cols items-center justify-center'>
        <div className='max-w-2xl'>
          <div className='text-5xl md:text-7xl font-bold mb-4 leading-20 mx-auto text-center'>
            <BlurText text="404" direction="bottom" delay={70} className="justify-center" />
          </div>
          <div className='mx-auto text-center pt-5 text-[1.5rem] max-w-[80vw] lg:max-w-[30vw] text-[#ababab] pb-10'>
            <AnimatedContent direction="horizontal" distance={50} delay={0.3} scale={0.7}>
              <svg className='absolute' style={{transform: "translate(-100%, -100%)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
            </AnimatedContent>
            <FadeContent blur delay={0.6} duration={0.76}>{"Either this page doesn't exist, or I removed it in a newer version of this website."}</FadeContent>
            <div style={{flexGrow:"1"}}/>
            <AnimatedContent reverse direction="horizontal" distance={50} delay={0.3} scale={0.7}>
              <svg style={{transform: "translate(50%, -0%)", marginLeft: 'auto'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
            </AnimatedContent>
          </div>
          <div className='gap-2 flex justify-center align-center flex-cols max-w-[80vw] mx-auto'>
            <AnimatedContent direction="vertical" duration={0.2} distance={50} delay={0.5} scale={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-[#1c398e]/15 border-[#1c398e]/25 border-4 rounded-2xl border-solid hover:border-[#155dfc]/25 hover:bg-[#155dfc]/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              Go Home<a href='/' className='absolute w-[10rem] h-[3.5rem]'></a>
            </AnimatedContent>
          </div>
        </div>
      </section>
      <div className='relative flex align-center justify-center -top-5'>
      <p>SquairCode, 2026. All rights reserved.</p>
      <div className='h-25'></div>
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.7}
      />
      <GradualBlur
        target="page"
        position="top"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.7}
      /></ReactLenis></section>


  );
  
}