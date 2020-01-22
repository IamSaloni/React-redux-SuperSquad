import React, { Component, Fragment } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import "../styles/index.css";

class App extends Component {
    render() {
        return (
            <Fragment>
            <h2 className="heading">SuperSquad</h2>
            <div className="App">
                <div className="col-md-6 App-item" >
                    <CharacterList />
                </div>
                <div className="col-md-6 App-item">
                    <HeroList />
                </div>
            </div>
            </Fragment>
        )
    }
}

export default App;