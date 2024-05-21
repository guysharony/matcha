import React, { createContext, useState } from "react";

/*
export interface User {
	user: UserData | undefined;
	setUser: Dispatch<SetStateAction<UserData | undefined>>;
}

export default react.createContext({
	user: undefined,
	setUser: () => {}
} as User);
*/

export interface ISession {
	id: string;
	username: string;
}

export interface ISessionContext {
	session?: ISession;
	setSession: React.Dispatch<React.SetStateAction<ISession | undefined>>;
}

export const SessionContext = createContext<any>(undefined);

export const SessionProvider = ({ children }: any) => {
	const [session, setSession] = useState<ISession | undefined>(undefined);

	const init = (value: React.SetStateAction<ISession | undefined>) => {
		setSession(value);
	}

	React.useEffect(() => {
		let isReady = true;

		/* init({ id: 'this_is_an_id', username: 'guysharony' }) */
		init(undefined)

		return () => {
			isReady = false
		};
	}, [setSession]);

	return (
		<SessionContext.Provider value={{
			session: session,
			setSession: setSession
		}}>
			{children}
		</SessionContext.Provider>
	);
};