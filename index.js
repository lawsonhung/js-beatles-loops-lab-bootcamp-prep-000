// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var i;
  
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  
  while (i < facts.length) {
    facts[i].push("!!!");
    i++;
  }
}