import { FileText, Eye, Download } from "lucide-react";

export default function PDFViewer() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border p-6 h-full">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold text-slate-800">
          PDF Preview
        </h2>

        <button className="text-blue-600 hover:text-blue-800">
          <Download size={20} />
        </button>

      </div>

      <div className="mt-6 h-[550px] border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-slate-50">

        <FileText size={80} className="text-blue-600" />

        <h3 className="mt-5 text-xl font-semibold">
          Employment_Agreement.pdf
        </h3>

        <p className="text-slate-500 mt-2">
          8 Pages
        </p>

        <button className="mt-8 flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl">

          <Eye size={18} />

          View PDF

        </button>

      </div>

    </div>
  );
}