
    var breathe_in_database = JSON.parse(localStorage.getItem('in'));
    var database_in=[
    {"data":document.getElementById('in1').name,
    "id":in1},
     {"data":document.getElementById('in2').name,
    "id":in2},
     {"data":document.getElementById('in3').name,
     "id":in3},
     {"data":document.getElementById('in4').name,
    "id":in4},
     {"data":document.getElementById('in5').name,
    "id":in5},
     {"data":document.getElementById('in6').name,
    "id":in6},
     {"data":document.getElementById('in7').name,
    "id":in7},
     {"data":document.getElementById('in8').name,
    "id":in8},
     {"data":document.getElementById('in9').name,
    "id":in9},
     {"data":document.getElementById('in10').name,
    "id":in10},
     {"data":document.getElementById('in11').name,
    "id":in11},
     {"data":document.getElementById('in12').name,
    "id":in12},
     {"data":document.getElementById('in13').name,
     "id":in13},
     {"data":document.getElementById('in14').name,
    "id":in14},
     {"data":document.getElementById('in15').name,
    "id":in15},
     {"data":document.getElementById('in16').name,
    "id":in16}
    ];
    console.log(database_in);
    localStorage.setItem('in_database',JSON.stringify(database_in));
    var selected_answers_array = [];
    var total = breathe_in_database.length;
    function store(clicked_id)
    {
        document.getElementById(clicked_id).style.backgroundColor = '#4d4d4d';
        for(var i = 0 ; i < selected_answers_array.length ; i++)
        {
          if(selected_answers_array[i].localeCompare(clicked_id) == 0) 
          {
             selected_answers_array.splice(i, 1);
             document.getElementById(clicked_id).style.backgroundColor = '#b3b3b3';
             return;
          }
        }
        if(selected_answers_array.length == total)
        {
          alert('You have already selected ' +breathe_in_database.length+ '.Click on next to continue');
          document.getElementById(clicked_id).style.backgroundColor = '#b3b3b3';
          return;
        }
        console.log('clicked', clicked_id)
        selected_answers_array.push(clicked_id);
        console.log(selected_answers_array); 
        localStorage.setItem('selected',selected_answers_array);
    }
    
    function next()
    {
      event.preventDefault();
      if(selected_answers_array.length !== total)
      {
        alert('You have to choose '  +total+  ' buttons');
        return;
      }
      else{
        var no_of_correct_answers=0;
        console.log('length of the array', selected_answers_array, breathe_in_database)
        for(let i = 0 ; i < selected_answers_array.length ; i++)
        {
          for( let j = 0 ; j < breathe_in_database.length ; j++)   
         {
            if(selected_answers_array[i].localeCompare(breathe_in_database[j]) == 0)
            {
              no_of_correct_answers++;
              
            }
            
          }
        } 
        localStorage.setItem('correct_in',no_of_correct_answers);
              percent = (no_of_correct_answers*100/total);
              localStorage.setItem('percentage_in',percent);
              window.location.replace("/nextpage2");
      }
      
    }  
  










    