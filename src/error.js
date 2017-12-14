function TypeError(validateName, keys = [], value) {
  if (this instanceof TypeError === false) {
    return new TypeError(validateName);
  }
  this.validator = validateName;
  this.keys = keys.filter(v => v);
  this.value = value;
  this.message =
    'Can not pass the validator "' +
    validateName +
    '" by "' +
    value +
    '" in path "' +
    this.keys.join('.') +
    '"';
}

TypeError.prototype = new Error();
TypeError.prototype.constructor = TypeError;

module.exports = TypeError;
