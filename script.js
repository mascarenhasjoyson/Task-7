var row=1;
var submit=document.getElementById("submit");
submit.addEventListener("click",displayElements);
function displayElements()
{
    var firstName=document.getElementById("first-name").value;
    var lastName=document.getElementById("last-name").value;
    var address=document.getElementById("address").value;
    var pinCode=document.getElementById("pincode").value;
    var state1=document.getElementById("state").value;
    var nation=document.getElementById("country").value;

    var radio=document.querySelectorAll('input[name="gender"]:checked');
    let gender = [];
    radio.forEach((rad) => {
    gender.push(rad.value);
});

    var checkboxes=document.querySelectorAll('input[name="food"]:checked');
    let foods = [];
    checkboxes.forEach((checkbox) => {
    foods.push(checkbox.value);
});
    

    var display=document.querySelector("#table>tbody");
    var newrow=display.insertRow(row);

    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);
    var cell6=newrow.insertCell(5);
    var cell7=newrow.insertCell(6);
    var cell8=newrow.insertCell(7);
    
    cell1.innerHTML=firstName;
    cell2.innerHTML=lastName;
    cell3.innerHTML=address;
    cell4.innerHTML=pinCode;
    cell5.innerHTML=gender;
    cell6.innerHTML=foods;
    cell7.innerHTML=state1;
    cell8.innerHTML=nation;
    
    row++;
}

const form = document.getElementById('submit');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.target.reset();
});