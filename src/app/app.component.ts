import { Component , OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Progress Bar Demo';
  options = [];

data:any= { "buttons": [], "bars": [], "limit": ""};
//{"buttons":[41,38,-24,-13],"bars":[89,51,65,35],"limit":130};

//var sampleData1 = {"buttons":[41,38,-24],"bars":[89,51,65,35],"limit":100};
ngOnInit() {
  const reference=this; // code added
  this.data= data;
//formBuilder=function(){
//console.log(this.data.buttons.length);
/*for(var i=0;i<this.data.buttons.length;i++){
	var dataVal = this.data.buttons[i];
	var btn = document.createElement("BUTTON"); 
	btn.id="btn"+this.data.buttons[i];
  btn.title="Click to add "+ dataVal;
	btn.className ="custome";
	btn.innerHTML = dataVal.toString(); 
	document.getElementById("btnHolder").appendChild(btn);
}*/

	var divError = document.getElementById("errorHandling"); 
		
//console.log(data.buttons.length);
if('buttons' in data){  //buttons missing in JSON from api
  	for(var i=0;i<data.buttons.length;i++){
			var dataVal = data.buttons[i];
			var btn = document.createElement("BUTTON"); 
			btn.id="btn"+data.buttons[i];
			btn.className ="custome";
			btn.innerHTML = dataVal.toString(); 
			document.getElementById("btnHolder").appendChild(btn);
			}	}
	else{
	
		divError.innerText="Buttons data not found in API \n";

}
//console.log(this.data.bars.length);
if('limit' in data)//data.limit == undefined){ //limit missing in api
{

if(data.limit>0){ // check if limit is positive number	


    if('bars' in data){//check if bars missing in JSON from api
for(i=0;i<this.data.bars.length;i++){
  if(data.bars[i]>0){ //check if -ive value inserted via api
    var selectController = document.getElementById("barController");
    this.options.push({ 
          text:"Progress Bar "+[i+1],
          value: 'bar'+this.data.bars[i]
      });

      //var dataVal = data.buttons[i];
      var divParent = document.createElement("DIV"); 
      divParent.id="barParent"+this.data.bars[i];
      divParent.className ="myProgress";
      
      var divChild = document.createElement("DIV");
      divChild.id="bar"+this.data.bars[i];
      divChild.className ="myBar";
      divChild.style.width =(this.data.bars[i]*100/this.data.limit)+'%';
      divChild.title= divChild.style.width+" filled of "+ this.data.limit;
      divChild.innerHTML = this.data.bars[i].toString(); 
      document.getElementById("barContainer").appendChild(divParent);	
      document.getElementById("barParent"+this.data.bars[i]).appendChild(divChild);
    }
    else{
			divError.innerText +="One of the bars content is negative in API \n";
		}
  }	  
}else
  {	divError.innerText="Bars data not found in API \n";
	}

 }
  
else if(data.limit<=0){ //negative limit
	divError.innerText+="Limit is incorrect in API \n -Less then or Equal to Zero \n";
}
}
else{
  	divError.innerText+="Limit is not provided in API \n";
}
var btns = document.getElementsByClassName("custome");
for (var j = 0; j < btns.length; j++) {
    (function () {
        var valueHere = btns[j].id.slice(3);
        btns[j].addEventListener("click", (e) =>  { reference.btnClicked(valueHere); }, false);
		}());
	}
	}

 btnClicked = function(btnNumber) {
var e = document.getElementById("barController") as HTMLSelectElement;
var getSelected = e.options[e.selectedIndex].value;

var elem = document.getElementById(getSelected);  
//console.log(elem.style.width); 
var width = parseInt(elem.innerText);
var getSign = Math.sign(btnNumber);
console.log(getSign+" "+width+" "+btnNumber+" "+(width+parseInt(btnNumber)));
var checkforZero=false;
if(getSign.toString()=="-1"){
	if(width+parseInt(btnNumber)<=0){ //btnNumber is already negative (postivieNum + (-negativeNum))
	checkforZero=true;

	}
	else{
		checkforZero=false;
	}
}
console.log(checkforZero);
if(!checkforZero){
elem.style.width = (((width+ parseInt(btnNumber))*100)/this.data.limit) + '%';
var newFiller= (width)+parseInt(btnNumber);
  document.getElementById(getSelected).innerText= newFiller.toString();
  if (Math.floor(newFiller) > this.data.limit) {elem.style.backgroundColor  = "red";}
  else{elem.style.backgroundColor  = "#56aab8";}
  }
}
  //console.log(abc);
}


