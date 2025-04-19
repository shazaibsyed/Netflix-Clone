
// """"""::::::::::::::""""""""
//  Trending gallery section
let scrollContainer = document.querySelector('.gallary');
let nextBtn = document.getElementById('nextBtn')
let backtBtn = document.getElementById('backBtn')
backtBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 200;
})
nextBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 200;
})


// FAQs section
const accordians = document.querySelectorAll('.accordian')

accordians.forEach(accordian => {
    let answer = accordian.querySelector(".answer");
    let icon = accordian.querySelector(".icon");


    accordian.addEventListener("click", () => {
       
        icon.classList.toggle("fa-xmark")
        answer.classList.toggle("showanswer")
        if( icon.classList.contains('icon')){
            answer.computedStyleMap.maxHeight = answer.scrollHeight + 'px'
        }
    })
})