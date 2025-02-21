import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

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
        <Hero
          title={'Share Your Ride, Save Your Time'}
          description={
            'Experience a smarter way to commute with our cab-sharing app. Join a community of riders, save money, and reduce your carbon footprint—all while getting where you need to go, faster and safer.'
          }
          imageUrl={'home-page-image.png'}
        />
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
