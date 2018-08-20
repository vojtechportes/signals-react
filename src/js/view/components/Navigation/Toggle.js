import React from "react";
import styled, { css } from "styled-components";

import MenuIcon from "!svg-react-loader?name=logout!./../../../../assets/img/Menu.svg";

const Link = styled.a`
	display: block;
	margin: auto;
	width: 30px;
	height: 30px;

	svg {
		transform: rotate(0deg);
		opacity: 0.25;
		transition: transform 1s cubic-bezier(.42,0,1,1), opacity .5s cubic-bezier(.42,0,1,1);
		pointer-events: none;
		
	}

	&:hover {
		svg {
			opacity: 0.5;
		}
	}	

	${props => props.opened && css`
		svg {
			transform: rotate(90deg);
		}
	`}
`;

class Toggle extends React.Component {
	constructor() {
		super();

		this.state = {
			'title': 'Open'
		}
	}

	handleToggle(event) {
		event.preventDefault();

		let opened = false;
		let title = 'Open'

		if (!this.props.opened) {
			opened = true;
			title = 'Close';		
		}	

		this.setState(prevState => ({
			...prevState,
			'title': title
		})); 

		this.props.setData({
			'opened': opened
		});		
	}

	render() {
		return <Link 
			href="#"
			onClick={this.handleToggle.bind(this)} 
			title={this.state.title}
			opened={this.props.opened}>
			<MenuIcon />
		</Link>	
	}	
};

export default Toggle;
