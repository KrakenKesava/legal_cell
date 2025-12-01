import CaseRow from "./CaseRow";

export default function CasesTable() {
  const mock = [
    {
      date: "2025-01-30",
      caseNo: "OA-123",
      recipient: "John Doe",
      court: "High Court",
      status: "Open",
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

      <table className="w-full text-left border-collapse text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="p-3 font-semibold">Date Filing</th>
            <th className="p-3 font-semibold">Case No</th>
            <th className="p-3 font-semibold">Recipient</th>
            <th className="p-3 font-semibold">Court</th>
            <th className="p-3 font-semibold">Status</th>
            <th className="p-3 font-semibold text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {mock.map((c, i) => (
            <CaseRow key={i} data={c} />
          ))}
        </tbody>
      </table>

    </div>
  );
}
