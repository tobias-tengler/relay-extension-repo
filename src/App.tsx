import { graphql } from "react-relay";

const query = graphql`
  query App_Query {
    field
  }
`;

function App() {
  return <div>Hello world</div>;
}

export default App;
