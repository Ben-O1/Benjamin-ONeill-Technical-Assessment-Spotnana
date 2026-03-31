// Component to display AI responses
import React from 'react';

const ResponseDisplay = ({ response, history }) => {
  return (
    <div className="response-display">
      {response && (
        <div className="current-response">
          <h3>Latest Response:</h3>
          <p>{response}</p>
        </div>
      )}
      {history.length > 0 && (
        <div className="history">
          <h3>Chat History:</h3>
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <strong>Prompt:</strong> {item.prompt}
              <br />
              <strong>Response:</strong> {item.response}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
