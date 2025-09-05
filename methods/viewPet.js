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
        
        result.innerHTML = `
            <ul class="pet-list">
                ${data.pets.map(pet => `<li>Pet ID:${pet._id} Name:${pet.name}(${pet.type})</li>`).join('')}
            </ul>

            <p>Hey, would you like to look at other people's pets?</p>
            <a href="allPets.html">All Pets</a>
        `;

        return data;
    }
    catch (error) {
        console.error('Error:', error);
    }
}