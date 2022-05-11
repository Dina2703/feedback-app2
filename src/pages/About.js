import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About page</h1>
        <p>
          React is designed around the concept of reusable components. You
          define small components and you put them together to form bigger
          components. All components small or big are reusable, even across
          different projects. The curly braces used for the button label are
          explained below
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
