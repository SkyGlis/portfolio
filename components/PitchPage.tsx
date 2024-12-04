export default function PitchPage() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12 sm:py-24">
      <video width="1280" height="780" controls preload="auto">
        <source src="/pitch.mp4" type="video/mp4" />
      </video>
    </div>
  )
}