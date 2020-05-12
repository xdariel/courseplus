import React from 'react';
import Header from '../header/header.cmp';
import OverlaySearch from '../overlay-search-mobile/overlay-search.cmp';
import Content from '../content/content.cmp';
import Footer from '../footer/footer.cmp';

const Wrapprer = () => {
	return ( <div id="wrapper">
      <Header />
			<OverlaySearch />
			<Content />
			<Footer />

	</div> );
}
 
export default Wrapprer;