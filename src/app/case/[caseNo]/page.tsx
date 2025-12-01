import CaseDetailsWrapper from "./CaseDetailsWrapper";

export default async function CasePage({
  params,
}: {
  params: { caseNo: string };
}) {
  // Next.js automatically unwraps server params
  return <CaseDetailsWrapper caseNo={params.caseNo} />;
}
