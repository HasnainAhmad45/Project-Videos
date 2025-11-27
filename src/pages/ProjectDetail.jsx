import React from "react";
import { useParams } from "react-router-dom";

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
};

export const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId];

    if (!project) return <h1>Project Not Found</h1>;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{project.title}</h1>
            <iframe
                width="100%"
                height="430"
                src={project.videoUrl}
                title={project.title}
                allowFullScreen
                style={styles.iframe}
            ></iframe>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
        backgroundImage: "url('/Gemini_Generated_Image_adkfcmadkfcmadkf.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "30px",
        color: "white",
        textShadow: "0 2px 8px rgba(0,0,0,0.7)"
    },
    iframe: {
        borderRadius: "12px",
        maxWidth: "900px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        border: "4px solid white",
    },
};

export default ProjectDetail;
