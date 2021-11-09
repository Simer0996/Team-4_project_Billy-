
export const startChatting = function () {
    $('.startChatBtn').on('click', () => {
        let selectedFriend = $('.friendsDropDown :selected').text();
        localStorage.setItem('friendName', selectedFriend);
        location.href='../Chat Page-2/index.html';
    })
};


document.addEventListener('DOMContentLoaded', function(){
    startChatting();
});

