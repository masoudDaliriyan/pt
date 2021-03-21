import { isString } from "../utils/isString";
const isPersianRegex = /^(([۰-۹])|([کگۀی،تثجحخدغيًٌٍَُپٰچژ‌ء-ةذ-عف-ٔ])|((،|؟|«|»|؛|٬))|((\.|:|\!|\-|\[|\]|\(|\)|\/))|(\s))+$/;

export function isPersian(text) {
  if (!isString(text)) {
    throw new TypeError("the input must be string");
  }

  return isPersianRegex.test(text);
}
