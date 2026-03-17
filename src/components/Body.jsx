import { useState } from "react";
import "../style/body.css";
import img from "../assets/board.png";
import img1 from "../assets/B1.jpg";
import img2 from "../assets/B2.jpg";

export default function Body() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [showSupportForm, setShowSupportForm] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  function handleSelectMeeting(value) {
    setSelectedMeeting(selectedMeeting === value ? null : value);
  }

  return (
    <>
      <div id="app-container" className={darkMode ? "theme-dark" : "theme-light"}>
        <aside className="app-sidebar">
          <div className="sidebar-brand">
            <div className="brand-logo"></div>
            <p>SpaceSync</p>
          </div>
          <nav className="nav-menu">
            {["Overview", "Spaces", "Reservations", "Support"].map((tab, index) => (
              <div className="nav-item" key={index}>
                <a className="nav-link" href={`#${tab}`}>
                  {tab}
                </a>
              </div>
            ))}
          </nav>
          <div className="sidebar-footer">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            <div className="settings-link">
              <p>⚙️ Preferences</p>
            </div>
          </div>
        </aside>

        <main className="app-content">
          <div className="content-wrapper">
            {/* Overview Section */}
            <section id="Overview" className="content-section">
              <header className="section-header">
                <h1>Overview</h1>
                <p className="subtitle">Welcome back! Here are your upcoming events.</p>
              </header>
              <div className="data-grid-container">
                <h2>Pending Approvals</h2>
                <div className="data-grid">
                  <div className="grid-head-row">
                    <h4>Space</h4>
                    <h4>Date</h4>
                    <h4>Start</h4>
                    <h4>End</h4>
                    <h4>Action</h4>
                  </div>
                  <div className="grid-row">
                    <p className="highlight">Nexus Boardroom</p>
                    <p>17 March 2026</p>
                    <p className="time">2:30 PM</p>
                    <p className="time">3:30 PM</p>
                    <div className="action-group">
                      <button 
                        className={`action-btn ${selectedMeeting === "A" ? "active" : ""}`} 
                        onClick={() => handleSelectMeeting("A")}
                      >
                        {selectedMeeting === "A" ? "Deselect" : "Approve"}
                      </button>
                      <span className={`status-badge ${selectedMeeting === "A" ? "approved" : "pending"}`}>
                        {selectedMeeting === "A" ? "APPROVED" : "PENDING"}
                      </span>
                    </div>
                  </div>
                  <div className="grid-row">
                    <p className="highlight">Horizon Suite</p>
                    <p>19 March 2026</p>
                    <p className="time">8:30 AM</p>
                    <p className="time">9:30 AM</p>
                    <div className="action-group">
                      <button 
                        className={`action-btn ${selectedMeeting === "B" ? "active" : ""}`} 
                        onClick={() => handleSelectMeeting("B")}
                      >
                        {selectedMeeting === "B" ? "Deselect" : "Approve"}
                      </button>
                      <span className={`status-badge ${selectedMeeting === "B" ? "approved" : "pending"}`}>
                        {selectedMeeting === "B" ? "APPROVED" : "PENDING"}
                      </span>
                    </div>
                  </div>
                  <div className="grid-row">
                    <p className="highlight">Zenith Workspace</p>
                    <p>21 March 2026</p>
                    <p className="time">9:30 AM</p>
                    <p className="time">10:30 AM</p>
                    <div className="action-group">
                      <button 
                        className={`action-btn ${selectedMeeting === "C" ? "active" : ""}`} 
                        onClick={() => handleSelectMeeting("C")}
                      >
                        {selectedMeeting === "C" ? "Deselect" : "Approve"}
                      </button>
                      <span className={`status-badge ${selectedMeeting === "C" ? "approved" : "pending"}`}>
                        {selectedMeeting === "C" ? "APPROVED" : "PENDING"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Spaces Section */}
            <section id="Spaces" className="content-section">
              <header className="section-header">
                <h1>Spaces</h1>
                <p className="subtitle">Discover the perfect environment for your team's needs.</p>
              </header>

              <div className="cards-container">
                <article className="space-card">
                  <div className="card-image-wrapper">
                    <img src={img} alt="Nexus Boardroom" />
                    <div className="card-badge">Premium</div>
                  </div>
                  <div className="card-content">
                    <h3>Nexus Boardroom</h3>
                    <p className="space-desc">
                      State-of-the-art acoustic paneling and panoramic city views for executive meetings.
                    </p>
                    <div className="space-specs">
                      <div className="spec-item">
                        <span className="spec-label">Level</span>
                        <span className="spec-value">14th Floor</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Seats</span>
                        <span className="spec-value">12 Pax</span>
                      </div>
                      <div className="spec-item full-width">
                        <span className="spec-label">Tech</span>
                        <span className="spec-value">4K Display, Polycom, VR</span>
                      </div>
                    </div>
                    <button className="reserve-btn">Reserve Space</button>
                  </div>
                </article>

                <article className="space-card">
                  <div className="card-image-wrapper">
                    <img src={img1} alt="Horizon Suite" />
                  </div>
                  <div className="card-content">
                    <h3>Horizon Suite</h3>
                    <p className="space-desc">
                      A flexible, open-plan collaborative space meant to inspire creativity and discussion.
                    </p>
                    <div className="space-specs">
                      <div className="spec-item">
                        <span className="spec-label">Level</span>
                        <span className="spec-value">10th Floor</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Seats</span>
                        <span className="spec-value">25 Pax</span>
                      </div>
                      <div className="spec-item full-width">
                        <span className="spec-label">Tech</span>
                        <span className="spec-value">Smartboards, Projector</span>
                      </div>
                    </div>
                    <button className="reserve-btn">Reserve Space</button>
                  </div>
                </article>

                <article className="space-card">
                  <div className="card-image-wrapper">
                    <img src={img2} alt="Zenith Workspace" />
                  </div>
                  <div className="card-content">
                    <h3>Zenith Workspace</h3>
                    <p className="space-desc">
                      Intimate, soundproofed pods ideal for focused 1-on-1s or deep work sessions.
                    </p>
                    <div className="space-specs">
                      <div className="spec-item">
                        <span className="spec-label">Level</span>
                        <span className="spec-value">9th Floor</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Seats</span>
                        <span className="spec-value">4 Pax</span>
                      </div>
                      <div className="spec-item full-width">
                        <span className="spec-label">Tech</span>
                        <span className="spec-value">Dual Monitors, Whiteboard</span>
                      </div>
                    </div>
                    <button className="reserve-btn">Reserve Space</button>
                  </div>
                </article>
              </div>
            </section>

            {/* Reservations Section */}
            <section id="Reservations" className="content-section">
              <header className="section-header">
                <h1>Reservations</h1>
                <p className="subtitle">Track and manage your past and future bookings.</p>
              </header>
              <div className="table-container-wrapper">
                <div className="table-top-bar">
                  <h2>Log History</h2>
                  <div className="search-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search spaces or dates..." />
                  </div>
                </div>
                <div className="modern-table-wrapper">
                  <table className="modern-table">
                    <thead>
                      <tr>
                        <th>Space Name</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-medium">Nexus Boardroom</td>
                        <td>23 August 2026</td>
                        <td className="time-col">2:00 PM</td>
                        <td className="time-col">3:00 PM</td>
                        <td><span className="pill success">Completed</span></td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Apollo Studio</td>
                        <td>13 July 2026</td>
                        <td className="time-col">3:00 PM</td>
                        <td className="time-col">4:00 PM</td>
                        <td><span className="pill danger">Cancelled</span></td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Nexus Boardroom</td>
                        <td>2 July 2026</td>
                        <td className="time-col">4:00 PM</td>
                        <td className="time-col">5:00 PM</td>
                        <td><span className="pill success">Completed</span></td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Orion Lounge</td>
                        <td>15 June 2026</td>
                        <td className="time-col">10:00 AM</td>
                        <td className="time-col">11:30 AM</td>
                        <td><span className="pill success">Completed</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section id="Support" className="content-section">
              <header className="section-header">
                <h1>Support Center</h1>
                <p className="subtitle">Encountered an issue with a space? Let us know.</p>
              </header>
              
              <div className="support-banner">
                <div className="banner-content">
                  <h3>Need Assistance?</h3>
                  <p>Our facilities team is available 24/7 to resolve workplace issues immediately.</p>
                </div>
                <button className="primary-action-btn" onClick={() => setShowSupportForm(true)}>
                  Submit a Ticket
                </button>
              </div>

              {showSupportForm && (
                <div className="modal-backdrop" onClick={() => setShowSupportForm(false)}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                      <h2>Create Support Ticket</h2>
                      <button className="close-modal-btn" onClick={() => setShowSupportForm(false)}>
                        ✕
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Issue Category</label>
                        <div className="checkbox-grid">
                          <label className="checkbox-label">
                            <input type="checkbox" /> <span>Cleanliness</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" /> <span>A/V Equipment Failure</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" /> <span>Scheduling Conflict</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" /> <span>HVAC / Temperature</span>
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" /> <span>Other</span>
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Additional Details</label>
                        <textarea
                          placeholder="Please provide specific details to help us resolve the issue quickly..."
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className="cancel-btn" onClick={() => setShowSupportForm(false)}>Cancel</button>
                      <button className="submit-btn" onClick={() => setShowSupportForm(false)}>Submit Ticket</button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
