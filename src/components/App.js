import '../App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MovieInfo from "./MovieInfo";
import NavigationDemo from "./NavigationDemo";
import Default from "./Default";

const App = () => {
    return (

        // todo 这里的路由如何设置
        <Router>
            <Routes>
                <Route exact path="/" component={Default}/>
                <Route path="/MovieInfo" component={MovieInfo}/>
                <Route path="/Navigation" component={NavigationDemo}/>
            </Routes>
        </Router>
    )
}

export default App;
