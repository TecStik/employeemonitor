var Url = window.location.href.split(":");

if (Url[0]==="https")
{
    Url = "https://ecommerce-sweet-app.herokuapp.com"
}
else{
    Url = "http://localhost:5000"
}



export default Url;