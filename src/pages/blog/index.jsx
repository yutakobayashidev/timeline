import { getSortedPostsData } from 'src/lib/posts'
import Link from 'next/link'
import Date from 'src/components/date'
import { ContentWrapper } from 'src/components/ContentWrapper';
import { PageSEO } from 'src/components/PageSEO';
import hero from 'src/styles/components/HomeHero.module.scss';

export default function Home({ allPostsData }) {
  return (
    <>
      <PageSEO title="Blog" path="/blog" />
      <ContentWrapper>
        <div className={hero.container}>
          <div className={hero.emoji}>
            <span>📝</span>
          </div>
          <h1 className={hero.title}>Blog</h1>
          <p className={hero.description}>
            I write about programming, music, and space-related topics.
            <a href="https://twitter.com/yutakobayashi__">
              Subscribe to the RSS feed
            </a>
          </p>
        </div>
        <div>
          <ul>
            {allPostsData.map(({ id, date, title, emoji }) => (
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <a>{emoji} {title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </ContentWrapper>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}