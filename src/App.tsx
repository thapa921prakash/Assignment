import React from "react";
//router
import { BrowserRouter as Router } from "react-router-dom";
//layout
import Layout from "./components/layout";
//components
import RouteList from "./components/route-list";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Layout>
          <RouteList />
        </Layout>
      </Router>
    </>
  );
};

export default App;
