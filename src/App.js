import React from 'react';
import MainLayout from './pages/home/Index';
import 'antd/dist/antd.css';
import './App.css';

class Layout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<MainLayout />
			</React.Fragment>
		)
	}
}

export default Layout;