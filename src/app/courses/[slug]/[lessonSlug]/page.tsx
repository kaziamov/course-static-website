import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourse, getLesson, getLessons } from '@/lib/markdown'
import MarkdownRenderer from '../../../components/MarkdownRenderer'
import DisqusComments from '@/components/DisqusComments'

export default async function LessonPage({
  params
}: {
  params: { slug: string; lessonSlug: string }
}) {
  const course = await getCourse(params.slug)
  const lesson = await getLesson(params.slug, params.lessonSlug)
  const allLessons = await getLessons(params.slug)

  if (!course || !lesson) {
    notFound()
  }

  const currentLessonIndex = allLessons.findIndex(l => l.slug === params.lessonSlug)
  const previousLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null

  const lessonUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/courses/${params.slug}/${params.lessonSlug}`

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-700">
            Главная
          </Link>
          <span className="mx-2">→</span>
          <Link href={`/courses/${params.slug}`} className="hover:text-gray-700">
            {course.title}
          </Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">
            {lesson.title}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {lesson.title}
        </h1>

        <p className="text-gray-600">
          Урок {currentLessonIndex + 1} из {allLessons.length} • {course.title}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <MarkdownRenderer content={lesson.content} />
      </div>

      {/* Навигация между уроками */}
      <div className="flex justify-between items-center mb-12">
        {previousLesson ? (
          <Link
            href={`/courses/${params.slug}/${previousLesson.slug}`}
            className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <span className="mr-2">←</span>
            <div>
              <div className="text-sm text-gray-600">Предыдущий урок</div>
              <div className="font-medium">{previousLesson.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        <Link
          href={`/courses/${params.slug}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          К содержанию курса
        </Link>

        {nextLesson ? (
          <Link
            href={`/courses/${params.slug}/${nextLesson.slug}`}
            className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <div className="text-right">
              <div className="text-sm text-gray-600">Следующий урок</div>
              <div className="font-medium">{nextLesson.title}</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      {/* Комментарии Disqus */}
      <DisqusComments
        identifier={`${params.slug}-${params.lessonSlug}`}
        title={`${lesson.title} - ${course.title}`}
        url={lessonUrl}
      />
    </div>
  )
}
