import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="green" />
      </button>
      <button className="edit" onClick={() => handleEdit(item)}>
        <FaEdit color="green" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
