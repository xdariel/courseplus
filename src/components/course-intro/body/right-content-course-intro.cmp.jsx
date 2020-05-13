import React from 'react';

const RightContentCourseIntro = () => {

	return (<div className="uk-width-1-3@m">
	<div className="course-card-trailer" uk-sticky="top: 10 ;offset:105 ; media: @m ; bottom:true">
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
					<iframe src="https://www.youtube.com/embed/nOCXXHGMezU" className="uk-padding-remove" uk-video="automute: true" frameBorder={0} allowFullScreen={true} uk-responsive="" />
				</div>
				<div className="uk-modal-body">
					<h3>Build Responsive Websites </h3>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
						dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident,
						sunt
						in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
		<div className="p-3">
			<p className="my-3 text-center">
				<span className="uk-h1"> $12.99 </span>
				<s className="uk-h4 text-muted"> $19.99 </s>
				<s className="uk-h6 ml-1 text-muted"> $32.99 </s>
			</p>
			<p> ! Hour Left This price</p>
			<div className="uk-child-width-1-2 uk-grid-small mb-4" uk-grid="">
				<div>
					<a href="course-resume.html" className="uk-width-1-1 btn btn-default transition-3d-hover"> 
						<i className="uil-play" /> Start </a>
				</div>
				<div>
					<a href="course-resume.html" className="btn btn-danger uk-width-1-1 transition-3d-hover"> 
						<i className="uil-heart" /> Add wishlist </a>
				</div>
			</div>
			<p className="uk-text-bold"> This Course Incluce </p>
			<div className="uk-child-width-1-2 uk-grid-small" uk-grid="">
				<div>
					<span><i className="uil-youtube-alt" /> 28 hours video</span>
				</div>
				<div>
					<span> <i className="uil-award" /> Certificate </span>
				</div>
				<div>
					<span> <i className="uil-file-alt" /> 12 Article </span>
				</div>
				<div>
					<span> <i className="uil-video" /> Watch Offline </span>
				</div>
				<div>
					<span> <i className="uil-award" /> Certificate </span>
				</div>
				<div>
					<span> <i className="uil-clock-five" /> Lifetime access </span>
				</div>
			</div>
		</div>
	</div>
</div>)
}

export default RightContentCourseIntro;