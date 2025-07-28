'use srict';

const typeSelection = document.getElementById('menu');
const unitSelection = document.getElementById(`unit`);
const unitsDropdown = document.getElementById('units');
const invertBtn = document.querySelector(`.switch-button`);
const convertBtn = document.querySelector(`.convert-button`);
const unitValue = document.querySelector(`.input-value`);
const outputValue = document.querySelector(`.value-output`);

let invertUnits = false;

const tempValues = [`Celcius`, `Fahrenheit`, 'Celcius', 'Kelvin'];
const lengthValues = [
  `Inches`,
  `Centimeters`,
  `Feet`,
  `Meters`,
  `Miles`,
  `Kilometers`,
  `Yards`,
  `Meters`,
];
const weightValues = [
  `Pounds`,
  `Kilograms`,
  `Ounces`,
  `Grams`,
  `Tons`,
  `Metric Tonnes`,
];
const volumeValues = [
  `Liters`,
  `Milliliters`,
  `Gallons (US)`,
  `Liters`,
  `Cups`,
  `Milliliters`,
];
const speedValues = [
  `Kilometers/hour`,
  `Miles/hour`,
  `Meters/second`,
  `Feet/second`,
];

typeSelection.addEventListener(`change`, function () {
  const menuValue = typeSelection.value;
  updateUnits(menuValue);
});

invertBtn.addEventListener(`click`, function () {
  invertUnits = !invertUnits;
  updateUnits(typeSelection.value);
});

convertBtn.addEventListener(`click`, function () {
  const valueToConvert = unitValue.value;
  if (!isNaN(valueToConvert) && valueToConvert.trim() !== '') {
    outputValue.textContent = makeConversion(Number(valueToConvert));
  } else {
    outputValue.textContent = `Invalid value!`;
  }
});

function updateUnits(unitType) {
  const units = unitType;
  const selectedOptionIdx = unitsDropdown.selectedIndex;
  console.log(selectedOptionIdx);

  // Remove all current options
  unitsDropdown.innerHTML = '';

  switch (units) {
    case 'Temperature':
      updateUnitOptions(tempValues);
      break;
    case `Length / Distance`:
      updateUnitOptions(lengthValues);
      break;
    case `Weight / Mass`:
      updateUnitOptions(weightValues);
      break;
    case `Volume / Capacity`:
      updateUnitOptions(volumeValues);
      break;
    case `Speed`:
      updateUnitOptions(speedValues);
      break;
  }
  unitsDropdown.selectedIndex = selectedOptionIdx;
}

function updateUnitOptions(dataValues) {
  if (invertUnits) {
    for (let i = 1; i < dataValues.length; i += 2) {
      const newOption = document.createElement('option');
      newOption.value = dataValues[i] + ' ↔ ' + dataValues[i - 1];
      newOption.text = dataValues[i] + ' ↔ ' + dataValues[i - 1];
      unitsDropdown.add(newOption);
    }
  } else {
    for (let i = 0; i < dataValues.length; i += 2) {
      const newOption = document.createElement('option');
      newOption.value = dataValues[i] + ' ↔ ' + dataValues[i + 1];
      newOption.text = dataValues[i] + ' ↔ ' + dataValues[i + 1];
      unitsDropdown.add(newOption);
    }
  }
}

function makeConversion(value) {
  switch (unitsDropdown.value) {
    // Converting the temps
    case `Celcius ↔ Fahrenheit`:
      return value * 1.8 + 32;
      break;
    case `Fahrenheit ↔ Celcius`:
      return Math.round((value - 32) * (1 / 1.8) * 10) / 10;
      break;
    case `Celcius ↔ Kelvin`:
      return value + 273.15;
      break;
    case `Kelvin ↔ Celcius`:
      return value - 273.15;
      break;

    //Converting Lengths
    case `Inches ↔ Centimeters`:
      return value * 2.54;
      break;
    case `Centimeters ↔ Inches`:
      return value / 2.54;
      break;
    case `Feet ↔ Meters`:
      return value * 0.3048;
      break;
    case `Meters ↔ Feet`:
      return Math.round((value / 0.3048) * 100) / 100;
      break;
    case `Miles ↔ Kilometers`:
      return Math.round(value * 1.609 * 10) / 10;
      break;
    case `Kilometers ↔ Miles`:
      return Math.round((value / 1.609) * 10) / 10;
      break;
    case `Yards ↔ Meters`:
      return Math.round(value * 0.9144 * 100) / 100;
      break;
    case `Meters ↔ Yards`:
      return Math.round((value / 0.9144) * 100) / 100;
      break;

    //Converting Weights
    case `Pounds ↔ Kilograms`:
      return Math.round(value * 0.4536 * 100) / 100;
      break;
    case `Kilograms ↔ Pounds`:
      return Math.round((value / 0.4536) * 100) / 100;
      break;
    case `Ounces ↔ Grams`:
      return Math.round(value * 28.35 * 100) / 100;
      break;
    case `Grams ↔ Ounces`:
      return Math.round((value / 28.35) * 100) / 100;
      break;
    case `Tons ↔ Metric Tonnes`:
      return Math.round(value * 0.907 * 100) / 100;
      break;
    case `Metric Tonnes ↔ Tons`:
      return Math.round((value / 0.907) * 100) / 100;
      break;

    //Converting Volumes
    case `Liters ↔ Milliliters`:
      return Math.round(value * 1000 * 100) / 100;
      break;
    case `Milliliters ↔ Liters`:
      return Math.round((value / 1000) * 100) / 100;
      break;
    case `Gallons (US) ↔ Liters`:
      return Math.round(value * 3.785 * 100) / 100;
      break;
    case `Liters ↔ Gallons (US)`:
      return Math.round((value / 3.785) * 100) / 100;
      break;
    case `Cups ↔ Milliliters`:
      return Math.round(value * 237 * 100) / 100;
      break;
    case `Milliliters Tonnes ↔ Cups`:
      return Math.round((value / 237) * 100) / 100;
      break;

    //Converting Speeds
    case `Kilometers/hour ↔ Miles/hour`:
      return Math.round(value * 0.621 * 100) / 100;
      break;
    case `Miles/hour ↔ Kilometers/hour`:
      return Math.round((value / 0.621) * 100) / 100;
      break;
    case `Meters/second ↔ Feet/second`:
      return Math.round(value * 3.281 * 100) / 100;
      break;
    case `Feet/second ↔ Meters/second`:
      return Math.round((value / 3.281) * 100) / 100;
      break;
  }
}
