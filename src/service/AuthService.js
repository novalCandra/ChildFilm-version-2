export async function AuthService(data) {
    return await fetch(`${import.meta.env.VITE_API_URL}/USERS`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}