import React from 'react';

import Header from '../../components/course-intro/header/header.cmp';
import OverlaySearch from '../../components/course-intro/overlay-search-mobile/overlay-search.cmp';
import Content from '../../components/course-intro/body/content.cmp';
import Footer from '../../components/course-intro/footer/footer.cmp';

class CourseIntro2Page extends React.Component {

	render() {
		return (<div id="wrapper">
			<Header />
			<OverlaySearch />
			<Content courseIntroId="course-intro-2" />
			<Footer />
		</div>);
	}
}

export default CourseIntro2Page;