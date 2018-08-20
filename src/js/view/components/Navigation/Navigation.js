import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import Item from "./Item";
import Label from "./Label";
import Logo from "./Logo";
import Search from "./Search";
import Toggle from "./Toggle";

import DashboardIcon from "!svg-react-loader?name=dashboard!./../../../../assets/img/Dashboard.svg";
import StrategiesIcon from "!svg-react-loader?name=strategies!./../../../../assets/img/Strategies.svg";
import IndicatorsIcon from "!svg-react-loader?name=indicators!./../../../../assets/img/Indicators.svg";
import DataIcon from "!svg-react-loader?name=data!./../../../../assets/img/Data.svg";
import SettingsIcon from "!svg-react-loader?name=settings!./../../../../assets/img/Settings.svg";
import LogoutIcon from "!svg-react-loader?name=logout!./../../../../assets/img/Logout.svg";

const Container = styled.nav`
	flex-direction: column;
	flex: 0 0 59px;	
	display: flex;
	overflow: hidden;
	transition: all 1s;
	padding: 20px 0;
	width: 59px;
	min-height: 100%;
	height: 100%;		
	background-image: linear-gradient(0deg, ${props => props.theme.colors.primaryDark} 0%, ${props => props.theme.colors.primaryLight} 100%);
    background-size: auto 900px;
	background-repeat: no-repeat;
	background-color: ${props => props.theme.colors.primaryDark};	
	color: ${props => props.theme.colors.light};

	${props => props.opened && css`
		flex: 0 0 218px;
		width: 218px;
	`}
`;

const Top = styled.div`
	flex: 1;
`;

const Bottom = styled.div`
	align-self: flex-end;
	visibility: hidden;
	opacity: 0;
	transition: all 1s;
	padding: 50px 20px 0;
	font-size: 0.6em;
	color: ${props => rgba(props.theme.colors.light, 0.47)};
	text-align: center;
	white-space: nowrap;
	
	${props => props.opened && css`
		visibility: visible;
		opacity: 1;
		transition: all 1s;
		width: 100%;
	`}
`;

const Group = styled.ul`
	margin: 0;
	padding: 0;
`;

class Navigation extends React.Component {
	constructor() {
		super();

		this.state = {
			'opened': false,
		};
	}

	setData(data, callback = () => {}) {
		this.setState(prevState => ({
			...prevState,
			...data
		}), () => {
			callback();
		}); 
	}

	render() {
		return <React.Fragment>
			<Container opened={this.state.opened}>
				<Top>
					<Logo 
						opened={this.state.opened}
						title="Signals" />
					<Toggle
						setData={this.setData.bind(this)}
						opened={this.state.opened} />
					<Search opened={this.state.opened} placeholder="Search" setData={this.setData.bind(this)} />

					<Label opened={this.state.opened}>Main</Label>
					<Group>
						<Item to="/" label="Dashboard" opened={this.state.opened}>
							<DashboardIcon />
						</Item>
					</Group>

					<Label opened={this.state.opened}>Martketplace</Label>
					<Group>
						<Item to="/strategies" label="Strategies" opened={this.state.opened}>
							<StrategiesIcon />
						</Item>
						<Item to="/indicators" label="Indicators" opened={this.state.opened}>
							<IndicatorsIcon />
						</Item>
						<Item to="/data" label="Data" opened={this.state.opened}>
							<DataIcon />
						</Item>
					</Group>

					<Label opened={this.state.opened}>My profile</Label>
					<Group>
						<Item to="/settings" label="Settings" opened={this.state.opened}>
							<SettingsIcon />
						</Item>
						<Item to="/log-out" label="Log out" opened={this.state.opened}>
							<LogoutIcon />
						</Item>
					</Group>
				</Top>

				<Bottom opened={this.state.opened}>
					2018 All rights reserved
				</Bottom>
			</Container>
		</React.Fragment>
	}
};

export default Navigation;