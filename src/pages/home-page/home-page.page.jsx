import React from 'react';

import Header from '../../components/home-page-cmp/header/header.cmp';
import DiagonalHero from '../../components/home-page-cmp/diagonal-hero/diagonal-hero.cmp';
import ContainerSmall from '../../components/home-page-cmp/container-small/container.small.cmp';
import UkSection from '../../components/home-page-cmp/uk-section/uk-section.cmp';
import UkSectionPrimary from '../../components/home-page-cmp/uk-section-primary/uk-section-primary.cmp';
import UkSectionMuted from '../../components/home-page-cmp/uk-section-muted/uk-section-muted.cmp';

class HomePage extends React.Component {

	render() {
		return (<div>			
			<Header />
			<DiagonalHero />
			<ContainerSmall />
			<UkSection />
			<UkSectionPrimary />
			<UkSectionMuted />
		</div>);
	}
}

export default HomePage;