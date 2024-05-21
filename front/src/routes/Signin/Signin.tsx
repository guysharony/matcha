import React from 'react';
import withProtection from '@/hoc/withProtection';

function Signin() {
	return (
		<div>
			<span>This is sign in page</span>
		</div>
	);
}

export default withProtection(Signin, { authenticated: false, fallback: '/' });