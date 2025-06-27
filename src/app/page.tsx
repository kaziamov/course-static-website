import Link from 'next/link'
import { getCourses } from '@/lib/markdown'

export default async function Home() {
  const courses = await getCourses()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Добро пожаловать на наши курсы!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Изучайте новые технологии с нашими подробными курсами, 
          созданными из Markdown файлов с поддержкой видео и комментариев.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {course.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {course.lessons} уроков
                </span>
                <Link 
                  href={`/courses/${course.slug}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Начать курс
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Курсы скоро появятся!
          </h2>
          <p className="text-gray-600 mb-8">
            Добавьте файлы курсов в папку content/courses, чтобы они появились здесь.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto text-left">
            <h3 className="font-semibold mb-2">Структура курса:</h3>
            <pre className="text-sm text-gray-700">
{`content/
  courses/
    my-course/
      course.md
      lesson-1.md
      lesson-2.md`}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
