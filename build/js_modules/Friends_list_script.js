$('.addBtn').on('click', () => {
    location.href = '../add_friend/index.html'
});

let createTablePutName = function () {
    const loadFriendName = localStorage.getItem('friendName');
    $('.addFriendNameList').append('<li class="liFriendName"></li>');
    $('.liFriendName').text(loadFriendName);
};



document.addEventListener('DOMContentLoaded',  function () {
    createTablePutName();
});


