//Add Bill page
let bill_array = [];
let bill_splitter__history_array = []
let mainClass = Array.from(document.querySelector('main').classList);
console.log('main class', mainClass);

function getClass(list, cls) {
    let res = list.includes(cls);
    // console.log(res);
    return res;
}

//New Bill page
(async () => {
    if (getClass(mainClass, 'new-bill')) {
        console.log('this is New Bill page');
        const {
            default: AddBill
        } = await import('./Add_bill.js');
        btn2.addEventListener('click', (e) => {
            e.preventDefault()
            let bill_object = new AddBill(bills.value, amount.value, date.value, area.value, false)
            let arr = JSON.parse(localStorage.getItem('bill_array'))
            if (arr == null) {
                arr = [];
            }
            arr.push(bill_object)
            console.log(arr)
            outputArea.innerText = "Bill Added!"

            localStorage.setItem('bill_array', JSON.stringify(arr));

        })
    }
})();

//History page
(async () => {
    if (getClass(mainClass, 'history')) {
        console.log('this is History page');
        const {
            default: createTable
        } = await import('./History.js');
        createTable;
    }
})();

// Home page
(async () => {
    if (getClass(mainClass, 'homePage')) {
        console.log('this is Home page');

        function draw(data) {
            var calendarEl = document.getElementById('calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                initialDate: '2021-11-07',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                events: data
            });
            calendar.render();

        }

        let recoveredString = localStorage.getItem('bill_array');
        console.log(recoveredString);
        let newArray = JSON.parse(recoveredString);
        console.log(newArray);

        if (newArray == null) {
            newArray = []
        }

        newArray.sort((a, b) => {
            if (a.Date > b.Date) {
                return -1
            } else {
                return 1
            }
        });


        function renderRows() {
            // newArray.forEach(bill_object => {
            //     arrayHome(bill_object);
            // })
            draw(newArray.map(obj => {
                return {
                    title: obj.Categories,
                    start: obj.Date,
                }
            }));
        }

        function arrayHome() {
            for (let i = 0; i < newArray.length; i++) {
                let row1 = document.getElementById("myTable").insertRow(0)
                let cell1 = row1.insertCell(0);
                let cell2 = row1.insertCell(1);
                let cell3 = row1.insertCell(2);

                cell1.innerHTML = `${newArray[i].Date}`
                cell2.innerHTML = `${newArray[i].Categories}`
                cell3.innerHTML = `$${newArray[i].Amount}`

            }
        }
        renderRows()
        arrayHome()
    }
})();


//Add Friends//
(async () => {
    if (getClass(mainClass, 'addFriends')) {
        console.log('this is Add Friend page');
        const {
            default: moveToFriendList

        } = await import('./Add_friend.js');
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

        $('.addFriendBtn').on('click', () => {
            let storedFriendName = $('.pickedName').text();
            localStorage.setItem('friendName', storedFriendName);
            location.href = './20_Friends_list.html';
            console.log("Add_friend.js")
        });
    }
})();


// Friends List page//
let createTablePutName = function () {
    const loadFriendName = localStorage.getItem('friendName');
    $('.addFriendNameList').append('<li class="liFriendName"></li>');
    $('.liFriendName').text(loadFriendName);
};

document.addEventListener('DOMContentLoaded', function () {
    createTablePutName();
});

$('.addBtn').on('click', () => {
    location.href = './21_Add_friend.html'
});


// Chat page//
(async () => {
    if (getClass(mainClass, 'chat1Page')) {
        console.log('this is Chat 1 page');
        const {
            default: startChatting
        } = await import('./Chat_page_1.js');
        document.addEventListener('DOMContentLoaded', function () {
            startChatting;
        });


    }
})();

(async () => {
    if (getClass(mainClass, 'chat2Page')) {
        console.log('this is Chat 2 page');
        const {
            default: putSelectedFriendName
        } = await import('./Chat_page_2.js');
        putSelectedFriendName

        document.addEventListener('DOMContentLoaded', function () {
            putSelectedFriendName;
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
            location.href = './22_Chat_page_1.html'
        })

    }
})();



