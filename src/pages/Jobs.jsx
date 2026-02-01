import { useState } from "react";
function Jobs({favorites, setFavorites,appliedJobs, setAppliedJobs}) {
    const [search, setSearch]=useState("");
const jobs = [
  { id: 1, title: "Java Developer", location: "Hyderabad" , company: "TCS" },
  { id: 2, title: "Android Developer", location: "Chennai", company: "Infosys" },
  { id: 3, title: " AI Intern", location: "Hyderabad",company: "Wipro" },
  { id: 4, title: "React Developer", location: "Bangalore", company: "Amazon" },
  { id: 5, title: "Python Developer", location: "Chennai" , company: "Accenture" },
  { id: 6, title: "Senior Full-Stack Developer", location: "pune" , company: "Capgemini" },
  { id: 7, title: "Full-Stack Developer Intern", location: "Bangaloru" , company: "genpact" },
  { id: 8, title: ".net Developer", location: "pun" , company: "TCS" }
];
const handleFavorite = (job) => {
  const alreadyFav = favorites.find(j => j.id === job.id);

  if (!alreadyFav) {
    setFavorites([...favorites, job]);
    alert("Added to favorites ❤️");
  } else {
    alert("Already in favorites ⚠️");
  }
};

const handleApply = (job) => {
  const alreadyApplied = appliedJobs.find(j => j.id === job.id);

  if (!alreadyApplied) {
    setAppliedJobs([...appliedJobs, job]);
    alert("Job applied successfully ✅");
  } else {
    alert("Already applied for this job ⚠️");
  }
};

const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Available Jobs</h2>
      <div className="search wrapper">
      <input
        type="text"
        placeholder="Search job or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      </div>
      <div className="jobs-grid">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-title">{job.title}</div>
            <div className="job-location">{job.location}</div>
            <div>{job.company}</div>
            <div style={{ display: "flex", gap: "10px" }}>
            <button className="apply-btn" onClick={() => handleApply(job)}>Apply</button>
            <button className="fav-btn" onClick={() => handleFavorite(job)}>❤️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;