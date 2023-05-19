const Logo = () => {
  const logoData = [
    {letter: "P", colors: [`orange`, "blue"]},
    {letter: "I", colors: ["lightblue", "pink"]},
    {letter: "Z", colors: ["green", "red"]},
    {letter: "Z", colors: ["yellow", "lightblue"]},
    {letter: "A", colors: ["pink", "red"]},
    {letter: "P", colors: ["offwhite", "green"]},
    {letter: "U", colors: ["orange", "blue"]},
    {letter: "P", colors: ["lightblue", "pink"]},
  ];

  return (
    <>
      <div className="logo">
        {/* idea: add little dog image that pops up under one of the letters. reminds me of picassos hidden dog in Le Moulin de la Galette "maybe he just wasnt feeling the dog" */}
        {logoData.map((letter, index) => (
          <span
            key={index}
            data-title={letter.letter}
            style={{
              "--front": `var(--colors-${letter.colors[0]})`,
              "--back": `var(--colors-${letter.colors[1]})`,
            }}
          >
            {letter.letter}
          </span>
        ))}
      </div>
    </>
  );
};
export default Logo;
