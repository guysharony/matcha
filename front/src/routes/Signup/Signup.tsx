import React from 'react';
import withProtection from '@/hoc/withProtection';

function Signup() {
	return (
		<div>
			<span>This is sign up page</span>
		</div>
	);
}

export default withProtection(Signup, { authenticated: false, fallback: '/' });