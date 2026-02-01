function Applied({ appliedJobs }) {
  return (
    <div className="container">
      <h2>Applied Jobs ✅</h2>

      <div className="jobs-grid">
        {appliedJobs.length === 0 ? (
          <p>No applied jobs yet</p>
        ) : (
          appliedJobs.map(job => (
            <div key={job.id} className="job-card">
              <h4>{job.title}</h4>
              <p>{job.location}</p>
              <p>{job.company}</p>
              <span style={{ color: "green", fontWeight: "bold" }}>
                Applied
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Applied;