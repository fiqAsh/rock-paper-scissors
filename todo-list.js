const arr=[]
function valueshower () {
  let a=''
  for (i=0; i<arr.length; i++){
    const b = arr[i];
    const {name,date}=b;
    const html =`
    <div>${name}</div>
    <div>${date}</div>
    <button onclick="
      arr.splice(${i},1);
      valueshower();">
        delete</button>`;
    a+=html;
  }
  console.log(a)
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