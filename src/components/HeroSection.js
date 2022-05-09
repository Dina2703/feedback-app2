import PropTypes from "prop-types";

function HeroSection({ name, age, bool }) {
  const commentStyle = {
    color: "green",
    fontStyle: "italic",
    fontWeight: 600,
  };
  const title = "Hello world";
  const comments = [
    { id: 1, text: " comment one" },
    { id: 2, text: " comment two" },
    { id: 3, text: " comment three" },
  ];
  return (
    <div>
      <h4
        style={{
          backgroundColor: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          width: "300px",
        }}
      >
        {title.toUpperCase()}
      </h4>
      <h2>Comments ({comments.length})</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} style={commentStyle}>
            {comment.text}
          </li>
        ))}
      </ul>
      <p>{{ bool } && `In 5 years {name} gonna be {age + 5} years old`}</p>
    </div>
  );
}

HeroSection.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default HeroSection;
