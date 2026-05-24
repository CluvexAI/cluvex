const reviews = [
  {
    name: 'UAE Business Owner',
    text: 'Excellent service! Our website ranking improved within weeks and leads increased significantly.',
  },
  {
    name: 'Dubai Entrepreneur',
    text: 'Their web development quality is outstanding. Very professional and fast delivery.',
  },
  {
    name: 'Abu Dhabi Marketing Manager',
    text: 'We got amazing results from Facebook ads. Highly recommended agency!',
  },
  {
    name: 'UAE Startup Founder',
    text: 'Best digital team we worked with. SEO and AI solutions are top-notch.',
  },
  {
    name: 'Sharjah Business Owner',
    text: 'Very satisfied with app development and automation services.',
  },
];

export default function ClientReviews() {
  return (
    <section className="reviews section-padding">
      <div className="container">
        <div className="section-title">
          <h2>What Our UAE Clients <span>Say</span></h2>
        </div>
        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-card__stars">⭐⭐⭐⭐⭐</div>
              <p className="review-card__text">&ldquo;{r.text}&rdquo;</p>
              <p className="review-card__name">&mdash; {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
