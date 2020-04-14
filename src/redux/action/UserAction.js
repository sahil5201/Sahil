export const Login = data => {
    return {
        type: 'Login',
        payload: data
    }
}

export const Logout = () => {
    return {
        type: 'Logout',
    }
}