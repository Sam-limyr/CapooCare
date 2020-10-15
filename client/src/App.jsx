import React from "react";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import UserProfile from "containers/UserProfile";


const App = () => {
    return (
        <div className="container">
            <UserProfile/>
        </div>
    )
};

export default App;