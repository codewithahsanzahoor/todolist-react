import { useState } from 'react';
import './App.css';
import StoredList from './components/StoredList';
import TextEnter from './components/TextEnter';

function App() {
	const [inputList, setInputList] = useState('buy Apple');

	const itemEvent = (e) => {
		setInputList(e.target.value);
	};

	return (
		<>
			<div>
				<div className="mainDiv d-flex justify-content-center align-items-center vh-100">
					<div className="centerDiv rounded-5 h-75 w-50">
						<div className="heading">
							<h1 className="my-4 d-flex justify-content-center">ToDo LisT</h1>
						</div>
						<TextEnter onChange={itemEvent} />
						<StoredList inputList={inputList} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
