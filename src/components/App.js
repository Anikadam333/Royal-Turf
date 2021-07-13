import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "./Home";
import About from "./turfbooking/About";
import TimeSlot from "./TimeSlot";
import TurfLIst from "./TurfLIst";

function App() {
  return (
    /*<Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >*/
    <div className="">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/home" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/turfLIst" component={TurfLIst} />
            <PrivateRoute path="/timeslot" component={TimeSlot} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
    /*</Container>*/
  );
}

export default App;
