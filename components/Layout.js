import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Jose Antonio González Rodríguez'
export const siteTitle = 'jagonzalr'

const SOCIAL_LINKS = [
  {
    url: 'https://github.com/jagonzalr',
    title: 'Github'
  },
  {
    url: 'https://www.linkedin.com/in/jagonzalr/',
    title: 'LinkedIn'
  },
  {
    url: 'https://www.producthunt.com/@jagonzalr',
    title: 'Product Hunt'
  }
]

function isMainSection(section) {
  return ['saas', 'projects', 'open-source'].indexOf(section) > -1
}

function isInnerSection(innerSection) {
  if (!innerSection.includes(':')) {
    return false
  }
  const section = innerSection.split(':')[0]
  return ['saas', 'projects', 'open-source'].indexOf(section) > -1
}

export default function Layout({ children, section = 'home' }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      {section === 'home' && (
        <header className={styles.header}>
          <>
            <section className={`${styles.text} ${utilStyles.padding1px}`}>
              <ul className={styles.list}>
                {SOCIAL_LINKS.map(({ url, title }) => (
                  <li className={styles.listItem} key={title}>
                    <a
                      href={url}
                      target='_blank'
                      rel='nofollow noopener noreferrer'
                      className={styles.socialLink}
                    >
                      {title}
                    </a>
                    <br />
                  </li>
                ))}
              </ul>
            </section>
            <Image
              priority
              src='/images/profile.jpeg'
              className={styles.borderCircle}
              height={144}
              width={144}
              alt='jagonzalr'
            />
            <h1 className={utilStyles.heading}>{name}</h1>
          </>
        </header>
      )}
      {section !== 'home' && (
        <Link href='/'>
          <h2 className={styles.backToHomeText}>{name}</h2>
        </Link>
      )}
      {isMainSection(section) && (
        <div className={styles.backToHome}>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
      {isInnerSection(section) && (
        <div className={styles.backToHome}>
          <Link href={`/${section.split(':')[0]}`}>← Go back</Link>
        </div>
      )}
      <main>{children}</main>
    </div>
  )
}
