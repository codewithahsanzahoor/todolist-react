import React from 'react';

const TextEnter = (props) => {
	return (
		<div>
			<div className="row g-0">
				<div className="col-12 col-sm-6 ">
					<input
						className="form-control w-100 text-center "
						type="text"
						placeholder="Add"
						aria-label="default input example"
						onChange={props.onChange}
						value={props.value}
					></input>
				</div>
				<div className="col-12 col-sm-6">
					<button className="btn btn-primary" onClick={props.onClick}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default TextEnter;
