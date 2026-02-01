function Favorites({ favorites }) {
  return (
    <div className="container">
      <h2>Favorite Jobs ❤️</h2>

      <div className="jobs-grid">
        {favorites.length === 0 ? (
          <p>No favorite jobs</p>
        ) : (
          favorites.map(job => (
            <div key={job.id} className="job-card">
              <h4>{job.title}</h4>
              <p>{job.location}</p>
              <p>{job.company}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;