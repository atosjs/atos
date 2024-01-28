import parseGitUrl from 'git-url-parse'
import { simpleGit } from 'simple-git'

const git = simpleGit()

const getUrl = async () => {
  const url = await git.remote(['get-url', 'origin'])
  return (url as string).trim()
}

const setUrl = async (url: string) => {
  await git.remote(['set-url', 'origin', url])
}

const toggleUrl = async () => {
  const url = await getUrl()
  console.log(url)
  const x = parseGitUrl(url)
  if (x.protocol === 'ssh') {
    setUrl(x.toString('https'))
  } else if (x.protocol === 'https') {
    setUrl(x.toString('ssh'))
  }
  console.log(await getUrl())
}

toggleUrl()
