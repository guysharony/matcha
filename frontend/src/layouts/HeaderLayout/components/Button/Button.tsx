import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default ({ className, value, to }: any) => {
	const navigate = useNavigate();
	const location = useLocation();

	const isOnRoute = location.pathname === to;

	if (isOnRoute) {
		return null;
	}

	return (
		<button
			onClick={() => navigate(to)}
			className={`${className.length > 0 ? `${className} ` : ''}no-select`}>
			{value}
		</button>
	)
}