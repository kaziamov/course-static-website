'use client'

import { useMemo } from 'react'
import YouTubeEmbed from './YouTubeEmbed'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processedContent = useMemo(() => {
    // Простой парсер Markdown с поддержкой YouTube
    let html = content

    // Заголовки
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

    // Жирный текст
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

    // Курсив
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')

    // Код
    html = html.replace(/`(.*?)`/g, '<code>$1</code>')

    // Блоки кода
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')

    // Ссылки
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

    // Параграфы
    html = html.split('\n\n').map(paragraph => {
      if (paragraph.trim() && !paragraph.startsWith('<')) {
        return `<p>${paragraph.trim()}</p>`
      }
      return paragraph
    }).join('\n\n')

    return html
  }, [content])

  // Извлекаем YouTube видео из контента
  const youtubeRegex = /\[youtube\]\(([^)]+)\)/g
  const youtubeMatches = [...content.matchAll(youtubeRegex)]

  // Удаляем YouTube теги из обработанного контента
  const contentWithoutYoutube = processedContent.replace(/\[youtube\]\(([^)]+)\)/g, '{{YOUTUBE_PLACEHOLDER}}')

  // Разбиваем контент на части для вставки YouTube видео
  const parts = contentWithoutYoutube.split('{{YOUTUBE_PLACEHOLDER}}')

  return (
    <div className="prose max-w-none">
      {parts.map((part, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: part }} />
          {youtubeMatches[index] && (
            <YouTubeEmbed
              videoId={youtubeMatches[index][1]}
              title={`Видео ${index + 1}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
