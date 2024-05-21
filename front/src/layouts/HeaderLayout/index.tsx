import './index.style.css';

export default function HeaderLayout() {
	const signed = true;

	return (
		<div className="header_layout-div">
			<div className="logo-div">
				<h1 className='no-select'>Matcha</h1>
			</div>
			<div className="searchbar-div">
				{
					signed &&
					<div className='searchbar-input'>
						<input placeholder="Search" />
					</div>
				}
			</div>
			<div className="menu-div">
				{
					signed
					? <div className='menu-profile'>
						
					</div>
					: <button className='primary no-select'>
						Sign up
					</button>
				}
			</div>
		</div>
	)
}