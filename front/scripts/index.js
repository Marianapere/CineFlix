 const renderCards = require("./render");
//  const createMovie = require("./createMovie");
 const axios =require("axios");

//  const moviesContainer = $("#movies-container");

$(document).ready(async () => {
    
    const data = await axios
       .get("http://localhost:3000/movies").then(response => {
            const data = response.data;
            renderCards(data);
        })
        .catch(error => {
            console.error('Error al obtener las películas:', error);
            
        });
  //    renderCards(data);
});



const form = document.querySelector("form");
let genre =[];

function handleCheckboxChange(e){
    if(e.target.checked){
        genre.push(e.target.value);
    } else {
        genre= genre.filter((item)=> item !== e.target.value);
    }
}

    const checkboxes = document.querySelectorAll('input[name="genre"]');

    checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener("change",handleCheckboxChange);
    });


    form.addEventListener("submit",async (event)=>{
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.genre = genre;
    // console.log(data);
    
    
        try{
        const response = await axios.post("http://localhost:3000/movies", data);

        if(response.status===201){
            // alert("Movie created successfully");
            window.location.href="http://127.0.0.1:5502/front/index.html";
            }
        } catch(error){
        console.error(error);
                    }

});


const clearButton= document.getElementById('clearButton');

clearButton.addEventListener("click",()=>{
    form.reset();
});
