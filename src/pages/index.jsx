import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jumpin</title>
        <meta
          name="description"
          content="Experience a smarter way to commute with our cab-sharing app. Join
              a community of riders, save money, and reduce your carbon
              footprint—all while getting where you need to go, faster and
              safer."
        />
      </Head>
      {/* <Header /> */}
      <main>
        <Carousel
          axis="horizontal"
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          emulateTouch={true}
          showStatus={false}
          showIndicators={false}
        >
          <Hero
            title={'Share Your Ride, Save Your Time'}
            description={
              'Experience a smarter way to commute with our cab-sharing app. Join a community of riders, save money, and reduce your carbon footprint—all while getting where you need to go, faster and safer.'
            }
            imageUrl={'home-page-image.png'}
          />
          <Hero
            title={'Effortlessly Manage Your Journeys'}
            description={
              'Take control of your travel plans with ease. View, organize, and manage all your journeys in one place, ensuring a seamless and stress-free commuting experience.'
            }
            imageUrl={'my-rides-page-image.png'}
          />
          <Hero
            title={'Find Journeys with Ease'}
            description={
              'Quickly discover and book the perfect ride for your route. Our smart search and filtering options make it simple to find journeys that match your schedule and preferences.'
            }
            imageUrl={'search-journeys-page-image.png'}
          />
          <Hero
            title={'Stay Updated with All Your Notifications'}
            description={
              'Never miss an important update! View all your ride alerts, booking confirmations, and important messages in one convenient place.'
            }
            imageUrl={'notifications-page-image.png'}
          />
        </Carousel>
        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
        {/* <CallToAction /> */}
        <Reviews />
        {/* <Pricing /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
