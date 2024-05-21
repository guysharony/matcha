export {};

declare global {
	interface UserData {
		id: number;
		username: string;
	}

	interface Window {
		_ft_init: {
			user?: UserData;
		}; 
	}
}