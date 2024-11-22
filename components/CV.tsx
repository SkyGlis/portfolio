import PdfViewer from "./PDFViewer";

export default function Currículo() {
  return(
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Currículo</h2>
        </div>
        <PdfViewer url="/CV.pdf"/>
      </div>
    </section>
  )
}