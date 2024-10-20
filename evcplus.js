// Dummy data to simulate user accounts
let users = [
    { id: 1, name: 'Muriidi', phone: '+252613406852', pin: '2004', balance: 1000 },
    { id: 2, name: 'Canab', phone: '+252613406851', pin: '2006', balance: 9000 }
];

// Variable to store the currently logged-in user
let currentUser = null;

// Login Function
function loginUser() {
    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;

    currentUser = users.find(user => user.phone === phone && user.pin === pin);

    if (currentUser) {
        document.getElementById('username').innerText = currentUser.name;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('actions').style.display = 'block';
        console.log(`Login successful! Welcome, ${currentUser.name}.`);
    } else {
        alert('Invalid phone number or PIN');
        document.getElementById('actions').style.display = 'none';
    }
}

// Check Balance Function
function checkBalance() {
    if (currentUser) {
        document.getElementById('balance').innerText = `Your balance is $${currentUser.balance}`;
    } else {
        alert('Please log in first.');
    }
}

// Transfer Money Function
function transferMoney() {
    const recipientPhone = document.getElementById('recipientPhone').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (!currentUser) {
        alert('Please log in first.');
        return;
    }

    let recipient = users.find(user => user.phone === recipientPhone);

    if (!recipient) {
        document.getElementById('transferMessage').innerText = 'Recipient not found.';
        return;
    }

    if (currentUser.balance < amount) {
        document.getElementById('transferMessage').innerText = 'Insufficient balance.';
        return;
    }

    // Deduct amount from the current user's balance and add to recipient's balance
    currentUser.balance -= amount;
    recipient.balance += amount;

    document.getElementById('transferMessage').innerText = `Transferred $${amount} to ${recipient.name}. New balance: $${currentUser.balance}`;
}
