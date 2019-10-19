import React from 'react';
import { compose } from 'redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lookupStart } from '../redux/look-up/look-up.reducer.js';
import { Field, reduxForm } from 'redux-form';

const WordInputSection = styled.section`
  padding: 4px;
  background: papayawhip;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justifyContent: 'space-between';
  min-width: 360px;
  max-width: 1000px;
  margin: 20px auto;

  form {
  	display: flex;
	  label {
	  	margin: 4px;
	  	min-width: 100px;
	  }

	  input {
	  	margin: 4px;
	  	display: flex;
	  	flex-grow: 1;
	  	min-width: 100px;
	  }

	  button {
	  	margin: 4px;
	  	min-width: 80px;
	  }
  }
`;

export const WordInput = ({ handleSubmit, onSubmit}) => {
	console.log('hosofosfsfsf');
	return (
		<WordInputSection>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Perso-Arabic word:</label>
				<Field name="word" component="input" type="text"/>
				<button type="submit">Convert to desphilic</button>
			</form>
		</WordInputSection>
	);
};

export const mapDispatchToProps = dispatch => ({
	onSubmit: ({ word }) => dispatch(lookupStart(word)),
});

const mapStateToProps = state => ({
	state,
});

WordInput.propTypes = {
	state: PropTypes.object,
	startWordLookup: PropTypes.func,
};

WordInput.defautlProps = {
	state: {},
	handleSubmit: () => {},
};

export const WordInputComponent = compose(
	reduxForm({ form: 'wordInput'}),
	connect(mapStateToProps, mapDispatchToProps),
)(WordInput);

export default WordInputComponent;
