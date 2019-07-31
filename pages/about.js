import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Kreasi - About us</title>
            <meta name="description" content="Generic Page" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About us</h1>
                    </header>
                    <span className="image main"><img src="/static/images/raccoon.jpg" alt="" /></span>
                    <p>Start from 2018, we dedicated to continue our hobby and passion to do something in the technology. Start thinking about what people needs a most this time even it's only in our environment yet. Finally we come out with the idea to make a team that can provide a several services such as design branding, website design and software application development which fit in our skills.</p>
                    <p>Between November, we legalize our team to the country which is Indonesia especially Batam City to run our ideas softly. All the services that we provide is something that people mostly need nowadays. Actually we almost like it more in design, because this world really need a better vision even in a little things. That is why we always try to give the product or services in a good design as cool as customer wants. Our vision and mision is simple, we just want to implement the technology through business world and make this be a better one. Maybe now our target is just only in our region, but we believe that this team can be bigger and make a contribution in our nation, perhaps in world.</p>
                    <p>Customer satisfaction is the most important thing that we need to be focused on. Nobody in this works that can make us happy as seeing our customer's smile. Our methodology is simple also, we just get the requirement from the customer, we design the system and we implement it. And hope that it can meet the customer needs.</p>
                </div>
            </section>
        </div>
    </Layout>
)
