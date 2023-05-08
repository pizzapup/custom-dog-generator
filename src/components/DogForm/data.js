export const initialValues = {
  name: 'fido',
  eyes: 'squinty',
  body: 'medium',
  nose: 'long',
  mouth: 'smile',
  bodyColor: '#c7875b',
  bodyColorName: 'Antique Brass',
  eyeColor: '#2b9145',
  eyeColorName: 'Sea Green',
}

export const stepFields = {
  1: {
    name: 'body',
    values: [
      { value: 'regular', type: 'radio' },
      { value: 'medium', type: 'radio' },
      { value: 'chonky', type: 'radio' },
    ],
  },
  2: {
    name: 'eyes',
    values: [
      { value: 'squinty', type: 'radio' },
      { value: 'closed', type: 'radio' },
      { value: 'round', type: 'radio' },
    ],
  },
  3: {
    name: 'nose',
    values: [
      { value: 'long', type: 'radio' },
      { value: 'button', type: 'radio' },
      { value: 'heart', type: 'radio' },
    ],
  },
  4: {
    name: 'mouth',
    values: [
      { value: 'smile', type: 'radio' },
      { value: 'straight', type: 'radio' },
      { value: 'tongue', type: 'radio' },
    ],
  },
}
export const steps = {
  body: {
    regular: { value: 'regular', description: 'standard, average build' },
    medium: {
      value: 'medium',
      description: 'maybe a lil on the heavier side but perfectly healthy',
    },
    chonky: {
      value: 'chonky',
      description: 'should probably cut back on the table scraps',
    },
  },
  eyes: {
    squinty: {
      value: 'squinty',
      description: 'possibly allergies... could also be judging you',
    },
    closed: {
      value: 'closed',
      description: 'so precious',
    },
    round: {
      value: 'round',
      description: 'loves to stare',
    },
  },
  nose: {
    long: {
      value: 'long',
      description: 'love it',
    },
    button: {
      value: 'button',
      description: 'adorable',
    },
    heart: {
      value: 'heart',
      description: 'so sweet',
    },
  },
  mouth: {
    smile: {
      value: 'smile',
      description: "don't be fooled",
    },
    straight: {
      value: 'straight',
      description: 'definitely judging you',
    },
    tongue: {
      value: 'tongue',
      description: 'dingus',
    },
  },
}
export const colorVariants = {
  body: {
    black: { value: 'black', code: '#232323' },
    blue: { value: 'blue', code: '#41414b' },
    chocolate: { value: 'chocolate', code: '#462c1d' },
    champagne: { value: 'champagne', code: '#7b6d64' },
    red: { value: 'red', code: '#794a2e' },
    fawn: { value: 'fawn', code: '#e6c693' },
    white: { value: 'white', code: '#ede7e7' },
  },
  eyes: {
    blue: { value: 'blue', code: '#8ac9e3' },
    green: { value: 'green', code: '#2b9145' },
    amber: { value: 'amber', code: '#d5973e' },
    brown: { value: 'brown', code: '#542d08' },
  },
}
export const colorData = {
  body: [
    { value: 'black', code: '#232323', text: '#ffffff' },
    { value: 'blue', code: '#41414b', text: '#ffffff' },
    { value: 'chocolate', code: '#462c1d', text: '#ffffff' },
    { value: 'champagne', code: '#7b6d64', text: '#ffffff' },
    { value: 'red', code: '#794a2e', text: '#ffffff' },
    { value: 'fawn', code: '#e6c693', text: '#000000' },
    { value: 'white', code: '#ede7e7', text: '#000000' },
  ],
  eyes: [
    { value: 'blue', code: '#4aaad3', text: '#ffffff' },
    { value: 'green', code: '#2b9145', text: '#ffffff' },
    { value: 'amber', code: '#d5973e', text: '#ffffff' },
    { value: 'brown', code: '#542d08', text: '#ffffff' },
  ],
}
