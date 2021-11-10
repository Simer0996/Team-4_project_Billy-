$('.addBtn').on('click', () => {
    location.href = './Add_friend.html'
});

export let createTablePutName = function () {
    const loadFriendName = localStorage.getItem('friendName');
    $('.addFriendNameList').append('<li class="liFriendName"></li>');
    $('.liFriendName').text(loadFriendName);
};



document.addEventListener('DOMContentLoaded',  function () {
    createTablePutName();
});



