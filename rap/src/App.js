import React, { Component } from 'react';
import './App.css';

import {Tab,Tabs} from 'react-bootstrap';
import './index.css';



import AdminApp from './AdminApp';
import CoachApp from './CoachApp';
import CommunityApp from './CommunityApp';
import FinanceApp from './FinanceApp';
import RefereeApp from './RefereeApp';
import SponsorApp from './SponsorApp';
import UploadApp from './UploadApp';
import Instructions from './Instructions';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab : props.activeTab ? props.activeTab : 'Administration'};
	}
	handleClick(tab) {
		this.setState({activeTab: tab});
	}

        render() {
		return (
			<div>
			<div><Instructions /></div>
			<br />
			<div>
				 <Tabs defaultActiveKey={1} animation={true} bsStyle={'tabs'} id="rap-tabs">
					<Tab eventKey={1} title="Administration"><AdminApp /></Tab>
					<Tab eventKey={2} title="Coaches"><CoachApp /></Tab>
					<Tab eventKey={3} title="Referees"><RefereeApp /></Tab>
					<Tab eventKey={4} title="Finance"><FinanceApp /></Tab>
					<Tab eventKey={5} title="Community"><CommunityApp /></Tab>
					<Tab eventKey={6} title="Sponsors"><SponsorApp /></Tab>
					<Tab eventKey={7} title="Uploads"><UploadApp /></Tab>


				</Tabs>
			</div>
			</div>
		);
	}
}



export default App;
