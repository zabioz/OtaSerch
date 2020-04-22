
console.log("js!")
firebase.initializeApp({
apiKey: 'AIzaSyBvoE8CcLzdYzvH1qyAHF65v76cry8h87A',
authDomain: 'https://firestore-demos.firebaseio.com',
projectId: 'my-project-ca5a7'
});
var firestore = firebase.firestore();

const docRef = firestore.doc("otaSearch/tags")
const TagList = document.querySelector("#TagList")
const saveButton = document.querySelector("#saveButton")
const AddTagContents = document.querySelector("#AddTagContents")
const AddTagField = document.querySelector("#AddTagField")

saveButton.addEventListener("click", function() {
    const textToSave = AddTagContents.value;
    console.log("tag save!!" + textToSave)
    docRef.set({
        TagList: textToSave
    }).then(function() {
        console.log("then Save")
    }).catch(function (error) {
        console.log("catch Error :" , error)
    })
})


// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// var db = firebase.firestore();

// db.collection("users").add({
// first: "Ada",
// last: "Lovelace",
// born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });


// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });