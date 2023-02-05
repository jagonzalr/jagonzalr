import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from './Layout'

import utilStyles from '../styles/utils.module.css'
import styles from './section.module.css'

export default function Section({ section, data }) {
  return (
    <Layout section={section.id}>
      <Head>
        <title>{`${section.title} - ${siteTitle}`}</title>
      </Head>
      <h1 className={utilStyles.heading}>{section.title}</h1>
      <section className={utilStyles.padding1px}>
        <ul className={styles.list}>
          {data.map(({ id, title, tagline }) => (
            <li className={styles.listItem} key={id}>
              <Link className={styles.listTitle} href={`/${section.id}/${id}`}>
                {title}
              </Link>
              <p className={styles.listText}>{tagline}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
