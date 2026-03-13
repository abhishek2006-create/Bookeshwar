import { useState } from "react";
import "../style/body.css";
import img from "../assets/board.png";
import img1 from "../assets/B1.jpg";
import img2 from "../assets/B2.jpg";
import logo from "../assets/logo.png";

export default function Body() {
  const [darkMode, SetdarkMode] = useState(false);
  const [select, Setselect] = useState(null);
  const [showReport, setShowReport] = useState(false);

  function DarkMode() {
    SetdarkMode(!darkMode);
  }

  function selection(value) {
    Setselect(select === value ? null : value);
  }
  return (
    <>
      <div id="container" className={darkMode ? "dark-theme" : ""}>
        <div className="sidebar">
          <div className="tab-table">
            <p><img src={logo}/> Bookeshwar</p>
            {["Dashboard", "Rooms", "Bookings", "Reports"].map((tab, index) => (
              <div className="tab-box" key={index}>
                <a className="tab" href={`#${tab}`}>
                  {tab}
                </a>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={DarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <div>
              <p>Settings</p>
            </div>
          </div>
        </div>

        <div className="main-body">
          <div className="body">
            <div id="Dashboard">
              <header>Dashboard</header>
              <div className="line"></div>
              <div className="alpha">
                <h2>Upcoming Booking</h2>
                <div className="head">
                  <h4>Room Name</h4>
                  <h4>Date</h4>
                  <h4>Time From</h4>
                  <h4>Time To</h4>
                  <h4>BooKing</h4>
                  <div />
                </div>
                <hr />
                <div className="head">
                  <p>L-01</p>
                  <p>17 March 2026</p>
                  <p>2:30 PM</p>
                  <p>3:30 PM</p>
                  <div className="btn">
                    <p onClick={() => selection("A")}>
                      {select === "A" ? "Reject" : "Select"}
                    </p>
                    <p>{select === "A" ? "selected" : "rejected"}</p>
                  </div>
                </div>
                <hr />
                <div className="head">
                  <p>L-02</p>
                  <p>19 March 2026</p>
                  <p>8:30 AM</p>
                  <p>9:30 AM</p>
                  <div className="btn">
                    <p onClick={() => selection("B")}>
                      {select === "B" ? "Reject" : "Select"}
                    </p>
                    <p>{select === "B" ? "selected" : "rejected"}</p>
                  </div>
                </div>
                <hr />
                <div className="head">
                  <p>L-03</p>
                  <p>21 March 2026</p>
                  <p>9:30 AM</p>
                  <p>10:30 AM</p>
                  <div className="btn">
                    <p onClick={() => selection("C")}>
                      {select === "C" ? "Reject" : "Select"}
                    </p>
                    <p>{select === "C" ? "selected" : "rejected"}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div id="Rooms">
              <header>Rooms</header>
              <div className="line1"></div>
              <p>Find Meeting Room for your taste and needs.</p>

              <div className="prnt">
                <div className="R">
                  <h3>Galaxy</h3>
                  <img src={img} alt="room" />

                  <h4>Description</h4>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <h4>Details</h4>

                  <div className="details">
                    <div className="box">
                      <p>Location</p>
                      <span>14th Floor</span>
                    </div>

                    <div className="box">
                      <p>Capacity</p>
                      <span>7</span>
                    </div>

                    <div className="box">
                      <p>Equipment</p>
                      <span>None</span>
                    </div>
                  </div>

                  <button className="book">Book Room</button>
                </div>

                <div className="R">
                  <h3>Antilia</h3>
                  <img src={img1} alt="room" />
                  <h4>Details</h4>

                  <div className="details">
                    <div className="box">
                      <p>Location</p>
                      <span>10th Floor</span>
                    </div>

                    <div className="box">
                      <p>Capacity</p>
                      <span>14</span>
                    </div>

                    <div className="box">
                      <p>Equipment</p>
                      <span>None</span>
                    </div>
                  </div>

                  <button className="book">Book Room</button>
                </div>

                <div className="R">
                  <h3>Mannat</h3>
                  <img src={img2} alt="room" />
                  <h4>Details</h4>

                  <div className="details">
                    <div className="box">
                      <p>Location</p>
                      <span>9th Floor</span>
                    </div>

                    <div className="box">
                      <p>Capacity</p>
                      <span>5</span>
                    </div>

                    <div className="box">
                      <p>Equipment</p>
                      <span>None</span>
                    </div>
                  </div>

                  <button className="book">Book Room</button>
                </div>
              </div>
            </div>
<div id="Bookings" >
    <header>Bookings</header>
    <div className="line"></div>
            <div class="recent-bookings">
              <div class="top-bar">
                <h2>Recent Bookings</h2>

                <div class="search-box">
                  <input type="text" placeholder="Search..." />
                </div>
              </div>

              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Room Name</th>
                      <th>Date</th>
                      <th>Time from</th>
                      <th>Time To</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Board Room</td>
                      <td>23 August 2026</td>
                      <td>2:00 PM</td>
                      <td>3:00 PM</td>
                      <td class="status completed">Completed</td>
                    </tr>

                    <tr>
                      <td>Gyoza</td>
                      <td>13 July 2026</td>
                      <td>3:00 PM</td>
                      <td>4:00 PM</td>
                      <td class="status cancelled">Cancelled</td>
                    </tr>

                    <tr>
                      <td>Board Room</td>
                      <td>2 July 2026</td>
                      <td>4:00 PM</td>
                      <td>5:00 PM</td>
                      <td class="status completed">Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
</div>
            <div id="Reports">
              <header>Reports</header>
<button className="open-report-btn" onClick={() => setShowReport(true)}>
  Open Report Form
</button>
              {showReport && (
                <div className="report-overlay">
                  <div className="report-box">
                    <div className="report-header">
                      <h2>Report Issue</h2>

                      <button
                        className="close-btn"
                        onClick={() => setShowReport(false)}
                      >
                        ✕
                      </button>
                    </div>

                    <div className="report-form">
                      <label>Complaint Type</label>

                      <div className="complaints">
                        <label>
                          <input type="checkbox" /> Room Not Clean
                        </label>
                        <label>
                          <input type="checkbox" /> Equipment Not Working
                        </label>
                        <label>
                          <input type="checkbox" /> Booking Problem
                        </label>
                        <label>
                          <input type="checkbox" /> Other
                        </label>
                      </div>

                      <label>Description</label>

                      <textarea
                        placeholder="Write your complaint here..."
                        rows="4"
                      ></textarea>

                      <button className="submit-report" onClick={()=>setShowReport(false)}>Submit Report</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
