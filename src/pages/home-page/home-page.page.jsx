import React from 'react';

import Header from '../../components/home-page/header/header.cmp';
import LMSSketch from '../../components/home-page/body/lms-sketch.cmp';
import JumpstartProjects from '../../components/home-page/body/jumpstart-projects.cmp';
import DemoSection from '../../components/home-page/body/demo-section.cmp';
import FrameworkSection from '../../components/home-page/body/framework-section.cmp';
import Footer from '../../components/home-page/footer/footer.cmp';

class HomePage extends React.Component {

	render() {
		return (<div>
			<Header />
			{/*<Body> */}
			<LMSSketch />
			<JumpstartProjects />
			<DemoSection />
			<FrameworkSection />
			{/*</Body> */}
			<Footer />
		</div>);
	}
}

export default HomePage;