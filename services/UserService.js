import http from "./http-common";
import auth from "./authService";

class UserService {
    getAllUser(){
        return http.get(`/user/?page_size=1000`, {headers: auth()});
    }

    getUserPage(data){
        return http.get(`/user/?page=${data.page}&page_size=${data.page_size}`, {headers: auth()});
    }

    getUserSearch(data){
        return http.get(`/user/?search=${data}&page_size=1000`, {headers: auth()});
    }

    createUser(data){
        return http.post(`/user/`, data, {headers: auth()});
    }

    getUser(id){
        return http.get(`/user/${id}`, {headers: auth()});
    }

    editUser(id, data){
        return http.put(`/user/${id}`, data, {headers: auth()});
    }

    deleteUser(id){
        return http.delete(`/user/${id}`, {headers: auth()});
    }
}

export default new UserService();