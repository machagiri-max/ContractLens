import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import { uploadContract } from "../api/contract";

export default function UploadCard() {

  const inputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async (file) => {

    if (!file) return;

    setLoading(true);

    try {

      const res = await uploadContract(file);

      setResult(res.data);

    } catch (err) {

      alert(
        err.response?.data?.detail ||
        "Upload Failed"
      );

    }

    setLoading(false);

  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10">

      <input
        type="file"
        accept=".pdf"
        hidden
        ref={inputRef}
        onChange={(e)=>handleUpload(e.target.files[0])}
      />

      <UploadCloud
        size={60}
        className="mx-auto text-blue-700"
      />

      <h2 className="text-2xl font-bold text-center mt-5">
        Upload Contract
      </h2>

      <p className="text-center text-slate-500 mt-2">
        Upload your employment agreement, NDA, lease or legal document.
      </p>

      <button
        onClick={()=>inputRef.current.click()}
        className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl"
      >
        {loading ? "Uploading..." : "Browse PDF"}
      </button>

      {result && (

        <div className="mt-8 border rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Contract Analysis
          </h2>

          <p><b>Filename:</b> {result.filename}</p>

          <p><b>Title:</b> {result.details.title}</p>

          <p><b>Effective Date:</b> {result.details.effective_date}</p>

          <p><b>Payment:</b> {result.details.payment_terms}</p>

          <p><b>Termination:</b> {result.details.termination}</p>

          <p><b>Confidentiality:</b> {result.details.confidentiality}</p>

          <p><b>Liability:</b> {result.details.liability}</p>

          <div className="mt-8">

            <h3 className="text-xl font-bold mb-3">
              AI Analysis
            </h3>

            <div className="bg-slate-100 rounded-xl p-5 whitespace-pre-wrap">
              {result.ai_report}
            </div>

          </div>

        </div>

      )}

    </div>
  );
}