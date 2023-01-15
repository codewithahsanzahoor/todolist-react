import { useState } from 'react';
import './App.css';
import ItemsofList from './components/ItemsofList';
import TextEnter from './components/TextEnter';

function App() {
	const [inputList, setInputList] = useState('');
	const [itemsofList, setItemsofList] = useState([]);

	const itemEvent = (e) => {
		setInputList(e.target.value);
	};

	const changeListofItems = () => {
		setItemsofList([...itemsofList, inputList]);
		setInputList('');
	};

	const delKey = (item) => {
		//* as filter method return a array with given condition applied on it
		let newArr = itemsofList.filter((items) => items !== item);
		setItemsofList(newArr);
	};

	return (
		<>
			<div>
				<div className="mainDiv d-flex justify-content-center align-items-center vh-100">
					<div className="centerDiv rounded-5 h-75 w-50">
						<div className="heading">
							<h1 className="my-4 d-flex justify-content-center">ToDo LisT</h1>
						</div>

						{/* //* text that the user enters */}
						<TextEnter
							onChange={itemEvent}
							setInputList={setInputList}
							onClick={changeListofItems}
							value={inputList}
						/>

						{/* //* here i am displaying my items that are stored */}
						<ItemsofList itemsofList={itemsofList} delKey={delKey} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
