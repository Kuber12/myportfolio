import React from 'react'
export default function Nav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img src="/assets/home.svg" alt="Home" className="h-8 w-auto"/>
        </a>
    </div>
    <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
        <a href="//" className="text-sm font-semibold leading-6 text-gray-900">Education</a>
        <a href="/#Achievements" className="text-sm font-semibold leading-6 text-gray-900">Achievements</a>
        <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
        <a href="/#About" className="text-sm font-semibold leading-6 text-gray-900">About Me</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="//" className="text-sm font-semibold leading-6 text-gray-900">My Blog <span aria-hidden="true">&rarr;</span></a>
    </div>
    </nav>
    <div className="lg:hidden md:hidden sm:hidden" role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-50"></div>
    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
        <a href="//" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>
        <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
            <a href="//" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Education</a>
            <a href="//" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Achievements</a>
            <a href="//" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
            <a href="//" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Me</a>
            </div>
            <div className="py-6">
            <a href="//" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
            </div>
        </div>
        </div>
    </div>
    </div>
    </nav>
  )
}
