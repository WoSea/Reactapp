import React from 'react';
// Engine
import { getData, myLocation } from '../../engine';
import { objectHasProperty } from '../../engine/tools';
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const location = myLocation();
        const newState = getData(location);
        Promise.all([location, newState])
            .then((data) => {
                if (objectHasProperty(data[0], 'error')) {
                    this.setState({
                        ...data[0],
                    });
                } else {
                    this.setState({
                        ...data[1],
                    });
                }
            });
    }
    render() {
        const obj = this.state;
        console.log('Data Object', obj); return (
            <h1>
                Hello World!
            </h1>
        );
    }
}
export default Weather;