import Head from 'next/head'

import Layout, { siteTitle } from './Layout'

import utilStyles from '../styles/utils.module.css'
import styles from './file.module.css'

export default function File({ data, section }) {
  return (
    <Layout section={`${section}:${data.id}`}>
      <Head>
        <title>{`${data.title} - ${siteTitle}`}</title>
      </Head>
      <h1 className={utilStyles.heading}>{data.title}</h1>
      <p className={styles.tagline}>{data.tagline}</p>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: data.contentHtml }}
      />
      {data.link && (
        <a href={data.link} target='_blank' rel='nofollow noopener noreferrer'>
          Link
        </a>
      )}
    </Layout>
  )
}
