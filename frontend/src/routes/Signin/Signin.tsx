import React, { useState } from 'react';
import withProtection from '@/hoc/withProtection';

import './Signin.style.css';
import { Link } from 'react-router-dom';

function Signin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const disable = email.length == 0 || password.length == 0;

	const onChangeEmail = (e: any) => {
		setEmail(e.currentTarget.value);
	}

	const onChangePassword = (e: any) => {
		setPassword(e.currentTarget.value);
	}

	return (
		<div className='sign_in-div'>
			<div className='sign_in-content'>
				<div className='header-div'>
					<h1 className='no-select'>Sign in</h1>
				</div>
				<div className='inputs-div'>
					<div className='email-div'>
						<input
							name="email"
							placeholder="Email"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect="off"
							type="text"
							onChange={onChangeEmail}
							required />
					</div>
					<div className='password-div'>
						<input
							name="password"
							placeholder="Password"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect="off"
							type="password"
							onChange={onChangePassword}
							required />
					</div>
				</div>
				<div className='continue-div'>
					<button
						className={`continue primary no-select${disable ? ' disable' : ''}`}>
						Continue
					</button>
				</div>
				<div className="separator-div">
					<div />
					<span className='no-select'>or</span>
					<div />
				</div>
				<div className="option-div">
					<Link className="no-select" to={"/signup"}>Don't have an account yet? Sign up</Link>
				</div>
			</div>
		</div>
	);
}

export default withProtection(Signin, { authenticated: false, fallback: '/' });