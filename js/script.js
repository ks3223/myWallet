let tovarName = document.querySelector("#tovarName");
let tovarPrice = document.querySelector("#tovarPrice");
let category = document.querySelector("#selectCategory");
let btn = document.querySelector("#btn");
let table = document.querySelector("#table");
sp1 = document.querySelector('#sp1');
sp2 = document.querySelector('#sp2');
sp3 = document.querySelector('#sp3');
sp4 = document.querySelector('#sp4');
let summ1 = 0;
let summ2 = 0;
let summ3 = 0;
let summ4 = 0;
let del1 = 0;
let del2 = 0;
let del3 = 0;
let del4 = 0;
function addTr() {
    tnValue = tovarName.value;
    tpValue = tovarPrice.value;
    catValue = category.value;
    let newTr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.textContent = tnValue;
    td2.textContent = tpValue;
    td3.textContent = catValue;
    let td4 = document.createElement('button');
    td4.textContent = 'X';
    newTr.appendChild(td1);
    newTr.appendChild(td2);
    newTr.appendChild(td3);
    newTr.appendChild(td4);
    table.appendChild(newTr);
    td1.classList.add("newTd");
    td2.classList.add("newTd");
    td3.classList.add("newTd");
    td4.classList.add("td4");
    tpValue = +tpValue;
    console.log(tpValue);
    console.log(catValue);
    if(catValue == "product"){summ1 += tpValue}
    if(catValue == "fastfood"){summ2 += tpValue}
    if(catValue == "sport"){summ3 += tpValue}
    if(catValue == "drinks"){summ4 += tpValue}
    document.querySelectorAll(".legend__price")
    .forEach(span => {
        let spanset = span.parentElement.dataset.category;
        console.log(summ1,summ2,summ3,summ4);
        if (catValue == spanset && catValue == "product"){
           span.innerHTML = summ1;
        }else if(catValue == spanset && catValue == "fastfood"){  
           span.innerHTML = summ2;
        }else if (catValue == spanset && catValue == "sport"){
           span.innerHTML = summ3;
        }else if(catValue == spanset && catValue == "drinks") {
           span.innerHTML = summ4;
        }
        let bill = document.querySelector(".bill_num");
        bill.innerHTML = summ1+summ2+summ3+summ4;
        td4.addEventListener('click',(e)=>{
            let target = e.target;
            target.classList.add('active');
            if ( catValue == "product"){
                sp1.innerHTML = summ1 - tpValue 
             }else if( catValue == "fastfood"){  
                sp2.innerHTML = summ2 - tpValue 
             }else if ( catValue == "sport"){
                sp3.innerHTML = summ3 - tpValue 
             }else if( catValue == "drinks") {
                sp4.innerHTML = summ4 - tpValue 
             }
             td4.parentElement.remove();
        })
    });
}


btn.addEventListener('click',addTr);

   
   
