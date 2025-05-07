import React from "react";
import '../styles/FaceTract.css';

function FaceTract() {
    return (
        <div className="project-container">
            <div className="background-image"></div>
            <header className="project-header">
                <h1>FaceTract</h1>
            </header>
            <section className="project-background">
                <h2>Background</h2>
                <p>
                    Knowledge of function-specific organization plays a valuable role in clinical treatment that involves deep brain stimulation (<abbr title="Deep Brain Stimulation">DBS</abbr>). For instance, <abbr title="Deep Brain Stimulation">DBS</abbr> may be used in post-stroke pain treatment to reactivate the lower limb (<a href="https://doi.org/10.5853/jos.2019.03027">Bao et al. (2020)</a>), which requires delineation of the corresponding internal capsule area.
                    It is established that the precentral gyrus (<abbr title="Precentral Gyrus">PCG</abbr>) has a specific somatotopic organization for motor function (<a href="https://doi.org/10.1038/s41586-023-05964-2">Gordon et al. (2023)</a>). On the other hand, the organization of the posterior limb of the internal capsule (<abbr title="Posterior Limb of the Internal Capsule">PLIC</abbr>) was explored in non-human primates (<abbr title="Non-Human Primates">NHP</abbr>) using tracer injection (<a href="https://doi.org/10.1002/cne.24275">Morecraft et al. (2017)</a>). Tracing revealed <abbr title="Posterior Limb of the Internal Capsule">PLIC</abbr> to have a corresponding organization to that of the <abbr title="Precentral Gyrus">PCG</abbr>. Given that congruence with <abbr title="Non-Human Primates">NHP</abbr> neuroanatomy, the same organization is expected to be observed in humans. 
                    Additionally, the fibers originating in the <abbr title="Precentral Gyrus">PCG</abbr> are expected to maintain their spatial relationship or form function-based clusters. Tractography-based studies that explored the subject so far were mostly based on manually placed cortical regions of interest (<abbr title="Regions of Interest">ROIs</abbr>) (<a href="https://doi.org/10.3174/ajnr.A2952">Pen et al. (2012)</a>). Hence, the organization cannot be properly evaluated without supporting functional information.
                </p>
            </section>
            <section className="project-plan">
                <h2>Project Plan</h2>
                <p>
                    Using neuronavigated transcranial magnetic stimulation (<abbr title="Neuronavigated Transcranial Magnetic Stimulation">nTMS</abbr>) in a personalized fashion, function-specific <abbr title="Regions of Interest">ROIs</abbr> can be clearly established for individual motor function. Based on this functional information, the respective parts of the motor bundle will be reconstructed based on the condition that they pass through the <abbr title="Neuronavigated Transcranial Magnetic Stimulation">nTMS</abbr>-based <abbr title="Regions of Interest">ROIs</abbr>, the internal capsule, and the brain stem.
                    To obtain a robust estimation of the somatotopic <abbr title="Posterior Limb of the Internal Capsule">PLIC</abbr> organization, multiple tractography strategies will be used to build a probabilistic <abbr title="Posterior Limb of the Internal Capsule">PLIC</abbr> delineation map. To ensure robustness, the fiber orientation distributions (<abbr title="Fiber Orientation Distributions">FODs</abbr>) will be estimated with a range of algorithms mentioned above.
                    The participants will receive cortical and white matter parcellation masks as well as pre-computed <abbr title="Fiber Orientation Distributions">FODs</abbr>. The participants’ task will be to reconstruct the motor pathways originating from the <abbr title="Precentral Gyrus">PCG</abbr>. The <abbr title="Neuronavigated Transcranial Magnetic Stimulation">nTMS</abbr> response masks will not be revealed to the participants. 
                    The tractography results will also be evaluated separately using Intrinsic Topographic Regularity (<abbr title="Intrinsic Topographic Regularity">ITR</abbr>) (<a href="https://doi.org/10.1016/j.neuroimage.2018.06.071">Aydogan, Shi (2018)</a>). The <abbr title="Intrinsic Topographic Regularity">ITR</abbr> scores will be used as a weighting factor when combining <abbr title="Posterior Limb of the Internal Capsule">PLIC</abbr> delineation masks based on the respective tractography reconstructions.
                    In all the experiments, the results will be compared across acquisitions of varying quality. This will provide an insight into how much the quality of the reconstruction changes depending on the protocol.
                </p>
            </section>
            <section className="project-milestones">
                <h2>Important dates</h2>
                <table className="milestones-table">
                    <thead>
                        <tr>
                            <th>Milestone</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Registration deadline</td>
                            <td>TBA</td>
                        </tr>
                        <tr>
                            <td>Data release</td>
                            <td>TBA</td>
                        </tr>
                        <tr>
                            <td>Results submission deadline</td>
                            <td>TBA</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="project-preregistration">
                <h2>Preregistration</h2>
                <p>Please fill out the form below to preregister for the project:</p>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdVG_EW2PnOwqXMCZs_02RHj60g27PIARr3L3AuUn_VxmHn-A/viewform?embedded=true&hl=en" 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0">
                    Loading…
                </iframe>
            </section>
        </div>
    );
}

export default FaceTract;
