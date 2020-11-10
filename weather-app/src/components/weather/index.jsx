import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
// Local Components
import ErrorReport from './error';
import WeatherReport from './report';
// Engine
import { getData, myLocation } from '../../engine';
import { objectHasProperty, isObjectEmpty } from '../../engine/tools';
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
        const obj = this.state; const isEmpty = isObjectEmpty(obj);
        const isError = objectHasProperty(obj, 'error');
        return (
            <div>
                <Dimmer active={isEmpty} inverted>
                    <Loader inverted />
                </Dimmer>
                {isError ? <ErrorReport {...obj} /> : <WeatherReport {...obj} />}
            </div>
        );
    }
}
export default Weather;