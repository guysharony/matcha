import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './MenuLayout.style.css';
import Button from './components/Button/Button';

export default ({ menu }: any) => {
	return (
		<div className={`menu_layout-div${menu ? ' active' : ''}`}>
			<div className='menu_layout-content'>
				<Button to='/' value='Home' />
				<Button to='/profile' value='Profile' />
				<Button to='/messages' value='Messages' />
			</div>
		</div>
	);
}