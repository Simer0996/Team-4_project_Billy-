// Load selected friend name on top of chat-box

let putSelectedFriendName = function () {
    const getFriendName = localStorage.getItem('friendName');
    $('.chatFriendName').text(getFriendName);
};

document.addEventListener('DOMContentLoaded', function () {
    putSelectedFriendName();
});

// User Input Msg display on Chat-box
$(".chatMsgSendBtn").on('click', () => {
    let userMessage = $('.userWriteMsg').val();
    let addPInMeDiv = document.createElement("p");
    let addDivInChatBox = document.createElement("div");
    let addPInChatBox = document.createElement("p");
    let addMe = "Me: "
    $(".inner").append("<p>Test</p>");

    $('.chatBoxForMsg').append(addDivInChatBox);
    addDivInChatBox.append(addPInChatBox);
    addPInChatBox.append(addPInMeDiv);
    addPInMeDiv.append(addMe);
    addPInChatBox.append(userMessage);
    addPInChatBox.setAttribute('id', 'msgCloudBox');
});

// Redirect to Chat Page-1
$('.icon-back').on('click', () => {
    location.href = '../Chat Page-1/index.html'
})