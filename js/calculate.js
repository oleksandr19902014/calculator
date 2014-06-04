document.querySelector('#calc').addEventListener("click", calc, false);
document.querySelector('#clean').addEventListener("click", cleanAll, false);
document.querySelector('#memory').addEventListener("click", addtoListMemory, false);
document.querySelector('#printListMemory').addEventListener("click", printMemory, false);
	

var firstParam = document.querySelector('#firstParam');
	secondParam = document.querySelector('#secondParam');
	action = document.querySelector('#action');
	resultParam = document.querySelector('#result');	
	memoryList = document.querySelector('#otputListMemory');	

function MemoryEntity() {
  this.action = "";
  this.result = "";
  this.date = new Date();
}

var memoryParam = []	

function calc(e){
	if((firstParam.value !== '' && firstParam.value != NaN) && (secondParam.value !== '' && secondParam.value != NaN)){
		resultParam.value = eval(firstParam.value + action.value + secondParam.value);	
	}	
}

function addtoListMemory(e){
	if(resultParam.value !== '' && resultParam.value != NaN){
		var entity = new MemoryEntity();
		entity.action = action.value;
		entity.result = resultParam.value;  
		memoryParam.push(entity);
	}
}

function printMemory(e){	
	(memoryParam.length !== 0) ? (memoryList.innerHTML = outputList()) : alert("Memory is empty");	
}

function outputList(){
	var html = "list memory : <li>";
	for(var i = 0; i < memoryParam.length; i++){
		html += ' action : ' + memoryParam[i].action + ' result : ' + memoryParam[i].result + ' date : ' + formatDate(memoryParam[i].date) + '</li><li>';
	}
	return html += '</li>';
}

function formatDate(date){
	return  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
	
function cleanAll(e){
	firstParam.value = '';
	secondParam.value = '';
	resultParam.value = '';
	memoryList.innerHTML = '';
	memoryParam.length = 0;
	action.value = '+';
}	