import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { rgba } from "polished";

const Container = styled.div`
	position: relative;
	transition: all 1s;
	padding: 17px 22px 7px 23px;
	text-transform: uppercase;
	font-size: 0.66667em;
	
	&:after {
		content: "";
		position: absolute;
		top: 22px;
		left: 22px;
		display: block;
		visibility: visible;
		transition: all 1s;
		width: 14px;
		height: 2px;
		background: ${props => rgba(props.theme.colors.light, 0.25)};
	}

	${props => props.opened && css`
		padding: 17px 15px 7px 38px;

		&:after {
			visibility: hidden;
			opacity: 0;
		}

		${Inner} {
			visibility: visible;
			opacity: 0.21;
			max-width: 166px;
		}
	`}
`;

const Inner = styled.div`
	visibility: hidden;
	opacity: 0;
	overflow: hidden;
	transition: all 1s;
	max-width: 0;
	white-space: nowrap;

`;

const Label = ({opened, children}) => (
	<Container opened={opened}>
		<Inner>{children}</Inner>
	</Container>
);

export default Label;