import Image from 'next/future/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { useRouter } from 'next/router'
import logo from '../images/logo.png'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Footer() {
  const router = useRouter()
  return (
    <footer className="bg-white">
      <Container>
        <div className="lg:py-15 mx-auto grid max-w-[425px] grid-cols-1 pt-14 pb-8 md:max-w-screen-2xl md:grid-cols-2 md:gap-10 lg:gap-20">
          <div className="flex flex-col text-gray-900">
            <Link href="/">
              <span className="h-12 w-28 pl-2">
                {/* <Image src={logo} alt="FT9ja Logo" className="cursor-pointer" /> */}
                <div className="text-2xl font-semibold">Jumpin</div>
              </span>
            </Link>
            <div className="ml-2 pt-3">
              <p className="mt-1 text-justify text-sm">
                Connecting people for convenient, affordable, and eco-friendly
                rides. Whether you&apos;re commuting to work or heading out for
                a weekend trip, our app makes sharing rides simple and
                hassle-free.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-10 md:py-0">
            <h1 className="mb-4 text-center text-2xl font-bold md:text-left">
              Contact Us
            </h1>
            <div>
              <p className="text-center md:text-left">
                <span className="font-bold">Email: </span>
                <a className="text-[#3b5998]" href="support@jumpin.com">
                  customercare@jumpin.in
                </a>
              </p>
              {/* <p className="pt-3 text-center md:text-left">
                {' '}
                <span className="font-bold">Whatsapp Number: </span>
                <span className="text-[#28a745]">+123456789</span>
              </p> */}
              {/* <p className="text-center text-sm md:text-left">address line 1</p>
              <p className="pt-3 text-center md:text-left">adress line 2</p>
              <p className="text-center md:text-left">
                <a
                  className="text-sm text-[#28a745]"
                  href="https://calendly.com/ft9ja-lagos"
                >
                  (Appointments only)
                </a>
              </p>
              <p className="pt-3 text-center md:text-left">address line 3</p>
              <p className="text-center md:text-left">
                <a
                  className="text-sm  text-[#28a745]"
                  href="https://calendly.com/ft9ja-lagos"
                >
                  (Appointments only)
                </a>
              </p> */}
            </div>
          </div>
          {/* <div className="flex flex-col">
            <h1 className="mb-8 text-center text-2xl font-bold md:text-left">
              Apply Online
            </h1>
            <div className="flex flex-col justify-center sm:flex-row md:flex-col md:text-right lg:flex-row">
              <Link href="https://temp-app-pockettailwind.herokuapp.com/#pricing">
                <a className="mb-2 rounded-xl border-[1px] border-black bg-black py-3 px-6 text-center text-base text-white duration-300 hover:border-[1px] hover:bg-white hover:text-black sm:mr-2 sm:mb-0 md:mr-0 md:mb-2 lg:mr-2 lg:mb-0">
                  Start Trading
                </a>
              </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <a
                  target="_blank"
                  className="flex cursor-pointer items-center rounded-md border-[1px] border-slate-300 py-3 px-2"
                >
                  <PlayIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2 text-center">Watch the video</span>
                </a>
              </Link>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 px-5 pb-8 md:px-10 md:pt-6">
          {/* <div className="flex pt-5 md:py-5">
            <a
              href="https://facebook.com"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <ImFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <GrInstagram className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <ImTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <ImYoutube className="text-2xl" />
            </a>
          </div> */}
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            All right reserved &copy; 2025 Jumpin -{' '}
            <Link
              className="duration-200 hover:underline"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link
              className="duration-200 hover:underline"
              href="/privacy-policy"
            >
              Privacy
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
