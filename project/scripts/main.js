// 1. SELECT ELEMENT (DOM Manipulation)
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// 2. EVENT LISTENER (DOM Manipulation)
menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// 3. OBJECTS & ARRAYS (Rubric Item 12 & 13)
const tickets = [
    {
        type: "Plebeian (Standard)",
        price: 15,
        access: "General Entry"
    },
    {
        type: "Senator (VIP)",
        price: 45,
        access: "Arena Floor Access"
    },
    {
        type: "Emperor (All Access)",
        price: 100,
        access: "Private Tour + Dinner"
    }
];

// 4. FUNCTION & CONDITIONAL (Rubric Item 9 & 11)
function displayTickets() {
    const container = document.getElementById('ticket-container');
    
    // Check if we are on the page that has the container
    if (container) {
        // 5. ARRAY METHOD (Rubric Item 13) - .map or .forEach
        tickets.forEach(ticket => {
            // 6. TEMPLATE LITERALS (Rubric Item 14)
            const ticketCard = `
                <div class="ticket-card" style="border:1px solid #333; margin: 10px; padding: 10px;">
                    <h3>${ticket.type}</h3>
                    <p>Price: ${ticket.price} Gold Coins</p>
                    <p>Includes: ${ticket.access}</p>
                </div>
            `;
            container.innerHTML += ticketCard;
        });
    }
}

// Call the function
displayTickets();

// 7. LOCAL STORAGE (Rubric Item 15)
// Count how many times the user has visited
let visits = Number(localStorage.getItem('visitCount')) || 0;
visits++;
localStorage.setItem('visitCount', visits);

// Display the visit count
const visitDisplay = document.getElementById('visitCount');
if (visitDisplay) {
    visitDisplay.textContent = `You have visited this page ${visits} times.`;
}