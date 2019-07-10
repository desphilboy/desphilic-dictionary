import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from '../redux';
import { WordInputComponent } from '../components/word-input.jsx';

export const App = () =>
	<Provider store={store}>
		<BrowserRouter> 
		<div>
			<Route path="/" component={WordInputComponent}/>
		</div>
		</BrowserRouter>
	</Provider>;
