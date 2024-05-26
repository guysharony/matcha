import React from 'react';

import Button from './components/Button/Button';

import './MenuLayout.style.css';

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