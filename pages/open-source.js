import Section from '../components/Section'

import { getDataByType } from '../lib/files'

export async function getStaticProps() {
  const data = getDataByType('open-source')
  return {
    props: {
      data
    }
  }
}

export default function OpenSource({ data }) {
  return (
    <Section
      data={data}
      section={{
        id: 'open-source',
        title: 'Open Source'
      }}
    />
  )
}
