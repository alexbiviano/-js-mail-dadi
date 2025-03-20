// lista di email degli invitati  
const ospiti = [  
    "alice@yahoo.com",  
    "bob@outlook.com",  
    "carol@gmail.com",  
    "dave@aruba.com"  
];  

// richiedere all'utente di inserire la propria email  
const emailUtente = prompt("Inserisci la tua email per accedere alla festa:");  

 
let accessoConsentito = false;  

// controllare se l'email è nella lista degli invitati    
for (let i = 0; i < ospiti.length; i++) {  
    if (ospiti[i] === emailUtente) {  
        accessoConsentito = true;  
        break; 
    }  
}  

// se la mail è valida, benvenuto alla festa 
if (accessoConsentito) {  
    console.log("Benvenuto alla festa!");  
} else {  
    console.log("Ci dispiace, ma non sei sulla lista degli invitati.");  
}  