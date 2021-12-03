const token = '';

export const server_calls = {
    get_joke: async () => {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch your data from the server...')
        }
        return response.json()
    },
    // week7 day3 1:19
    // create
    // update
    // delete
}