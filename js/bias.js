document.write("Everything has Bias");

var pollers = new Array();


var submit_bt = document.getElementById("submit_bt");

submit_bt.onclick = submitButtonClicked

// poll inpur radio
function submitButtonClicked(){

  var poll =  document.getElementsByClassName("poll-radio")
  
 temp_person = new Person();

        
        if(poll[0].checked == true ){

            temp_person.opinion = "Like";
        }

        else{
            temp_person.opinion = "Dislike";
            
        }

        if(poll[2].checked ==true){

                temp_person.gender = "Female";
        }
        else{
                temp_person.gender = "Male";
        }

        if(poll[4].checked ==true){
                temp_person.race= "Black";
        }
        else if(poll[5].checked == true){
                temp_person.race = "White";
        }
        else if(poll[6].checked==true){
                temp_person.race = "Hispanic";
        }
        else if(poll[7].checked==true){
            temp_person.race = "Asian";
        }
        else{
            temp_person.race = "Other";
        }

    
        for(let i=0 ; i< pollers.length; i++){
            poll[i].checked =false;
        }
        pollers.push(temp_person);
        console.log(pollers)


}