import Section from '../components/Section'

import { getDataByType } from '../lib/files'

export async function getStaticProps() {
  const data = getDataByType('projects')
  return {
    props: {
      data
    }
  }
}

export default function Projects({ data }) {
  return (
    <Section
      data={data}
      section={{
        id: 'projects',
        title: 'Projects'
      }}
    />
  )
}
