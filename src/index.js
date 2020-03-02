module.exports = function toReadable(number) {
    let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    function getHundreds(num) {
        if (num > 99) {
            return numbers[Math.floor(num / 100)] + " hundred " + getTens(num % 100);
        } else {
            return getTens(num);
        }
    }

    function getTens(num) {
        if (num < 10) return numbers[num];
        else if (num >= 10 && num < 20) return tens[num - 10];
        else {
            return teens[Math.floor(num / 10)] + " " + numbers[num % 10];
        }
    }

    function getNumber(num) {
        if (num === 0) return "zero";
        else return getHundreds(num);
    }
    return getNumber(number).trim();
};
