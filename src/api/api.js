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
        console.warn('Obsolete method! Please use profileAPI object!');
        profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => {
            return response.data;
        });
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    isAuthorised(){
        return axiosInstance.get('auth/me').then(response => {
            return response.data;
        });
    }
}

