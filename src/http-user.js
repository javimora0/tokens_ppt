const url = 'http://localhost:8000/api';

export async function login(usuario) { 
    try {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario),
        }
        const response = await fetch(url + '/login', options);
        
        if (!response.ok) { 
            throw new Error("Error al logear");
        }

        return await response.json();
    } catch (error) {
        console.error(error)
    }
}