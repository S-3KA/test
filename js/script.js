document.querySelector('#elastic').oninput = function(){
    let val = this.value.trim();
    let elasticItame = document.querySelectorAll('.elastic a');
    if (val != ''){
        elasticItame.forEach(function (elem){
            if (elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else{
                elem.classList.remove('hide');
            }
        });
    }
    else{
        elasticItame.forEach(function(elem){
            elem.classList.remove('hide');
        })
    }
}