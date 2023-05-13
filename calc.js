function displayData(n){
    solution.value += n;
}

function evaluation(){
    solution.value = eval(solution.value);
}

function allClear(){
    solution.value = '';
}

function del(){
    solution.value = solution.value.slice(0,-1);
}