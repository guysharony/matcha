import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderLayout from '@/layouts/HeaderLayout/HeaderLayout'

import './App.css'
import BodyLayout from './layouts/BodyLayout/BodyLayout';

function App() {
  return (
		<div className='app-div'>
				<HeaderLayout />
				<BodyLayout>
					<Outlet />
				</BodyLayout>
		</div>
  )
}

export default App;
