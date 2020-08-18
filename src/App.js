import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Farmers from "./pages/Farmers";
import Restaurants from "./pages/Restaurants";

function App() {
  // routes
  const routes = [
    { path: "/", Component: Home },
    { path: "/about", Component: About },
    { path: "/farmers", Component: Farmers },
    { path: "/restaurants", Component: Restaurants },
  ];

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <div className="App">
        <Switch>
          {routes.map(({ path, Component, props }) => (
            <Route key={path} exact path={path}>
              <Component {...props} />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
