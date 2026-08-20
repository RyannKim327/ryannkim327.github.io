export type json = Record<string, unknown>

export interface api {
  message?: string
  error?: string,
  page?: number,
  count?: number,
  data?: dataInterface,
  [key: string]: unknown
}

export type dataInterface = blogInterface[] | certsInterface[] | contactInterface[] | experiencesInterface[] | projectInterface

export interface blogInterface {
  id: number,
  title: string,
  tags: string[],
  time: string,
  content: string
}

export interface certsInterface {
  category: string,
  link: string,
  url: string,
  source: string
}

export interface contactInterface {
  name: string,
  email: string,
  content: string
}

export interface experiencesInterface {
  content: string[],
  icon: string,
  title: string,
  year: number
}

export interface projectInterface {
  categories: string[],
  projects: projectsInterface[]
}

export interface projectsInterface {
  category: string[],
  description: string,
  img?: string,
  link: string,
  name: string,
  src: string
}

export interface IndexProps {
  data: dataInterface
}
