import Image from "next/image";
import Link from "next/link";

const UiFooterSection = () => {
    return (
        <div className="footer">
            <section className="footer-section">
                <div className="footer-identity">
                    <div className="footer-logo">
                        <Link href="/">
                            <a>
                                <Image src="/images/More_logo_white.svg"
                                    width={200}
                                    height={50}
                                    alt='Logo More White' />
                            </a>
                        </Link>
                    </div>
                    <div className="footer-social-media">
                        <ul className="social-media-links">
                            <li className="social-icon">
                                <Link href="/facebook">
                                    <a>
                                        <Image src="/images/facebook_icon.svg"
                                        width={30}
                                        height={30}
                                        alt='Logo More White' />
                                    </a>
                                </Link>
                            </li>
                            <li className="social-icon">
                                <Link href="/instagram">
                                    <a>
                                        <Image src="/images/instagram_icon.svg"
                                        width={30}
                                        height={30}
                                        alt='Logo More White' />
                                    </a>
                                </Link>
                            </li>
                            <li className="social-icon">
                                <Link href="/youtube">
                                    <a>
                                        <Image src="/images/youtube_icon.svg"
                                        width={30}
                                        height={30}
                                        alt='Logo More White' />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-identity footer-menus">
                    <div className="single-menu menu-lodges-hotels">
                        <h3 className="footer-menu-title">Lodges &amp; Hotels</h3>
                        <ul className="list-menu">
                            <li className="list">Lion Sands Game Reserve</li>
                            <li className="list">Marataba Game Reserve</li>
                            <li className="list">Stanley & Livingstone Boutique</li>
                            <li className="list">Hotel</li>
                            <li className="list">Ursula&apos;s Homestead</li>
                            <li className="list">Cape Cadogan Boutique Hotel</li>
                            <li className="list">More Quarters Neighbourhood</li>
                            <li className="list">Hotel</li>
                        </ul>
                    </div>

                    <div className="single-menu menu-media-center">
                        <h3 className="footer-menu-title">Media Center</h3>
                        <ul className="list-menu">
                            <li className="list">Media Gallery</li>
                            <li className="list">Video Gallery</li>
                            <li className="list">Information Downloads</li>
                            <li className="list">Media Contact Details</li>
                            <li className="list">Media Kit</li>
                        </ul>
                    </div>

                    <div className="single-menu menu-about-more">
                        <h3 className="footer-menu-title">About MORE</h3>
                        <ul className="list-menu">
                            <li className="list">More Community Foundation</li>
                            <li className="list">NJ MORE Field Guide College</li>
                            <li className="list">Voluntourism</li>
                            <li className="list">Careers</li>
                        </ul>
                    </div>

                    <div className="single-menu menu-contact">
                        <h3 className="footer-menu-title">Get in touch</h3>
                        <ul className="list-menu">
                            <li className="list">Reservations</li>
                            <li className="list">Lodges & Hotels</li>
                            <li className="list">More Community Foundation</li>
                            <li className="list">Field Guides Training</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-identity copyrights">
                    <div className="copyright">
                        <p className="copyright-text">All rights reserved. © Copyright 2022 MORE Family Collection.</p>
                    </div>

                    <div className="privacy-policy">
                        <p className="policy">
                            <Link href="/privacy">
                                <a>Privacy Policy </a>
                            </Link>
                            | 
                            <Link href="/policy">
                                <a> Cookie Policy</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UiFooterSection;