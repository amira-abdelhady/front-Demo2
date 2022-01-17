import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserListFunctional from "./pages/UserListFunctional";
import UserForm from "./pages/UserForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserListAPI from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import Products from "./pages/UserListFunctional";
import { LanguageContext } from "./context/languageContext";

const App = () => {
  // const [contextLang, setContextLang] = useState("en");
  return (
    <div
      className={contextLang === "ar" ? "text-right" : "text-left"}
      dir={contextLang === "ar" ? "rtl" : "ltr"}
    >
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={UserListFunctional} />
            <Route path={"/user"} exact component={UserListAPI} />
            <Route path={"/user/:id"} exact component={UserDetails} />
            <Route path={"/user/list"} exact component={UserForm} />
            <Route path={"/user/products"} exact component={Products} />
          </Switch>
          <Footer />
        </Router>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
