import React from 'react';
const Header = () => {
	return (
		<div className="main-header header-transparent uk-light"
			uk-sticky="top: 100 ;animation: uk-animation-slide-top ;cls-inactive: header-transparent uk-light">
			<div className="page-content-inner pt-0">
				<nav uk-navbar="true">
					<div className="uk-navbar-left">

						<div id="logo"> <i className="uil-graduation-hat"></i> Courseplus</div>
					</div>
					<div className="uk-navbar-right">
						<ul className="uk-navbar-nav demo-nav" uk-scrollspy-nav="closest: li; scroll: true">
							<li className="uk-active"><a href="#main_wrapper">Home</a></li>
							<li> <a href="#demos">Demos</a> </li>
							<li><a href="#feature">Feature</a> </li>
							<li><a href="#faq">FAQ</a> </li>
						</ul>
						<a href="#" className="btn btn-default transition-3d-hover ml-3"> BUY NOW</a>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;