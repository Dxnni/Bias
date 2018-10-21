document.write("Everything has Bias");

var pollers = new Array();

var stats = new Array(2);

stats[0] = new Array(5);
stats[1] = new Array(5);

for(let i=0;i<stats.length;i++){
        for(let j=0;j<stats[0].length;j++){
                stats[i][j] = {likes:0, dislikes:0, total:0};
        }
}


console.log(stats);
var FBL = document.getElementById("FBL");
FBL.innerHTML=stats[0][0].likes;
var FWL = document.getElementById("FWL");
FWL.innerHTML=stats[0][1].likes;
var FHL = document.getElementById("FHL");
FHL.innerHTML=stats[0][2].likes;
var FAL = document.getElementById("FAL");
FAL.innerHTML=stats[0][3].likes;
var FOL = document.getElementById("FOL");
FOL.innerHTML=stats[0][4].likes;
var MBL = document.getElementById("MBL");
MBL.innerHTML=stats[1][0].likes;
var MWL = document.getElementById("MWL");
MWL.innerHTML=stats[1][1].likes;
var MHL = document.getElementById("MHL");
MHL.innerHTML=stats[1][2].likes;
var MAL = document.getElementById("MAL");
MAL.innerHTML=stats[1][3].likes;
var MOL = document.getElementById("MOL");
MOL.innerHTML=stats[1][4].likes;

var FBD = document.getElementById("FBD");
FBD.innerHTML=stats[0][0].dislikes;
var FWD = document.getElementById("FWD");
FWD.innerHTML=stats[0][1].dislikes;
var FHD = document.getElementById("FHD");
FHD.innerHTML=stats[0][2].dislikes;
var FAD = document.getElementById("FAD");
FAD.innerHTML=stats[0][3].dislikes;
var FOD = document.getElementById("FOD");
FOD.innerHTML=stats[0][4].dislikes;
var MBD = document.getElementById("MBD");
MBD.innerHTML=stats[1][0].dislikes;
var MWD = document.getElementById("MWD");
MWD.innerHTML=stats[1][1].dislikes;
var MHD = document.getElementById("MHD");
MHD.innerHTML=stats[1][2].dislikes;
var MAD = document.getElementById("MAD");
MAD.innerHTML=stats[1][3].dislikes;
var MOD = document.getElementById("MOD");
MOD.innerHTML=stats[1][4].dislikes;

var table = document.getElementsByTagName("tbody");
console.log(table);


var submit_bt = document.getElementById("submit_bt");

submit_bt.onclick = submitButtonClicked

BML.innerHTML=stats[1][0].likes;

pollers.forEach(person => {

        
});

function fillTable(table, col, row){


}



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
                stats[col][row].likes++;
                stats[col][row].total++;

        }
    
        else if (poll[1].checked == true ){
                temp_person.opinion = "Dislike";
                stats[col][row].dislikes++;
                stats[col][row].total++;

        }
        else {
                temp_person.opinion = null;
        }


        for(let i=0 ; i< poll.length; i++){
            poll[i].checked =false;
        }
        pollers.push(temp_person);
        //console.log(pollers);
        //console.log(stats);
        BML.innerHTML=stats[1][0].likes;

}

