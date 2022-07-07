
while (true) {
    var cuponCode = Math.floor(Math.random() * 10 + 1)
    if (cuponCode === 6) {
        console.log("Champion Champion");
        break;
    } else {
        console.log('Your Copon Code is ' + cuponCode);
    }
} 
