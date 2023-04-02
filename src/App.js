import React from "react";
import Header from "./Header";
import Footer from "./Footer";


class App extends React.Component {
  render() {

    return (
      <div className="wrapper">
    <Header/>
    <Footer/>
  </div>
  );
}
}

export default App;
