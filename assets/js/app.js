var cl = console.log;

const paraInfo = document.getElementById('paraInfo');
const skillSet01 = document.getElementById('skillSet01');
const skillSet02 = document.getElementById('skillSet02');
const saasInfo = document.getElementById('sassInfo');
const jsInfo = document.getElementById('jsInfo');


// traversing >> selecting the HTML element on the basis of there relationship
let getList = skillSet01.childNodes //it gives nodeList(textNode(white space),text,string,html element)
cl(getList,typeof getList);

let pInfo = paraInfo.childNodes;
cl(pInfo);

cl(pInfo[0].textContent);
cl(pInfo[1].innerText);

  pInfo.forEach((ele)=>{
    cl(ele.innerText);
    cl(ele.textContent);
})

pInfo[0].textContent = 'Hello angular'

let listGroup = skillSet01.children;  // it gives html collection
  let listGroup = [...skillSet01.children];   //it convert in into array
cl(listGroup);

//cl(listGroup[0]);
//cl(listGroup[1]);
//cl(listGroup[2]);
//cl(listGroup[3]);
//cl(listGroup[4].children);


// array element by using forEach

listGroup.forEach((params)=>{
    cl(params.innerText);

    let result = params.innerText;
  cl(result);

    params.innerText =`Welcome in the beautiful world of ${result}`
 })

  skillSet ke child
 let result = skillSet01.childElementCount
 cl(result);

 let getChild = skillSet01.firstChild;  
 cl(getChild)

 let getEleChild =  skillSet01.firstElementChild;
 cl(getEleChild.innerText);

 //let lastChild01 = skillSet01.lastChild;
  let lastChild01 = skillSet01.lastElementChild;
  cl(lastChild01.innerText);


  const getnextSibling = saasInfo.nextSibling;  //it return text
  const getnextSibling1 = saasInfo.nextElementSibling;
  cl(getnextSibling);
  
  getnextSibling1.style.color = "red";

  const getNext = saasInfo.nextElementSibling.nextElementSibling;
  cl(getNext);

  getNext.style.color = 'blue'

  const getprevious1 = saasInfo.previousElementSibling;
  cl(getprevious);

  getprevious1.style.color = 'green'

  const getpreVious2 = saasInfo.previousElementSibling.previousElementSibling;
  cl(getpreVious);

  const getParent = jsInfo.parentNode;


const getParent1 = jsInfo.parentElement; 
const getParent2 = jsInfo.parentElement.parentElement;
const getParent3 = jsInfo.parentElement.parentElement.parentElement;
const getParent4 = jsInfo.closest('#mainSection');
cl(getParent4);














