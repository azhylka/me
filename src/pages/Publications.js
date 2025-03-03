import React, { useState, useEffect } from "react";

function Publications() {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/publications")
            .then((response) => response.json())
            .then((data) => {
                setPublications(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching publications:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading publications...</p>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Publications</h1>
            <p>Below is a list of my research publications. Click on the title to access the full article.</p>
            
            <div>
                {publications.map((pub, index) => (
                    <div 
                        key={index}
                        style={{
                            border: "1px solid #ddd", 
                            padding: "15px", 
                            marginBottom: "15px", 
                            borderRadius: "5px",
                        }}
                    >
                        <h3>
                            <a 
                                href={pub.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#007BFF" }}
                            >
                                {pub.title}
                            </a>
                        </h3>
                        <p><strong>DOI:</strong> {pub.doi}</p>
                        <p><strong>Source:</strong> {pub.source}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Publications;


