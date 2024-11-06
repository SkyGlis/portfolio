import Spline from '@splinetool/react-spline';
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-100 to-white">
      <section className='ponter-events-none'>
        <Spline scene="https://prod.spline.design/LuT9Ra3HXMUMopNK/scene.splinecode" />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="bg-black/50 backdrop-blur-lg shadow-lg border border-white/20 p-8 rounded-lg text-center text-white max-w-lg mx-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h1 className="text-5xl font-extrabold">Daniel Santos</h1>
              <p className="mt-2 text-lg text-gray-200">Additional description or details</p>
            </div>
        </div>
      </section>
      <section>
        <h1>Seja muito bem-vindo</h1>
      </section>
    </div>
  );
}