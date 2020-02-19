module.exports = function toReadable(number) {
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'eighty', 'ninety'];

    function getFullNumber(number) {
        
    }

    function getDozens() {

    }

    function getNumber(number) {
        return number === 0 ? "zero" : getFullNumber(number);
    }
};

