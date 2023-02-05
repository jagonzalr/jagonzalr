import File from '../../components/File'

import { getIdsByType, getFileData } from '../../lib/files'

export default function OpenSourceItem({ data }) {
  return <File section={'open-source'} data={data} />
}

export async function getStaticPaths() {
  const paths = getIdsByType('open-source')
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
