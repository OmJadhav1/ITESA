import React from "react";
//react-router-dom
import { BrowserRouter as Router, Route } from "react-router-dom";
//components
// import Technical from "./components/Teams/Technical/Technical";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Management from "./components/Teams/Management/Management";
// import Cultural from "./components/Teams/Cultural/Cultural";
// import Design from "./components/Teams/Design/Design";
// import PastTeams from "./components/Teams/PastTeams/PastTeams";
//pages
// import Home from "./components/Pages/Home/Home";
// import Contact from "./components/Pages/Contact-Us/Contact";
// import Events from "./components/Pages/Events/Events";
// //utils
// import PageNotFound from "./components/utils/404ErrPage/PageNotFound";
import ScrollToTop from "./components/utils/ScrollToTop/ScrollToTop";
// import { ToastContainer } from "material-react-toastify";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="toast">
          {/* <ToastContainer position="top-right" /> */}
        </div>
        <Navbar />
        {/* <Switch>
          <Route exact path="/" component={Home} />
        </Switch> */}
        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
};

//Backend-testing on heroku :)

export default App;
