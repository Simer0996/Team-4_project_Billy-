$('.fromContacts').on('click', () => {
    $('.showContactList').slideToggle();
});



$('.friend1').on('click', () => {
    let pickedFriendName = $('.friend1').val();
    $('.pickedName').text(pickedFriendName);
});

$('.friend2').on('click', () => {
    let pickedFriendName = $('.friend2').val();
    $('.pickedName').text(pickedFriendName);
});

$('.friend3').on('click', () => {
    let pickedFriendName = $('.friend3').val();
    $('.pickedName').text(pickedFriendName);
});

$('.friend4').on('click', () => {
    let pickedFriendName = $('.friend4').val();
    $('.pickedName').text(pickedFriendName);
});



$('.addFriendBtn').on('click', () => {
    window.location.href='../friends_list/index.html'
})