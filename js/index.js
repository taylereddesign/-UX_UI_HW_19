console.log("Your index.js file is loaded correctly!");

var x = 0;
$(document).ready(function(){
    $("div").scroll(function(){
        $("span").text(x+1);
    });
});

<div style= "border: 1px solid black; width: 200px; height:100px; overflow:scroll;">
In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
<br><br>
'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.'
</div>





