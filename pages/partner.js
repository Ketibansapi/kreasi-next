import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerPartner from '../components/BannerPartner'

export default () => (
    <Layout>
        <Head>
            <title>Kreasi - Showcases </title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <BannerPartner />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Currently Undergoing Maintenance...</h2>
                        </header>
                        <p>This page still undergoing maintenance by the developer. We promise will get back to you as soon as possible. Cheers.</p>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
