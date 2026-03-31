// Main application component
import React from 'react';
import PromptInput from './components/PromptInput.jsx';
import ResponseDisplay from './components/ResponseDisplay.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import { useAI } from './hooks/UseAI.js';

function App() {
  const { loading, error, response, history, submitPrompt, clearHistory } = useAI();

  return (
    <div className="app">
      <h1>AI Chat App</h1>
      <PromptInput onSubmit={submitPrompt} loading={loading} />
      {loading && <LoadingSpinner />}
      <ErrorMessage error={error} />
      <ResponseDisplay response={response} history={history} />
      <button onClick={clearHistory} className="clear-button">Clear History</button>
    </div>
  );
}

export default App;
