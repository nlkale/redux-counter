import "./Counter.css";

const Counter = () => {
	return(
		<div className="counter">
			<div className="container">
				<div className="row">
					<div className="col center">
						<button type="button" className="btn btn-success">Plus</button>
						<span className="output">0</span>
						<button type="button" className="btn btn-warning">Minus</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Counter;