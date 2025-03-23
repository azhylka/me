import React, { useState, useEffect } from 'react';
import '../styles/Publications.css';

const hardcodedPublications = [
  {
    title: "Multi-level fiber tracking: evaluation on clinical data",
    authors: "Zhylka, Andrey and Sollmann, Nico and De Luca, Alberto and Krahulec, Daniel and Breeuwer, Marcel and Leemans, Alexander and Pluim, Josien",
    year: "2020",
    link: "https://archive.ismrm.org/2020/1746.html"
  },
  {
    title: "Anatomically informed multi-level fiber tractography for targeted virtual dissection",
    authors: "Zhylka, Andrey and Leemans, Alexander and Pluim, Josien PW and De Luca, Alberto",
    year: "2022",
    link: "https://doi.org/10.1007/s10334-022-01033-3"
  },
  {
    title: "Muti-shell diffusion MRI harmonisation and enhancement challenge (MUSHAC): progress and results",
    authors: "Ning, Lipeng and Bonet-Carne, Elisenda and Grussu, Francesco and Sepehrband, Farshid and Kaden, Enrico and Veraart, Jelle and Blumberg, Stefano B and Khoo, Can Son and Palombo, Marco and Coll-Font, Jaume and others",
    year: "2019",
    link: "https://doi.org/10.1007/978-3-030-05831-9_18"
  },
  {
    title: "Endothelial progenitor cells and plaque burden in stented coronary artery segments: an optical coherence tomography study six months after elective PCI",
    authors: "Otto, Sylvia and Nitsche, Kristina and Jung, Christian and Kryvanos, Aleh and Zhylka, Andrey and Heitkamp, Kerstin and Guti{\'e}rrez-Chico, Juan-Luis and Goebel, Bj{\"o}rn and Schulze, P Christian and Figulla, Hans R and others",
    year: "2017",
    link: "https://doi.org/10.1186/s12872-017-0534-1"
  },
  {
    title: "Anatomically informed multi-level fiber tractography for improved sensitivity of white matter bundle reconstruction in diffusion MRI",
    authors: "Zhylka, Andrey and Leemans, Alexander and Pluim, Josien and De Luca, Alberto",
    year: "2020",
    link: "https://archive.ismrm.org/2020/0855.html"
  },
  {
    title: "Insights from the IronTract challenge: optimal methods for mapping brain pathways from multi-shell diffusion MRI",
    authors: "Maffei, Chiara and Girard, Gabriel and Schilling, Kurt G and Aydogan, Dogu Baran and Adluru, Nagesh and Zhylka, Andrey and Wu, Ye and Mancini, Matteo and Hamamci, Andac and Sarica, Alessia and others",
    year: "2022",
    link: "https://doi.org/10.1016/j.neuroimage.2022.119327"
  },
  {
    title: "Virtual brain grafting: Enabling whole brain parcellation in the presence of large lesions",
    authors: "Radwan, Ahmed M and Emsell, Louise and Blommaert, Jeroen and Zhylka, Andrey and Kovacs, Silvia and Theys, Tom and Sollmann, Nico and Dupont, Patrick and Sunaert, Stefan",
    year: "2021",
    link: "https://doi.org/10.1016/j.neuroimage.2021.117731"
  },
  {
    title: "New insights from the IronTract challenge: Simple post-processing enhances the accuracy of diffusion tractography",
    authors: "Maffei, Chiara and Girard, Gabriel and Schilling, Kurt G and Aydogan, Dogu Baran and Adluru, Nagesh and Zhylka, Andrey and Wu, Ye and Mancini, Matteo and Hamamci, Andac and Sarica, Alessia and others",
    year: "2021",
    link: "https://archive.ismrm.org/2021/0864.html"
  },
  {
    title: "Cross-scanner and cross-protocol harmonisation of multi-shell diffusion MRI data: open challenge and evaluation results",
    authors: "Ning, Lipeng and Bonet-Carne, Elisenda and Grussu, Francesco and Sepehrband, Farshid and Kaden, Enrico and Veraart, Jelle and Blumberg, Stefano B and Khoo, Can Son and Palombo, Marco and Coll-Font, Jaume and others",
    year: "2019",
    link: "https://archive.ismrm.org/2019/0771.html"
  },
  {
    title: "Tracking the Corticospinal Tract in Patients With High-Grade Glioma: Clinical Evaluation of Multi-Level Fiber Tracking and Comparison to Conventional Deterministic Approaches",
    authors: "Zhylka, Andrey and Sollmann, Nico and Kofler, Florian and Radwan, Ahmed and De Luca, Alberto and Gempt, Jens and Wiestler, Benedikt and Menze, Bjoern and Krieg, Sandro M and Zimmer, Claus and others",
    year: "2021",
    link: "https://doi.org/10.3389/fonc.2021.761169"
  },
  {
    title: "clDice-a novel topology-preserving loss function for tubular structure segmentation",
    authors: "Shit, Suprosanna and Paetzold, Johannes C and Sekuboyina, Anjany and Ezhov, Ivan and Unger, Alexander and Zhylka, Andrey and Pluim, Josien PW and Bauer, Ulrich and Menze, Bjoern H",
    year: "2021",
    link: "https://doi.org/10.1109/CVPR46437.2021.01629"
  },
  {
    title: "Multi-level fiber tractography in brain tumor patients using functional mapping for seeding",
    authors: "Zhylka, Andrey and Pluim, Josien and Kofler, Florian and Radwan, Ahmed and De Luca, Alberto and Schroeder, Axel and Wiestler, Benedikt and Kirschke, Jan S and Menze, Bjoern and Sunaert, Stefan and others",
    year: "2022",
    link: "https://archive.ismrm.org/2022/2108.html"
  },
  {
    title: "Reconstruction of the Corticospinal Tract in Patients with Motor-Eloquent High-Grade Gliomas Using Multilevel Fiber Tractography Combined with Functional Motor Cortex Mapping",
    authors: "Zhylka, A and Sollmann, N and Kofler, F and Radwan, A and De Luca, A and Gempt, J and Wiestler, B and Menze, B and Schroeder, A and Zimmer, C and others",
    year: "2023",
    link: "https://doi.org/10.3174/ajnr.A7793"
  },
  {
    title: "Reducing False Positives in Automatic Hepatic Tumor Segmentation: a Deep Learning Approach",
    authors: "Natali, Tiziano and Zhylka, Andrey and Olthof, Karin and Smit, Jasper and Tarik, Baetens and Ruers, Theo and Fusaglia, Matteo",
    year: "2023",
    link: "https://doi.org/10.1007/s11548-023-02878-2"
  },
  {
    title: "Automatic hepatic tumor segmentation in intra-operative ultrasound: a supervised deep-learning approach",
    authors: "Natali, Tiziano and Zhylka, Andrey and Olthof, Karin and Smit, Jasper N and Baetens, Tarik R and Kok, Niels FM and Kuhlmann, Koert FD and Ivashchenko, Oleksandra and Ruers, Theo JM and Fusaglia, Matteo",
    year: "2024",
    link: "https://doi.org/10.1117/1.jmi.11.2.024501"
  },
  {
    title: "Simulated liver deformations with intraoperative ultrasound: steps towards a multi-modal dataset",
    authors: "Zhylka, Andrey and Smit, Jasper and Olthof, Karin and ter Beek, Leon and Ruers, Theo and Fusaglia, Matteo",
    year: "2024",
    link: "https://doi.org/10.1007/s11548-024-03128-9"
  }
];

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const publicationsData = hardcodedPublications.sort((a, b) => b.year - a.year);
    setPublications(publicationsData);
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
