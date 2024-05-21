import React from 'react';
import withProtection from '@/hoc/withProtection';

function Home() {
	return (
		<div>
			<span>This is home page</span>
		</div>
	);
}

export default withProtection(Home, { authenticated: true, fallback: '/signin' });