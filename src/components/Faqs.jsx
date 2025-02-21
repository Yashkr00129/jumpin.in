import Link from 'next/link'
import { Container } from '@/components/Container'
import { Disclosure, Transition } from '@headlessui/react'
import { BiMinus } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'

export function Faqs() {
  const [faqs, setFaqs] = useState([])
  async function getFaqs() {
    const res = await axios.get('/api/app-faq')
    const formattedFaqs = transformFAQs(res.data)
    setFaqs(formattedFaqs)
  }

  useEffect(() => {
    getFaqs()
  }, [])

  const transformFAQs = (faqsData) => {
    return faqsData.map((faq, index) => {
      const { _id, question, answer } = faq

      // Function to clean leading bullet characters and trim spaces
      const cleanText = (text) => text.replace(/^\s*[\-\•\*]\s*/, '').trim()

      // Process answer array: remove empty strings and clean bullet characters
      const filteredAnswer = answer.map(cleanText).filter((line) => line !== '')

      // Check if the answer contains multiple steps
      const isMultiStep = filteredAnswer.some((ans) => ans.startsWith('STEP'))

      let lists = null
      let list = null
      let formattedAnswer = ''

      if (isMultiStep) {
        lists = []
        let currentList = null

        filteredAnswer.forEach((line) => {
          if (line.startsWith('STEP')) {
            if (currentList) lists.push(currentList)
            currentList = {
              id: lists.length + 1,
              title: line,
              line: '',
              litems: [],
            }
          } else if (currentList) {
            currentList.litems.push({
              id: currentList.litems.length + 1,
              li: line,
            })
          }
        })

        if (currentList) lists.push(currentList)
      } else if (filteredAnswer.length > 1) {
        list = filteredAnswer.map((line, idx) => ({
          id: idx + 1,
          title: line,
        }))
      } else {
        formattedAnswer = filteredAnswer[0] || ''
      }

      return {
        id: index + 1,
        question,
        list,
        lists,
        answer: formattedAnswer,
      }
    })
  }

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

        {faqs.length > 0 ? (
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
                                  <h1 className="py-4 text-[#28a745]">
                                    {title}
                                  </h1>
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
        ) : (
          <div className="mx-auto grid grid-cols-1 gap-5 lg:max-w-screen-md">
            <div className="flex h-full w-full items-center justify-center">
              <ReactLoading
                type={'bars'}
                color={'#4267b3'}
                height={32}
                width={32}
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
