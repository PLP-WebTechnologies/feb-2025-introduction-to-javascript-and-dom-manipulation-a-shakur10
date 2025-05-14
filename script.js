document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('text-content').textContent = 'The text content has been changed!';
});

document.getElementById('change-style-btn').addEventListener('click', function() {
    const styleText = document.getElementById('style-text');
    styleText.classList.toggle('dynamic-style');
});

document.getElementById('add-remove-btn').addEventListener('click', function() {
    const dynamicContentDiv = document.getElementById('dynamic-content');
    
    if (!dynamicContentDiv.querySelector('.added-element')) {
        const newElement = document.createElement('p');
        newElement.classList.add('added-element');
        newElement.textContent = 'This is a dynamically added element!';
        dynamicContentDiv.appendChild(newElement);
    } else {
        dynamicContentDiv.innerHTML = '';
    }
});
