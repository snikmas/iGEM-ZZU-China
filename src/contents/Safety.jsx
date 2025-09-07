import React from 'react';

export function Safety({ props }) {
  const { section_1, section_2, section_3, section_4, section_5, section_6, section_7, section_8, section_9, section_10 } = props;

  return (
    <div className="container my-4">
      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_0">Safety</h1>
          <p>
            Ensuring safety is a key part of our project. In our team, we take responsibility for protecting ourselves, the public, and the environment. We follow iGEM’s safety policies and work closely with instructors and university experts. In this section, we will outline the identified risks, our approach to managing them, and the precautions we have implemented to ensure safe and responsible research practices.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_1">{section_1}</h1>
          <p>
            Our project aims to build a synthetic biology-based platform for early breast cancer detection using engineered bacteria, DNA tools, and human cell lines. The potential risks we identified include:
          </p>
          <h2>Exposure to Recombinant E. coli Strains</h2>
          <p>
            We use E. coli DH5α and BL21 (DE3) to express and purify Cas14a protein. Although these are Biosafety Level 1 strains and non-pathogenic, accidental exposure could cause minor skin or eye irritation or lead to environmental contamination if not handled properly.
          </p>
          <h2>Handling Human Breast Cell Lines</h2>
          <p>
            The cell lines SKBR3 and MCF10A are commonly used in cancer research. While they pose minimal biosafety risk, poor aseptic techniques could result in microbial contamination, cross-contamination between cell lines, or lab waste management issues.
          </p>
          <h2>Use of Magnetic Beads and Aptamers</h2>
          <p>
            Our EV detection relies on aptamer-functionalized magnetic beads. Accidental spillage, inhalation of dried particles, or improper disposal could pose minor chemical or physical risks in the lab.
          </p>
          <h2>Chemical Reagents for DNA Amplification</h2>
          <p>
            The project uses reagents for HCR and RCA reactions, such as polymerases, primers, and buffers. Some of these chemicals can be irritating or harmful if they come into contact with the skin, eyes, or are inhaled in powdered form.
          </p>
          <h2>UV and Electrophoresis Equipment</h2>
          <p>
            Gel electrophoresis and UV transilluminators are used during nucleic acid analysis. There is a risk of UV exposure or electrical shock if the equipment is mishandled.
          </p>
          <h2>CRISPR-Cas14a-Based Detection System</h2>
          <p>
            Cas14a targets only single-stranded DNA and does not edit genomes, which lowers biosafety risk. However, incorrect handling of the system or guide RNA could result in unintended ssDNA cleavage in test systems.
          </p>
          <h2>Lateral Flow Biosensor Materials</h2>
          <p>
            Our diagnostic kit uses gold nanoparticle-labeled lateral flow strips. The particles themselves are stable, but accidental exposure to solvents or incomplete waste disposal may pose environmental or skin contact risks.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_2">{section_2}</h1>
          <p>
            We have implemented several measures to effectively manage the risks associated with our project:
          </p>
          <h2>Expert Support</h2>
          <p>
            We closely collaborate with institutional biosafety officers and experienced professors in relevant fields. All laboratory work, including experiments involving E. coli strains and tumor cell lines, is conducted under the supervision and approval of biosafety officers.
          </p>
          
          <h2>Compliance with Regulations and Guidelines</h2>
          <p>
            Our work follows the biosafety and biosecurity protocols established by our institution. We strictly adhere to local laws and international standards, including the iGEM Safety Policies, to ensure the responsible handling of biological materials and chemicals. All cell lines used (including E. coli and tumor cell lines) have undergone STR profiling and mycoplasma testing to ensure identity verification and contamination-free status. Certificates of Analysis are provided in <a href="Certificates%20of%20Analysis.pdf">Appendix: Certificates of Analysis</a>.</p>
            
            <div className='pdf pt-10 pb-10'>

            <iframe src="https://static.igem.wiki/teams/5822/assets/safety/certificatesofanalysis.pdf" width="100%" height="600px"></iframe>
            </div>
          <h2>Lab Safety and Training</h2>
          <p>
            All team members have completed comprehensive safety training. This includes lab access rules, use of personal protective equipment (PPE), aseptic techniques, and emergency response procedures. Special care is taken when working with toxic chemicals and cell cultures, with full PPE and designated lab areas in use at all times.
          </p>
          <h2>Dedicated Lab Spaces and Equipment</h2>
          <p>
            Experiments are conducted in BSL-1 or BSL-2 laboratories as appropriate. We utilize biosafety cabinets, chemical fume hoods, and specialized instruments such as HPLC and spectrophotometers. Only trained personnel are permitted to operate equipment and perform high-risk procedures.
          </p>
          <h2>Waste Management and Containment</h2>
          <p>
            Biological waste is autoclaved prior to disposal. Chemical waste is collected and disposed of in accordance with institutional protocols. Experimental procedures are designed to minimize the use of hazardous materials, and contaminated waste is treated according to strict safety standards.
          </p>
          <h2>Risk Reduction by Experimental Design</h2>
          <p>
            The quantities of chemicals and biological agents used are minimized whenever possible. All work involving tumor cell lines is performed in separate, controlled environments to prevent contamination and exposure.
          </p>
          <h2>Safe Handling of Electrical Components</h2>
          <p>
            For our hardware elements, all electrical systems are insulated, moisture-protected, and safely disconnected during assembly. Team members follow standard electrical safety procedures to prevent hazards during the development of microfluidic devices.
          </p>
          <p>
            These practices ensure that all potential risks are responsibly managed and that our project remains in full compliance with institutional and iGEM safety requirements.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/safety/img-1.webp" alt="Our Safety" className="img-fluid rounded mb-3 stats" />
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_3">{section_3}</h1>
          <h2>Avoiding Direct Engagement with Vulnerable Individuals</h2>
          <p>
            Out of respect for the emotional well-being of cancer patients, we deliberately chose not to engage directly with them during our project. As undergraduate students without clinical training or counseling expertise, we recognized the potential harm that could arise from unintentional emotional distress or false reassurance. Instead, we focused on gathering insights through professionals who work closely with patients, such as oncology counselors and medical practitioners.
          </p>
          <h2>Consultation with Experts</h2>
          <p>
            We prioritized consultations with professionals experienced in patient care and medical ethics. These individuals provided valuable perspectives on patient needs, safety concerns, and the societal implications of our research. Their guidance helped shape our project in a way that aligns with real-world clinical and ethical standards.
          </p>
          <h2>Informed Consent and Transparency</h2>
          <p>
            All individuals we interviewed for Human Practices were informed of the purpose, scope, and potential use of their contributions. We obtained explicit consent before sharing or publishing any part of our discussions. This ensured that our communications were transparent, ethical, and respectful of participants' autonomy.
          </p>
          <h2>Ethical Outreach and Communication</h2>
          <p>
            Throughout our outreach activities, we maintained a strong commitment to ethical standards. We carefully reviewed the language and tone used in our presentations, wiki content, and promotional materials to ensure they were scientifically accurate, respectful, and free from sensationalism. Our goal was to educate and inform without overpromising the impact of synthetic biology or our project.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/safety/img-2.webp" alt="IGEM" className="img-fluid rounded mb-3 stats" />
        </div>
      </div>
    </div>
  );
}