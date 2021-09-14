'use strict';

const progress=document.querySelector('#progress');
const prev=document.querySelector('#prev');
const next=document.querySelector('#next');
const circle=document.querySelectorAll('.circle');

let current=1;

function updateprogress(){
	circle.forEach((cir,index)=>{
		if(index<current){
			cir.classList.add('active');
		}
		else {
			cir.classList.remove('active');
		}
	})
	const active=document.querySelectorAll('.active');
	
	const progresslength=(((active.length)-1)/((circle.length)-1)*100);
	//console.log(circle.length,active.length);
	//console.log(progresslength);
	progress.style.width=progresslength+'%';
	
	if(active.length==1){
		prev.disabled=true;
	}
	else if(active.length==4){
		next.disabled=true;
	}
	else{
		next.disabled=false;
		prev.disabled=false;
	}
}

next.addEventListener('click',()=>{
	current++;
	
 	if(current>circle.length){
		current=circle.length;
	} 
	updateprogress();
});

prev.addEventListener('click',()=>{
	current--;
	
 	if(current<1){
		current=1;
	} 
	updateprogress();
});