import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Head from "next/head";
import Transition from "@/components/Transition";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { ValidationError, useForm } from "@formspree/react";

const contact = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, handleSubmit] = useForm("xgegyjyy");

    return (
        <>
            <Head>
                <title>Saber | About Page</title>
                <meta name="viewport" content="any"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Kanit:ital,wght@1,500&family=Lato:ital,wght@1,900&family=Noto+Sans+Mahajani&family=Rubik:ital,wght@1,700&family=Ubuntu:ital,wght@1,700&display=swap" rel="stylesheet" /> */}
            </Head>
            <Transition />
            <AnimatedText text="Turn Ideas Into Reality." />
            <section className="flex justify-evenly">
                <div className="flex flex-col w-1/2 mx-10 mt-20">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="leading-loose text-1xl">Feel free to reach out to me for any inquiries, collaborations, or questions you may have. Whether you're interested in working together, have feedback to share, or just want to say hello, I'd love to hear from you. Your messages are important to me, and I'll do my best to respond promptly. Let's connect and start a conversation!</p>
                    <div className="flex flex-col items-start mt-5 cursor-pointer">
                        <div className="flex items-center mb-2">
                            <FaHouseChimney className="mr-2" />
                            <span>Lagos-State, Nigeria</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaPhoneAlt className="mr-2" />
                            <span>+2349036037524</span>
                        </div>
                        <div className="flex items-center">
                            <IoMdMail className="mr-2" />
                            <Link href="mailto:ayodejjiakintobi1@gmail.com">ayodejiakintobi1@gmail.com</Link>
                        </div>
                    </div>
                </div>
                <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 w-1/2">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me!</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Feel free to reach out to me using the form below.
                        </p>

                    </div>
                    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-base font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gradient-to-tr from-[#ff80b5] to-[#9089fc] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gradient-to-tr focus:from-[#ff80b5] focus:to-[#9089fc] sm:text-sm sm:leading-6 focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-base font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gradient-to-tr from-[#ff80b5] to-[#9089fc] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gradient-to-tr focus:from-[#ff80b5] focus:to-[#9089fc] sm:text-sm sm:leading-6 focus:outline-none"
                                        required

                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-base font-semibold leading-6 text-gray-900" a>
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gradient-to-tr from-[#ff80b5] to-[#9089fc] focus:outline-none"
                                        required
                                    />

                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-base font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                            <option>NG</option>
                                        </select>
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gradient-to-tr from-[#ff80b5] to-[#9089fc] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gradient-to-tr focus:from-[#ff80b5] focus:to-[#9089fc] sm:text-sm sm:leading-6 focus:outline-none"

                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gradient-to-tr from-[#ff80b5] to-[#9089fc] placeholder:text-gray-400  focus:outline-none sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        required

                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-black hover:bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default contact;
