import './App.css';
import Header from './Components/Header';
import Webpage from "./Components/Webpage";
import Segment from './Segment';
import Resource from './Resource'
// import Webpages from "./Components/Webpages";
// import Webpaging from "./Components/Webpaging";
import Footer from "./Components/Footer";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Service from './Components/Service';

function App() {
  return (
    
      <>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Webpage/>}/>
        <Route exact path="/Segment.js" element={<Segment/>}/>
        <Route exact path="/resources.js" element={<Resource/>}/>
        {/* <Route exact path="/service" element={<Service/>}/>         */}
        {/* <Route exact path="/market.js" element={<Market/>}/> */}
      </Routes>

        
      <Footer/>
      </Router>
       
      </>

   
  );
}

export default App;
