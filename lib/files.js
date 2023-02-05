import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'

const filesDirectory = path.join(process.cwd(), 'files')

function transformer(ast) {
  visit(ast, 'link', visitor)

  function visitor(node) {
    const data = node.data || (node.data = {})
    const props = data.hProperties || (data.hProperties = {})

    props.target = '_blank'
    props.rel = 'nofollow noopener noreferrer'
    return
  }
}

function links() {
  return transformer
}

export default links

function getFileMatter(fileName) {
  const fullPath = path.join(filesDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  return matterResult
}

function filterFilesByType(type) {
  const fileNames = fs.readdirSync(filesDirectory)
  return fileNames.filter(fileName => {
    const matterResult = getFileMatter(fileName)
    return matterResult.data.type === type
  })
}

export function getSortedFilesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(filesDirectory)
  const allFilesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '').replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(filesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allFilesData
}

export function getDataTypes() {
  return [
    {
      id: 'saas',
      name: 'SaaS'
    },
    {
      id: 'open-source',
      name: 'OSS'
    },
    {
      id: 'projects',
      name: 'Projects'
    }
  ]
}

export function getDataByType(type) {
  const fileNames = filterFilesByType(type)

  return fileNames.map(fileName => {
    const id = fileName.replace(/\.mdx$/, '').replace(/\.md$/, '')
    const matterResult = getFileMatter(fileName)
    return {
      id,
      ...matterResult.data
    }
  })
}

export function getIdsByType(type) {
  const fileNames = filterFilesByType(type)

  return fileNames.map(fileName => {
    return {
      params: { id: fileName.replace(/\.mdx$/, '').replace(/\.md$/, '') }
    }
  })
}

export async function getFileData(id) {
  const fullPath = path.join(filesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(links)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
