const submit = document.querySelector('#submit')

submit.addEventListener('click',function(e){

    const h = parseFloat(document.querySelector('#height').value);
    const w = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if( h=='' || h<=0 || isNaN(h) )result.innerHTML = "Please enter a valid height";
    else if( w=='' || w<=0 || isNaN(w) )result.innerHTML = "Please enter a valid weight";
    else {
        const bmi = (w/(h*h)).toFixed(2)

        //showing the result
        result.innerHTML = `BMI : ${bmi}`
    }
    
})