import { GetServerSidePropsContext } from 'next';
import RSS from 'rss';
import jsonItems from '../../.items.json';
import siteConfig from '../../site.config';

async function generateFeedXml() {
  const feed = new RSS({
    title: siteConfig.title,
    description: siteConfig.description,
    site_url: siteConfig.siteRoot,
    feed_url: "https://yutakobayashi.dev/feed",
    language: 'ja',
  });

  jsonItems?.forEach((item) => {
    feed.item({
      title: item.title,
      description: siteConfig.description,
      date: new Date(item.date),
      url: item.url,
    });
  })
  
  // XML形式の文字列にする
  return feed.xml();
}

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateFeedXml(); // フィードのXMLを生成する（後述）

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間キャッシュする
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;