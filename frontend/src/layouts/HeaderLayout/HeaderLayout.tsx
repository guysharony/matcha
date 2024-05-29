import React from 'react';

import useSession from '@/hooks/session.hook';

import Button from './components/Button/Button';

import './HeaderLayout.style.css';

export default ({menu, setMenu}: any) => {
	const { session } = useSession();

	return (
		<div className="header_layout-div">
			<div className="logo-div">
				<h1 className='no-select'>Matcha</h1>
			</div>
			<div className="searchbar-div">
				{
					session &&
					<div className='searchbar-input'>
						<input placeholder="Search" />
					</div>
				}
			</div>
			<div className="menu-div">
				{
					session
					? <div className='menu-profile' onClick={() => setMenu(!menu)}>
						
					</div>
					: <>
						<Button to="/signin" value="Sign in" className="secondary" />
						<Button to="/signup" value="Sign up" className="primary" />
					</>
				}
			</div>
		</div>
	)
}