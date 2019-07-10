import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lookupRequest } from '../redux/look-up/look-up.reducer.js';

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
`;

let word;
const onTextChange = evt => {word = evt.target.value};


const WordInput = ({ lookupWord, state }) =>(
	<WordInputSection>
		{JSON.stringify(state)}
		<label>Perso-Arabic word:</label>
		<input type="text" onChange={onTextChange}></input>
		<button onClick={lookupWord}>Convert to desphilic</button> 
	</WordInputSection>
);

const mapDispatchToProps = dispatch => ({
	lookupWord: () => dispatch(lookupRequest(word)),
});

const mapStateToProps = state => ({
	state,
});

WordInput.propTypes = {
	lookupWord: PropTypes.func,
};

export const WordInputComponent = connect(mapStateToProps, mapDispatchToProps)(WordInput);
