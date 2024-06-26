const rangeInput = document.querySelector('input[type="range"]');

rangeInput.addEventListener('input', () => {
    let lampHead = document.querySelector('.head');
    let lampBody = document.querySelector('.body');

    const rangeValue = parseInt(rangeInput.value);

    switch (true) {
        case (rangeValue >= 0 && rangeValue < 20):
            lampHead.style.backgroundColor = 'white';
            lampBody.style.backgroundColor = 'white';
            document.body.style.backgroundColor = '#5b5859'
            lampHead.style.boxShadow = '0 0 0 #c5ac1f'
            break;
        case (rangeValue >= 20 && rangeValue < 40):
            lampHead.style.backgroundColor = '#fdf59c';
            lampBody.style.backgroundColor = '#fdf59c';
            document.body.style.backgroundColor = '#908d8e'
            lampHead.style.boxShadow = '0 0 10px #c5ac1f'
            break;
        case (rangeValue >= 41 && rangeValue <= 80):
            lampHead.style.backgroundColor = '#fdf063';
            lampBody.style.backgroundColor = '#fdf063';
            document.body.style.backgroundColor = '#adaaab'
            lampHead.style.boxShadow = '0 0 60px #c5ac1f'
            break;
        default:
            lampHead.style.backgroundColor = '#fded00';
            lampBody.style.backgroundColor = '#fded00';
            document.body.style.backgroundColor = '#b9b6b7'
            lampHead.style.boxShadow = '0 0 500px #ffd900'
            break;
    }
});


