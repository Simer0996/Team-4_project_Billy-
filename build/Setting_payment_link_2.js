$('.pmtLinkSaveBtn').on('click', ()=> {
    const cableURL = $('.cableURL').val();
    localStorage.setItem('linkURL', cableURL);
})

$('.icon-back').on('click', ()=> {
    location.href='../setting_payment_link-1/index.html';
})