import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get(`https://pub.orcid.org/v3.0/0000-0002-1369-1088/works`, {
          headers: {
            'Accept': 'application/json'
          }
        });
        setPublications(response.data.group);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };

    fetchPublications();
  }, ["0000-0002-1369-1088"]);

  return (
    <div>
      <h1>Publications</h1>
      <ul>
        {publications.map((pub, index) => (
          <li key={index}>
            {pub['work-summary'][0].title.title.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
