import React from 'react';
import Items from './Items';

const StoredList = (props) => {
	return (
		<div>
			<div className="container my-2">
				<Items inputList={props.inputList} />
			</div>
		</div>
	);
};

export default StoredList;
