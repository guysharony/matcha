import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderLayout from './layouts/HeaderLayout'

import './App.css'

function App() {
  return (
		<div className='app-div'>
				<HeaderLayout />
				<div>
					<Outlet />
				</div>
		</div>
  )
}

export default App;
