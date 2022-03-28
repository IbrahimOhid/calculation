let FirstData = prompt("Input FirstData");
let SecondData = prompt("Input SecondData");



FirstData = parseInt(FirstData);
SecondData = parseInt(SecondData);

const ADDED = (FirstData + SecondData);
const REMOVED = (FirstData - SecondData);
const INTO = (FirstData * SecondData);
const MODULUS = (FirstData % SecondData);


document.write("ADDED: " + ADDED + "<br>");
document.write("REMOVED: " + REMOVED + "<br>");
document.write("INTO: " + INTO + "<br>");
document.write("MODULUS: " + MODULUS);