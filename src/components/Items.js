import React from 'react';

const Items = (props) => {
	return (
		<div>
			<div className="row px-2 g-0">
				<div className="col-12 col-sm-6 bg-primary border border-secondary d-flex justify-content-center">
					{props.inputList}
				</div>
				<div className="col-12 col-sm-6 ">
					<button className="border rounded-5 btn btn-primary">-</button>
				</div>
			</div>
		</div>
	);
};

export default Items;
