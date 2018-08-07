import React from 'react';
import style from './css/Title.css';

const Title = props => (
		<h1>{props.title} (<span>{props.number}</span>)</h1>
);

export default Title;