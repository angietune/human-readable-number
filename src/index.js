module.exports = function toReadable (number) {
  const digits = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
  const decim = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};
  let dig = number % 10;
  let hun = parseInt(number / 100);
  if (number < 20) return digits[number];
  if (number >= 20 && number <= 99) {
    let dec = parseInt(number / 10);
    if (dig == 0) {
        return decim[dec];
    } else {
        return decim[dec] + ' ' + digits[dig];
    }
  } else {
    let dec1 = parseInt((number % 100) / 10);
    if (number % 100 === 0) {
        return digits[hun] + ' hundred';
    } else if (number % 100 < 20) {
        return digits[hun] + ' hundred ' + digits[number % 100];
    } else if (number % 10 === 0) {
        return digits[hun] + ' hundred ' + decim[dec1];
    } else {
        return digits[hun] + ' hundred ' + decim[dec1] + ' ' + digits[(number % 100) % 10];   
    }
    }
}
