import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProjectDetail } from "../pages/ProjectDetail";

const projectsData = {
    cms: {
        title: "Car Showroom Management System",
        videoUrl: "https://www.youtube.com/embed/-B12q5JdtR4?si=qEHl0FWhBuaTlbeU",
    },
    cpp: {
        title: "C++ Social Media Project",
        videoUrl: "https://www.youtube.com/embed/9qYV96FnXZQ?si=N85JuexEht93PEz3",
    },
    hms: {
        title: "Hotel Management System",
        videoUrl: "https://www.youtube.com/embed/-2m1TBQ5WgM?si=paCdEMrULHLeZ3TV",
    },
    mic: {
        title: "Made in China Scraper",
        videoUrl: "https://www.youtube.com/embed/cvHh_c09nWs?si=dZ2wQj29g8im6rHA",
    },
};

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Projects Page */}
        <Route
          path="/"
          element={
            <div style={styles.container}>
              <h1 style={styles.header}>My Projects</h1>
              <div style={styles.grid}>
                {Object.keys(projectsData).map((key) => (
                  <Link
                    key={key}
                    to={`/projects/${key}`}
                    style={styles.cardLink}
                  >
                    <div style={styles.card}>
                      <h2 style={styles.cardTitle}>{projectsData[key].title}</h2>
                      <p style={styles.cardSubtitle}>Click to watch video</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          }
        />

        {/* Project Detail Page */}
        <Route
          path="/projects/:projectId"
          element={<ProjectDetail projectsData={projectsData} />}
        />
      </Routes>
    </Router>
  );
};

// Inline CSS styles
const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  header: {
    fontSize: "3rem",
    marginBottom: "40px",
    color: "#333",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  cardLink: {
    textDecoration: "none",
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: "1.2rem",
    color: "#222",
    marginBottom: "10px",
  },
  cardSubtitle: {
    fontSize: "0.9rem",
    color: "#666",
  },
};

export default App;
