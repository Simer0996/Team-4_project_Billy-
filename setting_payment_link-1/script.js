// $('#menuMen').on('click', () => {
//     $('#mainImg').css('display', 'none');
//     $('#menImg').css('display', 'block');
//     $('#womenImg').css('display', 'none');
//     $('.exploreBtn2').css('display', 'none');
//     $('.exploreBtn').css('display', 'block');
//     $('#arrow').css('display', 'block');
// })

$('.addNew').on('click', ()=>{
    console.log('hello');
    location.href='../setting_payment_link-2/index.html';
})

let addNewPmtLink = function () {
    const getNewPmtLink = localStorage.getItem('linkURL');
    $('#newLink').attr('href', getNewPmtLink);
    $('.cable').css('opacity', '1');
};

document.addEventListener('click', function () {
    addNewPmtLink();
});
