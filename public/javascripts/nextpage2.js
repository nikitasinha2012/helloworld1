var out=[{data1:document.getElementById('out10').name},
{data2:document.getElementById('out15').name},
{data2:document.getElementById('out7').name},
{data2:document.getElementById('out9').name},
{data2:document.getElementById('out11').name}];
console.log(out);
localStorage.setItem('out',JSON.stringify(out));