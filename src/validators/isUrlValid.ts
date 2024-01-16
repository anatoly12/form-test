import { ValidateResult } from "react-hook-form";
const urlRegex = /^(http:\/\/|https:\/\/)[^\/]+(\.[^\/]+)+$/

export default function isUrlValid(value: string): ValidateResult {
    if (!urlRegex.test(value))  return `This url is invalid.`;
    
}