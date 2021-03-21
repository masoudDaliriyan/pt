export function getType(value) {
  return {}.toString
    .call(value)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
