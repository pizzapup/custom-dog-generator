import {GetColorName} from "./hexColorToName.ts";
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
function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length === 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length === 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  // return "hsl(" + h + "," + s + "%," + l + "%)";
  return [h, s, l];
}
function checkBrightness(l) {
  const isBrighter = l > 40 ? "#000000" : "#EDE7E7";
  return isBrighter;
}
function getBrightnessFromHex(hex) {
  const hsl = hexToHSL(hex);
  const answer = checkBrightness(hsl[2]);
  return answer;
}
export {
  checkBrightness,
  getBrightnessFromHex,
  hexToHSL,
  percentage,
  roundRgb,
  roundHsl,
  getNtc,
  getString,
  hexToRGB,
  ntcHex,
  ntcName,
};
