const cardname = document.getElementById('cardname')
const cardholderinput = document.getElementById('cardholderinput')
const cardmonth = document.getElementById('cardmonth')
const cardyear = document.getElementById('cardyear')
const cardyearinput = document.getElementById('cardyearinput')
const cardmonthinput = document.getElementById('cardmonthinput')
const cvcbtn = document.getElementById('cvcbtn')
const cvcholder = document.getElementById('cvcholder')
const cardnumberholder = document.getElementById('cardnumberholder')
const Cardholdernumberinput = document.getElementById('Cardholdernumberinput')
const comfirmbtn = document.getElementById('comfirmbtn')
const successmessage = document.getElementById('successmessage')
const formplace = document.getElementById('formplace')
const inputsdata = [
    {
        data:cardnumberholder,
        inputdata:Cardholdernumberinput,
        spaces:true ,
        type:1,
        label : '0000 0000 0000 0000'
    },
    {
        data:cardname,
        inputdata:cardholderinput,
        spaces:false,
        type:2,
        label : 'Cardholdername'
    },
    {
        data:cardmonth,
        inputdata:cardmonthinput,
        spaces:false,
        type:3,
        label:'MM'
    },
    {
        data:cardyear,
        inputdata:cardyearinput,
        spaces:false,
        type:4,
        label:'YY'
    },
    {
        data:cvcholder,
        inputdata:cvcbtn,
        spaces:false,
        type:5,
        label:'CVC',
    },

]
inputsdata.forEach((item) => {
    item.inputdata.addEventListener('input', () => {
        
        if (item.spaces) {
            const text = item.inputdata.value;
            const spacedText = text.replace(/(.{4})(?=.)/g, '$1 ');
            if(item.inputdata.value == ''){
                item.data.innerText = item.label
            }else{
                item.data.innerText = spacedText;
            }
        }else 
            if(item.inputdata.value == ''){
                item.data.innerText = item.label

            }else{
                item.data.innerText = item.inputdata.value;
            }
    });
});
let checkdata = false
comfirmbtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkvalue(); 

    if (checkdata) { // If all fields are filled, show success message
        formplace.classList.add('d-none');
        successmessage.classList.remove('d-none');
    }
});

function checkvalue() {
    checkdata = true; // Assume all fields are valid initially

    inputsdata.forEach((item) => {
        if (item.inputdata.value.trim() === '') { // Check if the field is empty
            item.inputdata.classList.add('redborder');
            checkdata = false; // If any field is empty, prevent submission
        } else {
            item.inputdata.classList.remove('redborder');
     }
   });
}