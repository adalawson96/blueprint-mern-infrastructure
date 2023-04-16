import * as reviewsAPI from './reviews-api';

export async function deleteOneReview(id) {
    const deletedReview = await reviewsAPI.deleteReviewsRequest(id)
    return deletedReview
}
export async function updateReview(id, reviewData) {
    const updatedReview = await reviewsAPI.updateReviewsRequest(id, reviewData)
    return updatedReview
}

export async function getAllReviews(id) {
    const allReviews = await reviewsAPI.getReviewsRequest(id)
    return allReviews
}

export async function createdReview(reviewData) {
    const NewReview = await reviewsAPI.createReviewRequest(reviewData)
    return NewReview
}