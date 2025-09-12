const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() === '') return;
    const item = document.createElement('li');
    const deleteButton = document.createElement('button');
    item.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => {
        list.removeChild(item);
        input.focus();
    });
    item.append(deleteButton);
    list.append(item);
    input.value = '';
    input.focus();
});
