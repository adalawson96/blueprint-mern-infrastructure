import * as reviewsAPI from './reviews-api';

export async function getAllReviews() {
    const allReviews = await reviewsAPI.getReveiwsRequest()
    return allReviews
}

export async function createdReview(reviewData) {
    const NewReview = await reviewsAPI.createReviewRequest(reviewData)
    return NewReview
}