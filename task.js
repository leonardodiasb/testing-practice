function stringLength(string) {
    if (string.length < 1 || string.length > 10) {
        throw new TypeError('Your string must be at least 1 character long and not longer than 10 characters.');
    }
    return string.length;
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

const calc = {
    add: (a, b) => {
        if (typeof a === "string" || typeof b === "string") {
          return undefined;
        }
        return a + b;
      },
      subtract: (a, b) => {
        if (typeof a === "string" || typeof b === "string") {
          return undefined;
        }
        return a - b;
      },
      divide: (a, b) => {
        if (typeof a === "string" || typeof b === "string" || b === 0) {
          return undefined;
        }
        return a / b;
      },
      multiply: (a, b) => {
        if (typeof a === "string" || typeof b === "string") {
          return undefined;
        }
        return a * b;
      },
}

function capitalize(string)  {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = { stringLength, reverseString, calc, capitalize };