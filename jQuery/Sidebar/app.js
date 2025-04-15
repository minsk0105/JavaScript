$('#bar').on('click', () => {
    $('aside').toggleClass('show');
});

$('#close').on('click', () => {
    $('aside').removeClass('show');
});