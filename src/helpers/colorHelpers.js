import { GetColorName } from "./hexColorToName.ts";
function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + "," + +g + "," + +b + ")";
}

function percentage(p) {
  return parseInt(p * 100);
}
function roundRgb(rgb) {
  const r = Math.round(rgb[0]);
  const g = Math.round(rgb[1]);
  const b = Math.round(rgb[2]);
  const newRgb = [r, g, b];
  return newRgb;
}
function roundHsl(hsl) {
  const h = percentage(hsl[0]);
  const s = percentage(hsl[1]);
  const l = percentage(hsl[2]);
  const newHsl = [h, s, l];
  return newHsl;
}
const hslString = (hsl) => `(${hsl[0]}%), (${hsl[1]}%), (${hsl[2]}%)`;
const rgbString = (rgb) => `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
function getString(color, code) {
  const string = code === "rgb" ? rgbString(color) : hslString(color);
  return string;
}
function getNtc(hex) {
  const colorName = GetColorName(hex);
  return colorName;
}
function ntcHex(hex) {
  const colorName = GetColorName(hex);
  return colorName[0];
}
function ntcName(hex) {
  const colorName = GetColorName(hex);
  return colorName[1];
}
export {
  percentage,
  roundRgb,
  roundHsl,
  getNtc,
  getString,
  hexToRGB,
  ntcHex,
  ntcName,
};
