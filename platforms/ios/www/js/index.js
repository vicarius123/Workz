var config = {
  apiKey: "AIzaSyAhlOSP8C9nju4uAb8Ly8l1iJnmIP45eiI",
  authDomain: "workz-a9334.firebaseapp.com",
  databaseURL: "https://workz-a9334.firebaseio.com",
  projectId: "workz-a9334",
  storageBucket: "workz-a9334.appspot.com",
  messagingSenderId: "832252248378"
};
var app = new Framework7({
  on: {
    init: function () {

    }
  },
  // App root element
  root: '#app',
  // App Name
  name: '',
  // App id
  id: 'com.workz.none',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/register/',
      url: './pages/register/index.html',
    },
    {
      path: '/step2/',
      url: './pages/register/step2.html',
    },
    {
      path: '/step3/',
      url: './pages/register/step3.html',
    },
    {
      path: '/step4/',
      url: './pages/register/step4.html',
    },
  ],
  // ... other parameters
});
var $$ = Dom7;
var mainView = app.views.create('.view-main', {
  dynamicNavbar: true
});
var provider = new firebase.auth.FacebookAuthProvider();
var storage;
var data;
var db;
var reg = [];
var p_list = ['prof1', 'prof 2', 'prof 3'];
var professions = [];
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log('ready');
  universalLinks.subscribe(null, function (eventData) {
  // do some work
  console.log('Did launch application from the link: ' + eventData.url);
});
universalLinks.subscribe(null, function(eventData) {
  AddDebug('Did launch application from the link: ' + eventData.url); // NEVER CALLED.
});
  firebase.initializeApp(config);
  storage = firebase.storage();
  firebase.auth().useDeviceLanguage();
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone_btn', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      app.dialog.close();
    }
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user);

      app.router.navigate('/register/');

      db = firebase.firestore();
      console.log(db);
      // ...
    } else {

    }
  });
}
function getAuthResult(){
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token.
      // You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      // ...
    }
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
function fbDoLogin(){
  firebase.auth().signInWithRedirect(provider).then(function() {
    getAuthResult();
  }).then(function(result) {
    // This gives you a Google Access Token.
    // You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
function phoneLogin(){
  app.dialog.prompt('Your phone number','', function (phone) {
    app.dialog.confirm('Are you sure that your phone is ' + phone + '?','', function () {
      phoneAuth(phone);
    });
  });

}
function phoneAuth(phone){
  var phoneNumber = phone;
  var appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  .then(function (confirmationResult) {
    window.confirmationResult = confirmationResult;
    app.dialog.prompt('SMS CODE:', function(code){
      app.dialog.preloader();
      confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        var user = result.user;
        console.log(result);
        app.dialog.close();
        app.router.navigate('/register/')
        // ...
      }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        // ...
      });
    });
  }).catch(function (error) {
    // Error; SMS not sent
    // ...
  });
}
$$(document).on('page:afterout', '.page[data-name="home"]', function (e) {

  mainView.router.clearPreviousHistory();
});
$$(document).on('page:mounted', '.page[data-name="register2"]', function (e) {
  var page = e.detail;
  document.addEventListener('backbutton', function (e) {
    e.preventDefault();
    return false;
  });
  new Vue({
    el: '#register2',
    methods: {
      w_role: function (event) {
        reg.roles = event;
        console.log(reg);
        mainView.router.navigate('/step2/');
      }
    }
  });
});

$$(document).on('page:init', '.page[data-name="step2"]', function (e) {
  var range = app.range.get('.range-slider');
  $$('#price-filter').on('range:change', function (e, range) {
    $$('.price-from span').text(range.value[0]);
    $$('.price-to span').text(range.value[1]);
  });
  var autocompleteDropdownAll = app.autocomplete.create({
    inputEl: '#autocomplete-dropdown-all',
    openIn: 'dropdown',
    expandInput: true,
    source: function (query, render) {
      var results = [];
      // Find matched items
      for (var i = 0; i < p_list.length; i++) {
        if (p_list[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(p_list[i]);
      }
      // Render items by passing array with result items
      render(results);

    },
    on: {
      change: function (value) {
        value = value[0];
        if(professions.indexOf(value) === -1 ){
          professions.push(value);
          $$('.selected-shit').append('<div>'+value+'</div>')
        }
      },
      closed: function(value){
        $$('#autocomplete-dropdown-all').val('');
      }
    }
  });
});

$$(document).on('page:init', '.page[data-name="step3"]', function (e) {

});
