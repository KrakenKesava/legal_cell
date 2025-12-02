"use client";

import { useEffect, useState } from "react";

import Filters from "@/app/components/Filters";
import SearchBar from "@/app/components/SearchBar";
import CasesTable from "@/app/components/CasesTable";

import axios from "axios";

export default function CasePage() {
  const [allCases, setAllCases] = useState<any[]>([]);
  const [filteredCases, setFilteredCases] = useState<any[]>([]);

  // 🔥 Fetch all cases
  const loadCases = async () => {
    try {
      const res = await axios.get("/api/cases");
      setAllCases(res.data);
      setFilteredCases(res.data);
    } catch (err) {
      console.error("Failed to load cases:", err);
    }
  };

  useEffect(() => {
    loadCases();
  }, []);

  // Dynamic filtering logic
  const onFilterChange = (filters: any) => {
    let res = [...allCases];

    if (filters.caseType.length > 0)
      res = res.filter((c) => filters.caseType.includes(c.caseType));

    if (filters.status.length > 0)
      res = res.filter((c) => filters.status.includes(c.presentStatus));

    if (filters.dateFrom)
      res = res.filter(
        (c) => new Date(c.dateOfFiling) >= new Date(filters.dateFrom)
      );

    if (filters.dateTo)
      res = res.filter(
        (c) => new Date(c.dateOfFiling) <= new Date(filters.dateTo)
      );

    setFilteredCases(res);
  };

  // Clear filters
  const clearFilters = () => setFilteredCases(allCases);

  // Search logic
  const searchFilter = (term: string) => {
    const lower = term.toLowerCase();

    const r = allCases.filter(
      (c) =>
        c.caseNo.toLowerCase().includes(lower) ||
        c.applicants?.some((a: string) => a.toLowerCase().includes(lower))
    );

    setFilteredCases(r);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border">

        <div className="grid grid-cols-[280px_1fr] gap-6">

          {/* ⬅️ Filters with Add Case Modal */}
          <Filters 
            onFilterChange={onFilterChange}
            onClear={clearFilters}
            onAdd={loadCases}   // ⭐ IMPORTANT ⭐
          />

          {/* Search + Table */}
          <div className="space-y-4">
            <SearchBar onSearch={searchFilter} />
            <CasesTable rows={filteredCases} />
          </div>

        </div>

      </div>
    </main>
  );
}
