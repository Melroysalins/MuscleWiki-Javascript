let AllOptions = document.querySelectorAll('.all-information span');

//Declaring the array to store the elements inside it and push it to the local storage
let SelectedOptionsArray = [];

//Defining the containner to store selected workout array which we fetched using API

let containner = document.querySelector('.workout-information')







//selecting the particular span element using foreach Loop

AllOptions.forEach(span => {

    span.addEventListener ('click', () => {

        display(span.id)
        
        AllOptions.forEach(option => option.classList.remove('selected'));

        span.classList.add('selected')

       if(span.id === 'all'){
        ifallisselected()
       }

    })
})


//fetching workouts using MUscle Wiki Api - using Async Function


async function display (id) {
    let limit = 30;
    const url = `https://musclewiki.p.rapidapi.com/exercises?category=${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5dadcfa3d7msh936ab7fd41d36a0p1a0bb4jsn234faaa8f997',
		'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    

    let updatedArray = result.splice(0, 32)

   console.log(updatedArray)
   
    
   

    return containner.innerHTML = (updatedArray.map((x)=> {

    if(x.steps.length > 0 && x.videoURL.length > 1)
    
        if(x.Difficulty ==='Beginner' || x.Difficulty ==='Intermediate')
        
        return `<div class="workout-1" id=${x.id}>
        <div class="image-show">
        <video loop muted playsinline autoplay>
        <source src="${x.videoURL[0]}" type="video/mp4">
     </video>
        </div>

        <div class="heading">
            <h4> ${x.exercise_name
            } </h4>
        </div>
        <div class="about-workout">
           <div class="frst-row">
            <Span>Difficulty :</Span>
            <span> ${x.Difficulty
            }</span>
           </div>
           <div class="frst-row">
            <span>Steps:${x.steps}
            </span>
           </div>
        </div>
    </div>`

    }).join(''))

    
   
    

   
	
} catch (error) {
	console.error(error);
}
}


  

display();


 async function ifallisselected () {
    let all = document.getElementById('all')
    if(all.classList.contains('selected')){

        let limit = 30;
        const url = `https://musclewiki.p.rapidapi.com/exercises`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5dadcfa3d7msh936ab7fd41d36a0p1a0bb4jsn234faaa8f997',
            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
    
        let updatedArray = result.splice(0, 52)
    
    
       
       
    
        return containner.innerHTML = (updatedArray.map((x)=> {
    
        
            if(x.Difficulty ==='Beginner' || x.Difficulty ==='Intermediate')
            return `<div class="workout-1" id=${x.id}>
            <div class="image-show">
            <video loop muted playsinline autoplay>
            <source src="${x.videoURL[0]}" type="video/mp4">
         </video>
            </div>
    
            <div class="heading">
                <h4> ${x.Category} Workout</h4>
            </div>
            <div class="about-workout">
               <div class="frst-row">
                <Span>Difficulty :</Span>
                <span> ${x.Difficulty
                }</span>
               </div>
               <div class="frst-row">
                <span>Steps:${x.steps}
                </span>
               </div>
            </div>
        </div>`
    
        }).join(''))
    
    }
    catch (error) {
        console.error(error);
    }
}


 }





ifallisselected()




