import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')
const coursesDirectory = path.join(contentDirectory, 'courses')

export interface Course {
  slug: string
  title: string
  description: string
  lessons: number
  content?: string
}

export interface Lesson {
  slug: string
  title: string
  content: string
  courseSlug: string
  order?: number
}

export async function getCourses(): Promise<Course[]> {  try {
    if (!fs.existsSync(coursesDirectory)) {
      return []
    }

    const courseDirectories = fs.readdirSync(coursesDirectory, { withFileTypes: true })
      .filter((dirent: any) => dirent.isDirectory())
      .map((dirent: any) => dirent.name)

    const courses: Course[] = []

    for (const courseDir of courseDirectories) {
      const courseDirectoryPath = path.join(coursesDirectory, courseDir)
      const courseFilePath = path.join(courseDirectoryPath, 'course.md')
      
      if (fs.existsSync(courseFilePath)) {
        const fileContents = fs.readFileSync(courseFilePath, 'utf8')
        const { data, content } = matter(fileContents)

        // Простая обработка без remark - используем raw content
        const contentHtml = content

        // Подсчитываем количество уроков
        const lessonFiles = fs.readdirSync(courseDirectoryPath)
          .filter((file: string) => file.endsWith('.md') && file !== 'course.md')

        courses.push({
          slug: courseDir,
          title: data.title || courseDir,
          description: data.description || '',
          lessons: lessonFiles.length,
          content: contentHtml
        })
      }
    }

    return courses
  } catch (error) {
    console.error('Error loading courses:', error)
    return []
  }
}

export async function getCourse(slug: string): Promise<Course | null> {
  try {
    const courseDirectoryPath = path.join(coursesDirectory, slug)
    const courseFilePath = path.join(courseDirectoryPath, 'course.md')

    if (!fs.existsSync(courseFilePath)) {
      return null
    }

    const fileContents = fs.readFileSync(courseFilePath, 'utf8')
    const { data, content } = matter(fileContents)
      // Подсчитываем количество уроков
    const lessonFiles = fs.readdirSync(courseDirectoryPath)
      .filter((file: string) => file.endsWith('.md') && file !== 'course.md')

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      lessons: lessonFiles.length,
      content
    }
  } catch (error) {
    console.error('Error loading course:', error)
    return null
  }
}

export async function getLessons(courseSlug: string): Promise<Lesson[]> {
  try {
    const courseDirectoryPath = path.join(coursesDirectory, courseSlug)

    if (!fs.existsSync(courseDirectoryPath)) {
      return []
    }    const lessonFiles = fs.readdirSync(courseDirectoryPath)
      .filter((file: string) => file.endsWith('.md') && file !== 'course.md')
      .sort()

    const lessons: Lesson[] = []

    for (const lessonFile of lessonFiles) {
      const lessonFilePath = path.join(courseDirectoryPath, lessonFile)
      const fileContents = fs.readFileSync(lessonFilePath, 'utf8')
      const { data, content } = matter(fileContents)

      const lessonSlug = lessonFile.replace('.md', '')

      lessons.push({
        slug: lessonSlug,
        title: data.title || lessonSlug,
        content,
        courseSlug,
        order: data.order || 0
      })
    }

    // Сортируем по порядку
    return lessons.sort((a, b) => (a.order || 0) - (b.order || 0))
  } catch (error) {
    console.error('Error loading lessons:', error)
    return []
  }
}

export async function getLesson(courseSlug: string, lessonSlug: string): Promise<Lesson | null> {
  try {
    const lessonFilePath = path.join(coursesDirectory, courseSlug, `${lessonSlug}.md`)

    if (!fs.existsSync(lessonFilePath)) {
      return null
    }

    const fileContents = fs.readFileSync(lessonFilePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: lessonSlug,
      title: data.title || lessonSlug,
      content,
      courseSlug,
      order: data.order || 0
    }
  } catch (error) {
    console.error('Error loading lesson:', error)
    return null
  }
}
