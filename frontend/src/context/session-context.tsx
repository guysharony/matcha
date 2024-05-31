import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

import fetch from "@/bundles/fetch";

export interface ISession {
	id: string;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	last_connection: string;
	created_at: string;
	updated_at: string;
}

export interface ISessionContext {
	session?: ISession;
	setSession: (token: string) => Promise<void>;
}

export const SessionContext = createContext<any>(undefined);

export const SessionProvider = ({ children }: any) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [session, _setSession] = useState<ISession | undefined>(undefined);

	const setSession = async (token?: string) => {
		if (token) {
			fetch.token.set(token);

			const user = await fetch.request.get<ISession>('/users/me');

			_setSession(user);
		}

		setLoading(false);
	}

	React.useEffect(() => {
		let isReady = true;

		const token = fetch.token.get();

		setSession(token);

		return () => {
			isReady = false
		};
	}, [_setSession]);

	if (loading) {
		return null;
	}

	return (
		<SessionContext.Provider value={{
			session: session,
			setSession: setSession
		}}>
			{children}
		</SessionContext.Provider>
	);
};