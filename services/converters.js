// Convert celcius to farenheit
export const ctoF = (c) => (c * 9) / 5 + 32;

// Convert meters per second to miles per hour
export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

// Convert kilometers to miles
export const kmToMiles = (km) => (km / 1.609).toFixed(1);

// Convert time to 12 hour format
export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

// Array divide for wind direction
export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

// Convert to local time
export const unixToLocalTime = (unixSeconds, timezone) => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)[0];

  return time.startsWith("0") ? time.substring(1) : time;
};
