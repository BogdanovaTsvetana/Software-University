import authService from "./../services/authService.js";

export async function jsonRequest(url, method, body, authorizedRequest, toLogout) {
    
    if (method === undefined) {
        method = 'Get';
    }

    let headers = {};
    // if (['post', 'put'].includes(method.toLowerCase())) {
    //     headers['Content-Type'] = 'application/json';
    // }

    if (method.toLowerCase() == 'post' || method.toLowerCase() == 'put') {
        headers['Content-Type'] = 'application/json';
    }

    if (authorizedRequest) {
        headers['X-Authorization'] = authService.getAuthToken();
    }

    let options = {
        headers,
        method
    };


    if (body !== undefined) {
        options.body = JSON.stringify(body);
    }

    let response = await fetch(url, options);
    if (!response.ok) {
        let message = await response.text();
        throw new Error(message);
    }

    let data = undefined;
    if (!toLogout) {
        data = await response.json();
    }

    return data;
}