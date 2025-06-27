'use client'

import { DiscussionEmbed } from 'disqus-react'

interface DisqusCommentsProps {
  identifier: string
  title: string
  url: string
}

export default function DisqusComments({ identifier, title, url }: DisqusCommentsProps) {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME || 'your-disqus-shortname'
  
  const disqusConfig = {
    url,
    identifier,
    title,
  }

  return (
    <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-6">Комментарии</h3>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
