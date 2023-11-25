function check(event){
    event.preventDefault();
    var elements = document.getElementsByClassName('input_field');
    var filled = true;
    var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    for(var i = 0;i<elements.length;i++){
        if(elements[i].value.trim() === ''){
            filled = false;
            alert("site polinja treba da se popolneti")
            break;
            //ova me izmachi ne znaev kako treba i chatgpt mi kazha
        }else if(elements[i].placeholder === 'Телефон' && !phonePattern.test(elements[i].value)){
            filled = false;
             alert("telefonskiot broj ne e vo validen format")
             break;
    }
}
    if(filled){
        window.location.href='zadaca2.html';
    }else{
        
    }

}