import React from 'react';

export const Level1 = () => {
  return (
    <outerContainer>
      <innerContainer>
        <h1>Explanations</h1>
        <questionContainer>Fill in the blanks to complete the TypeScript code:
          <pre>
            {'let age: '}
            <input type="text" id="input1" />  {/* number */}
            {' = 25;\n\nfunction isAdult('}
            <input type="text" /> {/* ageToCheck :number */}
            {'): boolean {\n  return age >= 18;\n}'}
          </pre>
          <button type="submit">Submit</button>
        </questionContainer>
      </innerContainer>
    </outerContainer>
  );
};

// function levelOne() {
//   if (input1 === 'number') {
// }

// levelOne();