import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerServices from '../components/BannerServices'

export default () => (
    <Layout>
        <Head>
            <title>Kreasi - Services </title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <BannerServices />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Our Works</h2>
                        </header>
                        <p>The services that we provided are Website Design, Design Branding and Software Development. These three takes a big role in everybody's business. And we believe that these three services will be provided to the customer as fast and as best as we can. The content below is a lists that customer can choose which one in details information.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/websitedesign.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Website Design</h3>
                                </header>
                                <p>Looking for a website that can contain your business inside? We can help you. This website may can be your company profile, menu, etc. We design your website properly as your requirements and keep it online everytime.</p>
                                <ul className="actions">
                                    
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/designbranding.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Digital Branding</h3>
                                </header>
                                <p>Have a product to run but have no ideas on the design? We are your partner. 50% of product's success is depend on the good design. Let us design your advertisement such as company profile, logo, video, brand, etc.</p>
                                <ul className="actions">
                                    
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/software.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Software Development</h3>
                                </header>
                                <p>Need a good system to run your business? Then we can reach it. These days, there are many companies make a software such as mobile apps, desktop apps, and web apps to make their business be easier or ease the client.</p>
                                <ul className="actions">
                                    
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
