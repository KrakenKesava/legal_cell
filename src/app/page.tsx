import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import CasesTable from "./components/CasesTable";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">

        {/* GRID: FILTERS / MAIN */}
        <div className="grid grid-cols-[280px_1fr] gap-6">

          {/* LEFT FILTER PANEL */}
          <Filters />

          {/* RIGHT MAIN CONTENT */}
          <div className="space-y-5">
            <SearchBar />
            <CasesTable />
          </div>

        </div>
      </div>
    </main>
  );
}
