var color;
$(".paint").click(function(){
    color = this.id;
});

$(".doek").click(function(){
    id = "#"+ this.id;
    $(id).css("background-color", color);
});
