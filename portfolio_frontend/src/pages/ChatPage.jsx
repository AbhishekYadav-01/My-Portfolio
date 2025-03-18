import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { motion } from 'framer-motion';
import '../styles.css';

const ChatPage = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false); // Track if answer is being spoken
  const { transcript, finalTranscript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  // Handle voice answer
  const speakAnswer = (text) => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel(); // Stop any ongoing speech
    }
    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.onstart = () => setIsSpeaking(true); // Set speaking state to true
    utteranceRef.current.onend = () => setIsSpeaking(false); // Set speaking state to false
    synthRef.current.speak(utteranceRef.current);
  };

  // Stop speaking
  const stopSpeaking = () => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  // Submit handler (accepts a question parameter)
  const handleSubmit = async (questionToSubmit) => {
    if (!questionToSubmit.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/chat/', { 
        question: questionToSubmit 
      });
      setAnswer(response.data.answer);
      speakAnswer(response.data.answer); // Speak the answer
      setChatHistory((prev) => [...prev, { 
        question: questionToSubmit, 
        answer: response.data.answer 
      }]);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Sorry, I couldn't process your question.");
    } finally {
      setIsLoading(false);
      resetTranscript(); // Clear the transcript after submission
    }
  };

  // Voice input handler
  const handleVoiceInput = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript(); // Clear previous transcript
      SpeechRecognition.startListening();
    }
  };

  // Auto-submit when voice input stops AND finalTranscript is available
  useEffect(() => {
    if (!listening && finalTranscript.trim()) {
      // Update the input field for visual feedback
      setQuery(finalTranscript);
      // Submit the finalized voice input directly
      handleSubmit(finalTranscript);
    }
  }, [listening, finalTranscript]);

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (synthRef.current.speaking) {
        synthRef.current.cancel();
      }
    };
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <div className="error-message">Browser not supported. Use Chrome/Firefox.</div>;
  }

  return (
    <div className="chat-page">
      <div className="chat-container">
        <h1 className="chat-title">TALK TO ME</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(query); // Submit typed query
        }} className="chat-form">
          <div className="input-section">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="chat-input"
            />
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isLoading}
              className="voice-button"
            >
              {listening ? 'Stop Listening' : 'Start Voice Input'}
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? 'Processing...' : 'Ask'}
          </button>
        </form>

        {isSpeaking && (
          <button
            type="button"
            onClick={stopSpeaking}
            className="stop-speaking-button"
          >
            Stop Speaking
          </button>
        )}

        {answer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="answer-section"
          >
            <h2 className="answer-title">Answer:</h2>
            <p className="answer-text">{answer}</p>
          </motion.div>
        )}

        <div className="chat-history">
          <div className="history-header">
            <h2 className="history-title">Chat History</h2>
            <button
              type="button"
              onClick={() => setChatHistory([])}
              disabled={chatHistory.length === 0}
              className="clear-button"
            >
              Clear History
            </button>
          </div>

          {chatHistory.map((chat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="chat-item"
            >
              <p className="chat-question"><strong>You:</strong> {chat.question}</p>
              <p className="chat-answer"><strong>Me:</strong> {chat.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;