import http from "./http-common";

class LoginService {
    login(data) {
        return http.post("/auth/login", data);
    }

    logout() {
        return http.post("/auth/logout");
    }

    profile() {
        return http.get("/auth/me");
    }

    token() {
        return http.post("/auth/token");
    }
}

export default new LoginService();