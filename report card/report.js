// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myFunc);

function myFunc(event){
    event.preventDefault();
    let image=document.querySelector("#image").value;
    let name=document.querySelector("#name").value;
    let batch=document.querySelector("#batch").value;
    let dsa=document.querySelector("#dsa").value;
    let cs=document.querySelector("#cs").value;
    let coding=document.querySelector("#coding").value;


    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let img=document.createElement("img");
    img.setAttribute("src",image);
    td1.append(img);

    let td2=document.createElement("td")
    td2.innerText=name;

    let td3=document.createElement("td");
    td3.innerText=batch;


    let td4=document.createElement("td");
    td4.innerText=dsa;
    

    let td5=document.createElement("td");
    td5.innerText=cs;


    let td6=document.createElement("td");
    td6.innerText=coding;

    let td7=document.createElement("td");
    let obtained=Number(dsa)+Number(cs)+Number(coding);
    let perc=(obtained/30)*100;
    perc=perc.toFixed(3);
    td7.innerText=perc;
   


    let td8=document.createElement("td");
    if(perc>50){
        td8.innerText="Regular";
        td8.style.color="green";
    }
    else{
        td8.innerText="Async";
        td8.style.color="red";
    }
let td9=document.createElement("td");
td9.innerText="DELETE";
td9.style.backgroundColor="red";
td9.color="white";
td9.addEventListener("click",rem);
function rem(event)
{
    console.log(event.target.parentNode.remove());
}


   tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    document.querySelector("tbody").append(tr);


}