import { ValidateResult } from "react-hook-form";
import isNicknameTaken from "./isNicknameTaken";

export default function isNicknameValid(value: string): ValidateResult {
  if (value.match(/ /g)) return `Whitespace not allowed`;
  return isNicknameTaken(value);
}
