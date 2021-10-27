logg.addEventListener('click', (e)=>{
  e.preventDefault();
auth.signOut().then(() => {
  alert("User signed out");
})
})