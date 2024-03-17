import { useState } from 'react';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = () => {};
  return (
    <>
      <div>
        <h1>Please leave feedback</h1>
        <button className="button" type="button" onClick={handleChange}>
          Good
        </button>
        <button type="button" onClick={handleChange}>
          Neutral
        </button>
        <button type="button" onClick={handleChange}>
          Bad
        </button>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </>
  );
}

export default Feedback;
