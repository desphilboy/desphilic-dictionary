import React from 'react';
import styled from 'styled-components';

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

const onTextChange = evt => word = evt.target.value;

const lookup = () => fetch(`http://localhost:9090/perso-arabic/${word}`, {
  method: 'GET'
}).then(res => console.log(res.data));

export const WordInputStyle = () => 
	<WordInputSection>
		<label>Perso-Arabic word:</label>
		<input type="text" onChange={onTextChange}></input>
		<button onClick={lookup}>Convert to desphilic</button> 
	</WordInputSection>;
