import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-contaner">
      <h3 className="font-palaquin text-center text-4xl font-bold">O que nossos <span className="text-coral-red">clientes</span> dizem?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Ouça histórias genuínas sobre nossos clientes satisfeitos sobre as experiências excepcionais com a gente.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews