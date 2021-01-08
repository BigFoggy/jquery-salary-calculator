$( document ).ready( firstFunction );
//variables

//end variables

//functions

function firstFunction( param0, param1 ){
  console.log( 'in firstFunction' );
  let answer = param0 + param1;
  return answer;
}//end firstfunction

//end functions
console.log( 'firstFunction (2, 3)', firstFunction( 2, 3 ));
console.log( 'firstFunction (2, 7)', firstFunction( 2, 7 ));