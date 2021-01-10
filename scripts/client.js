$(document).ready(onReady);

//functions

function onReady(){
  //append test data fields. if added can only add 1 new
  /*$('#empTbl tbody').append(`
    <tr>
      <td>FirstName</td>
      <td>LastName</td>
      <td>ID</td>
      <td>Title</td>
      <td>AnnualSalary</td>
      <td><button id='dButton'>Delete</button></td>
    </tr>
  `);*/
  let tSalary = 0;

  $('#sButton').on('click', function(event){
    let fName = $('#inputFName').val();
    let lName = $('#inputLName').val();
    let iNumber = $('#inputIdNumber').val();
    let iTitle = $('#inputTitle').val();
    let aSalary = $('#inputAnSalary').val();
      //$('#empTbl tbody').empty();
      $('#empTbl tbody').append(`
        <tr>
          <td>${fName}</td>
          <td>${lName}</td>
          <td>${iNumber}</td>
          <td>${iTitle}</td>
          <td>${aSalary}</td>
          <td><button class='dButton'>Delete</button></td>
        </tr>
      `);
    tSalary += Number(aSalary) / 12;
   
  $('#cash').empty();
  $('#cash').append(`${tSalary}`);
    
  });
  if (tSalary > 20000){
    $('#tMonthly').css('bacground-color', 'red')
  } 

  $('#empTbl tbody').on('click', function(event){//not targeting right
    const thingThatWasClickedOn = $(event.target);
    thingThatWasClickedOn.closest('tr').remove();
    
  });
}//end firstfunction

//end functions
console.log('Connected');