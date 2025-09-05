document.getElementById('addPetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addPet();
});

async function addPet(){
    const ownerId = document.getElementById('ownerId').value;
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;

    try {
        const petData = {
            ownerId: ownerId,
            name: name,
            type: type
        };
        const response = await fetch(`https://prelim-exam.onrender.com/pets/new/}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(petData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Success:', data);

        result.innerHTML = `
            <h2>Username Change Success</h2>
            <p>Do you have a pet? You can add your pet if you have</p>
            <a href="addPet.html">Add Pet</a>
        `;

        return data;
    }

    catch (error) {
        console.error('Error:', error);
    }
}