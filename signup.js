document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    signup();
});

async function signup(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;


    const result = document.getElementById('result');

    try {
        const signupData = {
            username: username,
            password: password,
            age: age
        };
        const response = await fetch('https://prelim-exam.onrender.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success:', data);

        if (data.id) {
            result.innerHTML = `
                <h2>Signup Success</h2>
                <p>please save your id and code</p>
                <p><strong>ID:</strong> ${data.id}</p>
                ${data.code ? `<p><strong>Code:</strong> ${data.code}</p>` : ''}
                <a href="login.html">Login</a>
            `;
        } 
        else {
            result.textContent = `Response: ${JSON.stringify(data)}`;
        }

        return data;
    }

    catch (error) {
        console.error('Error:', error);
    }
};