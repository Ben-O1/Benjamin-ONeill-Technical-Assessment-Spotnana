// Component for user input prompts
import React, { useState } from 'react';

const PromptInput = ({ onSubmit, loading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="prompt-input">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        disabled={loading}
        rows={4}
      />
      <button type="submit" disabled={loading || !prompt.trim()}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default PromptInput;
