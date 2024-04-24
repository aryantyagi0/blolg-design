form=document.querySelector('.form-input');
btn=document.getElementById('btn');
output=document.getElementById('get');
// btn.addEventListener('click',()=>{
//     alert("hi");
//     search=form.value;
//     const urlParams = new URLSearchParams(window.location.search);
//     const myParam = urlParams.get('query');
//     console.log(myParam);
//     output.innerHTML=`search results for ${myParam}`;
// })

function getvalue(event){
    console.log(event.target.value);
}
