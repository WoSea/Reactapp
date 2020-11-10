const getCurrentMiscellaneous = (current, currentUnitType, sUnit, uv) => ({
  humidity: current[currentUnitType.other.humidity],
  precipitation: current[currentUnitType[sUnit].precipitation.amount],
  pressure: current[currentUnitType[sUnit].pressure.amount],
  uv,
  units: {
    humidity: currentUnitType.other.humidityUnit,
    precipitation: currentUnitType[sUnit].precipitation.unit,
    pressure: currentUnitType[sUnit].pressure.unit,
  },
});
const getCurrentWind = (current, currentUnitType, sUnit) => ({
  degrees: current[currentUnitType.other.wind.degrees],
  direction: current[currentUnitType.other.wind.direction],
  speed: current[currentUnitType[sUnit].wind.speed],
  wind_kph: current.wind_kph,
  unit: currentUnitType[sUnit].wind.unit,
});
const getForecastCurrentDay = (forecast, forecastUnitType, sUnit) => ({
  sun: { rise: forecast.astro.sunrise, set: forecast.astro.sunset },
  moon: {
    rise: forecast.astro.moonrise,
    set: forecast.astro.moonset,
  },
  temperature: {
    minimum: forecast.day[forecastUnitType[sUnit].temperature.min],
    maximum: forecast.day[forecastUnitType[sUnit].temperature.max],
    average: forecast.day[forecastUnitType[sUnit].temperature.average],
  },
});
const getForecastRowDayNames = (days) => ({
  day1: days[1].date_epoch,
  day2: days[2].date_epoch,
  day3: days[3].date_epoch,
  day4: days[4].date_epoch,
  day5: days[5].date_epoch,
});
const getForecastRowIcons = (days, forecastUnitType) => ({
  day1: days[1].day.condition[forecastUnitType.condition.code],
  day2: days[2].day.condition[forecastUnitType.condition.code],
  day3: days[3].day.condition[forecastUnitType.condition.code],
  day4: days[4].day.condition[forecastUnitType.condition.code],
  day5: days[5].day.condition[forecastUnitType.condition.code],
});
const getForecastRowRisesAndSets = (days) => ({
  day1: {
    sunrise: days[1].astro.sunrise,
    sunset: days[1].astro.sunset,
    moonrise: days[1].astro.moonrise,
    moonset: days[1].astro.moonset,
  },
  day2: {
    sunrise: days[2].astro.sunrise,
    sunset: days[2].astro.sunset,
    moonrise: days[2].astro.moonrise,
    moonset: days[2].astro.moonset,
  },
  day3: {
    sunrise: days[3].astro.sunrise,
    sunset: days[3].astro.sunset,
    moonrise: days[3].astro.moonrise,
    moonset: days[3].astro.moonset,
  },
  day4: {
    sunrise: days[4].astro.sunrise,
    sunset: days[4].astro.sunset,
    moonrise: days[4].astro.moonrise,
    moonset: days[4].astro.moonset,
  },
  day5: {
    sunrise: days[5].astro.sunrise,
    sunset: days[5].astro.sunset,
    moonrise: days[5].astro.moonrise,
    moonset: days[5].astro.moonset,
  },
});
const getForecastRowTemperatures = (
  currentUnitType,
  days,
  forecastUnitType,
  sUnit
) => ({
  day1: {
    minimum: days[1].day[forecastUnitType[sUnit].temperature.min],
    maximum: days[1].day[forecastUnitType[sUnit].temperature.max],
  },
  day2: {
    minimum: days[2].day[forecastUnitType[sUnit].temperature.min],
    maximum: days[2].day[forecastUnitType[sUnit].temperature.max],
  },
  day3: {
    minimum: days[3].day[forecastUnitType[sUnit].temperature.min],
    maximum: days[3].day[forecastUnitType[sUnit].temperature.max],
  },
  day4: {
    minimum: days[4].day[forecastUnitType[sUnit].temperature.min],
    maximum: days[4].day[forecastUnitType[sUnit].temperature.max],
  },
  day5: {
    minimum: days[5].day[forecastUnitType[sUnit].temperature.min],
    maximum: days[5].day[forecastUnitType[sUnit].temperature.max],
  },
  unit: currentUnitType[sUnit].temperature.unit,
});
export {
  getCurrentMiscellaneous,
  getCurrentWind,
  getForecastCurrentDay,
  getForecastRowDayNames,
  getForecastRowIcons,
  getForecastRowRisesAndSets,
  getForecastRowTemperatures,
};
