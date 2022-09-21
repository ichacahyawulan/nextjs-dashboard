export const isLogin = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.token) {
        return true;
    } else {
        return false;
    }
}

export default function authService() {
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.token) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}