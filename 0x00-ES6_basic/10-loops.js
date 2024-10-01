export default function appendToEachArrayValue(array, appendString) {
  const newValue = [];
  for (let value of array) {
    value = appendString + value;
    newValue.push(value);
  }

  return newValue;
}
