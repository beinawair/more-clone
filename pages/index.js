import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import UiHeaderSection from '../resource/ui/UiHeaderSection'
import UiFooterSection from '../resource/ui/UiFooterSection'
import ResidenceMapSection from '../resource/component/homepage/SectionResidenceMap'
import SectionCarousel from '../resource/component/SectionCarousel'
import UiCardExperience from '../resource/ui/UiCardExperience'
import UiCards from '../resource/ui/UiCards'
import { HotelLodges } from '../resource/config/lodgeHotelList'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>MORE Family Collection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header-wrapper'>
        <UiHeaderSection />
      </header>

      <main className="section-wrapper">
        <div className="hero-section">
          <div className="hero-links">
            <p className="heading-caps">View Video</p>
            <p className="heading-caps">360° tour</p>
          </div>

          <div className="hero-main">
            <div className="hero-overlay">
              <div className="hero-desktop">
                <video src="/video/Treehouse_Sunset_1.mp4" autoPlay muted className='video-background'></video>
                <div className="text">
                  <h1 className='heading'>We Enrich Lives</h1>
                  <p className="body-text">Reconnect with life & one another</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-section">
          <div className="home-intro-section">
            <div className="title-section">
              <p className="heading-caps secondary-text">A collection of extraordinary life experiences made possible by a family of remarkable people</p>
              <h2 className="home-intro-title">
                The MORE Family Collection
              </h2>
            </div>
            <div className="intro-container">
              <p className="intro-content">Our people on the ground create highly personalised experiences to bring you closer to Mother Nature, the greatest teacher about the only things in life that really matter.</p>
              <p className="intro-content">Our purpose is to help you open your eyes and heart, and reconnect with how &apos;wonder-full&apos; life is &#8209; whether in the company of loved ones or on your own.</p>
              <p className="intro-content">We invite you to take a closer look at our Lodges and Hotels, found in some of Southern Africa&apos;s most beautiful and untouched destinations. And to immerse yourself in our experiences. They&apos;ll enrich your life.</p>
              <h5 className="intro-content-bottom">Welcome to the family</h5>
            </div>
          </div>
        </div>

        <div className="residence-section">
          <div className="residence-maps">
            <div className="residence-map_heading">
              <p className="heading-caps secondary-text">
                More Destinations
              </p>
              <h3 className="sub-heading">
                The MORE Family
                <br />
                Collection in Southern Africa
              </h3>
            </div>
            <div className="residence-map_copy">
              <p className="intro-content">Our Lodges, Boutique Hotels and Private Residences are found in Southern Africa&apos;s best leisure destinations, and combine to offer you the classic Southern African experience, with MORE Family Collection&apos;s signature &apos;golden thread&apos;.</p>
              <p className="intro-content">Each of our Luxury Lodges is located in vast Big Five reserves, with private exclusive traversing.</p>
            </div>
          </div>

          <div className="residence-map_maps">
            <ResidenceMapSection />
          </div>
        </div>

        <div className="lodges-hotels-slider">
          <SectionCarousel>
            <UiCards data={HotelLodges} />
          </SectionCarousel>
        </div>

        <div className="experience-section">
          <div className="experience-title">
            <p className="heading-caps secondary-text">
              More Experiences
            </p>
            <h3 className="sub-head">
              A collection of life-enriching experiences
            </h3>
          </div>

          <div className="experience-details">
            <SectionCarousel>
              <UiCardExperience />
            </SectionCarousel>
          </div>

          <div className="experience-wraper">
            <div className="image-new-1"></div>
            <div className="experience-text">
              <h3 className="heading-caps">Test Text</h3>
              <h2 className="sub-head">Sub Heading Here</h2>
              <p className="intro-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sit saepe aperiam?</p>
              <p className="intro-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sit saepe aperiam?</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-wrapper">
        <UiFooterSection />
      </footer>
    </div>
  )
}
