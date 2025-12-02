"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function EditCaseModal({ caseData, onClose, onSaved }: any) {
  
  const [form, setForm] = useState({ ...caseData });
  const [loading, setLoading] = useState(false);

  const updateField = (key: string, value: any) => {
    setForm({ ...form, [key]: value });
  };

const saveChanges = async () => {
  try {
    setLoading(true);

    await axios.put("/api/cases", {
      caseNo: caseData.caseNo,
      updates: {
        applicants: form.applicants,
        respondents: form.respondents,
        court: form.court,
        bench: form.bench,
        mainPrayer: form.mainPrayer
      }
    });

    onSaved();
  } catch (err) {
    console.error("Update failed:", err);
    alert("Failed to update case");
  } finally {
    setLoading(false);
  }
};


  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
        
        <DialogHeader>
          <DialogTitle>Edit Case — {caseData.caseNo}</DialogTitle>
        </DialogHeader>

        {/* Editable fields */}
        <div className="space-y-4 mt-4">

          <div>
            <label className="font-semibold">Applicants</label>
            <Input
              value={form.applicants?.join(", ")}
              onChange={(e) => updateField("applicants", e.target.value.split(",").map(s => s.trim()))}
            />
          </div>

          <div>
            <label className="font-semibold">Respondents</label>
            <Input
              value={form.respondents?.join(", ")}
              onChange={(e) => updateField("respondents", e.target.value.split(",").map(s => s.trim()))}
            />
          </div>

          <div>
            <label className="font-semibold">Court</label>
            <Input
              value={form.court}
              onChange={(e) => updateField("court", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Bench</label>
            <Input
              value={form.bench}
              onChange={(e) => updateField("bench", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Main Prayer</label>
            <Textarea
              value={form.mainPrayer}
              onChange={(e) => updateField("mainPrayer", e.target.value)}
            />
          </div>

        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-between mt-6">

          <Button 
            variant="secondary" 
            onClick={onClose}
          >
            Discard Changes
          </Button>

          <Button 
            onClick={saveChanges}
            disabled={loading}
          >
            {loading ? "Saving..." : "Confirm Changes"}
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  );
}
