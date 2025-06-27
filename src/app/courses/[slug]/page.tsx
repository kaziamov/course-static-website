import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourse, getLessons } from '@/lib/markdown'

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourse(params.slug)
  const lessons = await getLessons(params.slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Назад к курсам
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {course.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          {course.description}
        </p>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            📚 Содержание курса
          </h2>
          <div className="space-y-3">
            {lessons.map((lesson, index) => (
              <Link
                key={lesson.slug}
                href={`/courses/${params.slug}/${lesson.slug}`}
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white text-sm font-medium px-2 py-1 rounded mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-900 font-medium">
                    {lesson.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {lessons.length === 0 && (
            <p className="text-gray-600">
              Уроки для этого курса пока не добавлены.
            </p>
          )}
        </div>

        {course.content && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: course.content }} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
