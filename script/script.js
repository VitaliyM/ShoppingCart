let timeSeconds = document.querySelector('.timeSeconds'),
    popUp = document.querySelector('.popUp'),
    popUpBtn = document.querySelector('.popUp_btn'),
    popClose = document.querySelector('.popUp_close'),
    setTime = 10;



timmer = setInterval(function() {
    setTime--;
    if (setTime < 0) {
        clearInterval(timmer);
        popUp.style.display = 'block';
    } else {
        timeSeconds.innerHTML = '0' + setTime;
    }
}, 1000)

popUpBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
})

popClose.addEventListener('click', () => {
    popUp.style.display = 'none';
})





function loadMore(count) {
    for (var i=0; i < count; i++) {
            var index = Math.floor(Math.random() * 100)
            var clone = tmpl.cloneNode(true);
            clone.innerHTML = clone.innerHTML
                    .replace('{{post_id}}', index)
                    .replace('{{id}}', index)
                    .replace('{{name}}', index)
                    .replace('{{email}}', index)
                    .replace('{{body}}', index);
            var fragment = document.importNode(clone.content, true); 
            $(fragment).insertBefore('div.table_gradient');
    }
}

$(document).ready(function(){

    // load at start
    loadMore(6);

    // load on click
    $('button.table_load').on('click', function (e) {
          e.preventDefault();
          loadMore(5);
    })
})








const scriptURL = 'https://script.google.com/macros/s/AKfycbzvKpJUNBxrcJx28zT8sVFZDbm7ZHTl-9zhGH4WcicVSmYNzxI3O1ALTiTxzaC_CFfT/exec'
const form = document.forms['google-sheet']
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("You have successfully submitted."))
    .catch(error => console.error('Error!', error.message))
})