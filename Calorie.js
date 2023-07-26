
let gender = document.getElementById('gender');

let age = document.getElementById('age');

let height = document.getElementById('height');

let weight = document.getElementById('weight')

let CalculateButton = document.querySelector('.calculate');


let message = document.querySelector('.message');


let handleevent = () =>{
    
  let  Gender = gender.value
   
    let Age = age.value;

    let Height = height.value;

    let Weight = weight.value

    console.log(Gender + " " + Age + " " + Height);



    if( Height !== '' && Age !== ''){

    if(Gender === 'male') {
        MaleCalorieCalculation(Age , Height , Weight)
    }
    else if(Gender === 'female'){
        FemaleCalorieCalculation(Age , Height , Weight)
    }
}
}



let MaleCalorieCalculation = (age ,height , weight) =>{

    let BMR = eval((10 * weight) + (6.25 * height )- (5 * age) + 5);

    message.style.display = 'flex'

    message.innerHTML = `You would have to consume : ${BMR} calories`

    console.log(BMR)
}



let FemaleCalorieCalculation = (age ,height , weight)  =>{

    let BMR = eval((10 * weight) + (6.25 * height )- (5 * age) - 161);

    console.log(BMR)

    message.style.display = 'flex'

    message.innerHTML = `You would have to consume : ${BMR} calories`
}





CalculateButton.addEventListener('click',handleevent)