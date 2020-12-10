

function findMax (array, largest=-Infinity) {

  if (array.length === 0) {
    return largest;
  }

  if (array[0] > largest) {
    largest = array[0];
  }

  const rest = array.slice(1);

  return findMax(rest, largest);
}


function sayHello(){
  return 'Hello';
}

module.exports = {
    findMax,
    sayHello
}
