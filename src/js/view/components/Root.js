import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { injectGlobal, ThemeProvider } from "styled-components";

import theme from '../../theme/default.js';

import Navigation from "./Navigation/Navigation";
import Dashboard from "../pages/Dashboard";
import Strategies from "../pages/Strategies";
import Indicators from "../pages/Indicators";
import Data from "../pages/Data";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";

injectGlobal`
	body {
		margin: 0;
		padding: 0;
		font-family: ${theme.typography.fontFamily};
		color: ${theme.colors.dark};
		font-size: ${theme.typography.baseFontSize};
		letter-spacing: ${theme.typography.letterSpacing};
		line-height: ${theme.typography.lineHeight};
	}

	body, html {
		height: 100%;
	}

	#app {
		display: flex;
		flex-direction: row;
		min-height: 100%;
	}

	* {
		box-sizing: border-box;
		-webkit-backface-visibility: hidden;
	}

	@import url("//hello.myfonts.net/count/36930f");

	@font-face {
		font-family: 'Avenir';
		src: url('./src/assets/font/36930F_0_0.eot');
		src: url('./src/assets/font/36930F_0_0.eot?#iefix') format('embedded-opentype'),
			 url('./src/assets/font/36930F_0_0.woff2') format('woff2'),
			 url('./src/assets/font/36930F_0_0.woff') format('woff'),
			 url('./src/assets/font/36930F_0_0.ttf') format('truetype');
		font-weight: 400;
	}
	  
	@font-face {
		font-family: 'Avenir';
		src: url('./src/assets/font/36930F_1_0.eot');
		src: url('./src/assets/font/36930F_1_0.eot?#iefix') format('embedded-opentype'),
			 url('./src/assets/font/36930F_1_0.woff2') format('woff2'),
			 url('./src/assets/font/36930F_1_0.woff') format('woff'),
			 url('./src/assets/font/36930F_1_0.ttf') format('truetype');
		font-weight: 700;
	}	
`;

const Container = styled.div`
	display: flex;
`;

const Main = styled.main`
	flex: 0 1 700px;
	padding: 30px 50px 50px;
`;

const Root = () => (
	<ThemeProvider theme={theme}>
		<Container>
			<Router>
				<React.Fragment>
					<Navigation />

					<Main>
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route exact path="/strategies" component={Strategies} />
							<Route exact path="/indicators" component={Indicators} />
							<Route exact path="/data" component={Data} />
							<Route exact path="/settings" component={Settings} />
							<Route exact path="/log-out" component={Logout} />
						</Switch>
					</Main>
				</React.Fragment>
			</Router>
		</Container>
	</ThemeProvider>
);

export default Root;