import React from 'react';
import { HashRouter } from "react-router-dom";
import Routerview from './router/index.js';

const App = function App() {
    return <div className="App-box">
        <HashRouter>
            <Routerview className='router-view' />
        </HashRouter>
    </div>
}

export default App;