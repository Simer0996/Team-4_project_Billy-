export const startChatting = function () {
    $('.startChatBtn').on('click', () => {
        let selectedFriend = $('.friendsDropDown :selected').text();
        localStorage.setItem('friendName', selectedFriend);
        location.href = './23_Chat_page_2.html';
    })
};

startChatting();