import React from 'react';

import Button from './components/Button/Button';

import './MenuLayout.style.css';

export default ({ menu, setMenu }: any) => {
	return (
		<div className={`menu_layout-div${menu ? ' active' : ''}`}>
			<div className='menu_layout-flex'>
				<div className='menu_layout-background' onClick={() => { setMenu(false); }} />
				<div className='menu_layout-content'>
					<div className='menu_layout-header'>
						<div className='searchbar-input'>
							<input placeholder="Search" />
						</div>
					</div>
					<div className='menu_layout-body'>
						<Button to='/' value='Home' />
						<Button to='/profile' value='Profile' />
						<Button to='/messages' value='Messages' />
					</div>
				</div>
				<div className='menu_layout-close'></div>
			</div>
		</div>
	);
}