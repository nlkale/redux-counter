import ReactDOM from "react-dom";

//import Styles
import "./index.css";

//import components
import Counter from "./Components/Counter/Counter";

//import store
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return(
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));