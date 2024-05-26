import React from 'react';

import './BodyLayout.style.css';

export default ({ children }: any) => {
	return (
		<div className='body_layout-div'>
			<div className='body_layout-content'>
				{ children }
			</div>
		</div>
	);
}