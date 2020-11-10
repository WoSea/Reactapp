const currentUnitType = {
  other: {
    cloud: "cloud",
    cloudUnit: "%",
    humidity: "humidity",
    humidityUnit: "%",
    isDay: "is_day",
    lastUpdated: "last_updated_epoch",
    wind: {
      degrees: "wind_degree",
      direction: "wind_dir",
    },
  },
  imperial: {
    precipitation: {
      amount: "precip_in",
      unit: "in",
    },
    pressure: {
      amount: "pressure_in",
      unit: "in",
    },
    temperature: {
      actual: "temp_f",
      feelsLike: "feelslike_f",
      unit: "&#x00B0;F",
    },
    visibility: {
      vis: "vis_miles",
      unit: "mi",
    },
    wind: {
      speed: "wind_mph",
      unit: "mi/h",
    },
  },
  metric: {
    precipitation: {
      amount: "precip_mm",
      unit: "mm",
    },
    pressure: {
      amount: "pressure_mb",
      unit: "mb",
    },
    temperature: {
      actual: "temp_c",
      feelsLike: "feelslike_c",
      unit: "&#x00B0;C",
    },
    visibility: {
      vis: "vis_km",
      unit: "km",
    },
    wind: {
      speed: "wind_kph",
      unit: "km/h",
    },
  },
};
const forecastUnitType = {
  other: {
    uv: "uv",
    humidity: {
      average: "avghumidity",
      unit: "%",
    },
    astro: {
      moonrise: "moonrise",
      moonset: "moonset",
      sunrise: "sunrise",
      sunset: "sunset",
    },
  },
  condition: {
    text: "text",
    icon: "icon",
    code: "code",
  },
  imperial: {
    temperature: {
      average: "avgtemp_f",
      max: "maxtemp_f",
      min: "mintemp_f",
    },
  },
  metric: {
    temperature: {
      average: "avgtemp_c",
      max: "maxtemp_c",
      min: "mintemp_c",
    },
  },
};
export { currentUnitType, forecastUnitType };
