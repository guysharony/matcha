import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import fetch from '@/bundles/fetch';
import useSession from '@/hooks/session.hook';
import withProtection from '@/hoc/withProtection';

import AuthInput from '@/components/AuthInput/AuthInput';

import { ErrorsInterface, ValuesInterface } from './Signin.interface';

import './Signin.style.css';


function Signin() {
	const navigate = useNavigate();
	const { session, setSession } = useSession()

	const [values, setValues] = useState<ValuesInterface>({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState<ErrorsInterface>({
		username: [],
		password: [],
	});

	const disable = Object.values(values).some(value => value.length == 0);

	const resetInputs = () => {
		setValues({
			username: '',
			password: '',
		});
		setErrors({
			username: [],
			password: [],
		});
	}

	const handleValue = (e: any) => {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;

		setValues({
			...values,
			[name]: value
		});
	}

	const handleErrors = (e: any) => {
		try {
			const response = JSON.parse(e.message);

			const emptyErrors = {
				username: [],
				password: [],
			};

			const newErrors = response.reduce(
				(acc: any, { field, message }: any) => {
					acc[field] = acc[field] ? [...acc[field], message] : [message];
					return acc;
				},
				emptyErrors
			);

			setErrors(newErrors);
		} catch (e) {
			console.log(e)
		}
  };

	const onContinue = async (e: any) => {
		try {
			const { token } = await fetch.request.post('/auth/login', {
				login: values.username,
				password: values.password
			});

			await setSession(token);

			resetInputs();
		} catch (e: any) {
			handleErrors(e);
		}
	}

	return (
		<div className='sign_in-div'>
			<div className='sign_in-content'>
				<div className='header-div'>
					<h1 className='no-select'>Sign in</h1>
				</div>
				<div className='inputs-div'>
					<AuthInput
						name='username'
						placeholder='Username'
						type='text'
						onChange={handleValue}
						errors={errors.username} />
					<AuthInput
						name='password'
						placeholder='Password'
						type='password'
						onChange={handleValue}
						errors={errors.password} />
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
					<Link className="no-select" to={"/signup"}>Don't have an account yet? Sign up</Link>
				</div>
			</div>
		</div>
	);
}

export default withProtection(Signin, { authenticated: false, fallback: '/' });