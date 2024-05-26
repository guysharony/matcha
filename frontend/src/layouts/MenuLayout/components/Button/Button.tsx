import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Button.style.css';

export default ({ to, value }: any) => {
	const navigate = useNavigate();
	const location = useLocation();

	const isOnRoute = location.pathname === to;

	return (
		<button onClick={() => navigate(to)} className={`menu_layout-button secondary no-select${isOnRoute ? ' active' : ''}`}>
			{value}
		</button>
	)
}