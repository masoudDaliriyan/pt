import { getType } from "./getType";

export function isNumber(value) {
  const type = getType(value);

  return type === "number";
}
