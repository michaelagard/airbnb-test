import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './reset.css';
import FrontPage from './views/FrontPage/FrontPage';
import MapView from './views/MapView/MapView';
import TestView from './views/TestView/TestView';
// import SignUp from './views/SignUp/SignUp';
// import UploadForm from './views/UploadForm/UploadForm';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={FrontPage} />
      <Route path='/mapview' component={MapView} />
      <Route path='/testview' component={TestView} />
      {/* <Route path='/signup' component={SignUp} />
      <Route path='/upload' component={UploadForm} /> */}
    </Router>
  );
}
