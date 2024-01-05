 
 Notification.requestPermission(function() {
    if (Notification.permission === 'granted') {
    // l'utilisateur a approuver 
    
    } else if (Notification.permission === 'denied') {
    // l'utilisateur a refuser
    } else { // il n'a pas de  fait de choix donc vous pouvez pas envoyer de notifications
    }
   });

// default
var notification=new Notification("salut comment tu vas ?.Je t'ai vu il y belle lurettes",{
body:'Salutations',
icon:'pic.jpg'
}
);



notification.onclick=()=>{
    window.open("index2.html");
}
   setTimeout(() => {
    notification.close();
   }, 10000);

   