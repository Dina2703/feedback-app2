import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleAdd = (newFeedback) => {
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutLink />
                  <FeedbackForm handleAdd={handleAdd} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={handleDelete} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
