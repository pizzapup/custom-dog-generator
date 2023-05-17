export const defaultValues = {
  name: "fido",
  eyes: "squinty",
  body: "medium",
  nose: "long",
  mouth: "smile",
  bodyColor: "#c7875b",
  bodyColorName: "Antique Brass",
  eyeColor: "#2b9145",
  eyeColorName: "Sea Green",
  outlineColor: "dark",
  accessory: "none",
  favtoy: "cardboard",
  about: "will beg for snacks",
};
export const fields = {
  body: {
    types: ["regular", "medium", "chonky"],
    colors: [
      {name: "black", hex: "#232323"},
      {name: "blue", hex: "#41414b"},
      {name: "chocolate", hex: "#462c1d"},
      {name: "champagne", hex: "#7b6d64"},
      {name: "red", hex: "#794a2e"},
      {name: "fawn", hex: "#e6c693"},
      {name: "white", hex: "#ede7e7"},
      {name: "tan", hex: "#C7875B"},
    ],
    name: "Body",
  },
  eyes: {
    types: ["squinty", "closed", "round"],
    colors: [
      {name: "blue", hex: "#8ac9e3"},
      {name: "green", hex: "#2b9145"},
      {name: "amber", hex: "#d5973e"},
      {name: "brown", hex: "#542d08"},
    ],
    name: "Eyes",
  },
  nose: {types: ["long", "button", "heart"], name: "Nose"},
  mouth: {types: ["smile", "straight", "tongue"], name: "Mouth"},
};
export const stepFields = {
  1: {
    name: "body",
    values: [
      {value: "regular", type: "radio"},
      {value: "medium", type: "radio"},
      {value: "chonky", type: "radio"},
    ],
  },
  2: {
    name: "eyes",
    values: [
      {value: "squinty", type: "radio"},
      {value: "closed", type: "radio"},
      {value: "round", type: "radio"},
    ],
  },
  3: {
    name: "nose",
    values: [
      {value: "long", type: "radio"},
      {value: "button", type: "radio"},
      {value: "heart", type: "radio"},
    ],
  },
  4: {
    name: "mouth",
    values: [
      {value: "smile", type: "radio"},
      {value: "straight", type: "radio"},
      {value: "tongue", type: "radio"},
    ],
  },
};
export const steps = {
  body: {
    regular: {value: "regular", description: "standard, average build"},
    medium: {
      value: "medium",
      description: "maybe a lil on the heavier side but perfectly healthy",
    },
    chonky: {
      value: "chonky",
      description: "should probably cut back on the table scraps",
    },
  },
  eyes: {
    squinty: {
      value: "squinty",
      description: "possibly allergies... could also be judging you",
    },
    closed: {
      value: "closed",
      description: "so precious",
    },
    round: {
      value: "round",
      description: "loves to stare",
    },
  },
  nose: {
    long: {
      value: "long",
      description: "love it",
    },
    button: {
      value: "button",
      description: "adorable",
    },
    heart: {
      value: "heart",
      description: "so sweet",
    },
  },
  mouth: {
    smile: {
      value: "smile",
      description: "don't be fooled",
    },
    straight: {
      value: "straight",
      description: "definitely judging you",
    },
    tongue: {
      value: "tongue",
      description: "dingus",
    },
  },
};
