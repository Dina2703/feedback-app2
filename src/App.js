import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./feedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
