import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //Global states, that we pass down through Context API
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // useEffect with an empty dependency array to fire it once, when the component loads.
  useEffect(() => {
    fetchFeedback();
  }, []);
  //Fetch data from http://localhost:8000/feedback - endpoint
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:8000/feedback?_sort=id&_order=desc`
    );
    const feedback = await response.json();
    setFeedback(feedback);
    setIsLoading(false);
  };

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
        isLoading,
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
