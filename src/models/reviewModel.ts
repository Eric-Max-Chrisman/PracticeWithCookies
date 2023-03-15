import { Review } from "../entities/Review";
import { User } from "../entities/User";
import { Book } from '../entities/Book';

async function addReview(rating: number, reviewText: string, byUser: User, forBook: Book): Promise<Review> {
    let newReview = new Review();
    newReview.rating = rating;
    newReview.reviewText = reviewText;
    newReview.user = byUser;
    newReview.book = forBook;

    return newReview;
}

export { addReview };