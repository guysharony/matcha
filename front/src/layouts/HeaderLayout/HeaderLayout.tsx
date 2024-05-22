import React from 'react';
import { useNavigate } from 'react-router-dom';

import useSession from '@/hooks/session.hook';

import './HeaderLayout.style.css';

export default () => {
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
					? <div className='menu-profile'>
						
					</div>
					: <>
						<button onClick={() => navigate('/signin')} className='secondary no-select'>
							Sign in
						</button>
						<button onClick={() => navigate('/signup')} className='primary no-select'>
							Sign up
						</button>
					</>
				}
			</div>
		</div>
	)
}