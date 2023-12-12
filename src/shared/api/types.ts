export type StatusType = {
  Status: "SUCCEDED" | "FAILED";
};

export type LoginResponseType = {
  Surname: string;
  Firstname: string;
  Middlename: string;
  CarNumber: string | null;
  Violations: ViolationType[];
} & StatusType;

export type ViolationType = {
  IdViolation: number;
  Article: string;
  Paragraph: string;
};