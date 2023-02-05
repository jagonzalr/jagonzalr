import File from '../../components/File'

import { getIdsByType, getFileData } from '../../lib/files'

export default function SaasItem({ data }) {
  return <File section={'saas'} data={data} />
}

export async function getStaticPaths() {
  const paths = getIdsByType('saas')
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
