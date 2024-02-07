import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Switch } from '@headlessui/react'
import Head from "next/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Contact = () => {
    const [agreed, setAgreed] = useState(false)

    return (
        <>
            <Head>
                <title>Contact Page</title>
            </Head>
            <section className="flex justify-between text-center my-10">
                <h2 className="font-bold text-lg">Get in Touch</h2>
                <p>Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
                <div className="flex flex-col">
                    <span>Lagos, Nigeria</span>
                    <span>+2349036037524</span>
                    <span>ayodejiakintobi1@gmail.com</span>
                </div>

                <div></div>
            </section>

            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    {/* Form Inputs */}
                </form>
            </div>
        </>
    )
}

export default Contact;
