var count = localStorage.getItem("count");

$("#count").text(count);

$("#clickBtn").click(function(){
    count++
    $("#count").text(count);
    localStorage.setItem("count", count);
});

