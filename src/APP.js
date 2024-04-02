import './css/App.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
    const goToPage = () => {
        navigate('/page')
    }

    const navigate = useNavigate();
    return (
        <div>
            <h3>this is App</h3>
            <button onClick={goToPage}>Go to new Page</button>
        </div>
    );
}

export default App;

