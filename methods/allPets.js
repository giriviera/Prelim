document.getElementById('allPetsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    viewAllPets();
});

async function viewAllPets(){
    const id = document.getElementById('id').value;

    try {
        const response = await fetch(`https://prelim-exam.onrender.com/users/${id}`, {
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
        
        if(data.user.role !== 'admin'){
            result.innerHTML = `
                <h2>Access Denied</h2>
                
                <p>Psst, would like to gain access?</p>
                <a href="hacker.html">www.downloadmoreram.wordpress.com</a>`;
            return;
        }

        else{
            const petsResponse = await fetch(`https://prelim-exam.onrender.com/pets?userId=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!petsResponse.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const petsData = await petsResponse.json();
            console.log('Success:', petsData);

            result.innerHTML = `
                <h2>Hala pano mo yan nagawa? Hacker na pala si bro</h2>
                <ul class="pet-list">
                    ${petsData.pets.map(pet => `<li>Pet ID:${pet._id} Name:${pet.name}(${pet.type}) - Owner ID:${pet.owner._id} Name:${pet.owner.username}</li>`).join('')}
                </ul>
            `;
        }
        
        return data;
    }

    catch (error) {
        console.error('Error:', error);
    }
}