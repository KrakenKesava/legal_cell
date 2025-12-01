"use client";
import { CaseType } from "@/types/case";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import CaseDetailsModal from "./CaseDetailsModal";

export default function CasesTable({ rows }: { rows: CaseType[] }) {
  const [selectedCase, setSelectedCase] = useState<CaseType | null>(null);

  return (
    <>
      {/* Modal */}
      <CaseDetailsModal
        open={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        data={selectedCase}
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date Filing</TableHead>
            <TableHead>Case No</TableHead>
            <TableHead>Applicant</TableHead>
            <TableHead>Court</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((c: CaseType, idx: number) => (
            <TableRow key={idx}>
              <TableCell>{c.dateOfFiling?.slice(0, 10)}</TableCell>
              <TableCell>{c.caseNo}</TableCell>
              <TableCell>{c.applicants[0]}</TableCell>
              <TableCell>{c.court}</TableCell>

              <TableCell>
                <Badge
                  variant={
                    c.presentStatus === "Pending" ? "secondary" : "default"
                  }
                >
                  {c.presentStatus}
                </Badge>
              </TableCell>

              <TableCell className="flex gap-2 justify-center">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedCase(c)}
                >
                  View
                </Button>

                <Button size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
