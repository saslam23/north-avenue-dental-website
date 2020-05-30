import React from 'react';
import Home from "./components/home.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Office from "./components/Office/office.component";
import Patients from "./components/new-patients/new-patients.component";
import Contacts from "./components/contact.component";
import Reviews from "./components/reviews/reviews.component";
import Services from "./components/services.component";
import NotFound from "./components/NotFound.component";
import Doctors from "./components/doctors/doctors.component";
import Gallery from "./components/gallery.component";
import Footer from "./components/Footer/footer.component";
import Success from "./components/message.component";
import Fail from "./components/fail.component";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/office" component={Office} />
          <Route path="/services" component={Services} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/patients" component={Patients} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contacts} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/success" component={Success} />
          <Route path="/fail" component={Fail} />
          <Router path="*"><NotFound /></Router>
        </Switch>
      </Router>
      <Footer />
    </div>
  )

}

export default App;
