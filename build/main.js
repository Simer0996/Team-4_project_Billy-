//Add Bill
let bill_array = []; //Array storage
// let add = document.getElementById("btn2")//Add button function

// import AddBill from "./js_modules/Add_bill.js"; //imported the class of dynamic object
//Object creation

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
            let bill_object = new AddBill(bills.value, amount.value, date.value, area.value)
            let arr = JSON.parse(localStorage.getItem('bill_array'))

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

        let recoveredString = localStorage.getItem('bill_array');
        console.log(recoveredString);
        let newArray = JSON.parse(recoveredString);
        console.log(newArray);

        function arrayHome() {
            for (let i of newArray) {
                let row1 = document.getElementById("myTable").insertRow(0)
                let cell1 = row1.insertCell(0);
                let cell2 = row1.insertCell(1);
                let cell3 = row1.insertCell(2);

                cell1.innerHTML = `${i.Date}`
                cell2.innerHTML = `${i.Catagories}`
                cell3.innerHTML = `$${i.Amount}`
                 

            }
        }
        // const {
        //     default: arrayHome
        // } = await import('./Home.js');
        // arrayHome;
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

        // Redirect to Chat Page-1
        $('.icon-back').on('click', () => {
            location.href = './22_Chat_page_1.html'
        })

    }
})();


// Friends List page//

// (async () => {
//     if (getClass(mainClass, 'friendsList')) {
//         console.log('this is Friends List page');
       

//         document.addEventListener('DOMContentLoaded', function () {
//             createTablePutName;
//         });

//         $('.addBtn').on('click', () => {
//             location.href = './21_Add_friend.html'
//         });

//     }
// })();

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