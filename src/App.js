import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import feedbackData from "./feedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <div className="App">
      <Header />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
