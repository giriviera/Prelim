document.getElementById('logoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    logout();
});


async function logout(){
    const username = document.getElementById('username').value;
    const result = document.getElementById('result');

    try {
        const logoutData = {
            username: username
        };
        const response = await fetch('https://prelim-exam.onrender.com/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logoutData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Success:', data);

        result.innerHTML = `
            <h2>Logout Success</h2>
        `;

        return data;
    }

    catch (error) {
        console.error('Error:', error);
    }
}