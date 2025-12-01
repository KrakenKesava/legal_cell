export default function Filters() {
  return (
    <aside className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg">

      {/* Add Case */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
        Add Case
      </button>

      {/* Date filters */}
      <div className="mt-6">
        <p className="font-semibold mb-2 text-sm">Date Filing</p>

        <div className="flex flex-col gap-3">
          <div>
            <label className="text-xs text-gray-600">From</label>
            <input type="date" className="w-full mt-1 border border-gray-300 p-2 rounded-md bg-white" />
          </div>

          <div>
            <label className="text-xs text-gray-600">To</label>
            <input type="date" className="w-full mt-1 border border-gray-300 p-2 rounded-md bg-white" />
          </div>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Case Type */}
      <div>
        <p className="font-semibold mb-2 text-sm">Case Type</p>
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" /> OA</label>
          <label className="flex items-center gap-2"><input type="checkbox" /> WP</label>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Case Status */}
      <div>
        <p className="font-semibold mb-2 text-sm">Case Status</p>
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" /> Open</label>
          <label className="flex items-center gap-2"><input type="checkbox" /> Closed</label>
        </div>
      </div>

      {/* Apply Filters */}
      <button className="w-full mt-6 bg-gray-800 hover:bg-black text-white py-2 rounded-lg font-medium">
        Apply Filters
      </button>

    </aside>
  );
}
