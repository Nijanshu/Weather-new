
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8fbcae2b30277106001cb109e3bae80b&units=metric`;
      tm(uri);
    
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  
getLocation()


let dat=new Date
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert(dat)
let day=String(dat.getDate())+" "+String(month[dat.getMonth()])+ " " +String(dat.getFullYear())
// alert(day)
document.getElementById('dat').innerHTML=day


function query(){
    let city=document.getElementById('city').value;
    let urli=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8fbcae2b30277106001cb109e3bae80b&units=metric`
    tm(urli)
}
// let url=wthr.json
function tm(url){
    // alert(city)
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url)
    xhr.send()
    xhr.onreadystatechange = function(){
        // if(this.readyState==4 && this.status==200){
            if(this.readyState==4 && this.status==200){
                let obj=JSON.parse(this.responseText);
                let imgurl= `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
                console.log(obj)
                // alert(obj.temp)
                document.getElementById("ttp").innerHTML=obj.main.temp
                document.getElementById("icon").innerHTML=`<img src="${imgurl}" alt="icon"/>`
                document.getElementById("humidity").innerHTML=obj.main.humidity
                document.getElementById("desc").innerHTML=obj.weather[0].description
                
                document.getElementById("fl").innerHTML=obj.main.feels_like
                // document.getElementById("lat").innerHTML=obj.coord.lat
                // document.getElementById("lon").innerHTML=obj.coord.lon
                // document.getElementById("TZ").innerHTML=obj.timezone
                document.getElementById("name").innerHTML=obj.name

            // document.getElementById("email").innerHTML=obj.data.email
        }}
          }


    function clock(){
        let date=new Date();
           let hr=date.getHours();
            let min=date.getMinutes();
            let sec=date.getSeconds();
            document.getElementById('clock').innerHTML=`${hr}:${min}:${sec}`
        }

    setInterval(clock, 1000);
    clock()
   