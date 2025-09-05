document.getElementById('changeUsernameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    changeUsername();
});

async function changeUsername(){
    const id = document.getElementById('id').value;
    const newUsername = document.getElementById('newUsername').value;

    try{
        const userData = {
            id: id,
            username: newUsername
        };
        const response = await fetch(`https://prelim-exam.onrender.com/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
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