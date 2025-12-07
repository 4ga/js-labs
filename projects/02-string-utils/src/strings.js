export function capitalize(str) {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  str = str.trim();
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toCamelCase(str) {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  const words = str.trim().split(/\s+/);
  if (words.length <= 1) return words[0] ?? "";
  const [first, ...rest] = words;

  return [
    first.toLowerCase(),
    ...rest.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()),
  ].join("");
}

export function toSnakeCase(str) {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  const words = str.trim().split(/\s+/);
  if (words.length === 0) return "";
  return words.map((w) => w.toLowerCase()).join("_");
}

export function isEmpty(str) {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  return str.trim().length === 0;
}

export function trimExtraSpaces(str) {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  const words = str.trim().split(/\s+/);
  return words[0] ? words.join(" ") : "";
}
