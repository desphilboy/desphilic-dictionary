import React from "react";
import { Provider } from 'react-redux';
import { store } from '../redux';
import { WordInputComponent } from '../components/word-input.jsx';

export const App = () =>
	<Provider store={store}>
		<div>
			<WordInputComponent/>
		</div>
	</Provider>;
