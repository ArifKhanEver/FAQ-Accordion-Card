const question = document.querySelectorAll('.question')

question.forEach(x => {
    x.querySelector('.arrow').addEventListener('click', ()=> {
        const arrow = x.querySelector('.arrow');
        const h2 = x.querySelector('h2');
        const answer = x.querySelector('.answer');
        // console.log(x);
        // console.log(h2)
        arrow.classList.toggle('rotate')
        h2.classList.toggle('bold')
        answer.classList.toggle('show')

    })
    
})