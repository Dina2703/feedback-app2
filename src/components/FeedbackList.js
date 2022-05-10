import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <h2>No Feedback Yet</h2>;
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default FeedbackList;
