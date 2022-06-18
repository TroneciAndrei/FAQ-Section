const questionContainer = document.querySelectorAll('.question-container');
const btnDown = document.querySelectorAll('.btn-down');
const answear = document.querySelectorAll('.answear');
const questionText = document.querySelectorAll('.question-text');

for(let i = 0; i < answear.length; i++){
    questionContainer[i].addEventListener('click', ()=>{
        answear[i].classList.toggle('active');
        

        if(questionText[i].style.fontWeight !== '700'){
            questionText[i].style.fontWeight = '700'
        }else{
            questionText[i].style.fontWeight = '400'
        }

        if(!btnDown[i].classList.contains('btn-rotate') ){
            btnDown[i].classList.add('btn-rotate');
        }else if(btnDown[i].classList.contains('btn-rotate')){
            btnDown[i].classList.remove('btn-rotate');
            btnDown[i].classList.add('btn-rotate-down');
        }
    })
}