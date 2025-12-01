export interface CaseType {
  caseType: string;
  caseNo: string;
  year: number;
  court: string;
  bench?: string;

  dateOfFiling?: string;

  applicants: string[];
  advocateForApplicant?: string;

  respondents: string[];
  advocateForRespondents: string[];

  mainPrayer?: string;

  InterimApplicationNo?: string;
  dateOfInterimApplication?: string;

  interimOrder?: string;
  dateOfInterimOrder?: string;

  counterAffidavitFiled?: "yes" | "no";
  dateOfFilingCA?: string;

  rejoinder?: string;
  dateOfRejoinder?: string;

  additionalAffidavit?: string;
  dateOfAdditionalAffidavit?: string;

  dateOfHearing?: string;
  nextDateOfHearing?: string;
  numberOfHearingsHeld?: number;

  presentStatus?: "Pending" | "Disposed" | "Dismissed" ;

  remarks?: string;

  finalOrder?: string;

  decisionOfCourt?: "In favour of Dept" | "Against the Dept";
  departmentDecision?: "File an appeal" | "Comply with order";

  appealFiled: "yes" | "no";

  createdAt?: string;
}
