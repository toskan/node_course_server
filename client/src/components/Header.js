import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<nav className="nav-wrapper">
				<a href="" className="left brand-logo">
					Emaily
				</a>
				<ul className="right">
					<li>
						<a href="">Login With Google</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
