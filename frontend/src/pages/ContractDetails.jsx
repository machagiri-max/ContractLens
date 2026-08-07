import ContractHeader from "../components/ContractHeader";
import ContractSummary from "../components/ContractSummary";
import PDFViewer from "../components/PDFViewer";
import RiskTimeline from "../components/RiskTimeline";
import ChatPanel from "../components/ChatPanel";

export default function ContractDetails() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">

      {/* Header */}
      <ContractHeader />

      {/* Summary */}
      <div className="mt-8">
        <ContractSummary />
      </div>

      {/* PDF + Risk */}
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <PDFViewer />
        <RiskTimeline />
      </div>

      {/* AI Chat */}
      <div className="mt-8">
        <ChatPanel />
      </div>

    </div>
  );
}

