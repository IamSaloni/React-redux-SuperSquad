import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import heroes from '../reducers/heroes_reducer';

class SquadStats extends Component {
    strength() {
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength);
        return strength;
    }

    intelligence() {
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence;
    }

    speed() {
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed);
        return speed;
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h4>Squad Stats</h4>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Overall Strength:</b> {this.strength()}
                    </li>
                    <li className="list-group-item">
                        <b>Intelligence:</b> {this.intelligence()}
                    </li>
                    <li className="list-group-item">
                        <b>Speed:</b> {this.speed()}
                    </li>
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {heroes: state.heroes};
}

export default connect(mapStateToProps,null)(SquadStats);