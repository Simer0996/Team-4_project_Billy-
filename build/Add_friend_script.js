
// Add friend btn click move to friends list and value transfer
export const moveToFriendList = function () {
    let storedFriendName = $('.pickedName').text();
    localStorage.setItem('friendName', storedFriendName);
    location.href = '../friends_list.html';
    console.log("Add_friend_script.js")
};



