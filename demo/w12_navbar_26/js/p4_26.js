const p = document.querySelector('.show-midterm-answer');
console.log('p', p);

function showMidtermPage(item) {
    if (!p) {
        console.error('Element with class "show-midterm-answer" not found.');
        return;
    }

    switch(item) {
        case 'p1_26':
            p.innerHTML = `<iframe src='./p1_26/p1_26.html' width='100%' height='100%'></iframe>`;
            break;
        case 'p2_26':
            p.innerHTML = `<iframe src='./p2_26/p2_26.html' width='100%' height='100%'></iframe>`;
            break;
        case 'p3_26':
            p.innerHTML = `<iframe src='./p3_26/p3_26.html' width='100%' height='100%'></iframe>`;
            break;
        default:
            console.error('Unknown page:', item);
    }
}

