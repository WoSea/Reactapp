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
    getForecastRowRisesAndSets, getForecastRowTemperatures,
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
        let sUnit = '';
        const { activeUnit, defaultUnit, isBrowserMetric } = this.state;
        const isEmpty = isObjectEmpty(this.props);
        if (isBrowserMetric) {
            sUnit = activeUnit ? 'metric' : 'imperial';
        } else {
            sUnit = activeUnit ? 'imperial' : 'metric';
        }
        const { current, forecast, location } = this.props || {};
        let isDay = true;
        let nCondition = '';
        let forecastCurrentDay = {}; if (!isEmpty) {
            if (current[currentUnitType.other.isDay] === 0) {
                isDay = false;
            }
            nCondition = current.condition.code;
            forecastCurrentDay = getForecastCurrentDay(forecast.forecastday[0],
                forecastUnitType, sUnit);
        }
        return (
            <div>
                {isEmpty && (
                    <Grid divided="vertically">
                        <Grid.Row columns={1}>
                            <Grid.Column textAlign="center">
                                <h2>
                                    Weather Report
    </h2>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                )}
                {!isEmpty && (
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Header size="tiny" floated="right">
                                    {getDayStringFromEpoch(current[currentUnitType.other.lastUpdated], 'long')}
                                    {', '}
                                    {getDateStringFromEpoch(current[currentUnitType.other.lastUpdated])}
                                </Header>
                            </Grid.Column>
                            <Grid.Column textAlign="center">
                                <Header as="h2" icon textAlign="center">
                                    <i className={`weather-spacer wi
    wi-${getApixuIconName(isDay, nCondition)} ${getkApixuColor(isDay,
                                        nCondition)}`} />
                                    <Header.Content><br />
                                        {current.condition.text}
                                    </Header.Content>
                                    <Statistic size="huge">
                                        <Statistic.Value>
                                            {current[currentUnitType[sUnit].temperature.actual]}
                                        </Statistic.Value>
                                    </Statistic>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                    </Grid>
                )}
            </div>
        );
    }
}
export default WeatherReport;