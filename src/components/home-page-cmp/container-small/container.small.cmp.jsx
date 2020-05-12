import React from 'react';
const ContainerSmall = () => {
	return (
		<div className="container-small" style={{ 'marginTop': '-20px' }}>
			<h2 className="uk-text-center uk-margin-remove-adjacent uk-margin-remove-bottom" uk-scrollspy="cls:uk-animation-fade"> Jumpstart your Projects</h2>
			<h5 className="uk-text-center uk-animation-slide-bottom-medium mt-2">And build powerful apps</h5>

			<div className="uk-child-width-1-4@m uk-visible@m uk-text-center uk-text-bold uk-margin-xlarge-bottom uk-margin-large-top" uk-scrollspy="cls: uk-animation-scale-up; target: > div ; delay: 100;repeat:true" uk-grid="true">
				<div>
					<div className="uk-card-default uk-card-hover uk-card-body rounded-lg  animate-this">
						<img src="assets/images/demos/demo-home-icon-ready.png" className="scale-up-medium mb-3" width="100" alt="" />
						<p> Ready to use </p>
					</div>
				</div>
				<div>
					<div className="uk-card-default uk-card-hover uk-card-body rounded-lg animate-this">
						<img src="assets/images/demos/demo-home-icon-ui.png" className="scale-up-medium mb-3" width="100" alt="" />
						<p> Premium UI </p>
					</div>
				</div>
				<div>
					<div className="uk-card-default uk-card-hover uk-card-body rounded-lg animate-this">
						<img src="assets/images/demos/demo-home-icon-responsive.png" className="scale-up-medium mb-3" width="100" alt="" />
						<p>  Responsive </p>
					</div>
				</div>
				<div>
					<div className="uk-card-default uk-card-hover uk-card-body rounded-lg animate-this">
						<img src="assets/images/demos/demo-home-icon-fast.png" className="animate-this mb-3" width="100" alt="" />
						<p> Time Saving</p>
					</div>
				</div>

			</div>
		</div>);
}

export default ContainerSmall;