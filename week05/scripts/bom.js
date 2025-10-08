const chaptersArray = getChapterList() || [];

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value.trim() === '') return;
    displayList(input.value.trim());
    chaptersArray.push(input.value.trim());
    setChapterList(chaptersArray);
    input.value = '';
    input.focus();
});

function displayList(chapter) {
    const item = document.createElement('li');
    const deleteButton = document.createElement('button');
    item.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => {
        list.removeChild(item);
        deleteChapter(chapter);
        input.focus();
    });
    item.append(deleteButton);
    list.append(item);
}

function setChapterList(chaptersArray) {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    const index = chaptersArray.indexOf(chapter);
    if (index !== -1) {
        chaptersArray.splice(index, 1);
        setChapterList(chaptersArray);
    }
}