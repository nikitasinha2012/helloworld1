    var breathe_in_database=[ ];
    var i;
    while(breathe_in_database.length <5){
        const random_index= `in${Math.floor((Math.random() * 16))+1}`;
        console.log(random_index);
        if(breathe_in_database.indexOf(random_index) === -1){
            breathe_in_database.push(random_index);
        }
        console.log(breathe_in_database);
    }
    var database_in=[
        {"name":"ambulance","id":'in1'},
        {"name":"archway","id":'in2'},
        {"name":"bell","id":'in3'},
        {"name":"battery-half","id":'in4'},
        {"name":"clock","id":'in5'},
        {"name":"book-open","id":'in6'},
        {"name":"newspaper","id":'in7'},
        {"name":"chess","id":'in8'},
        {"name":"place-of-worship","id":'in9'},
        {"name":"hotel","id":'in10'},
        {"name":"university","id":'in11'},
        {"name":"bug","id":'in12'},
        {"name":"bible","id":'in13'},
        {"name":"microphone","id":'in14'},
        {"name":"home","id":'in15'},
        {"name":"pencil-alt","id":'in16'}
        ];

        breathe_in_database.map((random_index) => {

            console.log('random num', random_index)
            let result = database_in.filter((item) => item.id === random_index)
            console.log('result', result[0].name)
            let button = document.createElement("button");
            button.setAttribute("class", `fa fa-${result[0].name} innerimages btn`);

            document.getElementById("button-group").appendChild(button);

        })
    
    localStorage.setItem('in',JSON.stringify(breathe_in_database))