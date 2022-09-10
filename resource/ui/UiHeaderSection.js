
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const UiHeaderSection = () => {
    return (
        <nav className="navigation">
          <div className="navigation-dekstop">
            <section className="nav-secondary">
              <div className="secondary-info">
                <Link href="/rates" className='nav-link-second'>
                  <a target="_blank">All Rates</a>
                </Link>
                <Link href="/travel-partners" className='nav-link-second'>
                  <a target="_blank">Travel Partners</a>
                </Link>
                <Link href="/contact-us" className='nav-link-second'>
                  <a target="_blank">Contact Us</a>
                </Link>
                <Link href="/covid-19" className='nav-link-second'>
                  <a target="_blank">Covid-19</a>
                </Link>
              </div>
            </section>

            <section className="nav-primary">
              <div className="wrapper-links">
                <div className="nav-primary-logo">
                  <Link href="/">
                    <a>
                      <Image src="/images/More_logo.svg"
                        width={200}
                        height={50}
                        alt='Logo More' />
                    </a>
                  </Link>
                </div>
                <div className="nav-primary-links">
                  <div className="link-container">
                    <ul className="links-list">
                      <li className='link dropdown-child'>
                        <Link href="/lodges-and-hotels">
                          <a>Lodges&amp;Hotels <FontAwesomeIcon className='chevron-icon' icon={faChevronDown}/></a>
                        </Link>
                      </li>
                      <li className='link'>
                        <Link href="/residences">
                          <a>Residences</a>
                        </Link>
                      </li>
                      <li className='link dropdown-child'>
                        <Link href="/experiences">
                          <a>Experiences <FontAwesomeIcon className='chevron-icon' icon={faChevronDown}/></a>
                        </Link>
                      </li>
                      <li className='link'>
                        <Link href="/our-story">
                          <a>Our Story</a>
                        </Link>
                      </li>
                      <li className='link'>
                        <Link href="/our-package">
                          <a>Our Package</a>
                        </Link>
                      </li>
                      <li className='link'>
                        <Link href="/blog">
                          <a>Blog</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nav-primary-button">
                <button className="nav-button">ENQUIRE</button>
              </div>
            </section>
          </div>

          <div className="navigation-mobile"></div>
        </nav>
    )
}

export default UiHeaderSection;