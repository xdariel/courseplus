import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.page';
import CourseIntro2Page from './pages/course-intro-2/course-intro-2.page';
import CourseIntroPage from './pages/course-intro/course-intro.page';

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path='/' component={HomePage} />
        <Route path='/course-intro' component={CourseIntroPage} />
        <Route path='/course-intro-2' component={CourseIntro2Page} />
      </HashRouter>

    </div>
  );
}

export default App;
