// src/models/Case.js
import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema({
  caseType: { type: String, enum: ["AO", "WP"], required: true },

  caseNo: {
    type: String,
    required: true,
    unique: true,
    match: /^(AO|WP)\/\d+$/, // AO/123 format
  },

  year: Number,

  court: { type: String, enum: ["CAT", "HC", "CCC"], required: true },
  bench: String,

  dateOfFiling: Date,

  applicants: [String],
  advocateForApplicant: String,

  respondents: [String],
  advocateForRespondents: [String],

  mainPrayer: String,

  // ----------------------------
  // ✅ Finalized INTERIM SECTION
  // ----------------------------

  InterimApplicationNo: String,
  dateOfInterimApplication: Date,

  interimOrder: String,
  dateOfInterimOrder: Date,

  counterAffidavitFiled: { type: String, enum: ["yes", "no"] },

  dateOfFilingCA: Date,

  rejoinder: String,
  dateOfRejoinder: Date,

  additionalAffidavit: String,
  dateOfAdditionalAffidavit: Date,

  // ----------------------------
  // Case History Section
  // ----------------------------

  dateOfHearing: Date,
  nextDateOfHearing: Date,
  numberOfHearingsHeld: Number,

  presentStatus: {
    type: String,
    enum: ["Pending", "Disposed", "Dismissed", "Impugned"],
  },

  remarks: String,

  finalOrder: String,

  decisionOfCourt: {
    type: String,
    enum: ["In favour of Dept", "Against the Dept"],
  },

  departmentDecision: {
    type: String,
    enum: ["File an appeal", "Comply with order"],
  },

  appealFiled: { type: String, enum: ["yes", "no"], required: true },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Case || mongoose.model("Case", CaseSchema);
