import Head from 'next/head';
import jsonItems from '../../.items.json';
import siteConfig from '../../site.config';
import { ContentWrapper } from '../components/ContentWrapper';
import { HomeHero } from '../components/HomeHero';
import { Timeline } from '../components/Timeline';
import { itemsSchema } from '../schema';
import { PageSEO } from '../components/PageSEO';

const IndexPage = () => {
  const items = itemsSchema.parse(jsonItems);
  return (
    <>
      <PageSEO
        title={siteConfig.title}
        description={siteConfig.description}
        path="/"
        removeSiteNameFromTitle={true}
      />
      <ContentWrapper>
        <HomeHero />
        <div>
          <Timeline items={items} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default IndexPage;