//Setting payment
(async () => {
    if (getClass(mainClass, 'paymentLinkAll')) {
        console.log('this is Setting Payment1 page');
        const {
            default: addNewPmtLink
        } = await import('./Setting_payment_link_1.js');

        $('.addNew').on('click', () => {
            console.log('hello');
            location.href = './11_Setting_payment_link_2.html';
        })
        document.addEventListener('click', function () {
            addNewPmtLink;
        });
    }
})();


//Setting payment 2

(async () => {
    if (getClass(mainClass, 'settingPayment2')) {
        console.log('this is Setting Payment page');
        // const {
        //     default: addNewPmtLink
        // } = await import('./Setting_payment_link_2.js');

        $('.pmtLinkSaveBtn').on('click', () => {
            const cableURL = $('.cableURL').val();
            localStorage.setItem('linkURL', cableURL);
        })

        $('.icon-back').on('click', () => {
            location.href = '../Setting_payment_link_1.html';
        })
    }
})();

//Forgot Password
(async () => {
    if (getClass(mainClass, 'forgotmain')) {
        console.log('this is Forgot password page');
        const auth = firebase.auth();

        const newpassFunction = () => {

            let useremail = document.getElementById('email').value;
            console.log('user email', useremail);
            auth.sendPasswordResetEmail(useremail)
                .then(() => {
                    console.log("Password reset email sent");
                })
                .catch(error => {
                    console.error(error);
                })
        }

        newpass.addEventListener('click', newpassFunction);
    }
})();

//Login Page
(async () => {
    if (getClass(mainClass, 'loginmain')) {
        console.log('this is Login page');
        //let loginid = document.getElementById('login');
        login.addEventListener('click', () => {
            let useremail = document.getElementById('email').value;
            let userpassword = document.getElementById('password').value;

            firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
                .then(function (userCredential) {
                    console.log('User login successfully', userCredential.user);
                    setTimeout(function () {
                        window.location.href = "./4_Home.html";
                    }, 3000)
                })
                .catch(function (error) {
                    // let errorCode=error.code;
                    let errorMessage = error.message;
                    window.alert("Error:" + errorMessage);
                })
        });
    }
})();

//Sign-up Page
(async () => {
    if (getClass(mainClass, 'sign-up')) {
        console.log('this is Sign-up page');

        console.log("Sign up loaded");
        signup.addEventListener('click', () => {
            let uemail = document.getElementById("email");
            let upassword = document.getElementById("password");
            let ufullname = document.getElementById("fullname");
            let uconfirmpassword = document.getElementById("confirmpassword");
            let umobile = document.getElementById("mobile");

            auth.createUserWithEmailAndPassword(uemail.value, upassword.value, ufullname, uconfirmpassword, umobile)
                .then(() => {
                    console.log('User has been created');
                    alert("Sign Up successfull");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        })
    }
})();

//Setting Page//

(async () => {
    if (getClass(mainClass, 'settingpage')) {
        console.log('this is Setting page');
        logg.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut().then(() => {
                    window.location.href = "./1_Login_Page.html";
                })
                .catch((error) => {
                    console.log('error signput', error);
                })
        })
    }
})();


//Setting_help//

