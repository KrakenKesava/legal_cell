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
