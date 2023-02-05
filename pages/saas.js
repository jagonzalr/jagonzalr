import Section from '../components/Section'

import { getDataByType } from '../lib/files'

export async function getStaticProps() {
  const data = getDataByType('saas')
  return {
    props: {
      data
    }
  }
}

export default function Sass({ data }) {
  return (
    <Section
      data={data}
      section={{
        id: 'saas',
        title: 'Saas'
      }}
    />
  )
}
