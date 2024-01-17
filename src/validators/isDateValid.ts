import { ValidateResult } from "react-hook-form";

export default function isDateValid(value: string): ValidateResult {
  if (value && isNaN(new Date(value).getTime())) return `Invalid date`;
}
