const formatMoney = (value) => {
    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(value)
}

const calculateTotalPay = (amount, term) => {
    let total;

    // The greater the amount, the lower the interest.
    if (amount < 5000) {
        total = amount * 1.5;
    }else if (amount >= 5000 && amount < 10000) {
        total = amount * 1.4;
    }else if (amount >= 10000 && amount < 15000) {
        total = amount * 1.3;
    }else{
        total = amount * 1.2;
    }


    // More term, higher interest.
    if(term === 6){
        total *= 1.1;
    }else if (term === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }
    return total;
}
export{ formatMoney, calculateTotalPay }