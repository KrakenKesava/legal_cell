import { connectDB } from "@/lib/mongodb";
import Case from "@/models/Case";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updated = await Case.findOneAndUpdate(
      { caseNo: params.caseNo },
      body,
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (err) {
    console.error("PUT /api/cases ERROR", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
