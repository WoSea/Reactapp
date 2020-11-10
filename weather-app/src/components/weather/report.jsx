import React from 'react';
import {
    Divider,
    Grid,
    Header,
    Icon,
    Responsive,
    Statistic,
} from 'semantic-ui-react';
// External Libraries
import locale2 from 'locale2';
// Sibling Components
// import ControlUnits from './control-units';
// import ForecastRowDayNames from './forecast-row-day-names';
// import ForecastRowIcons from './forecast-row-icons';
// import ForecastRowRisesAndSets from './forecast-row-rises-and-sets';
// import ForecastRowTemperatures from './forecast-row-temperatures';
// import GridResponsiveLocationData from './grid-responsive-location-data';
// import RowMiscellaneous from './row-miscellaneous';
// import RowSunMoon from './row-sun-moon';
// import RowWind from './row-wind';
// Custom Code
import {
    getCurrentMiscellaneous,
    getCurrentWind,
    getForecastCurrentDay,
    getForecastRowDayNames,
    getForecastRowIcons,
    getForecastRowRisesAndSets,
    getForecastRowTemperatures,
} from './data-snippets';
import { getDateStringFromEpoch, getDayStringFromEpoch, isObjectEmpty }
    from '../../engine/tools';
import { currentUnitType, forecastUnitType } from './utilities';
import { getkApixuColor, getApixuIconName } from './icon-map';
// Custom Styles
import 'weather-icons-tmp/css/weather-icons.min.css';
import 'weather-icons-tmp/css/weather-icons-wind.min.css';
import './index.css';
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
        const isEmpty = isObjectEmpty(this.props);
        return (
            <div>
                {isEmpty && (
                    <Grid divided="vertically">
                        <Grid.Row columns={1}>
                            <Grid.Column textAlign="center">
                                <h2>Weather Report
</h2>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                )}
            </div>
        );
    }
}
export default WeatherReport;