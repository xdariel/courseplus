import React from 'react';
const UkSection = () => {
	return (
		<div className="uk-section pt-0" id="demos">
			<div className="container-small">

				<div className="uk-text-center mt-lg mb-3 my-sm-2">
					<h2>Explore our demos </h2>
					<hr className="uk-divider-small" />
					<p>Explore our landing page demos on different kind of topics. More <br /> demos are coming soon. </p>
				</div>

				<div className="uk-child-width-1-2@m uk-child-width-1-2@s uk-flex-center mt-lg-5 uk-grid-large demo-cards"
					uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100" uk-grid="true">

					<div>

						<div className="uk-card-default uk-inline-clip">
							<img alt="" src="assets/images/demos/d-default.png"  />
							<div className="uk-flex uk-flex-between uk-flex-middle p-2 px-3">
								<h5 className="mb-0"> Default layout</h5>
								<div className="buttons">
									<a target="_blank" href="default/index.html" className="btn btn-default soft-grey m-0">
										Left</a>
									<a target="_blank" href="default-rtl/index.html" className="btn btn-default m-0"> Right</a>
								</div>
							</div>
						</div>

					</div>
					<div>
						<div className="uk-card-default rounded uk-inline-clip">
							<img alt="" src="assets/images/demos/d-horizontal.png"  />
							<div className="uk-flex uk-flex-between uk-flex-middle p-2 px-3">
								<h5 className="mb-0"> horizontal layout</h5>
								<div className="buttons">
									<a target="_blank" href="horizontal/index.html" className="btn btn-default m-0"> Left</a>
									<a target="_blank" href="horizontal-rtl/index.html" className="btn btn-default m-0">
										Right</a>
								</div>
							</div>
						</div>
					</div>

					<div>

						<div className="uk-card-default rounded uk-inline-clip">
							<img alt="" src="assets/images/demos/d-admin.png"  />
							<div className="uk-flex uk-flex-between uk-flex-middle p-2 px-3">
								<h5 className="mb-0"> Admin section</h5>
								<div className="buttons">
									<a target="_blank" href="admin/dashboard.html" className="btn btn-default m-0"> Left</a>
									<a target="_blank" href="admin-rtl/dashboard.html" className="btn btn-default m-0">
										Right</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>);
}

export default UkSection;