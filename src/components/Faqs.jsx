import Link from 'next/link'
import { Container } from '@/components/Container'
import { Disclosure, Transition } from '@headlessui/react'
import { BiMinus } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { useRef } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How does the app work?',
    list: '',
    lists: [
      {
        id: 1,
        title: 'STEP 1: Download and Sign Up',
        line: '',
        litems: [
          {
            id: 1,
            li: 'Download the app from the Google Play Store or Apple App Store.',
          },
          {
            id: 2,
            li: 'Create an account by providing your basic details.',
          },
          {
            id: 3,
            li: 'Set your preferences and you’re ready to book rides!',
          },
        ],
      },
      {
        id: 2,
        title: 'STEP 2: Book a Ride',
        line: 'Booking a ride is easy:',
        litems: [
          {
            id: 1,
            li: 'Enter your pickup and drop-off locations.',
            more: [
              {
                id: 1,
                text: 'You can choose to share your ride with others heading in the same direction.',
              },
            ],
          },
          {
            id: 2,
            li: 'Confirm your ride and wait for the driver to pick you up.',
          },
        ],
      },
      {
        id: 3,
        title: 'STEP 3: Enjoy Your Ride',
        line: 'Travel conveniently and pay securely:',
        litems: [
          {
            id: 1,
            li: 'Track your ride in real-time within the app.',
          },
          {
            id: 2,
            li: 'Pay through cash, card, or in-app wallet.',
          },
        ],
      },
    ],
    answer: '',
  },
  {
    id: 2,
    question: 'What safety measures are in place?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title:
          'All drivers are verified through a stringent screening process.',
      },
      {
        id: 2,
        title: 'Rides are tracked in real-time for safety and security.',
      },
      {
        id: 3,
        title: 'Emergency contact feature is available within the app.',
      },
    ],
  },
  {
    id: 3,
    question: 'What is ride-sharing?',
    lists: '',
    list: '',
    answer: `Ride-sharing allows you to share a cab with others traveling in the same direction, reducing costs and environmental impact. It’s a win-win for your wallet and the planet!`,
  },
  {
    id: 4,
    question: 'How are fares calculated?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title: 'Fares are calculated based on distance and time.',
      },
      {
        id: 2,
        title:
          'Shared rides are more cost-effective as the fare is split among passengers.',
      },
    ],
  },
  {
    id: 5,
    question: 'Is the app free to use?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title: `Yes, the app is free to download and use.`,
      },
      {
        id: 2,
        title: `You only pay for the rides you book.`,
      },
    ],
  },
  {
    id: 6,
    question: 'Can I choose my co-riders?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title: `No, co-riders are automatically assigned based on the route.`,
      },
      {
        id: 2,
        title: `All co-riders are verified users, ensuring a safe ride experience.`,
      },
    ],
  },
  {
    id: 7,
    list: '',
    question: 'What if I need to cancel a ride?',
    lists: '',
    answer:
      'You can cancel a ride through the app. Cancellation charges may apply based on the timing of the cancellation.',
  },
  {
    id: 8,
    list: '',
    question: 'Which payment methods are accepted?',
    lists: '',
    answer: 'We accept cash, credit/debit cards, and in-app wallet payments.',
  },
]

export function Faqs() {
  const buttonRefs = useRef([])
  const openedRef = useRef(null)

  const clickRecent = (index) => {
    const clickedButton = buttonRefs.current[index]
    if (clickedButton === openedRef.current) {
      openedRef.current = null
      return
    }
    if (Boolean(openedRef.current?.getAttribute('data-value'))) {
      openedRef.current?.click()
    }
    openedRef.current = clickedButton
  }

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto pb-10 lg:max-w-screen-md">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@ft9ja.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-5 lg:max-w-screen-md">
          {faqs.map(({ id, question, list, answer, lists }, idx) => (
            <Disclosure key={id}>
              {({ open }) => (
                <>
                  <div key={id}>
                    <Disclosure.Button
                      as="div"
                      className="text-md mb-3 w-full cursor-pointer rounded-lg text-left font-bold"
                    >
                      <button
                        className="flex w-full justify-between"
                        data-value={open}
                        ref={(ref) => {
                          buttonRefs.current[idx] = ref
                        }}
                        onClick={() => clickRecent(idx)}
                      >
                        {question}
                        {open ? (
                          <span className="rounded-full border-[1px] border-slate-300 p-1.5">
                            <BiMinus />
                          </span>
                        ) : (
                          <span className="rounded-full border-[1px] border-slate-300 p-1.5">
                            <BsPlusLg />
                          </span>
                        )}
                      </button>
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      {open && (
                        <Disclosure.Panel
                          static
                          className="my-2 flex w-full flex-col justify-between rounded-lg text-left"
                        >
                          {answer && answer}
                          {list && (
                            <ul className="ml-3 list-item">
                              {list.map(({ id, title }) => (
                                <li className="ml-2 list-disc py-1" key={id}>
                                  {title}
                                </li>
                              ))}
                            </ul>
                          )}
                          {lists &&
                            lists.map(({ id, title, line, litems }) => (
                              <div key={id}>
                                <h1 className="py-4 text-[#28a745]">{title}</h1>
                                {line && <p className="py-2">{line}</p>}
                                {litems.map(({ id, li, more }) => (
                                  <>
                                    <li key={id} className="py-2">
                                      {li}
                                    </li>
                                    {more &&
                                      more.map(({ id, text }) => (
                                        <p key={id} className="py-1 pl-6">
                                          {text}
                                        </p>
                                      ))}
                                  </>
                                ))}
                              </div>
                            ))}
                        </Disclosure.Panel>
                      )}
                    </Transition>
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </Container>
    </section>
  )
}
