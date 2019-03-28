var score_in= parseInt(localStorage.getItem('percentage_in'));
var score_out= parseInt(localStorage.getItem('percentage_out'));
var score_in1=localStorage.getItem('correct_in');
var score_out1=localStorage.getItem('correct_out');
if(score_in > score_out) {
    document.getElementById("in_score").style.backgroundColor = '#0090AD';
} else {
    document.getElementById("out_score").style.backgroundColor = '#0090AD';
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange= function()
{
    if(this.readyState==4 && this.status==200)
    {
        console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['total_participants']);
        console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_in_percent']);
        console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_out_percent']);
        console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_in_correct']);
        console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_out_correct']);
        console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['previous_result']);
        document.getElementById("number1").innerHTML=JSON.parse(this.responseText)['total_participants'];
        document.getElementById("number2").innerHTML=JSON.parse(this.responseText)['breathe_in_percent'];
        document.getElementById("number3").innerHTML=JSON.parse(this.responseText)['breathe_out_percent'];
        document.getElementById("in_score").innerHTML=JSON.parse(this.responseText)['previous_result']['percentage_in'];
        document.getElementById("out_score").innerHTML=JSON.parse(this.responseText)['previous_result']['percentage_out'];
        document.getElementById("in_score1").innerHTML=JSON.parse(this.responseText)['previous_result']['correct_in'];
        document.getElementById("out_score1").innerHTML=JSON.parse(this.responseText)['previous_result']['correct_out'];
    }
};
xhttp.open("GET","/store/getitem",true);
xhttp.send(); 
function tryagain(){
    console.log('here')
    event.preventDefault()
    localStorage.setItem('percentage_in','0');
    localStorage.setItem('percentage_out','0');
    localStorage.setItem('correct_in','0');
    localStorage.setItem('correct_out','0');
    window.location.replace("/");

}







