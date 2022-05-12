import { createContext, useState, useEffect } from "react";
import axios from "axios";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //Global states, that we pass down through Context API
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //FETCH DATA WITH FETCH API
  // useEffect with an empty dependency array to fire it once, when the component loads.
  // useEffect(() => {
  //   fetchFeedback();
  // }, []);
  // //Fetch data from http://localhost:8000/feedback - endpoint
  // const fetchFeedback = async () => {
  //   const response = await fetch(`/feedback?_sort=id&_order=desc`);
  //   const feedback = await response.json();
  //   setFeedback(feedback);
  //   setIsLoading(false);
  // };

  //FETCH DATA WITH AXIOS
  useEffect(() => {
    axios.get("/feedback?_sort=id&_order=desc").then((res) => {
      setFeedback(res.data);
      setIsLoading(false);
    });
  }, []);

  //handleAdd feedback function. WITH FETCH API
  // const handleAdd = async (newFeedback) => {
  //   //make a POST request to the backend to add to the backend database
  //   const response = await fetch("/feedback", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newFeedback),
  //   });
  //   const data = await response.json();

  //   // console.log(newFeedback);
  //   //add to the front-end, for UI, since state is responsive for what to show in UI.
  //   setFeedback([data, ...feedback]);
  // };

  //handleAdd feedback function. WITH AXIOS
  const handleAdd = (newFeedback) => {
    axios.post("/feedback", newFeedback).then((res) => {
      setFeedback([res.data, ...feedback]);
    });
  };

  //Set item to be updated
  const handleEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //update feedback item WITH FETCH API
  // const updateFeedback = async (id, updatedItem) => {
  //   //make a PUT request to the backend database.
  //   const response = await fetch(`/feedback/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedItem),
  //   });
  //   const data = await response.json();
  //   setFeedback(
  //     feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
  //   );
  // };

  //update feedback item WITH AXIOS
  const updateFeedback = (id, updatedItem) => {
    axios.put(`/feedback/${id}`, updatedItem).then((res) => {
      setFeedback(
        feedback.map((item) =>
          item.id === id ? { ...item, ...res.data } : item
        )
      );
    });
  };

  //handleDelete function with FETCH API
  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     //make DELETE request to the backend, to delete from database
  //     await fetch(`/feedback/${id}`, {
  //       method: "DELETE",
  //     });
  //     //code for UI, to remove the deleted item from the list
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  //handleDelete function with AXIOS
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios.delete(`/feedback/${id}`).then(() => {
        setFeedback(feedback.filter((item) => item.id !== id));
      });
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
