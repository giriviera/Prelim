document.getElementById('viewPetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    viewPet();
});

async function viewPet(){
    const id = document.getElementById('id').value;

    try {
        const response = await fetch(`https://prelim-exam.onrender.com/users/${id}/pets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Success:', data);
        
        result.innerHTML = '';

        if (data.length === 0) {
            result.innerHTML = `
                <h2>No Pets Found</h2>`;
        }

        let petsList = '<h2>Your Pets</h2><ul>';
                
                data.forEach(pet => {
                    petsList += `
                        <li>
                            <strong>Name:</strong> ${pets.id || 'N/A'}<br>
                            <strong>Type:</strong> ${pet.name || 'N/A'}<br>
                            <strong>Pet ID:</strong> ${pet.type || 'N/A'}<br>
                        </li>
                        <hr>
                    `;
                });
                
                petsList += '</ul>';
                result.innerHTML = petsHTML;

        return data;
    }
    catch (error) {
        console.error('Error:', error);
    }
}