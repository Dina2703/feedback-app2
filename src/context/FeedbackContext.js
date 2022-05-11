import { createContext, useState } from "react";
import feedbackData from "../feedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //Global states, that we pass down through Context API
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //handleAdd feedback function
  const handleAdd = (newFeedback) => {
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  //Set item to be updated
  const handleEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //update feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  //handleDelete function
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleDelete,
        handleAdd,
        handleEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
