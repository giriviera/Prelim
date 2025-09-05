async function userStats(){
    try {
        const userStatsResponse = await fetch('https://prelim-exam.onrender.com/stats/users/count', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!userStatsResponse.ok) {
            throw new Error(`HTTP error! status: ${userStatsResponse.status}`);
        }
        const userData = await userStatsResponse.json();
        console.log('Success:', userData);
        const userStats = document.getElementById('userStats');
        userStats.innerHTML = `
            <h2>${userData.message}</h2>
        `;
        return userData;
    }
    catch (error) {
        console.error('Error:', error);
    }
}

async function petStats() {
    try {
        const petStatsResponse = await fetch('https://prelim-exam.onrender.com/stats/pets/count', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!petStatsResponse.ok) {
            throw new Error(`HTTP error! status: ${petStatsResponse.status}`);
        }
        const petData = await petStatsResponse.json();
        console.log('Success:', petData);
        const petStats = document.getElementById('petStats');
        petStats.innerHTML = `
            <h2>${petData.message}</h2>
        `;
        return petData;
    }
    
    catch (error) {
        console.error('Error:', error);
    }
}

async function userAgeStats() {
    try {
        const userAgeStatsResponse = await fetch('https://prelim-exam.onrender.com/stats/users/ages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!userAgeStatsResponse.ok) {
            throw new Error(`HTTP error! status: ${userAgeStatsResponse.status}`);
        }
        const userData = await userAgeStatsResponse.json();
        console.log('Success:', userData);
        const userStats = document.getElementById('userStats');
        userStats.innerHTML = `
            <h2>${userData.message}</h2>
        `;
        return userData;
    }
    catch (error) {
        console.error('Error:', error);
    }
}

userStats();
petStats();
userAgeStats();