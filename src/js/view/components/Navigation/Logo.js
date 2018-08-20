import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import LogoFull from "!svg-react-loader?name=full!./../../../../assets/img/logo/full.svg";

const Container = styled.div`
	padding: 17px 0 15px;
	width: 68px;
	margin: auto;

	svg {
		transition: all 1s;
		margin-left: -5px;
		pointer-events: none;

		path + path {
			visibility: hidden;
			opacity: 0;
			transition: all 1s;
		}
	}

	${props => props.opened && css`
		svg {
			margin-left: 0;

			path + path {
				visibility: visible;
				opacity: 1;
			}
		}
	`}
`;

const LinkStyled = styled(Link)`
	display: block;
`;

const Logo = ({opened, title}) => (
	<Container opened={opened}>
			<LinkStyled to="/" title={title}>
				<LogoFull role="img" />
			</LinkStyled>
	</Container>
);

export default Logo;