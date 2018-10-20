document.write("Everything has Bias");

var pollers = new Array();
var stats = new Array();

var BML = document.getElementById("BML");
BML.innerHTML=5;

var submit_bt = document.getElementById("submit_bt");

submit_bt.onclick = submitButtonClicked

pollers.forEach(person => {

        
});

// poll inpur radio
function submitButtonClicked(){

        var poll =  document.getElementsByClassName("poll-radio");
        var row;
        var col;
  
        temp_person = new Person();

        if(poll[2].checked == true){
                temp_person.gender = "Female";
                col = 0;
        }
        else if(poll[3].checked == true ){
                temp_person.gender = "Male";
                col = 1;
        }
        else {
                temp_person.gender = null;
        }

        if(poll[4].checked ==true){
                temp_person.race= "Black";
                row = 0;
        }
        else if(poll[5].checked == true){
                temp_person.race = "White";
                row = 1;
        }
        else if(poll[6].checked==true){
                temp_person.race = "Hispanic";
                row = 2;
        }
        else if(poll[7].checked==true){
                temp_person.race = "Asian";
                row = 3;
        }
        else if(poll[8].checked==true){
                temp_person.race = "Other";
                row = 4;
        }
        else {
                temp_person.race = null;
        }

        if(poll[0].checked == true ){
                temp_person.opinion = "Like";

        }
    
        else if (poll[1].checked == true ){
                temp_person.opinion = "Dislike";
        }
        else {
                temp_person.opinion = null;
        }


        for(let i=0 ; i< poll.length; i++){
            poll[i].checked =false;
        }
        pollers.push(temp_person);
        console.log(pollers)
}

