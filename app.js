var btn = document.querySelector("#btn");
var img = document.querySelector("#img");
var h3 = document.querySelector("h3");

btn.addEventListener("click", function(){
    // alert("clicked")
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if( req.readyState == 4 && req.status == 200 )
        {
            var url = JSON.parse(req.responseText).message;
            img.src = url;
            // console.log(data.message)
        }
    }

    req.open("GET", "https://dog.ceo/api/breeds/image/random");
    req.send();

    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if( XHR.readyState == 4 && XHR.status == 200 )
        {
            h3 = JSON.parse(XHR.responseText);
            // console.log(data.message)
        }
    }

    XHR.open("GET", "https://api.github.com/zen");
    XHR.send();
})