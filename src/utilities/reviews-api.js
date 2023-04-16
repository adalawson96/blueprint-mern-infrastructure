import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export async function deleteReviewsRequest(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function updateReviewsRequest(id, reviewData){
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', reviewData);
}

export async function getReviewsRequest(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function createReviewRequest(reviewData){
    return sendRequest(BASE_URL, 'POST', reviewData);
}