<!-- Project documentation -->
# Benjamin-ONeill-Technical-Assessment-Spotnana
Technical assessment for front-end engineer for Spotnana

## AI Chat App

A lightweight React app that allows users to input prompts, submit them to an AI API (OpenAI), and display responses. Features include error handling, loading states, chat history, and a clear button.

### Features
- Prompt input with submit button
- Fetching from OpenAI API
- Dynamic response display
- Error handling and loading states
- Chat history (bonus)
- Clear button (bonus)

### Setup Instructions

1. **Clone The Repo**
   ``` From github clone the repo to your local machine
   https://github.com/Ben-O1/Benjamin-ONeill-Technical-Assessment-Spotnana.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

### API Configuration
The app uses OpenAI's API. The API key is configured in `src/config.js` importing it from the local .env file.

### Project Structure
- `src/app.jsx`: Main app component
- `src/components/`: Reusable UI components
- `src/hooks/`: Custom React hooks
- `src/services/`: API service functions
- `src/styles/`: CSS styles
- `src/utils/`: Utility functions
