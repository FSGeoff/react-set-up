import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Page5 from "./Components/Page5/Page5";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Home from "./Components/Home/Home";


function App() {
    return (
        <>
            <img
                src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"
                height="100vh" alt="react logo"/>

            <div className="App">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                        <Route path="/page3" component={Page3}/>
                        <Route path="/page4" component={Page4}/>
                        <Route path="/page5" component={Page5}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default App;
