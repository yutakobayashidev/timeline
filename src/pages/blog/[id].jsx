import { getAllPostIds, getPostData } from '../../lib/posts';
import { ContentWrapper } from 'src/components/ContentWrapper';
import hero from 'src/styles/components/HomeHero.module.scss';
import Date from 'src/components/date'
import { PageSEO } from 'src/components/PageSEO';
import Head from 'next/head'

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/dcpquefnu/image/upload/l_text:Sawarabi%20Gothic_50_bold:${postData.title},co_rgb:333,w_500,c_fit/v1633071878/1LsAeiMQ_wdrumf.png`}
        />
      </Head>
      <PageSEO title={postData.title} og={postData.title} />
      <ContentWrapper>
        <div className={hero.container}>
          <div className="Blog_Emoji">
            <span>{postData.emoji}</span>
          </div>
          <h1 className={hero.title}>{postData.title}</h1>
          <Date dateString={postData.date} />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <a href={`https://github.com/yutakobayashidev/timeline/edit/main/content/${postData.id}.md`}>Edit on GitHub</a>
      </ContentWrapper>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
