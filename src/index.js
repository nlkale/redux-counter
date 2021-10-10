import ReactDOM from "react-dom";

//import Styles
import "./index.css";

//import components
import Counter from "./Components/Counter/Counter"

const App = () => {
  return(
    <Counter/>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));