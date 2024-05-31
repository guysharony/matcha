import React from 'react';
import withProtection from '@/hoc/withProtection';
import fetch from '@/bundles/fetch';
import useSession from '@/hooks/session.hook';

function Home() {
	const { session } = useSession();

	return (
		<div>
			<span>Hello {session?.first_name}!</span>
		</div>
	);
}

export default withProtection(Home, { authenticated: true, fallback: '/signin' });