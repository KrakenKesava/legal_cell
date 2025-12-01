"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface CaseType {
  caseNo: string;
  caseType: string;
  court: string;
  presentStatus: string;
  applicants?: string[];
  respondents?: string[];
  dateOfFiling?: string;
  bench?: string;
  mainPrayer?: string;
  [key: string]: any; // allow other fields
}

export default function CaseDetailsClient({ caseNo }: { caseNo: string }) {
  const [data, setData] = useState<CaseType | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(`/api/cases/${caseNo}`);
        setData(res.data);
      } catch (err) {
        setError("Unable to fetch case details");
        console.error("Case fetch error:", err);
      }
    }

    load();
  }, [caseNo]);

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 space-y-4">

      {/* Case Header */}
      <h1 className="text-3xl font-bold">{data.caseNo}</h1>

      {/* Basic Case Info */}
      <div className="text-gray-800 space-y-1">
        <p><strong>Status:</strong> {data.presentStatus}</p>
        <p><strong>Court:</strong> {data.court}</p>
        <p><strong>Case Type:</strong> {data.caseType}</p>
        <p><strong>Bench:</strong> {data.bench || "N/A"}</p>
        <p><strong>Date of Filing:</strong> {data.dateOfFiling?.slice(0, 10) || "N/A"}</p>
      </div>

      {/* Applicants */}
      <div>
        <h2 className="font-semibold text-xl mb-1">Applicants</h2>
        <p>{data.applicants?.join(", ") || "N/A"}</p>
      </div>

      {/* Respondents */}
      <div>
        <h2 className="font-semibold text-xl mb-1">Respondents</h2>
        <p>{data.respondents?.join(", ") || "N/A"}</p>
      </div>

      {/* Main Prayer */}
      <div>
        <h2 className="font-semibold text-xl mb-1">Main Prayer</h2>
        <p>{data.mainPrayer || "N/A"}</p>
      </div>

    </div>
  );
}
