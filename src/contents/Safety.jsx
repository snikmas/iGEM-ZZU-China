// later: add <em> tag for names

export function Safety() {
    return (
      <div>
        <h1 className="title">Safety</h1>
        <p className="paragraph">
          Ensuring safety is a key part of our project. In our team, we take responsibility for protecting ourselves, the public, and the environment. We follow iGEM’s safety policies and work closely with instructors and university experts. In this section, we will outline the identified risks, our approach to managing them, and the precautions we have implemented to ensure safe and responsible research practices.
        </p>
  
        <h2 className="sub-title">Identification of Risks</h2>
        <hr />
    
        <p className="paragraph">
          Our project aims to build a synthetic biology-based platform for early breast cancer detection using engineered bacteria, DNA tools, and human cell lines. The potential risks we identified include:
        </p>
        <ol>
          <li className="li-paragraph"><strong>Exposure to recombinant E. coli strains</strong>: We use E. coli DH5α and BL21 (DE3) to express and purify Cas14a protein. Although these are Biosafety Level 1 strains and non-pathogenic, accidental exposure could cause minor skin or eye irritation or lead to environmental contamination if not handled properly.</li>
          <li className="li-paragraph"><strong>Handling human breast cell lines</strong>: The cell lines SKBR3 and MCF10A are commonly used in cancer research. While they pose minimal biosafety risk, poor aseptic techniques could result in microbial contamination, cross-contamination between cell lines, or lab waste management issues.</li>
          <li className="li-paragraph"><strong>Use of magnetic beads and aptamers</strong>: Our EV detection relies on aptamer-functionalized magnetic beads. Accidental spillage, inhalation of dried particles, or improper disposal could pose minor chemical or physical risks in the lab.</li>
          <li className="li-paragraph"><strong>Chemical reagents for DNA amplification</strong>: The project uses reagents for HCR and RCA reactions, such as polymerases, primers, and buffers. Some of these chemicals can be irritating or harmful if they come into contact with the skin, eyes, or are inhaled in powdered form.</li>
          <li className="li-paragraph"><strong>UV and electrophoresis equipment</strong>: Gel electrophoresis and UV transilluminators are used during nucleic acid analysis. There is a risk of UV exposure or electrical shock if the equipment is mishandled.</li>
          <li className="li-paragraph"><strong>CRISPR-Cas14a-based detection system</strong>: Cas14a targets only single-stranded DNA and does not edit genomes, which lowers biosafety risk. However, incorrect handling of the system or guide RNA could result in unintended ssDNA cleavage in test systems.</li>
          <li className="li-paragraph"><strong>Lateral flow biosensor materials</strong>: Our diagnostic kit uses gold nanoparticle-labeled lateral flow strips. The particles themselves are stable, but accidental exposure to solvents or incomplete waste disposal may pose environmental or skin contact risks.</li>
        </ol>
  
        <h2 className="sub-title">Management of Risks</h2><hr />
        <p className="paragraph">
          We have implemented several measures to effectively manage the risks associated with our project:
        </p>
        <ol>
          <li className="li-paragraph"><strong>Expert Support</strong>: We closely collaborate with institutional biosafety officers and experienced professors in relevant fields. All laboratory work, including experiments involving E. coli strains and tumor cell lines, is conducted under the supervision and approval of biosafety officers.</li>
          <li className="li-paragraph"><strong>Compliance with Regulations and Guidelines</strong>: Our work follows the biosafety and biosecurity protocols established by our institution. We strictly adhere to local laws and international standards, including the iGEM Safety Policies, to ensure the responsible handling of biological materials and chemicals.</li>
          <li className="li-paragraph"><strong>Lab Safety and Training</strong>: All team members have completed comprehensive safety training. This includes lab access rules, use of personal protective equipment (PPE), aseptic techniques, and emergency response procedures. Special care is taken when working with toxic chemicals and cell cultures, with full PPE and designated lab areas in use at all times.</li>
          <li className="li-paragraph"><strong>Dedicated Lab Spaces and Equipment</strong>: Experiments are conducted in BSL-1 or BSL-2 laboratories as appropriate. We utilize biosafety cabinets, chemical fume hoods, and specialized instruments such as HPLC and spectrophotometers. Only trained personnel are permitted to operate equipment and perform high-risk procedures.</li>
          <li className="li-paragraph"><strong>Waste Management and Containment</strong>: Biological waste is li-paragraph prior to disposal. Chemical waste is collected and disposed of in accordance with institutional protocols. Experimental procedures are designed to minimize the use of hazardous materials, and contaminated waste is treated according to strict safety standards.</li>
          <li className="li-paragraph"><strong>Risk Reduction by Experimental Design</strong>: The quantities of chemicals and biological agents used are minimized whenever possible. All work involving tumor cell lines is performed in separate, controlled environments to prevent contamination and exposure.</li>
          <li className="li-paragraph"><strong>Safe Handling of Electrical Components</strong>: For our hardware elements, all electrical systems are insulated, moisture-protected, and safely disconnected during assembly. Team members follow standard electrical safety procedures to prevent hazards during the development of microfluidic devices.</li>
        </ol>
        <p className="paragraph">
          These practices ensure that all potential risks are responsibly managed and that our project remains in full compliance with institutional and iGEM safety requirements.
        </p>
  
        <h2 className="sub-title">Responsibility in Human Practices</h2><hr />
        <ol>
          <li className="li-paragraph"><strong>Avoiding Direct Engagement with Vulnerable Individuals</strong>: Out of respect for the emotional well-being of cancer patients, we deliberately chose not to engage directly with them during our project. As undergraduate students without clinical training or counseling expertise, we recognized the potential harm that could arise from unintentional emotional distress or false reassurance. Instead, we focused on gathering insights through professionals who work closely with patients, such as oncology counselors and medical practitioners.</li>
          <li className="li-paragraph"><strong>Consultation with Experts</strong>: We prioritized consultations with professionals experienced in patient care and medical ethics. These individuals provided valuable perspectives on patient needs, safety concerns, and the societal implications of our research. Their guidance helped shape our project in a way that aligns with real-world clinical and ethical standards.</li>
          <li className="li-paragraph"><strong>Informed Consent and Transparency</strong>: All individuals we interviewed for Human Practices were informed of the purpose, scope, and potential use of their contributions. We obtained explicit consent before sharing or publishing any part of our discussions. This ensured that our communications were transparent, ethical, and respectful of participants' autonomy.</li>
          <li className="li-paragraph"><strong>Ethical Outreach and Communication</strong>: Throughout our outreach activities, we maintained a strong commitment to ethical standards. We carefully reviewed the language and tone used in our presentations, wiki content, and promotional materials to ensure they were scientifically accurate, respectful, and free from sensationalism. Our goal was to educate and inform without overpromising the impact of synthetic biology or our project.</li>
        </ol>
      </div>
    );
  }
  