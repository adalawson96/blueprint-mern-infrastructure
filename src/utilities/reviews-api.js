import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export async function getReveiwsRequest(){
    return sendRequest (BASE_URL);
}

export async function createReviewRequest(reviewData){
    return sendRequest(BASE_URL, 'POST', reviewData);
}