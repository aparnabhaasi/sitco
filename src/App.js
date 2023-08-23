import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Common/Navbar/Navbar';
import Footer from './Common/footer/Footer';
import Home from './Components/pages/Home';
import About from './Components/About/About';
import Gallery from './Components/gallery/Gallery';
import Client from './Components/Client/Client';
import Project from './Components/Projects/Project';
import Blog from './Components/Blog/Blog';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Login from './Components/login/Login';
import Register from './Components/login/Register';
import Admin from './Components/pages/Admin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check session storage for login status on page load
    const storedLoginStatus = sessionStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        {/* Render the Navbar for routes that are not /admin */}
        {!window.location.pathname.startsWith('/admin') && !isLoggedIn && <Navbar />}
        {isLoggedIn ? <AdminHeader /> : null}
        <Switch>
          {/* Routes for main pages */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/client" component={Client} />
          <Route path="/project" component={Project} />
          <Route path="/services" component={Blog} />
          <Route path="/career" component={Testimonial} />
          <Route path="/contact" component={Contact} />
          {/* Render the Login component without a header */}
          <Route
            path="/sign-in"
            render={() => (
              <div>
                <Login setIsLoggedIn={setIsLoggedIn} />
              </div>
            )}
          />
          <Route path="/Register/" component={Register} />

          {/* Route for admin page */}
          <Route
            path="/admin"
            render={() =>
              isLoggedIn ? (
                <>
                  {/* Do not render the Navbar on the /admin page */}
                  <Admin />
                </>
              ) : (
                <Redirect to="/sign-in" />
              )
            }
          />
          {/* Redirect to home for any other route */}
          <Redirect to="/" />
        </Switch>
        {/* Render the footer only on main pages */}
        {!window.location.pathname.startsWith('/admin') && !isLoggedIn && (
          <Footer />
        )}
      </div>
    </Router>
  );
}

function AdminHeader() {
  // This component can be used to render the admin header
  return <header></header>;
}

export default App;
