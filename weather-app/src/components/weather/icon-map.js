// Mapping created using these references:
// http://www.apixu.com/doc/Apixu_weather_conditions.json
// https://github.com/erikflowers/weathericons/pull/170/commits/323abeda22dc8d55c7e32d5e75b4aac435421215
const getkApixuColor = (isDay = true, nType = 1000) => {
  let color = "";
  if (!isDay) {
    color = "midnightblue";
  } else if (nType === 1000) {
    color = "darkorange";
  } else if (
    nType === 1003 ||
    nType === 1006 ||
    nType === 1009 ||
    nType === 1030 ||
    nType === 1069 ||
    nType === 1072 ||
    nType === 1135 ||
    nType === 1147 ||
    nType === 1063 ||
    nType === 1153 ||
    nType === 1168 ||
    nType === 1171 ||
    nType === 1180 ||
    nType === 1183 ||
    nType === 1186 ||
    nType === 1189 ||
    nType === 1192 ||
    nType === 1198 ||
    nType === 1201 ||
    nType === 1204 ||
    nType === 1207 ||
    nType === 1240 ||
    nType === 1243 ||
    nType === 1249 ||
    nType === 1252 ||
    nType === 1255 ||
    nType === 1261 ||
    nType === 1264
  ) {
    color = "grey";
  } else if (
    nType === 1087 ||
    nType === 1195 ||
    nType === 1237 ||
    nType === 1273 ||
    nType === 1276
  ) {
    color = "darkgrey";
  } else if (
    nType === 1066 ||
    nType === 1114 ||
    nType === 1117 ||
    nType === 1210 ||
    nType === 1213 ||
    nType === 1216 ||
    nType === 1219 ||
    nType === 1222 ||
    nType === 1258 ||
    nType === 1279 ||
    nType === 1282
  ) {
    color = "powderblue";
  } else {
    color = "darkorange";
  }
  return color;
};
const getApixuIconName = (isDay = true, nType = 1000) => {
  let sType = "";
  let sDay = "";
  if (nType === 1003 || nType === 1006 || nType === 1009) {
    sType = "cloudy";
  } else if (
    nType === 1066 ||
    nType === 1210 ||
    nType === 1213 ||
    nType === 1216 ||
    nType === 1219 ||
    nType === 1222 ||
    nType === 1225 ||
    nType === 1258
  ) {
    sType = "snow";
  } else if (
    nType === 1069 ||
    nType === 1072 ||
    nType === 1204 ||
    nType === 1207 ||
    nType === 1249
  ) {
    sType = "sleet";
  } else if (nType === 1087 || nType === 1273 || nType === 1276) {
    sType = "thunderstorm";
  } else if (nType === 1114 || nType === 1117) {
    sType = "snow-wind";
  } else if (nType === 1279 || nType === 1282) {
    sType = "snow-thunderstorm";
  } else if (nType === 1030 || nType === 1135 || nType === 1147) {
    sType = "fog";
  } else if (
    nType === 1063 ||
    nType === 1150 ||
    nType === 1153 ||
    nType === 1168 ||
    nType === 1171 ||
    nType === 1198 ||
    nType === 1201 ||
    nType === 1240 ||
    nType === 1243 ||
    nType === 1252 ||
    nType === 1255
  ) {
    sType = "showers";
  } else if (
    nType === 1180 ||
    nType === 1183 ||
    nType === 1186 ||
    nType === 1189 ||
    nType === 1192
  ) {
    sType = "rain-mix";
  } else if (nType === 1195 || nType === 1246) {
    sType = "rain";
  } else if (nType === 1237 || nType === 1261 || nType === 1264) {
    sType = "hail";
  } else if (nType === 1000) {
    sType = isDay ? "sunny" : "clear";
  } else {
    sType = "error";
  }
  sDay = isDay ? "day-" : "night-";
  if (
    nType === 1006 ||
    nType === 1135 ||
    nType === 1195 ||
    nType === 1225 ||
    nType === 1246
  ) {
    sDay = "";
  }
  return `${sDay}${sType}`;
};
export { getkApixuColor, getApixuIconName };
