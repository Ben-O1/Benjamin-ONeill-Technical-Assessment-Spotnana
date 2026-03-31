// Custom hook for AI functionality
import { useState } from 'react';
import { fetchAIResponse } from '../services/api.js';

export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  const submitPrompt = async (prompt) => {
    setLoading(true);
    setError(null);
    try {
      const aiResponse = await fetchAIResponse(prompt);
      setResponse(aiResponse);
      setHistory(prev => [...prev, { prompt, response: aiResponse }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    setResponse('');
    setError(null);
  };

  return {
    loading,
    error,
    response,
    history,
    submitPrompt,
    clearHistory,
  };
};
