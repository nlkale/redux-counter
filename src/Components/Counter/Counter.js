import { connect } from "react-redux";
import { Plus, Minus, Multiple, Zero } from "../../Actions/CounterActions";


import "./Counter.css";


const Counter = ({counter, Plus, Minus, Zero, Multiple}) => {
	return(
			<div className="container">
				<div className="row">
					<div className="col center">
						<button type="button" className="btn btn-success" onClick={Plus}>+</button>
						<button type="button" className="btn btn-success" onClick={Multiple}>x</button>
						<span className="output">{counter}</span>
						<button type="button" className="btn btn-warning" onClick={Minus}>-</button>
						<button type="button" className="btn btn-success" onClick={Zero}>c</button>
					</div>
				</div>
			</div>
	)
};

const mapStateToProps = ({ CounterReducer }) => {
	const {counter} = CounterReducer;
	return {counter};
};

const mapDispatchToProps = {
	Plus, Minus, Zero, Multiple
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);