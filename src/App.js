import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.page';
import CourseIntro2Page from './pages/course-intro-2/course-intro-2.page'

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/course-intro-2' component={CourseIntro2Page} />
    </Switch>
  </div>
  );
}

export default App;
