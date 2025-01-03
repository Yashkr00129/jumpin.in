import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { useState } from 'react'
import { ImFacebook, ImWhatsapp } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import img from '../images/Avatar_1.png'
import Image from 'next/image'
import Head from 'next/head'

const Contact = () => {
  const [inputs, setInputs] = useState('')

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }
  return (
    <div>
      <Head>
        <title>Contact - FT9ja</title>
      </Head>
      <Header />
      <div className="w-full bg-black">
        <div className="mx-auto max-w-screen-lg py-10">
          <div className="flex flex-col sm:flex-row">
            <div className="mx-5 text-white">
              <h1 className="py-10 text-center text-3xl font-bold sm:text-left">
                Contact Us
              </h1>
              <p className="text-center sm:text-left">
                Need help or more information? We’re here for you. Connect with
                our customer service specialist through the most convenient way
                for you.
              </p>
            </div>
            <Image
              src={img}
              width={250}
              height={200}
              className="self-center pb-5"
              alt="alsdkjf"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm">
        <p className="mx-5 py-10 text-center">
          You can also leave your message here and we’ll respond to you within
          24 hours.
        </p>
        <div className="mx-5 mb-10 rounded-lg border-2 border-gray-200 p-5">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="block py-3 text-sm font-semibold text-gray-900">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
              placeholder="Enter name"
              value={inputs.name || ''}
              onChange={handleChange}
            />
            <label className="block py-3 text-sm font-semibold text-gray-900">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              className="rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
              placeholder="Enter email"
              value={inputs.email || ''}
              onChange={handleChange}
            />
            <label className="block py-3 text-sm font-semibold text-gray-900">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
              placeholder="Enter subject"
              value={inputs.subject || ''}
              onChange={handleChange}
            />
            <label className="block py-3 text-sm font-semibold text-gray-900">
              Message
            </label>

            <textarea
              value={inputs.message || ''}
              name="message"
              placeholder="Enter your message here"
              className="mb-3 rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
              onChange={handleChange}
            />
            <input
              className="hover:border-gray my-5 cursor-pointer rounded-lg border-2 bg-black py-3 font-bold text-white duration-300 hover:bg-gray-900 "
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg px-10 py-10">
        <p className="pb-10 text-center text-3xl font-bold">Social Media</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative mt-10 flex flex-col items-center rounded-lg border-2 border-gray-300 p-10">
            <div className="absolute top-[-35px] flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <ImFacebook className="bg-black bg-transparent text-4xl" />
            </div>
            <p className="pt-5 text-center">
              Follow us on{' '}
              <a
                href="https://facebook.com/FT9ja-101059375510372/"
                className="text-gray-500"
              >
                Facebook
              </a>
            </p>
          </div>
          <div className="relative mt-10 flex flex-col items-center rounded-lg border-2 border-gray-300 p-10">
            <div className="absolute top-[-35px]  flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <ImWhatsapp className="bg-black bg-transparent text-4xl" />
            </div>
            <p className="text-center">Message us on WhatsApp</p>
            <p className="py-1">+2348138462394</p>
            <p className="text-center text-xs">
              Mon to Fri 08:00AM to 05:00PM WAT.
            </p>
          </div>
          <div className="relative mt-10 flex flex-col items-center rounded-lg border-2 border-gray-300 p-10">
            <div className="absolute top-[-35px] flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <GrInstagram className="bg-black bg-transparent text-4xl" />
            </div>
            <p className="pt-5 text-center">
              Follow us on{' '}
              <a
                href="https://www.instagram.com/ft9ja.official/"
                className="text-gray-500"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
