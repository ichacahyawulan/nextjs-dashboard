import http from "./http-common";
import auth from "./authService";

class LoginService {
    login(data) {
        return http.post("/auth/login", data);
    }

    logout() {
        return http.post("/auth/logout", {headers: auth()});
    }

    profile() {
        return http.get("/auth/me", {headers: auth()});
    }

    token() {
        return http.post("/auth/token", {headers: auth()});
    }
}

export default new LoginService();