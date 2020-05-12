import React from 'react';


const Footer = () => {
	return (<div className = "footer" >
		<div className="container">
			<div uk-grid="true">
				<div className="uk-width-1-3@m">
					<a href="home.html" className="uk-logo">
						{/* logo icon */}
						<i className="uil-graduation-hat"> </i>
						Courseplus
				</a>
					<p className="footer-description"> Launch your site in style with Courseplus, Create rich layouts A
					unique and beautiful collection of UI elements that are all flexible and modular.</p>
				</div>
				<div className="uk-width-expand@s uk-width-1-2">
					<div className="footer-links pl-lg-8">
						<h5>Explore </h5>
						<ul>
							<li><a href="course-card.html"> Courses </a></li>
							<li><a href="course-path.html"> Track </a></li>
							<li><a href="blog-card.html"> Blog </a></li>
						</ul>
					</div>
				</div>
				<div className="uk-width-expand@s uk-width-1-2">
					<div className="footer-links pl-lg-8">
						<h5> Account </h5>
						<ul>
							<li><a href="profile-1.html"> Profile </a></li>
							<li><a > Settings </a></li>
							<li><a > Projects </a></li>
						</ul>
					</div>
				</div>
				<div className="uk-width-expand@s uk-width-1-2">
					<div className="footer-links pl-lg-8">
						<h5> Resources</h5>
						<ul>
							<li><a > Contact </a></li>
							<li><a href="page-Privacy.html"> Privacy Policy </a></li>
							<li><a href="page-term.html"> Terms of Use </a></li>
						</ul>
					</div>
				</div>
			</div>
			<hr />
			<div className="uk-grid-collapse" uk-grid="true">
				<div className="uk-width-expand@s uk-first-column">
					<p>© 2020 <strong>Courseplus</strong>. All Rights Reserved. </p>
				</div>
				<div className="uk-width-auto@s">
					<nav className="footer-nav-icon">
						<ul>
							<li><a ><i className="icon-brand-facebook" /></a></li>
							<li><a ><i className="icon-brand-dribbble" /></a></li>
							<li><a ><i className="icon-brand-youtube" /></a></li>
							<li><a ><i className="icon-brand-twitter" /></a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
</div> );
}

export default Footer;