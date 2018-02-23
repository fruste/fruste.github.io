var count = localStorage.getItem("count");
count = 0;
$("#count").text(count);

$("#clickBtn").click(function(){
    count++
    $("#count").text(count);
    localStorage.setItem("count", count);
});

