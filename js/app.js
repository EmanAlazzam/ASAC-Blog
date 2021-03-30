'use restict';

let button= document.getElementById('button');
const printArea=document.getElementById('printArea');

function Article(author,title,subject,day,month,year,content) {
  this.author=author;
  this.title=title;
  this.subject=subject;
  this.day=day;
  this.month=month;
  this.year=year;
  this.content=content;
  console.log(this.author);

  Article.data.push(this);
}

function randomLikes(){
  return Math.floor((Math.random() * 100) + 1);
}
Article.data=[];
console.log(Article.data);
setData();

function render() {
  for(let i=0;i<Article.data.length;i++){
    let firstData=document.createElement('h3');
    printArea.appendChild(firstData);
    firstData.textContent=Article.data[i].title;

    let image = document.createElement('img');
    image.setAttribute('src', '/img/asac_ltuc.jpg');
    document.body.appendChild(image);
    printArea.appendChild(image);


    let secondData=document.createElement('h3');
    printArea.appendChild(secondData);
    secondData.textContent='Author: '+Article.data[i].author;

    let thirdData=document.createElement('h3');
    printArea.appendChild(thirdData);
    thirdData.textContent='Date: '+Article.data[i].day+'-'+Article.data[i].month+'-'+Article.data[i].year;

    let fourthData=document.createElement('h3');
    printArea.appendChild(fourthData);
    fourthData.textContent= randomLikes;

    let fifthData=document.createElement('h3');
    printArea.appendChild(fifthData);
    fifthData.textContent=Article.data[i].subject;

    let sixthData=document.createElement('h3');
    printArea.appendChild(sixthData);
    sixthData.textContent=Article.data[i].content;

  }
}

render();

button.addEventListener('click', eventHandler);

function eventHandler(event){
  event.preventDefault();
  let author=event.target.value.authorN;
  let title=event.target.value.titleT;
  let subject=event.target.value.subject;
  let day =event.target.value.day;
  let month =event.target.value.month;
  let year =event.target.value.year;
  let content =event.target.value.content;

  new Article(author,title,subject,day,month,year,content);
  setData();
render();


}
function setData() {
  let dataset=getData();
  if (Article.data.length===0 || Article.data.length===1){
    for(let i=0; i<dataset.length;i++){
      Article.data[i].push(dataset);
    }
  }
  localStorage.setItem('data',JSON.stringify(Article.data));

}
function getData(){
  let dataget=localStorage.getItem('data');
  if(dataget){
    dataget=JSON.parse(dataget);
    return dataget;
  }
  else{
    return [];
  }
}
