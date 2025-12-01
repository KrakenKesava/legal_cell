export default function CaseRow({ data }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="p-3">{data.date}</td>
      <td className="p-3">{data.caseNo}</td>
      <td className="p-3">{data.recipient}</td>
      <td className="p-3">{data.court}</td>
      <td className="p-3">
        <span
          className={
            data.status === "Open"
              ? "bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
              : "bg-red-100 text-red-700 px-2 py-1 rounded text-xs"
          }
        >
          {data.status}
        </span>
      </td>

      <td className="p-3 flex justify-center gap-2">

        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">
          View
        </button>

        <button className="px-3 py-1 border border-blue-500 text-blue-600 rounded-md text-sm hover:bg-blue-50">
          Edit
        </button>

      </td>
    </tr>
  );
}
