import React from 'react';

import Header from '../../components/course-intro/header/header.cmp';
import OverlaySearch from '../../components/course-intro/overlay-search-mobile/overlay-search.cmp';
import Content from '../../components/course-intro/content/content.cmp';
import Footer from '../../components/course-intro/footer/footer.cmp';

class CourseIntroPage extends React.Component {

	render() {
		return (<div id="wrapper">
		<Header />
		<OverlaySearch />
		<Content courseIntroId="course-intro" />
		<Footer />
	</div>);
	}
}

export default CourseIntroPage;