document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    login();
});

async function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const code = document.getElementById('code').value;

    const result = document.getElementById('result');

    try {
        const loginData = {
            username: username,
            password: password,
            authKey: code
        };
        const response = await fetch('https://prelim-exam.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Success:', data);

            result.innerHTML = `
                <h2>Login Success</h2>
                <p>You may now change your username</p>
                <a href="changeUsername.html">Change Username</a>
            `;

        return data;
    }

    catch (error) {
        console.error('Error:', error);
    }
}