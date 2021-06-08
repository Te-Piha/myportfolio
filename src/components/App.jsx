import '../App.css';
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Nav from './Nav'

import HomeTest from './HomeTest'
import CodingMainPage from './CodingMainPage'
import StoryMainPage from './StoryMainPage'
import Entrepreneurship from './Entrepreneurship'

function App() {
  return (
    <>
    <Redirect to="/Homepage" />
    <Route path='/' component={Nav}/>
    <Route path='/Homepage' component={HomeTest}/>
    <Route path='/Coding' component={CodingMainPage}/>
    <Route path='/Story' component={StoryMainPage}/>
    <Route path='/Entrepreneurship' component={Entrepreneurship}/>
  </>
  );
}

export default App;
