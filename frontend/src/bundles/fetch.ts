import Cookies from 'js-cookie';

interface Tools {
  setStatus?: (status: number) => void;
  temporary: {
    status: number;
  };
}

export class FormError {
  constructor(public code: number, public message: Record<string, any>) {}
}

export default ((tools: Tools) => {
  const url = (uri: string) => new URL(uri, "http://127.0.0.1:3000").href;

  const headers: Record<string, any> = {};

	// Initialize token if exists
	const token = Cookies.get('token');
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

  return {
    token: {
			set: (value: string) => {
				Cookies.set(
					'token',
					value, {
						expires: 1
					}
				);

				headers['Authorization'] = `Bearer ${value}`;
			},
			get: () => {
				return Cookies.get('token');
			}
    },
    headers: {
      set: (key: string, value: string | number): void => {
        headers[key] = String(value);
      },
    },
    request: {
			get: async <T = Record<string, any>>(
        uri: string,
				body: { [x: string | number]: any } = {},
      ): Promise<T> => {
        const response = await fetch(url(uri), {
          method: 'GET',
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        });

				if (response.status === 400) {
					const errorData = await response.json();
					throw new Error(JSON.stringify(errorData.errors));
				}

				return await response.json();
      },
      post: async <T = Record<string, any>>(
        uri: string,
				body: { [x: string | number]: any } = {},
      ): Promise<T> => {
        const response = await fetch(url(uri), {
          method: 'POST',
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: JSON.stringify(body),
        });

				if (response.status === 400) {
					const errorData = await response.json();
					throw new Error(JSON.stringify(errorData.errors));
				}

				return await response.json();
      },
    },
  };
})({
  temporary: {
    status: 200,
  },
});