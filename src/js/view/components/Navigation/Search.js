import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { rgba } from "polished";

const Container = styled.form`
	transition: padding 1s;
	padding: 14px 11px 11px;

	${props => props.opened && css`
		padding: 14px 15px 11px;
	`}
`;

const Input = styled.input`
	transition: padding 1s, color 1s ease -0.5s;
	border: 0;
	border-radius: 2px;
	outline: none;
	padding: 5px 10px;
	width: 100%;
	height: 33px;
	background: ${props => rgba(props.theme.colors.dark, 0.17)} url('./src/assets/img/Search.svg') no-repeat 5px 2px;
	color: ${props => rgba(props.theme.colors.light, 0)};
	cursor: text;

	&:placeholder {
		transition: color 1s ease -0.5s;
		font-size: 0.8667em;
		letter-spacing: 1;
		color: ${props => rgba(props.theme.colors.light, 0.52)};
	}

	${props => props.opened && css`
		transition: color 1s ease .5s;
		padding: 5px 10px 5px 35px;
		color: ${props => props.theme.colors.light};

		&:placeholder {
			transition: color 1s ease .5s;
			color: ${props => rgba(props.theme.colors.light, 0)};
		}
	`}
`;

class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			'value': ''
		}
	}

	handleClick(event) {
		if (!this.props.opened) {
			this.props.setData({
				'opened': true,
				'title': 'Close'
			}, () => {
				this.searchInput.focus();
			});
		}
	}

	handleChange(event) {
		const value = event.target.value;

		this.setState(prevState => ({
			...prevState,
			'value': value
		}));
	}

	render() {
		return <Container opened={this.props.opened} onClick={this.handleClick.bind(this)}> 
			<Input 
				type="text"
				placeholder={(this.props.opened ? this.props.placeholder : '')}
				opened={this.props.opened} 
				onChange={this.handleChange.bind(this)}
				value={this.state.value}
				autocomplete="off"
				autocorrect="off"
				disabled={(this.props.opened ? '' : 'disabled')}
				ref={(input) => { this.searchInput = ReactDOM.findDOMNode(input); }} />
		</Container>
	}
};

export default Search;