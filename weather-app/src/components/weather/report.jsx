import React from 'react';
// External Libraries
import locale2 from 'locale2';
class WeatherReport extends React.Component {
    constructor(props) {
        super(props);
        let isBrowserMetric = true;
        // avoid metric if browser is using US locale
        if (locale2.toLowerCase() === 'en-us') {
            isBrowserMetric = false;
        }
        this.state = {
            isBrowserMetric,
            activeUnit: true,
            defaultUnit: isBrowserMetric ? 'metric' : 'imperial',
        };
    }
    render() {
        const { activeUnit, defaultUnit, isBrowserMetric } = this.state;
        return (
            <h1>
                Hello World!
            </h1>
        );
    }
}
export default WeatherReport;