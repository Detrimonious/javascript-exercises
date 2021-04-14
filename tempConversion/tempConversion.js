const ftoc = function(temperature) {

  temperature = (temperature - 32) / 9 * 5;
  return parseFloat(temperature.toFixed(1));

}

const ctof = function(temperature) {

  temperature = temperature * 9 / 5 + 32;
  return parseFloat(temperature.toFixed(1));

}

module.exports = {
  ftoc,
  ctof
}
