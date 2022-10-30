firebase.auth().onAuthStateChanger((user)=>{
    if(!user)
    {
        location.replace("database_test.html")
    }
})