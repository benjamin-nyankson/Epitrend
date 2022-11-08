

var x = 0;
var array = Array();
var myarr=[];
let myData = {}

 let symptoms = document.getElementById('symptom');
function add_to_arr(){

    if(symptoms.value==""){
        symptoms.focus();
        document.getElementById('patient_symptom').innerHTML='You entered nothing';
        return false;
    }

   
    else if(!isNaN(symptoms.value)){
        symptoms.focus();
        document.getElementById('patient_symptom').innerHTML='Please enter text only';
        return false;

    }

    else if(/[!@$%&#=|^*-+><?]/.test(symptoms.value)){
        symptoms.focus();
        document.getElementById('patient_symptom').innerHTML='Unacceptable characters entered';
        return false;
    }

   else{

array[x] = document.getElementById("symptom").value;
x++;
document.getElementById("symptom").value = "";

var e = "";  
   
   for (var y=0; y<array.length; y++){
     e += array[y] + ", ";
   }


}
var result = document.getElementById("result");
result.style.display="block"; 
result.innerHTML = e;
document.getElementById('patient_symptom').innerHTML='';
console.log('Hello Choices')

console.log(array)
   }

let age = document.getElementById('age');
let date = document.getElementById('date');
let pulse = document.getElementById('pulse');
let temp = document.getElementById('temp');
let patient_age=document.getElementById('patient_age');
let day=document.getElementById('day');
let temperature = document.getElementById('temperature');
let respiratory = document.getElementById('respiratory');
let result=document.getElementById('result');

function age1(){
    if(age.value<0){
        age.focus();
        patient_age.innerHTML="Invalid age";
        return false;
        

    }

    else{
        patient_age.innerHTML="";

    }
}




var form =document.getElementById('form');
var error = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    


    if(age.value==""){
        age.focus();
        patient_age.innerHTML="Please Enter age";
        return false;
    }
    else if(age.value<0 || age.value>130){
        age.focus();
        patient_age.innerHTML="Invalid Age ";
        return false;

    }

    else{
        patient_age.innerHTML="";

    }

   

    if (pulse.value==""){
        document.getElementById('patient_pulse').innerHTML="Enter Pulse rate";
        e.preventDefault();
        return false;


    }

    else if(pulse.value<=0){
        document.getElementById('patient_pulse').innerHTML="Invalid pulse";
        return false;

    }

    else{
        document.getElementById('patient_pulse').innerHTML="";

    }

    if(temperature.value==""){
        temperature.focus();
        document.getElementById('temp').innerHTML="Please enter body temperature";
        return false;
    }

    else if(temperature.value<=0){
        temperature.focus();
        document.getElementById('temp').innerHTML="Abnormal";
        return false;
    }

    else{
        document.getElementById('temp').innerHTML="";

    }

    

    if(result.innerHTML==""){
        symptoms.focus();
        document.getElementById('patient_symptom').innerHTML='Please add at least one symptom';
        return false;
    }
    else{
    document.getElementById('patient_symptom').innerHTML='';
    document.getElementById("symptom").value = array;
    console.log('My jashdjahdjad')

    }
    const formData = new FormData(myForm)
   
    const data = Object.fromEntries(formData);
    myData = data
    aaaa= []
    for(let a = 0; a< array.length; a++ ){
        aaaa.push({'name':array[0]})
    }
    myData['symptom'] = aaaa 
    console.log('hashahhsahahsha')
    let vital = [
        {
            'name':'temperature',
            'value': 0,
            'unit': 'C'
        },
       
        {
            'name':'pulse rate',
            'value': 0,
            'unit': 'PR'
        },
        {
            'name':'respiratory rate',
            'value': 0,
            'unit': 'PR'
        }
    ]

        vital[0]['value'] = parseInt(data['temperature']) 
        vital[1]['value'] = parseInt(data['pulse']) 
        vital[2]['value'] =parseInt(data['respiratory'] )
        // delete myData['pulse']

        region = {
            'name': data['region']
        }
        myData['vital'] = vital 
        myData['region'] = region
        myData['age'] = parseInt(data['age'])

        delete myData['temperature']
        delete myData['respiratory']
        delete myData['pulse']




    

 console.log(myData);
    // inputs.forEach(input => input.value = "");
    // result.innerHTML="";



})

const myForm=document.querySelector('#form');
let inputs = document.querySelectorAll('input');

myForm.addEventListener('submit', event=>{
event.preventDefault();

// const myData = new FormData(myForm);
// const data1 = Object.fromEntries(myData);

console.log(myData);
    fetch('https://epitrend.herokuapp.com/api/',{
     method:'POST',
     Headers:{
         'Content-Type':'application/json'
 
     },

     body:JSON.stringify(myData)
    
    }).then(res =>res)
    .then(data => { alert('Data submitted successfully'); console.log(data)})
    .catch(error => console.log(error))
     
    // document.location.reload();
});