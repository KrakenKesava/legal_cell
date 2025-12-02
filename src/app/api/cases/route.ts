import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Case from "@/models/Case";

export async function GET() {
  try {
    await connectDB();

    const allCases = await Case.find().lean();
    console.log("Fetched cases:", allCases.length);
    return NextResponse.json(allCases);
  } catch (err) {
    console.error("GET /api/cases ERROR:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { caseNo, updates } = body;

    if (!caseNo) {
      return NextResponse.json(
        { error: "caseNo is required" },
        { status: 400 }
      );
    }

    // Find & update
    const updatedCase = await Case.findOneAndUpdate(
      { caseNo: caseNo },
      updates,
      { new: true }
    );

    if (!updatedCase) {
      return NextResponse.json(
        { error: "Case not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCase);
  } catch (err) {
    console.error("PUT /api/cases ERROR:", err);
    return NextResponse.json(
      { error: "Failed to update case" },
      { status: 500 }
    );
  }
}