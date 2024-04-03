import './css/App.css';
import React from 'react';
import useNavigatePage from "./services/NavigateService";

function App() {
    const goToPage = useNavigatePage();
    return (
        <div>
            <h3>this is App</h3>
            <button onClick={goToPage}>Go to movie Page</button>
        </div>
    );
}

export default App;

