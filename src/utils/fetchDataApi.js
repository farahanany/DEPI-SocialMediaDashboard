import axios from './axios';

// Function to fetch data using GET request
export const getDataApi = async (url, token) => {
    try {
        const res = await axios.get(`/api/${url}`, {
            headers: { Authorization: token }
        });
        return res.data; // Return only the data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Throw the error for further handling
    }
};

// Function to send data using POST request
export const postDataApi = async (url, data, token) => {
    try {
        const res = await axios.post(`/api/${url}`, data, {
            headers: { Authorization: token }
        });
        return res.data; // Return only the data
    } catch (error) {
        console.error('Error posting data:', error);
        throw error; // Throw the error for further handling
    }
};

// Function to update data using PATCH request
export const patchDataApi = async (url, data, token) => {
    try {
        const res = await axios.patch(`/api/${url}`, data, {
            headers: { Authorization: token }
        });
        return res.data; // Return only the data
    } catch (error) {
        console.error('Error patching data:', error);
        throw error; // Throw the error for further handling
    }
};

// Function to delete data using DELETE request
export const deleteDataApi = async (url, token) => {
    try {
        const res = await axios.delete(`/api/${url}`, {
            headers: { Authorization: token }
        });
        return res.data; // Return only the data
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error; // Throw the error for further handling
    }
};
