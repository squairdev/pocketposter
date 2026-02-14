'use client'
import GradualBlur from './comp/GradualBlur';
import DotGrid from './comp/DotGrid';
import BlurText from "./comp/BlurText";
import FadeContent from "./comp/FadeContent";
import AnimatedContent from "./comp/AnimatedContent";
import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <section className="relative h-[100vh]"><ReactLenis root options={{ lerp: 0.05, duration: 2 }}>
      <div style={{ width: '100%', height: '100%', position: 'fixed', overflow: 'auto', zIndex: -1 }}>
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
      <section className='z-0 w-[100vw] h-[60vh] flex flex-cols items-center justify-center'>
        <div className='max-w-2xl'>
          <FadeContent blur delay={0.3} duration={0.7}><img src={'favicon.ico'} className='mx-auto w-[4rem] rounded-full'/></FadeContent>
          <div className='text-5xl md:text-7xl font-bold mb-4 leading-20 mx-auto text-center'>
            <BlurText text="Pocket Poster Guide" direction="bottom" delay={70} className="justify-center" />
          </div>
          <div className='mx-auto text-center pt-7 text-[1.3rem] sm:text-[1.5rem] max-w-[80vw] lg:max-w-[30vw] text-[#ababab] pb-10'>
          <AnimatedContent direction="horizontal" distance={50} delay={0.3} scale={0.7}>
            <svg className='absolute' style={{transform: "translate(-100%, -100%)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
          </AnimatedContent>
          <FadeContent blur delay={0.6} duration={0.76}>{"A simple enough guide on how to install Pocket Poster on any iOS device. Pocket Poster only supports iOS 17-26.1."}</FadeContent>
            <div style={{flexGrow:"1"}}/>
            <AnimatedContent reverse direction="horizontal" distance={50} delay={0.3} scale={0.7}>
              <svg style={{transform: "translate(50%, -0%)", marginLeft: 'auto'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
            </AnimatedContent>
          </div>
        </div>
      </section>
      <section className='z-0 w-[100vw] flex flex-col items-center justify-center pb-50'>
        <div className='max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.4} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 rounded-t-3xl border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.5} duration={0.7} className='pb-5 text-2xl font-bold'>Step 1: Creating a free Apple Developer account</FadeContent>
            <FadeContent blur delay={0.5} duration={0.7} className='text-xl'>
            <p>You need to create a Apple Developer account. Don't worry, this is completley free. You can sign up by going to <a href="https://developer.apple.com/account/" className='text-sky-300' target='_blank'>developer.apple.com</a> and signing in with your existing Apple account.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Step 2: Using iLoader to install SideStore</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>You can view the steps on how to use iLoader <a href="https://docs.sidestore.io/docs/installation/prerequisites" className='text-sky-300' target='_blank'>here</a>.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Step 3: Downloading the IPA</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>You can get the offical release <a href="https://github.com/leminlimez/Pocket-Poster/releases/latest/download/Pocket_Poster.ipa" download className='text-sky-300'>here</a>, or you can download my version <a href="/Pocket_Poster_Name_Fix.ipa" className='text-sky-300'>here</a>, which fixes an issue where files with a space in their name won't apply. Don't worry, it is completley safe and just a compiled version of <a href="https://github.com/leminlimez/Pocket-Poster/pull/29" target="_blank" className='text-sky-300'>this pull request</a>.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Step 4: Installing Pocket Poster</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>In SideStore, go to "My Apps" and press the plus (+) sign in the top left corner. Now, select the ipa file. If you get an error, please read <a href="https://docs.sidestore.io/docs/troubleshooting/error-codes" target='_blank' className='text-sky-300'>SideStore's error codes</a>, or <a href="https://docs.sidestore.io/docs/troubleshooting/common-issues" target='_blank' className='text-sky-300'>SideStore's commmon issues</a>. Hopefully, in the end Pocket Poster should show up on your home screen.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Step 5: Getting your App Hash</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p><a href="https://github.com/leminlimez/Nugget/releases/tag/v7.2" target='_blank' className='text-sky-300'>Download</a> and open Nugget with your device plugged in. Next, navigate to the settings page. At the bottom, click "Pocket Poster Helper".</p>
            <p className='pt-2'>Next, you can follow the instructions on the popup. Inside of Pocket Poster, click on the gear icon, then press "Detect" under "App Hash".</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Step 6: Importing wallpapers</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>To import a wallpaper, you can simply open any file with the ending as ".tendies". This will automatically open the file up inside of Pocket Poster. Or, you can manaully add the file inside the app. You can also find wallpapers to import on <a href="https://cowabun.ga/wallpapers" target='_blank' className='text-sky-300'>cowabun.ga</a> or the <a href="https://discord.gg/FRuGJrbsPX" target='_blank' className='text-sky-300'>PosterRestore Discord</a>.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Step 7: Applying wallpapers</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p className='pt-2'>To apply the wallpaper(s), click the "Apply" button. You will get a popup that says "The PosterBoard app will now open."</p>
            <p className='pt-2'>Once you click OK, wait for the app to load (Note: this is not your lock screen. Don't normally swipe up). Once it does load, go into your App Switcher (to view what apps you have open) and swipe up/close the app named "PosterBoard".</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 rounded-b-3xl border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Step 8: Getting your wallpaper</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>Finally, go to your lock screen. Press and hold until you can switch between wallpapers. Click the plus (+) in the bottom right corner.</p>
            <p className='pt-2'>Scroll down to the "Collections" section. You can slide to the right to see your added wallpapers. If they appear black, wait a minute for them to show.</p>
            <p className='pt-2'>You're all done! Enjoy your cool wallpapers.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <FadeContent blur delay={0.3} duration={0.7} className='w-[70vw] h-[6px] bg-[#1c398e]/50 mt-10 rounded-3xl'><div id='faq'></div></FadeContent>
        <FadeContent blur delay={0.5} duration={0.7} className='p-5 text-5xl font-bold'>FAQ</FadeContent>
        <div className='max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 rounded-t-3xl border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>I'm having issues with SideStore.</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>Please refer to the SideStore <a href="https://docs.sidestore.io/docs/troubleshooting/common-issues" target='_blank' className='text-sky-300'>Common Issues</a> and <a href="https://docs.sidestore.io/docs/troubleshooting/error-codes" target='_blank' className='text-sky-300'>Error Codes</a> docs. I can't help you.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>I can't get my app hash.</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>Open Nugget from your terminal (Windows: open CMD and paste the path to Nugget.exe in CMD, MacOS: Go to Launcher, open Terminal and drag in Nugget.app).</p>
            <p className="pt-2">Next, repeat step 5. If your App Hash doesn't show, look inside of the terminal for a string of random letters and numbers. This is your App Hash. Manually type it into Pocket Poster's settings.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>"Failed to fetch/download wallpapers"</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>Check your internet connection. If you are connected, try clearing Pocket Poster's cache in settings.</p>
            <p className="pt-2">If this still does not work, try downloading the wallpaper then manually importing it into Pocket Poster.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>I pressed apply, but it didn't give me a "Success" popup.</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>If you are using the official download, make sure there is no space in the Tendies file name.</p>
            <p className="pt-2">If there is no space in the name and/or you are using my download, go to settings and install the Fallback Shortcut. You will need to run the "Apply Poster" shortcut from your home screen.</p>
            <p className="pt-2">This could also occur because of an invalid/misconfigured file; contact the creator. Some CAPlayground wallpapers also do this, but using the fallback shortcut should work.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>My walpaper(s) doesn't show up in collections.</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>Go back to Pocket Poster, and apply the same wallpaper again. Ensure that you are <b>force closing</b> the app from the app switcher instead of normally swiping up.</p>
            <p className="pt-2">If this still does not work, the file may be invalid/misconfigured; contact the creator.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>Where do I find wallpapers?</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>You can find wallpapers from multiple places, like the <a href='https://cowabun.ga/wallpapers' target='_blank' className='text-sky-300'>Offical library</a>, the <a href='https://discord.gg/FRuGJrbsPX' target='_blank' className='text-sky-300'>PosterRestore Discord</a> and even <a href='https://squair.xyz/wallpapers' target='_blank' className='text-sky-300'>my wallpaper website </a>(shameful self promo)</p>
            <p className="pt-2">If this still does not work, the file may be invalid/misconfigured; contact the creator.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>"The folder is improperly set up."</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>The primary cause to this is if you're on iOS 26.2 or up. Pocket Poster is patched on 26.2, meaning you can't use Pocket Poster. Use Nugget or PosterChef instead.</p>
            <p className="pt-2">If you're on iOS 17 - 26.1, tap "reset collections" and it should fix itself.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <div className='pt-7 max-w-[90vw] md:w-[80vw]'>
          <FadeContent blur delay={0.5} duration={0.7} className='bg-[#1c398e]/25 backdrop-blur-[1.8px] w-full p-5 rounded-b-3xl border-[#1c398e]/25 border-4 border-solid'>
            <FadeContent blur delay={0.6} duration={0.7} className='pb-5 text-2xl font-bold'>"Your app hash is incorrect."</FadeContent>
            <FadeContent blur delay={0.7} duration={0.7} className='text-xl'>
            <p>Make sure you're using the latest version of Pocket Poster and Nugget. Detect your App Hash again.</p>
            <p className="pt-2">Also refer to the answer above.</p>
            </FadeContent>
          </FadeContent>
        </div>
        <AnimatedContent direction="vertical" distance={0} delay={1} scale={0.8}> 
          <p className='pt-10 text-center'>Made with <span className='text-red-400 text-shadow-md/30 text-shadow-red-300'>&lt;3</span> by <a href="https://squair.xyz" className='text-sky-300'>Squair</a></p>
          <p className='text-sm text-center'>SquairCode, 2026. All rights reserved.</p>
        </AnimatedContent>
      </section>
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
      />
    </ReactLenis></section>
  );
}