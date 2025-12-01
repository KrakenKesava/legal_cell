import { connectDB } from "@/lib/mongodb";
import Case from "@/models/Case";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();

    // Convert AO-123 → AO/123
    const dbCaseNo = params.caseNo.replace("-", "/");

    const caseData = await Case.findOne({ caseNo: dbCaseNo });

    if (!caseData) {
      return NextResponse.json(
        { error: "Case not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(caseData);
  } catch (err) {
    console.error("GET /api/cases/[caseNo] ERROR:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
