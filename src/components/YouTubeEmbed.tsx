'use client'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  width?: string
  height?: string
}

export default function YouTubeEmbed({ 
  videoId, 
  title = "YouTube video", 
  width = "100%", 
  height = "400" 
}: YouTubeEmbedProps) {
  return (
    <div className="my-6">
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}
