import React from 'react'

export default function Home() {
  const downloadFile = (event) => {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/assets/Kuber_cv.pdf';
    link.download = 'Kuber_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="bg-tertiary">

    <div className="relative isolate px-6 pt-14 lg:px-8">
      <img className="absolute w-20 mt-2 left-3/4 -rotate-12" src="/assets/knight.png" alt="."/>
      <img className="absolute w-28 rotate-12 right-3/4" src="/assets/guitar.png" alt="."/>
      <img className="absolute w-32 left-3/4 bottom-10 -rotate-12" src="/assets/joystick.png" alt="."/>
      <img className="absolute w-40 right-3/4 bottom-10" src="/assets/laptop.png" alt="."/>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
        }}></div>
        </div>
        <div className="mx-auto max-w-2xl py-15 sm:py-48 lg:py-20">
        <div className="text-center">
            <h5 className="text-2xl font-bold tracking-tight sm:text-1xl">Full Stack Web Developer</h5>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Kuber Bajra Shakya</h1>
            <div className="flex items-center justify-center pt-5 pl-2 sm:pt-0 mt-5">
                <a href="/" className="pl-4">
                  <i className="icn i-facebook text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="icn i-linkedin text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="icn i-github text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="icn i-instagram text-2xl text-white hover:text-yellow"></i>
                </a>
              </div>
            <div className="mt-5 flex items-center justify-center gap-x-6">
            <a href="process.env.PUBLIC_URL + '/assets/Kuber_cv.pdf" onclick={downloadFile} className="rounded-md bg-quaternary px-4 py-3 text-md font-semibold text-primary shadow-sm hover:grow-1 hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download CV</a>
            <a href="/contact" className="text-md font-semibold leading-6 text-gray-900">Hire Me <span aria-hidden="true">→</span></a>
            </div>
        </div>
        </div>
    </div>
