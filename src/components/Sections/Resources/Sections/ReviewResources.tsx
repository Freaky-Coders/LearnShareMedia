import React, { useRef, useState } from 'react';

interface ReviewResourcesProps {
    reviewFormRef: React.RefObject<HTMLDivElement>;
}

const ReviewResources: React.FC<ReviewResourcesProps> = ({ reviewFormRef }) => {

    const [reviews, setReviews] = useState([
        {
            id: 1,
            user: 'User One',
            comment: 'This is a great resource!',
            rating: 5
        },
        {
            id: 2,
            user: 'User Two',
            comment: 'Very helpful, thanks!',
            rating: 4
        }
    ]);

    const [newReview, setNewReview] = useState({
        user: '',
        comment: '',
        rating: 0
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewReview(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRatingChange = (rating: number) => {
        setNewReview(prevState => ({
            ...prevState,
            rating
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newReview.user && newReview.comment && newReview.rating) {
            setReviews(prevReviews => [...prevReviews, { ...newReview, id: prevReviews.length + 1 }]);
            setNewReview({ user: '', comment: '', rating: 0 });
        }
    };

    return (
        <div className="bg-white py-12">
            <div className="container">
                <h2 className="text-xl font-bold mb-4">User Reviews</h2>
                <div className="space-y-4">
                    {reviews.map(review => (
                        <div key={review.id} className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold">{review.user}</h3>
                            <p className="text-gray-600">{review.comment}</p>
                            <div className="flex space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-500">★</span>
                                ))}
                                {[...Array(5 - review.rating)].map((_, i) => (
                                    <span key={i} className="text-gray-300">★</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8" ref={reviewFormRef}>
                    <h3 className="text-lg font-bold mb-4">Add a Review</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="user"
                                value={newReview.user}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                                placeholder='Please Enter Your Name'
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Comment</label>
                            <textarea
                                name="comment"  
                                value={newReview.comment}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                                placeholder='What do you think about this resources'
                                rows={3}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Rating</label>
                            <div className="flex space-x-1 mt-1">
                                {[1, 2, 3, 4, 5].map(rating => (
                                    <button
                                        type="button"
                                        key={rating}
                                        onClick={() => handleRatingChange(rating)}
                                        className={`p-2 ${newReview.rating >= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewResources;
