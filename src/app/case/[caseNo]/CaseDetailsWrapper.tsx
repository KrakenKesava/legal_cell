import CaseDetailsClient from "./CaseDetailsClient";

export default function CaseDetailsWrapper({ caseNo }: { caseNo: string }) {
  return <CaseDetailsClient caseNo={caseNo} />;
}
