import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { rgba } from "polished";

const Container = styled.li`
	margin 0;
	padding: 0;
	list-style-type: none;
`;

const Link = styled(NavLink)`
	position: relative;
	display: block;
	transition: all 1s;
	padding: 4px 15px 4px 13px;
	width: 100%;
	background: ${props => rgba(props.theme.colors.light, 0)};
	color: ${props => props.theme.colors.light};
	font-weight: 700;

	&.active,
	&:hover {
		background-position: 0;
		background-image: linear-gradient(-90deg, ${props => rgba(props.theme.colors.dark, 0.025)} 0%, ${props => rgba(props.theme.colors.dark, 0.17)} 100%);
	}

	&.active {
		&:before {
			content: "";
			position: absolute;
			left: -6px;
			top: 0;
			overflow: hidden;
			box-shadow: ${props => props.theme.colors.secondaryLight} 3px 0px 12px -2px;
			width: 10px;
			height: 100%;
			background-image: linear-gradient(-180deg, ${props => props.theme.colors.secondaryLight} 13%, ${props => props.theme.colors.secondaryDark} 100%);
		}
	}

	&:after {
		content: "";
		clear: both;
		display: block;
	}

	svg {
		float: left;
		pointer-events: none;
	}

	${props => props.opened && css`
		padding: 4px 15px 4px 46px;

		${Label} {
			opacity: 1;
			margin: 0 0 0 4px;
			width: calc(100% - 35px);
		}
	`}
`;

const Label = styled.span`
	float: left;
	display: block;
	opacity: 0;
	overflow: hidden;
	transition: all 1s;
	margin: 0px;
	padding: 7px 0 0;
	width: 0px;
	white-space: nowrap;
`;

const Item = ({to, opened, label, children}) => (
	<Container> 
		<Link exact to={to} opened={opened} title={label}>
			{children}
			<Label>{label}</Label>
		</Link>
	</Container>
);

export default Item;