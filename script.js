const inputText = document.getElementById('inputText');
const btnOk = document.getElementById('ok');
const selectOption = document.getElementById('selectOption');
const ulList = document.getElementById('ulList');

btnOk.addEventListener('click', function() {
    const li = document.createElement('li');
    const btnPlus = document.createElement('button');
    const btnMinus = document.createElement('button');

    btnPlus.textContent = "✔";
    btnPlus.classList.add('btn-plus'); 
    btnMinus.textContent = "-";
    btnMinus.classList.add('btn-minus'); 

    li.textContent = inputText.value;
    li.classList.add('class-active');
    
    ulList.appendChild(li);

    li.appendChild(btnPlus);
    li.appendChild(btnMinus);

    inputText.value = '';
});

ulList.addEventListener('click', function(event) {
    const target = event.target;
    const li = target.closest('li');

    if (li) {
        if (target.classList.contains('btn-plus')) {
            li.classList.toggle('completed');
        } else if (target.classList.contains('btn-minus')) {
            li.classList.remove('completed');
            li.classList.add('deleted-item');
        }
    }
});

selectOption.addEventListener('change', function() {
    const lis = ulList.querySelectorAll('li');
    lis.forEach(function(li) {
        li.style.display = 'block'; 
        switch (selectOption.value) {
            case 'active':
                if (li.classList.contains('completed') || li.classList.contains('deleted-item')) {
                    li.style.display = 'none';
                }
                break;
            case 'completed':
                if (!li.classList.contains('completed') || li.classList.contains('deleted-item')) {
                    li.style.display = 'none';
                }
                break;
            case 'deleted':
                if (!li.classList.contains('deleted-item')) {
                    li.style.display = 'none';
                }
                break;
        }
    });
});
