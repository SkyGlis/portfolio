import { YouTubeEmbed } from '@next/third-parties/google'

export default function PitchPage() {
  return (
    <div className="max-w-7xl items-center mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-24">
      <YouTubeEmbed videoid='4o8BtFDZcLg' />
    </div>
  )
}