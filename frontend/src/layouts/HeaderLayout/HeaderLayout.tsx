import React from 'react';
import { useNavigate } from 'react-router-dom';

import useSession from '@/hooks/session.hook';

import './HeaderLayout.style.css';
import Button from './components/Button/Button';

export default ({menu, setMenu}: any) => {
	const navigate = useNavigate();

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