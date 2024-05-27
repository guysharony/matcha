import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import fetch from '@/bundles/fetch';
import withProtection from '@/hoc/withProtection';

import './Signup.style.css';

function Signup() {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const disable = (
		firstName.length == 0
		|| lastName.length == 0
		|| username.length == 0
		|| email.length == 0
		|| password.length == 0
		|| confirmPassword.length == 0
	);

	const onChangeFirstName = (e: any) => {
		setFirstName(e.currentTarget.value);
	}

	const onChangeLastName = (e: any) => {
		setLastName(e.currentTarget.value);
	}

	const onChangeUsername = (e: any) => {
		setUsername(e.currentTarget.value);
	}

	const onChangeEmail = (e: any) => {
		setEmail(e.currentTarget.value);
	}

	const onChangePassword = (e: any) => {
		setPassword(e.currentTarget.value);
	}

	const onChangeConfirmPassword = (e: any) => {
		setConfirmPassword(e.currentTarget.value);
	}

	const onContinue = async (e: any) => {
		try {
			await fetch.request.json('/auth/register', {
				first_name: firstName,
				last_name: lastName,
				username: username,
				email: email,
				password: password
			});
		} catch (e: any) {
			console.log(JSON.parse(e.message))
		}
	}

	return (
		<div className='sign_in-div'>
			<div className='sign_in-content'>
				<div className='header-div'>
					<h1 className='no-select'>Sign up</h1>
				</div>
				<div className='inputs-div'>
					<div className='first_name-div'>
						<input
							name="first_name"
							placeholder="First name"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect="off"
							type="text"
							onChange={onChangeFirstName}
							required />
					</div>
					<div className='last_name-div'>
						<input
							name="last_name"
							placeholder="Last name"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect="off"
							type="text"
							onChange={onChangeLastName}
							required />
					</div>
					<div className='username-div'>
						<input
							name="username"
							placeholder="Username"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect="off"
							type="text"
							onChange={onChangeUsername}
							required />
					</div>
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
					<div className='confirm_password-div'>
						<input
							name="confirm_password"
							placeholder="Confirm password"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect="off"
							type="password"
							onChange={onChangeConfirmPassword}
							required />
					</div>
				</div>
				<div className='continue-div'>
					<button
						className={`continue primary no-select${disable ? ' disable' : ''}`}
						onClick={onContinue}>
						Continue
					</button>
				</div>
				<div className="separator-div">
					<div />
					<span className='no-select'>or</span>
					<div />
				</div>
				<div className="option-div">
					<Link className="no-select" to={"/signin"}>Already have an account? Sign in</Link>
				</div>
			</div>
		</div>
	);
}

export default withProtection(Signup, { authenticated: false, fallback: '/' });