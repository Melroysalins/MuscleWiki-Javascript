
//male and female options declaration section



let Buttons = document.querySelectorAll('.buttons-div button');


//the image containner the element declaration

let imageContainner = document.querySelectorAll('.image-containner div')

let Menpic = document.querySelectorAll('.men-pic svg g')

let MenContainner = document.querySelector('.men-pic')


let WomenPic = document.querySelectorAll('.women-pic svg g')



//Retreving The array back from the local storage

let MenWorkoutArray = JSON.parse(localStorage.getItem('mensworkout')) || [];

let WomensWorkoutArray = JSON.parse(localStorage.getItem('womensworkout')) || []



let selectedBodyPart = [];


let RowOptions = document.querySelectorAll('.row-options div')


//search bar declaration

let searchBar = document.querySelector('.search-bar input')


//using ForLoop to check which button i have clicked

let malebutton = document.getElementById('male');

let femalebutton = document.getElementById('female');


let selectedButton = localStorage.getItem('selectedbutton');



Buttons.forEach(button =>{
    button.addEventListener('click',()=>{
       Buttons.forEach(btn => btn.classList.remove('selected'))
       button.classList.add('selected')
       localStorage.setItem('selectedbutton',button.id)


        if(button.classList.contains('selected') && button.id === 'male') {

                document.querySelector('.men-pic').classList.remove('notselected');
                document.querySelector('.women-pic').classList.add('notselected')
                MenExerciseBasedOnBodyParts()

                

               

        }
        
        else if(button.classList.contains('selected') && button.id === 'female'){

            document.querySelector('.men-pic').classList.add('notselected');
            document.querySelector('.women-pic').classList.remove('notselected')
            WomenExerciseOnBodyParts()

          
            
        }
       }) 

        
       
    })


 



    //checking which containner is currently displaying





let MenExerciseBasedOnBodyParts = () =>{

    Menpic.forEach(item =>{

        item.addEventListener ('click', ()=> {
                let selected_ID = item.id;

                MenWorkoutArray.map((x)=>{
                    if(x.id === selected_ID){
                        selectedBodyPart.push({
                            id : selected_ID,
                            video1 : x.video1,
                            video2 : x.video2,
                            video3 : x.video3,
                            video4 : x.video4,
                            step1 : x.step1,
                            step2: x.step2,
                            step3 : x.step3,
                            step4 : x.step4
                        })

                        
                        

                        localStorage.setItem('selectedPart',JSON.stringify(selectedBodyPart))
                        window.location.href= "ExercisePage.html"
                    }
                })

                
        })
    })
}


if(!MenContainner.classList.contains('notselected')){
    MenExerciseBasedOnBodyParts();
}




let WomenExerciseOnBodyParts = () =>{

    WomenPic.forEach(item =>{

       // 
        item.addEventListener('click',()=> {

            console.log(item.id)

            let selected_ID = item.id

            WomensWorkoutArray.map((x)=>{

                if(x.id === selected_ID){
                    
                selectedBodyPart.push({
                    id : selected_ID,
                    video1 : x.video1,
                    video2 : x.video2,
                    video3 : x.video3,
                    video4 : x.video4,
                    step1 : x.step1,
                    step2: x.step2,
                    step3 : x.step3,
                    step4 : x.step4
                })
                localStorage.setItem('selectedPart',JSON.stringify(selectedBodyPart))

                    window.location.href= "ExercisePage.html"

                    console.log(selectedBodyPart)
                }

            })
            
        })      
    })
}




//now selecting particular options from the row-div


RowOptions.forEach ( item => {

    item.addEventListener (' click' , () =>{
        console.log(item.id)
    })
})




function handlesearchedelement (event) {
    
    if(event.keyCode == 13){
        event.preventDefault();

        let inputvalue = event.target.value;
        
       inputvalue = inputvalue[0].toUpperCase() + inputvalue.substr(1);

        console.log(inputvalue)

        if(inputvalue === "Kettlebells" || inputvalue === 'Stretches'  || inputvalue === 'Stretches' || inputvalue === 'Plate'|| inputvalue === 'Cables'
        || inputvalue === 'Band'  || inputvalue === 'Dumbbells' || inputvalue === 'Bodyweight' || inputvalue === 'Machine' ){
            
           
        localStorage.setItem('searchedvalue', inputvalue);

        window.location.href = "SelectedWorkoutPage.html";
        }
        else{
            return;
        }
    }
}


searchBar.addEventListener('keypress' , handlesearchedelement)