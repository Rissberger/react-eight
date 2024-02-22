import React, { useState } from 'react';

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

function EightBall() {
  const initialColor = "black";
  const initialMessage = "Think of a Question";
  const [message, setMessage] = useState(initialMessage);
  const [color, setColor] = useState(initialColor);
  const [counts, setCounts] = useState({ green: 0, goldenrod: 0, red: 0, black: 1 });

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIdx];
    setMessage(msg);
    setColor(color);
    setCounts(counts => ({ ...counts, [color]: counts[color] + 1, black: counts['black'] - 1 }));
  };

  const handleReset = () => {
    setMessage(initialMessage);
    setColor(initialColor);
    setCounts(counts => ({ ...counts, black: counts.black + 1 }));
  };

  return (
    <div>
      <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color, color: color === 'goldenrod' ? 'black' : 'white' }}>
        <b>{message}</b>
      </div>
      <button onClick={handleReset}>Reset</button>
      <div>
        <p>Green: {counts.green}</p>
        <p>Goldenrod: {counts.goldenrod}</p>
        <p>Red: {counts.red}</p>
        <p>Black: {counts.black}</p>
      </div>
    </div>
  );
}

export default EightBall;
