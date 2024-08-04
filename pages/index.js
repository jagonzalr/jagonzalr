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

const SKILLS = [
  'AWS',
  'Serverless Architecture',
  'Event-driven Architecture',
  'Microservices',
  'Terraform',
  'Node.js',
  'React',
  'Redux',
  'GraphQL'
]

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
            href='https://sosafe-awareness.com/'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            SoSafe
          </a>
          , the leading human risk management platform.
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
      <section className={styles.text}>
        <p>
          I enjoy 🌶️ food, reading <strong>Sci-Fi / Fantasy</strong> 📚, playing{' '}
          <strong>action/adventure / RPG</strong> 🕹️, 🏊‍♂️ and{' '}
          <strong>Adventure Time</strong>.
        </p>
        {/* <section className={`${styles.text} ${utilStyles.padding1em}`}>
          <p>
            With more than 10+ years of experience this are some of my skills,
            not in any order:
          </p>
          <ul>
            {SKILLS.map(skill => (
              <li className={styles.listItem} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </section> */}
      </section>
    </Layout>
  )
}
