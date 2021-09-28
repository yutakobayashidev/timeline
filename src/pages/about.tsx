import Head from 'next/head';
import jsonItems from '../../.items.json';
import siteConfig from '../../site.config';
import { PageWrap } from '../components/PageWrap';
import { SiteHeader } from '../components/Siteheader';
import { itemsSchema } from '../schema';
import Image from 'next/image'

const IndexPage = () => {
  const items = itemsSchema.parse(jsonItems);
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <link rel="canonical" href={siteConfig.siteRoot} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta name="description" content={siteConfig.description} />
      </Head>
      <SiteHeader />
      <PageWrap>
        <h1 className="PageHeading">About</h1>
        <section className="About_Hero">
        <Image src="/icon.png" width={400} height={400} />
            <div>
            <h2>Yuta Kobayashi</h2>
            <p>My hobbies are programming, music, and space, and I enrolled in N middle school in April. You can follow @yutakobayashi if you like.</p>
            </div>
        </section>
        <h1>Music</h1>
        <p>I love VOCALOID and CeVIO (mainly KAFU) songs 🤎.</p>
        <h1>Project</h1>
        <p>This is the list of my Github repository.</p>
      </PageWrap>
    </>
  );
};

export default IndexPage;
