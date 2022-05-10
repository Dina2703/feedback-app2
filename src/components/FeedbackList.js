import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <h2>No Feedback Yet</h2>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
export default FeedbackList;
