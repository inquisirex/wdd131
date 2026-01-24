const input = document.querySelector('#favchap');
const button = document.querySelector('#submitBtn');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.textContent = input.value;
        deleteBtn.textContent = '❌';

        deleteBtn .addEventListener('click', function() {
            list.removeChild(li);
        });
        
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
        input.focus();
    }
});

