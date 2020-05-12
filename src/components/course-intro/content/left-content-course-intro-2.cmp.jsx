import React from 'react';

const LeftContentCourseIntro2 = () => {

	return (<div className="uk-width-expand">
		<h4 className="mt-5 mb-4"> Related Courses</h4>
		<div className="uk-child-width-1-1 mt-3" uk-grid="true">
			<div>
				<a href="course-intro.html">
					<div className="course-card">
						<div className="course-card-thumbnail ">
							<img alt="" src="assets/images/course/2.png" />
							<span className="play-button-trigger" />
						</div>
						<div className="course-card-body">
							<div className="course-card-info">
								<div>
									<span className="catagroy">Angular</span>
								</div>
								<div>
									<i className="icon-feather-bookmark icon-small" />
								</div>
							</div>
							<h4>Learn Angular Fundamentals </h4>
							<p> Learn how to build and launch React web applications... </p>
							<div className="course-card-footer">
								<h5> <i className="icon-feather-film" /> 14 Lectures </h5>
								<h5> <i className="icon-feather-clock" /> 55 Hours </h5>
							</div>
						</div>
					</div>
				</a>
			</div>
			<div>
				<a href="course-intro.html">
					<div className="course-card">
						<div className="course-card-thumbnail ">
							<img alt="" src="assets/images/course/3.png" />
							<span className="play-button-trigger" />
						</div>
						<div className="course-card-body">
							<div className="course-card-info">
								<div>
									<span className="catagroy">JavaScript</span>
								</div>
								<div>
									<i className="icon-feather-bookmark icon-small" />
								</div>
							</div>
							<h4>The Complete JavaScript </h4>
							<p> JavaScript is how you build interactivity on the web.. </p>
							<div className="course-card-footer">
								<h5> <i className="icon-feather-film" /> 14 Lectures </h5>
								<h5> <i className="icon-feather-clock" /> 55 Hours </h5>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>)
}

export default LeftContentCourseIntro2;