const arr=[]

function valueshower () {
  let a=''
  arr.forEach(function(object,index){
    const {name,date}=object;
    const html =`
    <div>${name}</div>
    <div>${date}</div>
    <button onclick="
      arr.splice(${index},1);
      valueshower();">
        delete</button>`;
    a+=html;
  })
  
  document.querySelector('.page-value').innerHTML=a;
}






function addtodo(){
  const inputelem=document.querySelector('.tasks');
  const taskname= inputelem.value;
  
  const datelem=document.querySelector('.date')
  const dateval=datelem.value
  inputelem.value='';
  
  
  arr.push({name:taskname,date:dateval});
  valueshower();
  
}