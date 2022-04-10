var binaryExpressions=[];
var decimalAnswers=[];
var questionCount;
var bitSize=8;
function generateTest(){
    cleanDiv();
    questionCount=document.getElementById('numberCount').value;
    //var state = document.querySelector('input[name="pos/neg"]:checked').value;
    generateBinaryExpressions();
    generateAnswers();
    generateHtml();
}

function generateBinaryExpressions(){
    for(let k=0;k<questionCount;k++){
        str="0";
        for(let i=0;i<bitSize-1;i++){
            let randomNumber=Math.random()*1;
            if(randomNumber>.5){
                randomNumber=1;
            }
            else{
                randomNumber=0;
            }
            str+=""+randomNumber;
        }
        binaryExpressions.push(str);
    }
}

function generateHtml(){
    for(let i=0;i<questionCount;i++){
        var node = document.createElement('div');
        node.innerHTML = '<div id="container'+i+'"><p id="question'+i+'">'+binaryExpressions[i]+'<p><input id="inputAnswer'+i+'" type="text"> <button id="checkBtn'+i+'"value='+i+' onclick="checkAnswer(this.value)">check</button></div>';
        document.getElementById('insertThingHere').appendChild(node);
    }
}

function generateAnswers(){
    for(let i=0;i<questionCount;i++){
        var sum=0;
        var currentBinaryExpression=""+binaryExpressions[i];
        var bitIndex=bitSize-1;
        for(let k=0;k<bitSize;k++){
            currentBit=parseInt(currentBinaryExpression.substring(k,k+1));
            sum+=currentBit*Math.pow(2,bitIndex);
            bitIndex--;
        }
        decimalAnswers.push(sum);
    }
}

function cleanDiv(){
    for(var i=0;i<questionCount;i++){
        var el=document.getElementById("container"+i);
        el.parentNode.removeChild(el);

        
    }
    binaryExpressions=[];
    //alert("cleaned");
}

function checkAnswer(index){
    let inputAnswer=""+document.getElementById('inputAnswer'+index).value;
    
    let actualAnswer=""+decimalAnswers[index];

    if(inputAnswer === actualAnswer){
        alert("Correct!");
    }
    else{
        alert("answer is: "+actualAnswer+". You put: "+inputAnswer);
    }

}