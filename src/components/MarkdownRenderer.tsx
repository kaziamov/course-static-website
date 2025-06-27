'use client'

import { useMemo } from 'react'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processedContent = useMemo(() => {
    // Простой парсер Markdown
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

    // Ссылки и YouTube
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      if (text === 'youtube') {
        return `<div class="youtube-embed"><iframe src="https://www.youtube.com/embed/${url}" frameborder="0" allowfullscreen></iframe></div>`
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
    })

    // Простая обработка параграфов
    const lines = html.split('\n')
    const processedLines: string[] = []
    
    for (const line of lines) {
      const trimmedLine = line.trim()
      if (trimmedLine && !trimmedLine.startsWith('<')) {
        processedLines.push(`<p>${trimmedLine}</p>`)
      } else if (trimmedLine) {
        processedLines.push(trimmedLine)
      }
    }

    return processedLines.join('\n')
  }, [content])
  return (
    <div className="prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: processedContent }} />
    </div>
  )
}
