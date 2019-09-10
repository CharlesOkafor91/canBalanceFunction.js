function canBalance(array) {
  //looping through the array
  for (var i = 1; i < array.length; i++) {
    var p1 = array.slice(0,i);
    var p2 = array.slice(i);
    var sum1 = p1.reduce((a, b) => a + b, 0);
    var sum2 = p2.reduce((a, b) => a + b, 0);
    if (sum1 == sum2) {
      var bool = true;
      break;
    } else {
      bool = false;
    }
  };
  return bool;

}
