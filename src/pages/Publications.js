import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Publications.css';

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://scholar.google.com/citations?user=gFtqTLIAAAAJ&hl=en'));
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data.contents, 'text/html');
        const publicationElements = doc.querySelectorAll('.gsc_a_tr');
        const publicationsData = Array.from(publicationElements).map(pub => ({
          title: pub.querySelector('.gsc_a_at').textContent,
          authors: pub.querySelector('.gsc_a_at').nextElementSibling.textContent,
          link: 'https://scholar.google.com' + pub.querySelector('.gsc_a_at').getAttribute('href'),
          year: pub.querySelector('.gsc_a_y').textContent
        }));
        publicationsData.sort((a, b) => b.year - a.year);
        setPublications(publicationsData);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <div className="publications-container">
      <h1>Publications</h1>
      <ul className="publications-list">
        {publications.map((pub, index) => (
          <li key={index} className="publication-item">
            <h2 className="publication-title">{pub.title}</h2>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-year">{pub.year}</p>
            <a href={pub.link} className="publication-doi" target="_blank" rel="noopener noreferrer">
              View Publication
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
