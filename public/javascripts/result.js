var score_in= parseInt(localStorage.getItem('percentage_in'));
var score_out= parseInt(localStorage.getItem('percentage_out'));
var score_in1=localStorage.getItem('correct_in');
var score_out1=localStorage.getItem('correct_out');
if(score_in > score_out) {
    document.getElementById("in_score").style.backgroundColor = '#66ff33';
} else {
    document.getElementById("out_score").style.backgroundColor = '#66ff33';
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange= function()
{
    if(this.readyState==4 && this.status==200)
    {
        document.getElementById("in_score").innerHTML=JSON.parse(this.responseText)['percentage_in'];
        document.getElementById("out_score").innerHTML=JSON.parse(this.responseText)['percentage_out'];
        document.getElementById("in_score1").innerHTML=JSON.parse(this.responseText)['correct_in'];
        document.getElementById("out_score1").innerHTML=JSON.parse(this.responseText)['correct_out'];
    }
};
xhttp.open("GET","/store/getitem",true);
xhttp.send(); 
