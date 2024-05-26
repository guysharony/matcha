import React from 'react';
import { Navigate } from 'react-router-dom';

import useSession from '@/hooks/session.hook';


interface Options {
	authenticated?: boolean;
	required_2fa?: boolean;
	fallback: string;
};

/*
export default <P extends Record<string, any>>(Component: React.ComponentType<P>, options: Options) => {
	const Wrapped = (props: any) => {
		return (
			<UserContext.Consumer>
			{({ user }) => {
				if (!!user != !!options.authenticated)
					return <Navigate to={options.fallback} replace />;

				return <Component {...props} user={user} />;
			}}
			</UserContext.Consumer>
		);
	}

	return Wrapped;
};
*/

const withProtection = <T extends Record<string, any>>(
	WrappedComponent: React.ComponentType<T>,
	options: Options
) => {
	const displayName =
		WrappedComponent.displayName || WrappedComponent.name || "Component";

	const ComponentWithProtection = (props: T) => {
		const session = useSession();

		if (!!session.session != !!options.authenticated)
			return <Navigate to={options.fallback} replace />;

		return <WrappedComponent {...(props as T)} />;
	};

	ComponentWithProtection.displayName = `withProtection(${displayName})`;

	return ComponentWithProtection;
}

export default withProtection;