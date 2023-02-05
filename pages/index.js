import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/Layout'

import { getDataTypes } from '../lib/files'
import styles from './index.module.css'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const types = getDataTypes()
  return {
    props: {
      types
    }
  }
}

export default function Home({ types }) {
  return (
    <Layout section='home'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.text}>
        <p>
          Mexican living in Porto working at{' '}
          <a
            href='https://awesome-source.com/'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            Awesome Source
          </a>{' '}
          helping to feed the world sustainably with{' '}
          <a
            href='https://redsea.ag/'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            Red Sea
          </a>
          .
        </p>
        <section className={`${styles.text} ${utilStyles.padding1px}`}>
          <ul className={styles.list}>
            {types.concat({ id: 'blog', name: 'Blog' }).map(({ id, name }) => (
              <li className={styles.listItem} key={id}>
                {id !== 'blog' && <Link href={`/${id}`}>{name}</Link>}
                {id === 'blog' && (
                  <a
                    href='https://blog.jagonzalr.com'
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    Blog
                  </a>
                )}
                <br />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  )
}
