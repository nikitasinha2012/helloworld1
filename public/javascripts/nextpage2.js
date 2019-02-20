var out=[];
var i;
while(out.length <5){
    const random_index=`out${Math.floor((Math.random() * 16)) +1}`;
    if(out.indexOf(random_index)=== -1)
    {
     out.push(random_index);
    }
    console.log(random_index);
}
console.log('out length', out, out.length)
var database_out=[
    {"name":"ambulance","id":"out1"},
     {"name":"archway","id":"out2"},
     {"name":"bell","id":"out3"},
     {"name":"battery-half","id":"out4"},
     {"name":"clock","id":"out5"},
     {"name":"book-open","id":"out6"},
     {"name":"newspaper","id":"out7"},
     {"name":"chess","id":"out8"},
     {"name":"place-of-worship","id":"out9"},
     {"name":"home","id":"out10"},
     {"name":"university","id":"out11"},
     {"name":"camera","id":"out12"},
     {"name":"bible","id":"out13"},
     {"name":"microphone","id":"out14"},
     {"name":"hotel","id":"out15"},
     {"name":"pencil-alt","id":"out16"}
    ];

    out.map((random_index) => {
    let result = database_out.filter((item) => item.id == random_index);
    console.log('result', result)
    let button=document.createElement("button");
    button.setAttribute("class", `fa fa-${result[0].name} innerimages btn `);
    document.getElementById("button-group").appendChild(button);
    })

   
    localStorage.setItem('out',JSON.stringify(out))