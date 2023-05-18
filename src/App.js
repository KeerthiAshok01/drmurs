import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/loginSignUp/Login";
import SignUp1 from "./pages/loginSignUp/SignUp1";
import SignUp2 from "./pages/loginSignUp/SignUp2";
import SignUp3 from "./pages/loginSignUp/SignUp3";
import SignUp4 from "./pages/loginSignUp/SignUp4";
import DreamCommunity from "./pages/DreamCommunity";
import ZillionVilla from "./pages/ZillionVilla";
import Story from "./components/main/FeedStory";
import Profile from "./pages/main/Profile";
import Settings from "./pages/main/Settings/Settings";
import LoginRoute from "./routes/LoginRoute";
import LayoutRoute from "./routes/LayoutRoute";
import NewsFeed from "./pages/main/NewsFeed";
import FutureStudio from "./pages/FutureStudio";
import ForgotPassword from "./pages/loginSignUp/ForgotPassword";
import Help from "./pages/main/Settings/Help";
import CreatingUserAccount from "./pages/main/Settings/CreatingUserAccount";
import NavigationMap from "./pages/main/Settings/NavigationMap";
import Tips from "./pages/main/Settings/Tips";
import DataPolicy from "./pages/main/Settings/DataPolicy";

export default function App() {
  return (
    <Router>
      <Switch>
        <LoginRoute exact path="/" component={Login} />
        <Route exact path="/signup1" component={SignUp1} />
        <Route exact path="/signup2" component={SignUp2} />
        <Route exact path="/signup3" component={SignUp3} />
        <Route exact path="/signup4" component={SignUp4} />
        <Route exact path="/feed-story" component={Story} />
        <LayoutRoute exact path="/profile" component={Profile} active={0} />
        <LayoutRoute exact path="/news-feed" component={NewsFeed} active={1} />
        <LayoutRoute
          exact
          path="/future-studio"
          component={FutureStudio}
          active={2}
        />
        <LayoutRoute
          exact
          path="/dream-community"
          component={DreamCommunity}
          active={3}
        />
        <LayoutRoute
          exact
          path="/zillion-villa"
          component={ZillionVilla}
          active={4}
        />
        <LayoutRoute exact path="/settings" component={Settings} active={5} />
        <LayoutRoute exact path="/help" component={Help} active={5} />
        <LayoutRoute
          exact
          path="/create"
          component={CreatingUserAccount}
          active={5}
        />
        <LayoutRoute
          exact
          path="/navigationmap"
          component={NavigationMap}
          active={5}
        />
        <LayoutRoute exact path="/tips" component={Tips} active={5} />
        <LayoutRoute
          exact
          path="/dataPolicy"
          component={DataPolicy}
          active={5}
        />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}
