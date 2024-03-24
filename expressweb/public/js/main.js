const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');  
 const temp_real_val = document.getElementById('temp');
 const temp_status=document.getElementById('temp_status'); 
// // const apiKey = '0d342d38717cae47de67ed0d1e609afe'; 
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();  
    let cityVal = cityName.value;
    if(cityVal ==="") 
    { 
        city_name.innerText="Please write the name before search"; 
        datahide.classList.add('data_hide');
    } 
    else 
    { 

        try 
        {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a5905030ca9c50c3a516d13d5fd3bd59`;
           const response=await fetch(url);  
           const data=await response.json(); 
           const arrData=[data]; 
           
           city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
          // console.log(response) 
          temp_real_val.innerText=arrData[0].main.temp;  
         // temp_status.innerText=arrData[0].weather[0].main;   
          const tempMood=arrData[0].weather[0].main
        //   temp.innerText=5; 
        //   temp_status.innerText=9;
           //console.log(temp.innerTex
           if(tempMood=="Clear") 
           {
            temp_status.innerHTML = 
            "<i class= 'fas fa-sun' style='color:#eccc68;'> </i>"; 
           } 
           else if(tempMood == "Clouds") 
           {
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
           } 
           else if(tempMood=="Rain") 
           {
            temp_status.innerHTML= 
           "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
           }  
           else 
           {
            temp_status.innerHTML= 
            "<i class='fas fa-sun' style='color:#eccc68;'></i>";
           } 
           datahide.classList.remove('data_hide');
        } 
        catch 
        {
            city_name.innerText='please enter the city name '; 
            datahide.classList.add('data_hide');
        }

    } 
}
// //     let cityVal = cityName.value;  
// //     console.log(cityName.value);

// //     if (cityVal ==="") {
// //         city_name.innerText="Please write the name before search";
// //     }  
// //       try 
// //         {
// //         let url = `https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=a5905030ca9c50c3a516d13d5fd3bd59`;
// //        const response=await fetch(url); 
// //        const data=response.json(); 
// //        const arrData=[data]; 

// //        temp.innerText=arrData[0].main.temp; 
// //        temp_status.innerText=arrData[0].weather[0].main;
     
 
// //     // catch 
// //     // {
// //     //     city_name.innerText='please enter the city name ';
// //     // }
// //         }
// // }

submitBtn.addEventListener('click', getInfo);  
// const submitBtn = document.getElementById('submitBtn'); 
// const getInfo=()=> 
// {
//     alert("hii");
// }
// submitBtn.addEventListener('click',getInfo); 
