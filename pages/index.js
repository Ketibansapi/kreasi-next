import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/astronaut2.jpg')`}}>
                        <header className="major">
                            <h3>About us</h3>
                            <p>A quick introduction of the team</p>
                        </header>
                        <Link href="/about"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/rocketshowcases.png')`}}>
                        <header className="major">
                            <h3>Showcases</h3>
                            <p>The works that the team have done before</p>
                        </header>
                        <Link href="/partner"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/codes12.jpg')`}}>
                        <header className="major">
                            <h3>Services</h3>
                            <p>What we offered so far</p>
                        </header>
                        <Link href="/services"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/call.jpg')`}}>
                        <header className="major">
                            <h3>Contact us</h3>
                            <p>Need to make a call</p>
                        </header>
                        <Link href="/#two"><a className="link primary"></a></Link>
                    </article>
                    
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Kreasi is a team that can help your business keep alive.</h2>
                        </header>
                        <p>We have experiences on the technology that can make your business alive. With that power, we can guarantee you that it will help your works and business growing up nowadays. Just a simple request and we will continue what the customer really need to do.</p>
                        <ul className="actions">
                           
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)