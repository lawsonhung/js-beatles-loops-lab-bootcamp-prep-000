// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var i;
  
  for (let i = 0; i < musicians.length; i++) {
    array[i].push(`${musicians[i]} plays ${instruments[i]}`);
  }
}