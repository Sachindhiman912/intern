let searchForm=document.querySelector(".search-form");

document.querySelector("#search-btn").onclick=()=>{
    console.log("search button ::");
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


  
let shoppingCart=document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick=()=>{
    console.log("Cart button clicked!!");
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



let loginForm=document.querySelector(".login-form");

document.querySelector('#login-btn').onclick=()=>{
    console.log("login form");
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    first();

}

let navbar=document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick=()=>{
    console.log("MEnu button clicked!!")
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

let signUp=document.querySelector(".signup-form");
document.querySelector('#newAcc').onclick=()=>{
    console.log("sign ups button clicked!!")
    signUp.classList.toggle('active');  
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

    second();
}


document.querySelector('#loginSignup').onclick=(e)=>{
    
    console.log("login is clicked form signup");
    e.preventDefault()
    loginForm.classList.toggle('active');
    signUp.classList.remove('active');  
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
   
}




window.onscroll=()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    signUp.classList.remove('active');
}




// let btnSubmit=document.querySelector(".btn");

// document.querySelector('#btn').onclick=()=>{
//     console.log("logindga form");

//     loginSubmit();

// }
// debugger;
// const first=()=>{
//     console.log("diirnk")

//     document.getElementById("submitBtn").onclick('click'){
//         // loginForm();
//     }
// }

const first = () => {
    console.log("drink");

    // Correcting the usage of addEventListener instead of onclick
    document.getElementById("submitBtn").addEventListener('click', function() {
        // You can call the loginForm() or any function here
        loginSubmit();
    });
};


const second = () => {
    console.log("second");

    // Correcting the usage of addEventListener instead of onclick
    document.getElementById("signupSubmit").addEventListener('click', function() {
        // You can call the loginForm() or any function here
        console.log("&&&&&&&&&&&")
        signUpSubmit();
    });
};


 


//again
function loginSubmit() {
    console.log("Login Submit:");

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("Checking login details");

    // Validate the email and password
    if (email && password) {
        // Retrieve all users from localStorage
        const storedUsers = localStorage.getItem('users');
        console.log("Stored users:", storedUsers);

        if (storedUsers) {
            // Parse the stored users data into an array of user objects
            const parsedUsers = JSON.parse(storedUsers);

            // Search for a user that matches the provided email and password
            const user = parsedUsers.find(user => user.email === email && user.password === password);

            if (user) {
                // If match, login successful
                loginForm.classList.remove('active');
                alert('Login successful!');

                // Display the user's name on the page
                let wel = document.getElementById("wel");
                wel.innerHTML = `<h1>Hi!! ${user.name}</h1>`;

                // Optionally, redirect to a new page
                // window.location.href = 'home.html';
            } else {
                // If no user matches the email and password, login unsuccessful
                alert('Incorrect email or password. Login unsuccessful.');
            }
        } else {
            // If no users exist in localStorage
            alert('No user found. Please register first.');
        }
    } else {
        alert('Please enter both email and password');
    }
}




// function loginSubmit() {
//     console.log("Login Submit:");

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log("Checking login details");

//     // Validate the email and password
//     if (email && password) {
//         // Check if loginDetails exist in localStorage
//         const storedLoginDetails = localStorage.getItem('userData');
//         console.log("stored logiin details",storedLoginDetails);
//         if (storedLoginDetails) {
//             const parsedLoginDetails = JSON.parse(storedLoginDetails);
            
//             // Check if the email and password match the stored data
//             if (parsedLoginDetails.email === email && parsedLoginDetails.password === password) {
//                 // If match, login successful
//                 loginForm.classList.remove('active');

//                 alert('Login successful!');


//                 let wel=document.getElementById("wel")
//                 wel.innerHTML=`<h1>Hi!! ${parsedLoginDetails.name}</h1>`
//                 // Optionally, redirect to a new page
//                 // window.location.href = 'home.html';
//             } else {
//                 // If email or password doesn't match, login unsuccessful
//                 alert('Incorrect email or password. Login unsuccessful.');
//             }
//         } else {
//             // If no user data exists in localStorage
//             alert('No user found. Please register first.');
//         }
//     } else {
//         alert('Please enter both email and password');
//     }
// }

home.addEventListener('click', function() {
    console.log("Removing")
    // Remove the 'active' class from all specified elements
    signUp.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
});




// function signUpSubmit() {
//     // Get the values from the input fields
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('createEmail').value;
//     const password = document.getElementById('createPassword').value;
    
//     console.log("name",name)
//     console.log("email",email)
//     console.log("password",password)
//     // Validate the fields (optional)
//     if (!name || !email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }
  
//     // Create an object to store the user data
//     const userData = {
//       name: name,
//       email: email,
//       password: password
//     };
  
//     // Store the data in localStorage (you can store it as a JSON string)
//     localStorage.setItem('userData', JSON.stringify(userData));
//     signUp.classList.remove('active');
//     alert('Signup successful!');
//   }
  

function signUpSubmit() {
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('createEmail').value;
    const password = document.getElementById('createPassword').value;
  
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
  
    // Validate the fields (optional)
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Create an object to store the user data
    const userData = {
      name: name,
      email: email,
      password: password
    };
  
    // Retrieve existing users from localStorage (if any)
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add the new user to the array of users
    users.push(userData);
  
    // Store the updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Optionally close the sign-up form (if you have a modal or something like that)
    const signUp = document.getElementById('signUp');
    if (signUp) {
      signUp.classList.remove('active');
    }
    signUp.classList.remove('active');
    alert('Signup successful!');
  }
  