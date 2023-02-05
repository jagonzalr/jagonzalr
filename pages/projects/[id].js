import File from '../../components/File'

import { getIdsByType, getFileData } from '../../lib/files'

export default function ProjectItem({ data }) {
  return <File section={'projects'} data={data} />
}

export async function getStaticPaths() {
  const paths = getIdsByType('projects')
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await getFileData(params.id)
  return {
    props: {
      data
    }
  }
}
