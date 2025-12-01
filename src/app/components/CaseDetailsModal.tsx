"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function CaseDetailsModal({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: any;
}) {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {data.caseNo}
          </DialogTitle>
          <DialogDescription>
            Full Case Details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">

          <div>
            <h3 className="font-semibold text-lg">Basic Information</h3>
            <p><strong>Case Type:</strong> {data.caseType}</p>
            <p><strong>Court:</strong> {data.court}</p>
            <p><strong>Bench:</strong> {data.bench}</p>
            <p><strong>Date of Filing:</strong> {data.dateOfFiling?.slice(0,10)}</p>
            <p><strong>Status:</strong> {data.presentStatus}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Applicants</h3>
            <p>{data.applicants?.join(", ")}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Respondents</h3>
            <p>{data.respondents?.join(", ")}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Main Prayer</h3>
            <p>{data.mainPrayer}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Interim Details</h3>
            <p><strong>IA No:</strong> {data.InterimApplicationNo}</p>
            <p><strong>Interim Order:</strong> {data.interimOrder}</p>
            <p><strong>Date of Interim Order:</strong> {data.dateOfInterimOrder?.slice(0,10)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">History</h3>
            <p><strong>Hearing Date:</strong> {data.dateOfHearing?.slice(0,10)}</p>
            <p><strong>Next Hearing:</strong> {data.nextDateOfHearing?.slice(0,10)}</p>
            <p><strong>Total Hearings:</strong> {data.numberOfHearingsHeld}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Final Order</h3>
            <p>{data.finalOrder || "Not Issued"}</p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