</div>
<div className="bg-secondary" id="about">
    <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row ml-10">
      <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
        <h2 className="font-header text-4xl font-semibold uppercase text-gray-900 sm:text-5xl lg:text-6xl">
          Who am I?
        </h2>
        <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Hi, I'm Kuber, a Web Developer with a passion for AI and data science.
        </h4>
        <p className="pt-6 font-body leading-relaxed">
            I'm currently transitioning to a career in AI, and I'm excited to learn new skills to develop apps and software that can revolutionize society.
            I have a strong foundation in coding, decision-making, and problem-solving.
            I'm a creative and innovative thinker, and I'm always looking for new and exciting ways to solve real-world problems.
        </p>
        <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
          <div className="flex items-center justify-center sm:justify-start">
            <p className="font-body text-lg font-semibold uppercase text-grey-20">
              <a href="/contact">Connect with me</a>
            </p>
            <div className="hidden sm:block">
              <i className="bx bx-chevron-right text-2xl text-primary"></i>
            </div>
          </div>
          <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
            <a href="/">
              <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
        <div>
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase text-black">
              HTML &amp; CSS
            </h4>
            <h3 className="font-body text-3xl font-bold text-quaternary">85%</h3>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-lila">
            <div className="h-3 rounded-full bg-tertiary" style={{width: '85%'}}></div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase text-black">Python</h4>
            <h3 className="font-body text-3xl font-bold text-quaternary">70%</h3>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-lila">
            <div className="h-3 rounded-full bg-tertiary" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase text-black">
              Javascript
            </h4>
            <h3 className="font-body text-3xl font-bold text-quaternary">98%</h3>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-lila">
            <div className="h-3 rounded-full bg-tertiary" style={{ width: '98%'}}></div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
            <h3 className="font-body text-3xl font-bold text-quaternary">91%</h3>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-lila">
            <div className="h-3 rounded-full bg-tertiary" style={{width: '91%'}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-primary py-12">
    <div className="text-center w-10/12 m-auto">
        <h1 className="font-header text-4xl font-semibold lg:text-5xl text-gray-900">My Projects</h1>
        <div className="grid grid-flow-col grid-cols-3">
          <div className=" h-auto py-4 ">
            <h3 className="lg:text-3xl font-medium">Hamro Canteen</h3>
            <h4 className="lg:text-1xl font-medium pb-2 text-gray-900">HTML, CSS, JS, PHP</h4>
            <img className="h-48 w-72 pb-4 m-auto" alt='img'/>
            <p className="pb-3 text-gray-900">
              A canteen billing soultion
            </p>
            <button className="rounded-md bg-quaternary px-4 py-2 text-md font-semibold text-primary shadow-sm hover:grow-1 hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-4">Live Demo</button>
            <button className="rounded-md bg-tertiary px-4 py-2 text-md font-semibold text-quaternary shadow-sm hover:grow-1 hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Documentation</button>
          </div>
          <div className=" h-auto py-4 ">
            <h3 className="lg:text-3xl font-medium">Video Poker</h3>
            <h4 className="lg:text-1xl font-medium pb-2 text-gray-900">C</h4>
            <img className="h-48 w-72 pb-4 m-auto" alt='videopoker'/>
            <p className="pb-3 text-gray-900">
              A video poker game.
            </p>
            <button className="rounded-md bg-quaternary px-4 py-2 text-md font-semibold text-primary shadow-sm hover:grow-1 hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-4">Live Demo</button>
            <button className="rounded-md bg-tertiary px-4 py-2 text-md font-semibold text-quaternary shadow-sm hover:grow-1 hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Documentation</button>
          </div>
          <div className=" h-auto py-4 ">
            <h3 className="lg:text-3xl font-medium">Hamro Canteen</h3>
            <h4 className="lg:text-1xl font-medium pb-2 text-gray-900">HTML, CSS, JS, PHP</h4>
            <img className="h-48 w-72 pb-4 m-auto" alt='canteen billing'/>
            <p className="pb-3 text-gray-900">
              A canteen billing soultion
            </p>
            <button className="rounded-md bg-quaternary px-4 py-2 text-md font-semibold text-primary shadow-sm hover:grow-1 hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-4">Live Demo</button>
            <button className="rounded-md bg-tertiary px-4 py-2 text-md font-semibold text-quaternary shadow-sm hover:grow-1 hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Documentation</button>
          </div>
          
        </div>
    </div>
  </div>
 <div>
    <div className="flex h-80">
     
            <div className="flex-none md:flex-1">
              
            </div>
    </div>
</div>
<div className="bg-white py-12">
  <div className="container m-auto" id="services">
    <h2 className="text-center font-header text-4xl font-semibold uppercase text-gray-900 sm:text-5xl lg:text-6xl">
      Here's what I'm good at
    </h2>
    <h3 className="pt-6 text-center font-header text-xl font-medium text-quaternary sm:text-2xl lg:text-3xl">
      These are the services I offer
    </h3>
  
    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
      <div className="group rounded bg-primary shadow-[0_0_30px_3px_rgba(0,0,5,0.3)] px-8 py-12 hover:bg-quaternary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            
            <img src='/assets/icon-development-white.svg' alt="Web Development"/>
          </div>
          <div className="block group-hover:hidden">
            
            <img src='/assets/icon-development-black.svg' alt="Web Development"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-quaternary group-hover:text-white lg:text-xl">
            WEB DEVELOPMENT
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            I make simple, beautiful and easy to navigate UI.
          </p>
        </div>
      </div>
      <div className="group rounded bg-primary shadow-[0_0_30px_3px_rgba(0,0,5,0.3)] px-8 py-12 hover:bg-quaternary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <img src='/assets/icon-content-white.svg' alt="Web Development" />
          </div>
          <div className="block group-hover:hidden">
            <img src='/assets/icon-content-black.svg' alt="Web Development" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-quaternary group-hover:text-white lg:text-xl">
            CONTENT WRITING
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            I can write contents.
          </p>
        </div>
      </div>
      
      <div className="group rounded bg-primary shadow-[0_0_30px_3px_rgba(0,0,5,0.3)] px-8 py-12 hover:bg-quaternary">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            
            <img src='/assets/icon-development-white.svg' alt="Web Development"/>
          </div>
          <div className="block group-hover:hidden">
            
            <img src='/assets/icon-development-black.svg' alt="Web Development"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-quaternary group-hover:text-white lg:text-xl">
            WEB DEVELOPMENT
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="bg-primary py-12">
  <a href='//' content='aadsf' id="Achievements"> 
  <div className="text-center w-10/12 m-auto">
      <h1 className="font-header text-4xl font-semibold lg:text-5xl text-gray-900">My Achievements</h1>
      <div className="grid grid-flow-row grid-cols-2 my-4">
        <div className="h-auto px-6 py-3 m-2 bg-secondary flex items-center hover:scale-125">
          <img className="w-14 h-14"src='/assets/cisco.svg' alt="cisco"/>
          <span className="pl-3 font-bold text-lg">Cisco IT Essentials Certified</span>
        </div>
        <div className="h-auto px-6 py-3 m-2 bg-secondary flex items-center">
          <img className="w-14 h-14"src='/assets/cisco.svg' alt="cisco"/>
          <span className="pl-3 font-bold text-lg">Cisco Letter of Merit</span>
        </div>
        <div className="h-auto px-6 py-3 m-2 bg-secondary flex items-center">
          <img className="w-14 h-14"src='/assets/leo.png' alt="leo"/>
          <span className="pl-3 font-bold text-lg">Member at Leo club of Kathmandu Agrani</span>
        </div>
        <div className="h-auto px-6 py-3 m-2 bg-secondary flex items-center">
          <img className="w-14 h-14"src='/assets/leo.png' alt="leo"/>
          <span className="pl-3 font-bold text-lg">FIDE rated chess player</span>
        </div>
      </div>
  </div>
  </a>
</div>                                      
        <div className="bg-secondary py-12">
        <div className="text-center w-10/12 m-auto">
            <h1 className="font-header text-4xl font-semibold lg:text-5xl text-gray-900">Other Skills</h1>
            <div className="flex items-center justify-center my-3">
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Tailwind </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Bootstrap </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> CSS </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Vanilla JS </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> JQuery </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Canva </h4>
            </div>
            <div className="flex items-center justify-center my-3">
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> C </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> PHP </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> React </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Python </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Django </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> MS Office </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> JAVA </h4>
            </div>
            <div className="flex items-center justify-center my-3">
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Team Player </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Decision Making </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Fast Learner </h4>
                <h4 className="bg-primary px-3 py-2 font-bold text-2xl mx-2 rounded-lg"> Good Listener </h4>
            </div>
        </div>
        </div>
        <div className="bg-tertiary py-12" id="About">
        <div className="text-center w-10/12 m-auto">
            <h1 className="font-header text-4xl font-semibold lg:text-5xl text-gray-900">About Me</h1>
        </div>
        </div>
    </>
  )
}