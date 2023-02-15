const buttonElement=document.querySelector('.btn');

buttonElement.addEventListener('mouseover',(event)=>{

    // console.log(event.pageX,event.pageY)
    // console.log(event.pageX- buttonElement.offsetLeft);

    // console.log(event.pageY- buttonElement.offsetTop);

    const x=(event.pageX - buttonElement.offsetLeft);
    const y=(event.pageY - buttonElement.offsetTop);

    buttonElement.style.setProperty('--xposition', x + 'px')

    
    buttonElement.style.setProperty('--yposition', y + 'px')
})