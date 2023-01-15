import React from 'react';

const ItemsofList = (props) => {
	return (
		<>
			{/* //* map method is also know as looping through the array */}
			{props.itemsofList.map((item, index) => {
				return (
					//* here we will use a {key} when output a list using a map method
					<div key={index} className="row px-2 g-0">
						<div className="col-12 col-sm-6 bg-primary border border-secondary d-flex justify-content-center">
							{item}
						</div>
						<div className="col-12 col-sm-6 ">
							<button
								className="border rounded-5 btn btn-primary"
								//* callback function is a function that is having a function in its parameter
								onClick={() => props.delKey(item)}
							>
								-
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ItemsofList;