(async () => {
    if (getClass(mainClass, 'helpmain')) {
        console.log('this is Setting Help page');

        sett.addEventListener('click', () => {
            let templateParams = {
                subject: subject.value,
                message: input.value
            };
            emailjs.send('service_06wkfum', 'template_vwwkuuj', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });

    }
})();

//Bill Request
//
(async () => {
    if (getClass(mainClass, 'billRequest')) {
        console.log('this is Bill Request page');
        console.log("Hello There");
        let addBtn = document.querySelector('#add');
        let subBtn = document.querySelector('#sub');
        let qty = document.querySelector('#qtyBox');
        let theAmount = document.getElementById('totalAmount');
        let am1 = document.getElementById('amount1');
        let am2 = document.getElementById('amount2');
        let am3 = document.getElementById('amount3');
        let send = document.getElementById('send_btn');
        let name = document.getElementById('name');
        let chkSplit = document.getElementById('chkSplitEvenly');
        let dateDue = document.getElementById('dateDue');
        let friendsArr = [];
        console.log(dateDue);
        var usersCount = 0;
        chkSplit.addEventListener('change', e => {
            if (e.target.checked) {
                console.log('checked')
            } else {
                console.log('un checked')
            }
            console.log(theAmount.value);
            console.log(usersCount)
            console.log(theAmount.value / usersCount);
        });
        addBtn.addEventListener('click', () => {
            console.log("added");
            qty.value = parseInt(qty.value) + 1;
        });
        subBtn.addEventListener('click', () => {
            if (qty.value <= 0) {
                qty.value = 0;
            } else {
                qty.value = parseInt(qty.value) - 1;
            }
        });

        function saveData(ref) {
            // const billRef = ref.child('bill');
            ref.set({
                    'total_amount': theAmount.value,
                    'no_of_people': qty.value,
                    'amount_1': am1.value,
                    'amount_2': am2.value,
                    'amount_3': am3.value
                })
                .then(() => {
                    alert("data has been added successfully");
                })
                .catch((error) => {
                    alert("unsuccessful, error");
                });
        }

        function insertData() {
            set(ref(db, "TheData/" + qty.value), {
                    total_amount: theAmount.value,
                    no_of_people: qty.value,
                    amount_1: am1.value,
                    amount_2: am2.value,
                    amount_3: am3.value
                })
                .then(() => {
                    alert("data has been added successfully");
                })
                .catch((error) => {
                    alert("unsuccessful, error");
                });
        }
        send.addEventListener('click', () => {
            // Check browser support
            // if (typeof (Storage) !== "undefined") {
            //     // Store
            //     localStorage.setItem("userCount", usersCount);
            //     for (let i = 0; i < usersCount; i++) {
            //         console.log("addpar_" + i)
            //         console.log(document.getElementById("addpar_" + i))
            //         console.log(document.getElementById("addpar_" + i).value)
            //         localStorage.setItem(i, document.getElementById("addpar_" + i).value + "16/11" + (theAmount.value / usersCount));
            //     }
            // }
            // alert("navigation");
            //friendsArr.push({"dueDate": theduedate.value, "To": name.value, "Amount": '100'});
            console.log("Hello Saurabh");
            let i = 0;
            for (let obj of friendsArr) {
                obj.dueDate = document.getElementById('dateDue').value;
                obj.Amount = document.getElementById(`addtext_${i}`).value;
                console.log(`Obj----> ${obj.dueDate}`);
                i++;
            }
            console.log(`----> ${friendsArr}`);
            localStorage.setItem("friendsArray", JSON.stringify(friendsArr));
            window.location.href = '18_Bill_Splitter_history.html';
            /* // console.log(JSON.stringify(ref));
             // saveData(ref);
             set(ref(db,'bills/'+ new Date().getTime()),{
                     'total_amount': theAmount.value,
                     'no_of_people': qty.value,
                     'amount_1': am1.value,
                     'amount_2': am2.value,
                     'amount_3': am3.value
             })
             .then(() => {
                 alert("data has been added successfully");
             })
             .catch((error) => {
                 alert("unsuccessful, error");
             });
             // ref.child('test').set(
             //     {
             //         'total_amount': theAmount.value,
             //         'no_of_people': qty.value,
             //         'amount_1': am1.value,
             //         'amount_2': am2.value,
             //         'amount_3': am3.value
             //     }
             // );*/
        });
        // for(let i=0; i<5; i++) {
        //         <div class="fourthdiv4">
        //         <img src="images/Vector_13.png" alt="">
        //         <p>Namhyung Kim</p>
        //         <input type="text" id="amount3" placeholder="$">
        //         </div>
        //         var content = "<div id='addiv_"+i+"'><img id='addimg_"+i+"' src='../images/Vector_13.png' alt=''><p id='addpar_"+i+"'>Namhyung Kim</p><input id='addtext_"+i+"' type='text' placeholder='$'></div>"
        //         document.getElementById('fourthdiv').innerHTML += content;
        //         var new_element = document.createElement('div');
        //         var sp = document.createElement('span');
        //         var br = document.createElement('br');
        //         var img = document.createElement('img');
        //         var text_field = document.createElement('text');
        //         img.setAttribute('src', 'images/Vector_13.png');
        //         var span_text = document.createTextNode('hello');
        //         sp.appendChild(span_text);
        //         var my_container = document.getElementById("fourthdiv");
        //         my_container.appendChild(img);
        //         my_container.appendChild(sp);
        //         my_container.appendChild(text_field);
        //         my_container.appendChild(br);
        // }

        add_friend_btn.addEventListener('click', () => {
            friendsArr.push({
                "dueDate": dateDue.value,
                "To": name.value,
                "Amount": '100'
            });
            // console.log(friendsArr); style="text-align:center;"
            var content = "";
            document.getElementById('fourthdiv').innerHTML = content;
            for (let i = 0; i < friendsArr.length; i++) {
                console.log(friendsArr[i]["To"]);
                content = "<div class='dynamicDiv' id='addiv_" + i + "'><p id='addpar_" + i + "'>" + friendsArr[i]["To"] + "</p><input id='addtext_" + i + "' type='text' placeholder='$'></div>"
                document.getElementById('fourthdiv').innerHTML += content;
            }
            usersCount++;
            localStorage.setItem("friendsArray", JSON.stringify(friendsArr));
        })
    }
})();
(async () => {
    if (getClass(mainClass, 'camera-capture')) {
        console.log('This is Camera Capture page');
        // const Webcam = require("./webcamjs");
        // import Webcam, { set } from "./webcamjs/webcam.min";
        // set({
        //     width: 320,
        //     height: 240,
        //     image_format: 'jpeg',
        //     jpeg_quality: 90
        // });
        console.log('Hello Capture');
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const snap = document.getElementById('snap');
        const constraints = {
            // audio: true,
            video: {
                video: {
                    facingMode: "user"
                },
                video: {
                    facingMode: {
                        exact: "environment"
                    }
                },
                width: {
                    min: 1024,
                    ideal: 1280,
                    max: 1920
                },
                height: {
                    min: 576,
                    ideal: 720,
                    max: 1080
                }
            }
        }
        //Camera Capture
        async function startWebCam() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                video.srcObject = stream;
                window.stream = stream;
                console.log("camera is working")
            } catch (error) {
                console.log(error.toString());
            }
        }
        var context = canvas.getContext('2d');
        snap.addEventListener('click', () => {
            context.drawImage(video, 0, 0, 450, 400);
            // Stop all video streams.
            video.srcObject.getVideoTracks().forEach(track => track.stop());
            video.style.display = "none";
            canvas.style.display = "block";
        });
        startWebCam();
        saveButton.addEventListener('click', (e) => {
            console.log("savebutton function");
            const link = document.createElement('a');
            link.download = 'download.png';
            link.href = canvas.toDataURL();
            link.click();
            link.delete;
            //     Webcam.snap( function(data_uri) {
            //     console.log(data_uri);
            //     } )
            //     Webcam.snap( function(data_uri) {
            //     document.getElementById('canvas').innerHTML = 
            //        '<img id="imageprev" src="'+data_uri+'"/>';
            // } )
            // Webcam.reset();
        });
    }
})();
//Split History//
(async () => {
    if (getClass(mainClass, 'split-history')) {
        console.log('this is Split History page');

        function historyTable() {
            bill_splitter__history_array = JSON.parse(localStorage.getItem("friendsArray"));
            let row001 = document.getElementById('hisTable').insertRow(0);
            let cell001 = row001.insertCell(0);
            let cell002 = row001.insertCell(1);
            let cell003 = row001.insertCell(2);

            cell001.innerHTML = `<b>Due Date</b>`
            cell002.innerHTML = `<b>To</b>`
            cell003.innerHTML = `<b>Amount</b>`

            for (let i of bill_splitter__history_array) {
                console.log(i)
                let row1 = document.getElementById("hisTable").insertRow(1)
                let cell1 = row1.insertCell(0);
                let cell2 = row1.insertCell(1);
                let cell3 = row1.insertCell(2);
                cell1.innerHTML = `${i.dueDate}`
                cell2.innerHTML = `${i.To}`
                cell3.innerHTML = `$${i.Amount}`
            }
        }
        historyTable();
    }
})();