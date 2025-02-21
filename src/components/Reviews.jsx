import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'A game-changer for daily commutes!',
    body: `This app has completely transformed the way I travel to work. The cab-sharing option is super affordable, and I’ve met some great people along the way. It’s easy to use and very reliable. Highly recommended for anyone looking to save money and time!`,
    author: 'Rajesh Sharma',
    rating: 5,
  },
  {
    title: 'Excellent support team!',
    body: `I had some questions about how the app works, and the support team was fantastic. They were patient, clear, and made sure I understood everything. It’s rare to find such good customer service these days. Kudos to the team!`,
    author: 'Priya Mehta',
    rating: 5,
  },
  {
    title: 'Exceeded my expectations!',
    body: `I’ve been using this app for a few months, and the experience has been incredible. The rides are always on time, the drivers are polite, and the shared rides are super convenient. It’s also great to see an app promoting sustainable travel. Keep it up!`,
    author: 'Anil Kumar',
    rating: 5,
  },
  {
    title: 'Best cab-sharing app I’ve ever used!',
    body: `This app stands out with its clear policies and easy-to-use interface. The option to share rides with others makes it cost-effective and environmentally friendly. I’ve already recommended it to my friends and family. Definitely a must-have app!`,
    author: 'Sanya Verma',
    rating: 5,
  },
  {
    title: 'Affordable and efficient!',
    body: `This app offers amazing deals, and the weekly rides are super affordable. I save so much money compared to other options. It’s a win-win for me and my wallet!`,
    author: 'Vikram Patel',
    rating: 5,
  },
  {
    title: 'Top-notch service!',
    body: `I had some issues initially, but the customer service team quickly resolved them. The app works smoothly, and I love how easy it is to find rides. The transparency and reliability are unmatched.`,
    author: 'Sneha Iyer',
    rating: 5,
  },
  {
    title: 'Perfect for city travel!',
    body: `I’ve tried other cab apps, but this one is perfect for city travel. The sharing option is flexible and saves me money. It’s the best choice for commuters in India. My only wish is for 24/7 customer service support.`,
    author: 'Amit Joshi',
    rating: 5,
  },
  {
    title: 'Consistent and reliable!',
    body: `I wasn’t sure about cab-sharing apps at first, but this app proved me wrong. It’s consistent, reliable, and has a great team behind it. Traveling in India has never been this easy!`,
    author: 'Ravi Gupta',
    rating: 5,
  },
  {
    title: 'Promotes better travel habits!',
    body: `Using this app has made me more disciplined with my travel plans. The reminders and ride tracking features are super helpful. It’s great to see an app that not only helps you save but also promotes good habits.`,
    author: 'Neha Reddy',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-[#3b5998]' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Feedback from Our Users
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of users love the convenience and efficiency of our app.
          Here&apos;s what they have to say.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
