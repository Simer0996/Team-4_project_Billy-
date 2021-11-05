// Slide bar toggle down
$('.fromContacts').on('click', () => {
    $('.showContactList').slideToggle();
});


// pick name from contact list and show the result bottom
$('.friend1').on('click', () => {
    let pickedFriendName = $('.friend1').text();
    $('.pickedName').html(pickedFriendName);
});

$('.friend2').on('click', () => {
    let pickedFriendName = $('.friend2').text();
    $('.pickedName').text(pickedFriendName);
});

$('.friend3').on('click', () => {
    let pickedFriendName = $('.friend3').text();
    $('.pickedName').text(pickedFriendName);
});

$('.friend4').on('click', () => {
    let pickedFriendName = $('.friend4').text();
    $('.pickedName').text(pickedFriendName);
});

$('.friend5').on('click', () => {
    let pickedFriendName = $('.friend5').text();
    $('.pickedName').text(pickedFriendName);
});

$('.friend6').on('click', () => {
    let pickedFriendName = $('.friend6').text();
    $('.pickedName').text(pickedFriendName);
});

$('.friend7').on('click', () => {
    let pickedFriendName = $('.friend7').text();
    $('.pickedName').text(pickedFriendName);
});

$('.friend8').on('click', () => {
    let pickedFriendName = $('.friend8').text();
    $('.pickedName').text(pickedFriendName);
});

$('.friend9').on('click', () => {
    let pickedFriendName = $('.friend9').text();
    $('.pickedName').text(pickedFriendName);
});


// Add friend btn click move to friends list and value transfer
const moveToFriendList = function () {
    let storedFriendName = $('.pickedName').text();
    localStorage.setItem('friendName', storedFriendName);
    location.href = '../friends_list/index.html';
};


$('.addFriendBtn').on('click', () => {
    moveToFriendList();
});


