import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const ChatPage = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Use a ref to track the transcript
  const transcriptRef = useRef(transcript);
  transcriptRef.current = transcript; // Update the ref whenever transcript changes

  // Debugging: Log transcript changes
  useEffect(() => {
    console.log("Transcript updated:", transcript);
  }, [transcript]);

  // Debugging: Log listening state changes
  useEffect(() => {
    console.log("Listening state changed:", listening);
  }, [listening]);

  // Submit the query when the listening stops and transcript is not empty
  useEffect(() => {
    if (!listening && transcriptRef.current.trim()) {
      console.log("Transcript updated after stopping:", transcriptRef.current); // Debug log
      setQuery(transcriptRef.current); // Set the query to the transcript
      handleSubmit({ preventDefault: () => {} }); // Simulate form submission
      resetTranscript(); // Reset the transcript
    }
  }, [listening]); // Only trigger when listening state changes

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!query.trim()) return; // Skip if query is empty or only whitespace

    setIsLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/chat/', { question: query });
      setAnswer(response.data.answer);
      setChatHistory([...chatHistory, { question: query, answer: response.data.answer }]);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("Sorry, I couldn't process your question.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (listening) {
      console.log("Stopping listening..."); // Debug log
      SpeechRecognition.stopListening();
    } else {
      console.log("Starting listening..."); // Debug log
      SpeechRecognition.startListening();
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone access granted");
    } catch (error) {
      console.error("Microphone access denied:", error);
    }
  };

  const clearChatHistory = () => {
    setChatHistory([]); // Clear the chat history
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition. Please use Chrome or Firefox.</div>;
  }

  return (
    <div className="chat-page">
      <h1>Chat with My Resume</h1>
      <button type="button" onClick={requestMicrophonePermission}>
        Allow Microphone Access
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything about my resume..."
          disabled={isLoading}
        />
        <button type="button" onClick={handleVoiceInput} disabled={isLoading}>
          {listening ? 'Stop Listening' : 'Start Voice Input'}
        </button>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Ask'}
        </button>
      </form>
      {answer && (
        <div className="answer">
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
      <div className="chat-history">
        <h2>Chat History</h2>
        <button type="button" onClick={clearChatHistory} disabled={chatHistory.length === 0}>
          Clear History
        </button>
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-item">
            <p><strong>You:</strong> {chat.question}</p>
            <p><strong>Assistant:</strong> {chat.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;