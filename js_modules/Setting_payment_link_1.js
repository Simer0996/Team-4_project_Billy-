$('.addNew').on('click', ()=>{
    console.log('hello');
    location.href='../setting_payment_link-2/index.html';
})

export let addNewPmtLink = function () {
    const getNewPmtLink = localStorage.getItem('linkURL');
    $('#newLink').attr('href', getNewPmtLink);
    $('.cable').css('opacity', '1');
};

document.addEventListener('click', function () {
    addNewPmtLink();
});
