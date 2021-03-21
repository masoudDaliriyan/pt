import { getType } from "./getType";

export function isString(value) {
  const type = getType(value);
  return type === "string";
}
