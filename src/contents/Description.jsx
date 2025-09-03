import React from 'react';

export function Description({ props }) {
  const { section_1, section_2, section_3, section_4, section_5, section_6 } = props;

  return (
    <div className="container my-4">
      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_1">{section_1}</h1>
          <p>
            This project focuses on the clinical needs of auxiliary diagnosis of breast cancer and develops a set of exosome target protein precise detection platform based on synthetic biology. Through the full chain technology integration of "CD63 aptamer magnetic bead capture - substitution reaction signal transformation - HCR/RCA signal amplification - CRISPR/Cas14a fluorescence detection", the system realizes the high sensitivity detection of low abundance breast cancer exosome specific target proteins in samples.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_2">{section_2}</h1>
          <h2>Current Situation of Breast Cancer</h2>
          <p>
            Breast cancer is the malignant tumor with the highest incidence rate among women in the world. According to the data of the World Health Organization, there will be more than 2.9 million new cases worldwide in 2022 [1]. Despite continuous advances in treatment methods, late diagnosis remains the main cause of high mortality rates - in areas with scarce medical resources, over 60% of patients are diagnosed in the late stage, with little hope of cure.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/description/img-1.webp" alt="Top 15 Causes of Cancer Death" className="img-fluid rounded mb-3 stats" />
          <p className="figure-caption">Figure 1. Top 15 Causes of Cancer Death in Women Worldwide in 2022</p>
          <p>
            There are obvious limitations in traditional diagnostic methods: the diagnostic performance of breast ultrasound is greatly affected by the pathological classification of breast cancer, and it also requires a high professional quality of the examiners. It is difficult to obtain accurate contrast images during re-examination, and the diagnostic characterization of the lesions is often not as good as the reproducibility of mammography [2]. Mammography cannot distinguish small lesions of dense breast and breast cancer, which is easy to miss diagnosis. In addition, it will also bring radiation and over-diagnosis hazards to the examiners. The estimated range of over-diagnosis is 0% to 40%–50% [3]. MRI has the disadvantages of high examination cost, complex operation, and high false positives.
          </p>
          <h2>Tumors and Exosomes</h2>
          <p>
            Tumor and extracellular vesicles are 30-150 nm extracellular vesicles secreted by almost all cells and have become ideal liquid biopsy markers [4]. These vesicles encapsulate tumor-specific proteins, nucleic acids, and lipids, which can reflect the physiological state of the source cells. In breast cancer, the exosomes carry ErbB2, CD274 (PD-L1), EPCAM, MMP9, and other key markers, which are closely related to tumor occurrence, development, and immune escape [5]. However, the abundance of extracellular vesicles in clinical samples is extremely low (usually only 10⁹–10¹¹ particles/μL in serum), and matrix interference is complex, posing a huge challenge for high-sensitivity detection.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/description/img-2.webp" alt="Extracellular Vesicles" className="img-fluid rounded mb-3 stats" />
          <p className="figure-caption">Figure 2. Extracellular vesicles (EVs) as liquid biopsy tools and therapeutic vehicles in BC [6]</p>
          <h2>Inspiration</h2>
          <p>
            The birth of the project originated from the cross-thinking of clinical pain points and technological possibilities. On the one hand, the global incidence rate of breast cancer remains high (2.3 million new female breast cancer cases will be found in 2022). Early screening is crucial to improve the prognosis, but traditional screening methods (such as breast molybdenum target) have shortcomings such as radiation and limited sensitivity to dense breast. Although extracellular vesicle detection in liquid biopsy has non-invasive advantages, it has long been difficult to widely apply at the grassroots level due to low abundance of target proteins, difficulty in enrichment, and signal amplification. On the other hand, the progress of synthetic biology in the field of molecular diagnostics has brought inspiration - the high specificity recognition ability of CRISPR/Cas system and the signal enhancement potential of nucleic acid cascade amplification (such as HCR, RCA) provide technological breakthroughs for solving the problem of "low abundance target detection".
          </p>
          <p>
            In our cooperation and communication with clinical doctors, we further clarified that extracellular vesicle testing cannot replace pathological diagnosis but can assist in improving early screening and monitoring efficiency. By quantifying the level of extracellular vesicle target proteins, we can provide a reference for whether further pathological biopsy is needed. It can also assist in evaluating the trend of therapeutic efficacy through the dynamic changes of extracellular vesicle target proteins before and after treatment. This prompted us to take the "highly sensitive capture and detection of exosome target proteins" as the core goal, combined with synthetic biological tools, and finally form the technical route of "target capture signal cascade amplification CRISPR quantification", aiming to provide more efficient molecular-level auxiliary support for the diagnosis and treatment of breast cancer.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_3">{section_3}</h1>
          <h2>Magnetic Bead Method for Capturing Extracellular Vesicles</h2>
          <p>
            When detecting samples containing extracellular vesicles, it is often encountered that the low content of extracellular vesicles affects the detection efficiency. Therefore, we designed CD63 (a specific marker protein on extracellular vesicles) aptamer-modified magnetic beads to enrich and capture extracellular vesicles in the sample.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/description/img-4.webp" alt="Magnetic Bead Method" className="img-fluid rounded mb-3 stats" />
          <p className="figure-caption">Figure 3. Schematic diagram of magnetic bead method for capturing extracellular vesicles</p>
          <h2>Substitution Reaction</h2>
          <p>
            The substitution reaction is the link between "extracellular vesicle capture" and "signal amplification". Due to the stronger affinity between target proteins and aptamers on exosomes compared to complementary chains and aptamers, target proteins can compete to replace complementary chains. After the reaction equilibrium (room temperature incubation), the magnetic beads are removed by magnetic separation, and the supernatant contains the released complementary chain - this complementary chain serves as a "signal trigger molecule", which can directly initiate the subsequent HCR/RCA signal amplification process, achieving precise conversion from "target presence → signal molecule release".
          </p>
          <h2>HCR/RCA Signal Amplification</h2>
          <p>
            To address the issue of weak low abundance signals, we constructed a "Hybrid Chain Reaction (HCR)/Rolling Circle Amplification (RCA)" signal amplification system:
          </p>
          <p>
            ① <strong>HCR amplification</strong>: The complementary strand released in the previous step is the "trigger strand", which reacts with the pre-designed hairpin probes H1 and H2 - the trigger strand breaks the stem structure of H1, and the exposed H1 single strand binds to H2 and breaks its stem (with complementary fragments of crRNA on its hairpin), ultimately forming a long DNA polymer and amplifying the fluorescence signal.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/description/img-5.webp" alt="HCR Reaction" className="img-fluid rounded mb-3 stats" />
          <p className="figure-caption">Figure 4. HCR reaction principle diagram</p>
          <p>
            ② <strong>RCA amplification</strong>: Design circular probes and DNA polymerases for substitution reaction products, initiate rolling circle amplification reaction, generate a large number of DNA fragments containing repetitive sequences, and further enhance the signal by 10-20 times. After double amplification, the signal strength is increased by 500-2000 times compared to traditional single-step methods, which can effectively capture low abundance target signals.
          </p>
          <h2>CRISPR/Cas Molecular Detection System</h2>
          <p>
            We used the Cas14a protein expressed in prokaryotic cells to construct a detection system, based on the core principle of Cas14a's "target activation trans cleavage" characteristic: ① The repeated sequence in the signal amplification product serves as a specific target for Cas14a crRNA complex, which activates the non-specific nuclease activity of Cas14a after binding; ② Activated Cas14a efficiently cleaves the fluorescence quenching probe (FAM-BHQ1 labeled) in the system, releasing a fluorescence signal.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/description/img-6.webp" alt="CRISPR/Cas Detection" className="img-fluid rounded mb-3 stats" />
          <p className="figure-caption">Figure 5. CRISPR/Cas molecular detection principle diagram</p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_4">{section_4}</h1>
          <p>
            In the future, the system can assist in multiple scenarios of breast cancer diagnosis and treatment: it can not only integrate physical examination but also judge whether further pathological biopsy is needed for the initial screening of doubtful samples. It can also dynamically monitor the target protein levels of postoperative patients to assist in evaluating efficacy and recurrence risk. Due to its low cost and easy operation, it is suitable for primary healthcare and helps to preliminarily screen high-risk populations.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_5">{section_5}</h1>
          <p>
            This project focuses on practicality and demand innovation: technically, it solves the problem of low abundance detection of extracellular vesicle target proteins through the entire chain of "magnetic bead capture signal amplification CRISPR detection". Positioned as an auxiliary tool for pathological diagnosis, it is closely related to clinical practice. Practically control costs, simplify processes, and balance detection performance with grassroots promotion.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body references">
          <h1 id="section_6">{section_6}</h1>
          <p>
            [1]. Sung H, Ferlay J, Laversanne M, Soerjomataram I, Jemal A, Bray F. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. CA Cancer J Clin. 2024;74(2):102–133. doi:10.3322/caac.21834. <a href="https://acsjournals.onlinelibrary.wiley.com/doi/full/10.3322/caac.21834">https://acsjournals.onlinelibrary.wiley.com/doi/full/10.3322/caac.21834</a>
          </p>
          <p>
            [2]. WANG WH. Clinical study of different imaging examinations for the measurement of breast cancer tumor size[D]. Hangzhou: Master's Thesis of Zhejiang University, 2016 (in Chinese).
          </p>
          <p>
            [3]. HEIINAVAARA S, SARKEALA T, ANTTILA A. Overdiagnosis due to breast cancer screening: updated estimates of the Helsinki service study in Finland. British Journal of Cancer, 2014, 111(7): 1463-1468.
          </p>
          <p>
            [4]. Yu, D., Li, Y., Wang, M. et al. Exosomes as a new frontier of cancer liquid biopsy. Mol Cancer 21, 56 (2022). <a href="https://doi.org/10.1186/s12943-022-01509-9">https://doi.org/10.1186/s12943-022-01509-9</a>
          </p>
          <p>
            [5]. Song SF, Zhang XW, Chen S, Shu Y, Yu YL, Wang JH. CRISPR-based dual-aptamer proximity ligation coupled hybridization chain reaction for precise detection of tumor extracellular vesicles and cancer diagnosis. Talanta. 2024;280:126780. doi:10.1016/j.talanta.2024.126780
          </p>
          <p>
            [6]. Galardi A, Fogazzi V, Tottone C, et al. "Small extracellular vesicles: messengers at the service of breast cancer agenda in the primary and distant microenvironments". J Exp Clin Cancer Res. 2025;44(1):216. Published 2025 Jul 21. doi:10.1186/s13046-025-03471-y
          </p>
        </div>
      </div>
    </div>
  );
}