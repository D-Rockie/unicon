import React from "react"
import { createClient } from "@supabase/supabase-js"
import "./Jobs.css"

// Setup Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Jobs() {
  const [jobs, setJobs] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState("")
  const [searchTerm, setSearchTerm] = React.useState("")

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Fetch jobs
  async function fetchJobs() {
    try {
      setLoading(true)
      setError("")
      let query = supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false })

      const { data, error } = await query
      
      if (error) throw error
      setJobs(data || [])
    } catch (err) {
      console.error("Error fetching jobs:", err)
      setError("Failed to load job listings. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (job.requirements && job.requirements.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  React.useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <div className="jobs-container">
        <div className="loading">Loading job listings...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="jobs-container">
        <div className="error-message">{error}</div>
      </div>
    )
  }

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h1>Join Our Team</h1>
        <p>Explore exciting career opportunities at Unique Connections. We're looking for talented individuals to join our growing team.</p>
        
        <div className="search-container" style={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto 0' }}>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              backgroundColor: '#1e293b',
              color: '#f0f4f8',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#334155'}
          />
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="no-results" style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
          {searchTerm ? 'No jobs match your search criteria.' : 'No job openings at the moment. Please check back later.'}
        </div>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-description">
                {job.description.length > 150 
                  ? `${job.description.substring(0, 150)}...` 
                  : job.description}
              </p>
              
              {job.requirements && (
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.split('\n').map((req, i) => (
                      req.trim() && <li key={i}>{req.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="job-meta">
                <span>Posted: {formatDate(job.created_at)}</span>
                <button 
                  className="apply-button"
                  onClick={() => {
                    const subject = `Job Application: ${job.title}`;
                    const body = `Dear Hiring Manager,\n\nI am writing to apply for the ${job.title} position at Unique Connections.\n\n[Your message here]\n\nBest regards,\n[Your Name]\n[Your Contact Information]`;
                    window.location.href = `mailto:careers@unique-connections.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
