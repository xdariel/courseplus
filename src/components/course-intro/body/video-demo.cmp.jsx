import React from 'react';

const VideoDemo = () => {

	return (<div className="uk-width-1-3@m">
		<div className="course-thumbnail">
			<img alt="" src="assets/images/course/1.png"  />
			<a className="play-button-trigger show" href="#trailer-modal" uk-toggle=""> </a>
		</div>
		{/* video demo model */}
		<div id="trailer-modal" uk-modal="">
			<div className="uk-modal-dialog">
				<button className="uk-modal-close-default mt-2  mr-1" type="button" uk-close="" />
				<div className="uk-modal-header">
					<h4> Trailer video </h4>
				</div>
				<div className="video-responsive">
					<iframe src="https://www.youtube.com/embed/nOCXXHGMezU" className="uk-padding-remove" uk-video="automute: true" frameBorder={0} allowFullScreen uk-responsive="" />
				</div>
				<div className="uk-modal-body">
					<h3>Build Responsive Websites </h3>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
						eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
						in
						culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
	</div>)
}

export default VideoDemo;