document.getElementById('deletePetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    deletePet();
});

async function deletePet(){
    const petId = document.getElementById('petId').value;


        const deleteResponse = await fetch(`https://prelim-exam.onrender.com/pets/${petId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!deleteResponse.ok) {
            throw new Error(`HTTP error! status: ${deleteResponse.status}`);
        }
        const deleteData = await deleteResponse.json();
        console.log('Success:', deleteData);
        const message = document.getElementById('message');
        message.innerHTML = `
            <h2>Di pwede magdelete</h2>
            <p>Can't hack your way with this one :)</p>
            <p>Instead you could try looking who is youngest and oldest within the database</p>
            <a href="userStats.html">User Stats</a>
            <h3>${deleteData.message}</h3>
        `;
        return deleteData;
}