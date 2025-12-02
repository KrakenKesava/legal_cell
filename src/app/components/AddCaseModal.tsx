"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AddCaseModal({ onClose, onSaved }: any) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    caseType: "",
    caseNo: "",
    year: "",
    court: "",
    bench: "",
    dateOfFiling: "",
    applicants: [],
    respondents: [],
    advocateForApplicant: "",
    advocateForRespondents: [],
    mainPrayer: "",

    // Interim
    InterimApplicationNo: "",
    dateOfInterimApplication: "",
    interimOrder: "",
    dateOfInterimOrder: "",
    counterAffidavitFiled: "no",
    dateOfFilingCA: "",
    rejoinder: "",
    dateOfRejoinder: "",
    additionalAffidavit: "",
    dateOfAdditionalAffidavit: "",

    // History
    dateOfHearing: "",
    nextDateOfHearing: "",
    numberOfHearingsHeld: "",
    presentStatus: "Pending",
    remarks: "",
    finalOrder: "",

    // Decisions
    decisionOfCourt: "none",
    departmentDecision: "none",
    appealFiled: "no",
  });

  const update = (key: string, value: any) => {
    setForm({ ...form, [key]: value });
  };

  const save = async () => {
    try {
      setLoading(true);
      await axios.post("/api/cases", form);
      onSaved();
    } catch (err) {
      console.error(err);
      alert("Failed to create case");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add New Case</DialogTitle>
        </DialogHeader>

        <div className="space-y-10">

          {/* ==================== BASIC DETAILS ==================== */}
          <section className="space-y-4">
            <h2 className="font-bold text-xl">Basic Case Details</h2>

            <div>
              <label className="font-medium">Case Type</label>
              <Select value={form.caseType} onValueChange={(v) => update("caseType", v)}>
                <SelectTrigger><SelectValue placeholder="Select Case Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="AO">AO</SelectItem>
                  <SelectItem value="WP">WP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-medium">Case Number (AO/123)</label>
              <Input value={form.caseNo} onChange={(e) => update("caseNo", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Year</label>
              <Input type="number" value={form.year} onChange={(e) => update("year", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Court</label>
              <Select value={form.court} onValueChange={(v) => update("court", v)}>
                <SelectTrigger><SelectValue placeholder="Select Court" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="CAT">CAT</SelectItem>
                  <SelectItem value="HC">HC</SelectItem>
                  <SelectItem value="CCC">CCC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-medium">Bench</label>
              <Input value={form.bench} onChange={(e) => update("bench", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Date of Filing</label>
              <Input type="date" value={form.dateOfFiling} onChange={(e) => update("dateOfFiling", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Applicants (comma separated)</label>
              <Input value={form.applicants.join(", ")} onChange={(e) => update("applicants", e.target.value.split(",").map(s => s.trim()))} />
            </div>

            <div>
              <label className="font-medium">Respondents (comma separated)</label>
              <Input value={form.respondents.join(", ")} onChange={(e) => update("respondents", e.target.value.split(",").map(s => s.trim()))} />
            </div>

            <div>
              <label className="font-medium">Advocate for Applicant</label>
              <Input value={form.advocateForApplicant} onChange={(e) => update("advocateForApplicant", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Advocates for Respondents</label>
              <Input value={form.advocateForRespondents.join(", ")} onChange={(e) => update("advocateForRespondents", e.target.value.split(",").map(s => s.trim()))} />
            </div>

            <div>
              <label className="font-medium">Main Prayer</label>
              <Textarea value={form.mainPrayer} onChange={(e) => update("mainPrayer", e.target.value)} />
            </div>
          </section>

          {/* ==================== INTERIM DETAILS ==================== */}
          <section className="space-y-4">
            <h2 className="font-bold text-xl">Interim Details</h2>

            <div>
              <label className="font-medium">Interim Application No</label>
              <Input value={form.InterimApplicationNo} onChange={(e) => update("InterimApplicationNo", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Date of Interim Application</label>
              <Input type="date" value={form.dateOfInterimApplication} onChange={(e) => update("dateOfInterimApplication", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Interim Order</label>
              <Textarea value={form.interimOrder} onChange={(e) => update("interimOrder", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Date of Interim Order</label>
              <Input type="date" value={form.dateOfInterimOrder} onChange={(e) => update("dateOfInterimOrder", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Counter Affidavit Filed?</label>
              <Select value={form.counterAffidavitFiled} onValueChange={(v) => update("counterAffidavitFiled", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-medium">Date of Filing Counter Affidavit</label>
              <Input type="date" value={form.dateOfFilingCA} onChange={(e) => update("dateOfFilingCA", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Rejoinder</label>
              <Textarea value={form.rejoinder} onChange={(e) => update("rejoinder", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Date of Rejoinder</label>
              <Input type="date" value={form.dateOfRejoinder} onChange={(e) => update("dateOfRejoinder", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Additional Affidavit</label>
              <Textarea value={form.additionalAffidavit} onChange={(e) => update("additionalAffidavit", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Date of Additional Affidavit</label>
              <Input type="date" value={form.dateOfAdditionalAffidavit} onChange={(e) => update("dateOfAdditionalAffidavit", e.target.value)} />
            </div>
          </section>

          {/* ==================== CASE HISTORY ==================== */}
          <section className="space-y-4">
            <h2 className="font-bold text-xl">Case History</h2>

            <div>
              <label className="font-medium">Date of Hearing</label>
              <Input type="date" value={form.dateOfHearing} onChange={(e) => update("dateOfHearing", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Next Date of Hearing</label>
              <Input type="date" value={form.nextDateOfHearing} onChange={(e) => update("nextDateOfHearing", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Number of Hearings Held</label>
              <Input type="number" value={form.numberOfHearingsHeld} onChange={(e) => update("numberOfHearingsHeld", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Present Status</label>
              <Select value={form.presentStatus} onValueChange={(v) => update("presentStatus", v)}>
                <SelectTrigger><SelectValue placeholder="Select Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Disposed">Disposed</SelectItem>
                  <SelectItem value="Dismissed">Dismissed</SelectItem>
                  <SelectItem value="Impugned">Impugned</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-medium">Remarks</label>
              <Textarea value={form.remarks} onChange={(e) => update("remarks", e.target.value)} />
            </div>

            <div>
              <label className="font-medium">Final Order</label>
              <Textarea value={form.finalOrder} onChange={(e) => update("finalOrder", e.target.value)} />
            </div>
          </section>

          {/* ==================== DECISION SECTION ==================== */}
          <section className="space-y-4">
            <h2 className="font-bold text-xl">Court & Department Decisions</h2>

            <div>
              <label className="font-medium">Decision of Court</label>
              <Select value={form.decisionOfCourt} onValueChange={(v) => update("decisionOfCourt", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Not Decided</SelectItem>
                  <SelectItem value="In favour of Dept">In favour of Dept</SelectItem>
                  <SelectItem value="Against the Dept">Against the Dept</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-medium">Department Decision</label>
              <Select value={form.departmentDecision} onValueChange={(v) => update("departmentDecision", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="File an appeal">File an appeal</SelectItem>
                  <SelectItem value="Comply with order">Comply with order</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-medium">Appeal Filed?</label>
              <Select value={form.appealFiled} onValueChange={(v) => update("appealFiled", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* ==================== FOOTER ==================== */}
          <div className="flex justify-between pt-4">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button onClick={save} disabled={loading}>
              {loading ? "Saving..." : "Create Case"}
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
