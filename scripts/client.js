$(document).ready(onReady);
let tSalary = 0;
//functions

function onReady(){
 $('#sButton').on('click', function(event){//when the submit button is clicked
    let fName = $('#inputFName').val();//setting variables catch form field
    let lName = $('#inputLName').val();
    let iNumber = $('#inputIdNumber').val();
    let iTitle = $('#inputTitle').val();
    let aSalary = $('#inputAnSalary').val();
  //append in above variables from fields to body of table
  $('#empTbl tbody').append(`
        <tr>
          <td>${fName}</td>
          <td>${lName}</td>
          <td>${iNumber}</td>
          <td>${iTitle}</td>
          <td class='sal'>${aSalary}</td>
          <td><button class='dButton'>Delete</button></td>
        </tr>
      `);
  $('#inputFName').val('');//empties form
  $('#inputlName').val('');
  $('#inputIdNumber').val('');
  $('#inputTitle').val('');
  $('#inputAnSalary').val('');

    tSalary += Number(aSalary) / 12;//equation to calculate accumlated salary
  updateMonthlyTotal();//run update function from line 36
   $('.dButton').off('click');//used to stop propagation of delete button click
   $('.dButton').on('click', function(event){//targets the nearest parent with id for removal from table
    const thingThatWasClickedOn = $(event.target);//setting needed variables
    let aSalary = thingThatWasClickedOn.closest('tr').find('.sal').text();
    let newvar = Number(aSalary) / 12;//converts string to number and evaluates to monthly
    tSalary -= newvar;//equation to calculate decreased salary
    thingThatWasClickedOn.closest('tr').remove();
  updateMonthlyTotal();//run update function from line 36
    })
});
}//end onReady function
function updateMonthlyTotal(){//empties and appends the salary to the DOM with css modifier
  $('#cash').empty();
  $('#cash').append(`${tSalary.toFixed(2)}`);//adds salary and sets it to 2 decimal points
  if (tSalary >= 20000){
    $('#tMonthly').addClass('redBack');
  }
  else {
    $('#tMonthly').removeClass('redBack');
  }
}
//end functions
console.log('Testing');