export const isLogin = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.auth_token) {
        return true;
    } else {
        return false;
    }
}

export default function authService() {
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.auth_token) {
        return { Authorization: `Bearer ${user.auth_token}` };
    } else {
        return {};
    }
}