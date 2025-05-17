import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const analyzeSentiment = async () => {
    const response = await fetch('http://localhost:3001/analyze-sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await response.json();
    setSentiment(data.sentiment);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Investment Sentiment Analyzer</h1>
      <textarea rows="4" cols="50" onChange={e => setText(e.target.value)} />
      <br />
      <button onClick={analyzeSentiment}>Analyze</button>
      {sentiment && <p>Sentiment: {sentiment}</p>}
    </div>
  );
}

export default App;
