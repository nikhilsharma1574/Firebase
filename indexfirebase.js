import { FirebaseError } from "firebase/app"

document.getElementById("loginform").addEventListener("submit",(event)=>{
    event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("databasewelcome.html")
    }
})