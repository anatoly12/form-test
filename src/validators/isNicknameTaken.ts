import { ValidateResult } from "react-hook-form";

const takenNickNames = ['snoop', 'billy_123']
export default function isNicknameTaken(value: string): ValidateResult {
    if (takenNickNames.includes(value)) return `This nickname is already taken`;
}