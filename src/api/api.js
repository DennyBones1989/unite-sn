import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '5e619e29-5ebb-4393-9fa7-14f7041114d9'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        //debugger
        return axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data;
        });
    },
    follow(userId = null) {
        //debugger
        return axiosInstance.post(`follow/${userId}`)
    },
    unfollow(userId = null) {
        //debugger
        return axiosInstance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    isAuthorised(){
        return axiosInstance.get('auth/me').then(response => {
            return response.data;
        });
    }
}

