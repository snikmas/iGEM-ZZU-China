import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

// Results 相关图片 - 这些需要根据实际的图片URL进行调整
const figure1 = 'https://static.igem.wiki/teams/5822/results/figure1.webp';
const figure2 = 'https://static.igem.wiki/teams/5822/results/figure2.webp';
const figure3 = 'https://static.igem.wiki/teams/5822/results/figure3.webp';
const figure4 = 'https://static.igem.wiki/teams/5822/results/figure4.webp';
const figure5 = 'https://static.igem.wiki/teams/5822/results/figure5.webp';
const figure6 = 'https://static.igem.wiki/teams/5822/results/figure6.webp';
const figure7 = 'https://static.igem.wiki/teams/5822/results/figure7.webp';
const figure8 = 'https://static.igem.wiki/teams/5822/results/figure8.webp';
const figure9 = 'https://static.igem.wiki/teams/5822/results/figure9.webp';
const figure10 = 'https://static.igem.wiki/teams/5822/results/figure10.webp';
const figure11 = 'https://static.igem.wiki/teams/5822/results/figure11.webp';
const figure12 = 'https://static.igem.wiki/teams/5822/results/figure12.webp';
const figure13 = 'https://static.igem.wiki/teams/5822/results/figure13.webp';
const figure14 = 'https://static.igem.wiki/teams/5822/results/figure14.webp';
const figure15 = 'https://static.igem.wiki/teams/5822/results/figure15.webp';
const figure16_1 = 'https://static.igem.wiki/teams/5822/results/figure16_1.webp';
const figure16_2 = 'https://static.igem.wiki/teams/5822/results/figure16_2.webp';
const figure16_3 = 'https://static.igem.wiki/teams/5822/results/figure16_3.webp';
const figure17 = 'https://static.igem.wiki/teams/5822/results/figure17.webp';
const figure18 = 'https://static.igem.wiki/teams/5822/results/figure18.webp';
const figure19 = 'https://static.igem.wiki/teams/5822/results/figure19.webp';
const figure20 = 'https://static.igem.wiki/teams/5822/results/figure20.webp';
const figure21 = 'https://static.igem.wiki/teams/5822/results/figure21.webp';
const figure22 = 'https://static.igem.wiki/teams/5822/results/figure22.webp';
const figure23 = 'https://static.igem.wiki/teams/5822/results/figure23.webp';
const figure24 = 'https://static.igem.wiki/teams/5822/results/figure24.webp';
const figure25 = 'https://static.igem.wiki/teams/5822/results/figure25.webp';
const figure26 = 'https://static.igem.wiki/teams/5822/results/figure26.webp';
const figure27 = 'https://static.igem.wiki/teams/5822/results/figure27.webp';
const figure28 = 'https://static.igem.wiki/teams/5822/results/figure28.webp';
const figure29 = 'https://static.igem.wiki/teams/5822/results/figure29.webp';
const figure30 = 'https://static.igem.wiki/teams/5822/results/figure30.webp';
const figure31 = 'https://static.igem.wiki/teams/5822/results/figure31.webp';
const figure32 = 'https://static.igem.wiki/teams/5822/results/figure32.webp';
const figure33 = 'https://static.igem.wiki/teams/5822/results/figure33.webp';
const figure34 = 'https://static.igem.wiki/teams/5822/results/figure34.webp';
const figure35 = 'https://static.igem.wiki/teams/5822/results/figure35.webp';
const figure36 = 'https://static.igem.wiki/teams/5822/results/figure36.webp';



// 组件定义 1
const MainContent = () => (
  <>

    {/* 1. CD63 Aptamer-Based Magnetic Bead Exosome Capture */}
<div id="cd63-aptamer" className="view-content">
  <div className="content-header">
    <div className="h1">CD63 Aptamer-Based Magnetic Bead Exosome Capture</div>
  </div>
  <div className="content-body">
    <p>
      To develop a stable, efficient, and specific exosome isolation method, we constructed and optimized a CD63 aptamer–modified magnetic bead capture system. The optimization and validation process was divided into three stages: 1) aptamer coating condition optimization; 2) exosome capture condition optimization; and 3) validation of capture performance.
    </p>

    {/* 1. Establishment of CRISPR–Aptamer Standard Curve */}
    <section id="crispr-aptamer-curve" className="results-section">
      <div className="content-section-header">
        <div className="h2">1. Establishment of CRISPR–Aptamer Standard Curve</div>
      </div>
      <p>
        A standard curve was constructed to correlate fluorescence intensity with aptamer concentration. The resulting equation (y = 37.48x + 1859, R² = 0.9949) demonstrated excellent linearity, enabling accurate quantification of aptamer loading on magnetic beads.
      </p>
      
      <div className="figure-container">
        <div className="figure-item">
          <img src={figure1} alt="Standard curve between fluorescence and aptamer concentration" className="figure-image" />
          <div className="h4">Figure 1. Standard curve between fluorescence and aptamer concentration</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> The highly linear curve provides a reliable method to convert fluorescence signals into aptamer concentrations.</p>
    </section>

    {/* 2. Optimization of Aptamer Coating Conditions */}
    <section id="aptamer-coating-optimization" className="results-section">
      <div className="content-section-header">
        <div className="h2">2. Optimization of Aptamer Coating Conditions</div>
      </div>
      
      <div className="h3">(1) Temperature Optimization</div>
      <p>
        Magnetic beads were incubated with CD63 aptamers at four temperatures (25°C, 28°C, 37°C, 45°C) for 30 minutes. Fluorescence-based quantification showed that 37°C achieved the highest aptamer loading, outperforming all other groups.
      </p>
      
      <div className="figure-container">
        <div className="figure-item">
          <img src={figure2} alt="Aptamer loading at different coating temperatures" className="figure-image" />
          <div className="h4">Figure 2. Aptamer loading at different coating temperatures</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure3} alt="Washing validation showing negligible aptamer residue after third wash" className="figure-image" />
          <div className="h4">Figure 3. Washing validation showing negligible aptamer residue after third wash</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure4} alt="Elution validation for different coating temperatures" className="figure-image" />
          <div className="h4">Figure 4. Elution validation for different coating temperatures</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> 37°C was selected as the optimal coating temperature.</p>

      <div className="h3">(2) Time Optimization</div>
      <p>
        At 37°C, incubation times of 10, 30, 45, and 60 minutes were tested. Aptamer loading reached a plateau at 30 minutes, and longer incubation did not further increase binding efficiency.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure5} alt="Original aptamer concentration calculated from 1:10 and 1:50 dilutions" className="figure-image" />
          <div className="h4">Figure 5. Original aptamer concentration calculated from 1:10 and 1:50 dilutions</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure6} alt="Aptamer loading on magnetic beads under different coating durations" className="figure-image" />
          <div className="h4">Figure 6. Aptamer loading on magnetic beads under different coating durations</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure7} alt="Elution validation for different coating durations" className="figure-image" />
          <div className="h4">Figure 7. Elution validation for different coating durations</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> 30 minutes was chosen as the optimal coating time.</p>

      <div className="h3">(3) Validation under Optimal Conditions</div>
      <p>
        Under the optimized condition (37°C, 30 min), the average aptamer loading was approximately 145 nM, calculated from 1:10 and 1:50 dilutions. Fluorescence measurements of sequential washes showed that unbound aptamers were nearly undetectable after the third wash, confirming stable immobilization.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure8} alt="Original aptamer concentration calculated from 1:10 and 1:50 dilutions under optimal conditions" className="figure-image" />
          <div className="h4">Figure 8. Original aptamer concentration calculated from 1:10 and 1:50 dilutions under optimal conditions</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure9} alt="Aptamer concentration in sequential elution fractions" className="figure-image" />
          <div className="h4">Figure 9. Aptamer concentration in sequential elution fractions</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> Aptamers were firmly immobilized on magnetic beads, and free aptamers were effectively removed.</p>
    </section>

    {/* 3. Optimization of Exosome Capture Conditions */}
    <section id="exosome-capture-optimization" className="results-section">
      <div className="content-section-header">
        <div className="h2">3. Optimization of Exosome Capture Conditions</div>
      </div>
      
      <div className="h3">(1) Temperature Optimization</div>
      <p>
        Magnetic beads were incubated with SK-BR-3 cell supernatant at 25°C, 27.5°C, and 37°C for 30 minutes. BCA protein quantification showed the highest exosome yield at 27.5°C.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure10} alt="BCA standard curve" className="figure-image" />
          <div className="h4">Figure 10. BCA standard curve</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure11} alt="Exosome protein concentration at different capture temperatures" className="figure-image" />
          <div className="h4">Figure 11. Exosome protein concentration at different capture temperatures</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> 27.5°C was determined as the optimal capture temperature.</p>

      <div className="h3">(2) Time Optimization</div>
      <p>
        At 27.5°C, incubation times of 15, 30, and 45 minutes were compared. Protein quantification indicated that 30 minutes achieved maximum exosome capture efficiency, with no significant improvement at longer times.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure12} alt="Exosome protein concentration at different capture durations" className="figure-image" />
          <div className="h4">Figure 12. Exosome protein concentration at different capture durations</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> 30 minutes was selected as the optimal capture time.</p>
    </section>

    {/* 4. Exosome Capture from Cell Culture Supernatants */}
    <section id="exosome-capture-validation" className="results-section">
      <div className="content-section-header">
        <div className="h2">4. Exosome Capture from Cell Culture Supernatants</div>
      </div>
      <p>
        Using the optimized conditions (27.5°C, 30 min), exosomes were successfully captured from four cell lines: MCF-10A, MCF-7, SK-BR-3, and MDA-MB-231. BCA assays revealed varying yields, with MDA-MB-231 showing the highest protein concentration, followed by SK-BR-3 and MCF-7, while MCF-10A yielded the least.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure13} alt="Exosome protein concentration from four cell culture supernatants" className="figure-image" />
          <div className="h4">Figure 13. Exosome protein concentration from four cell culture supernatants</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> The CD63 aptamer–coated beads effectively captured exosomes from various cell types.</p>
    </section>

    {/* 5. Western Blot Validation */}
    <section id="western-blot-validation" className="results-section">
      <div className="content-section-header">
        <div className="h2">5. Western Blot Validation</div>
      </div>
      <p>
        Western Blot analysis confirmed the presence of exosomal markers CD63, CD9, and TSG101, and the absence of Calnexin (ER marker), indicating high purity and specificity of the captured exosomes.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure14} alt="Western blot validation of exosome markers" className="figure-image" />
          <div className="h4">Figure 14. Western blot validation of exosome markers (CD63, CD9, TSG101) and negative marker (Calnexin)</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> Captured exosomes retained typical marker expression and high purity.</p>
    </section>

    {/* 6. Transmission Electron Microscopy (TEM) Observation */}
    <section id="tem-observation" className="results-section">
      <div className="content-section-header">
        <div className="h2">6. Transmission Electron Microscopy (TEM) Observation</div>
      </div>
      <p>
        TEM images showed intact, cup-shaped vesicles with diameters ranging from 50–120 nm, consistent with classical exosome morphology.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure15} alt="TEM image of exosomes captured by CD63 aptamer–modified magnetic beads" className="figure-image" />
          <div className="h4">Figure 15. TEM image of exosomes captured by CD63 aptamer–modified magnetic beads</div>
        </div>
      </div>
      
      <p><strong>Conclusion:</strong> The exosomes were morphologically intact and structurally consistent with expected exosome features.</p>
    </section>

    {/* 7. Summary */}
    <section id="cd63-summary" className="results-section">
      <div className="content-section-header">
        <div className="h2">Summary</div>
      </div>
      <p>We successfully developed and optimized a CD63 aptamer–modified magnetic bead exosome capture system, featuring:</p>
      <ul>
        <li>Optimal coating: 37°C, 30 min</li>
        <li>Optimal capture: 27.5°C, 30 min</li>
        <li>High loading efficiency (~145 nM)</li>
        <li>High exosome yield and purity confirmed by BCA, WB, and TEM</li>
      </ul>
      <p>This system provides a reliable, efficient, and specific method for exosome isolation from cell culture supernatants, forming a solid foundation for downstream biomarker detection.</p>
    </section>

  </div>
</div>


{/* 2. Cas14a Prokaryotic Expression */}
<div id="cas14a-expression" className="view-content">
  <div className="content-header">
    <div className="h1">Cas14a Prokaryotic Expression</div>
  </div>
  <div className="content-body">
    <p>
      To obtain Cas14a required for the CRISPR system, we performed prokaryotic expression of the recombinant protein. Specifically, our team independently designed the plasmid and constructed the vector. Following plasmid extraction, the plasmid was transformed into E.coli BL21 (DE3). We then induced expression and purified the target protein, conducting enzyme activity assays to evaluate its functionality.
    </p>

    {/* 1. Plasmid Design and Extraction */}
    <section id="plasmid-design" className="results-section">
      <div className="content-section-header">
        <div className="h2">1. Plasmid Design and Extraction</div>
      </div>
      <p>
        We decided to express the protein in E. coli BL21 (DE3) during the later stages of the experiment. Therefore, we needed to integrate the target gene into a plasmid backbone. We obtained the insertion sequence of the target gene (1590 bp) (Appendix 1). By analyzing the insertion sequence and the restriction enzyme sites on the vector backbone, we selected enzymes capable of digesting the plasmid DNA to yield appropriate bands (Figure 1.1). The digested DNA was run on agarose gel electrophoresis, with ethidium bromide substitute used to determine fragment sizes. Subsequent cloning, sequence alignment (Figure 1.2), and sequencing (Appendix 2) confirmed the results, ultimately translating into an amino acid sequence (529 residues) (Appendix 1).
      </p>
      <p>
        During vector construction, the team carefully selected the pET-6×His vector as the backbone. This T7-promoter-based scaffold contains an ampicillin resistance gene as a selection marker and is equipped with an inducible lac operon (including the lac I repressor), ensuring that IPTG can induce fusion protein expression. Additionally, the backbone incorporates a six-residue His-tag at the C-terminus of the target protein. This His-tag enables subsequent protein purification via nickel affinity chromatography. The inclusion of Rop and pBR322 ori reduces plasmid copy number and enhances replication efficiency. The above outlines the entire vector design process. Detailed information is provided in Appendices 3 and 4. Once the construction was completed, the plasmid was prepared (Figure 1.3) to facilitate its subsequent transformation into competent bacteria.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure16_1} alt="Restriction Enzyme Digestion Analysis Chart" className="figure-image" />
          <div className="h4">Figure 16.1 Restriction Enzyme Digestion Analysis Chart</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure16_2} alt="Sequence Alignment Diagram" className="figure-image" />
          <div className="h4">Figure 16.2 Sequence Alignment Diagram</div>
        </div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure16_3} alt="Agarose gel electrophoresis analysis of plasmid DNA extraction" className="figure-image" />
          <div className="h4">Figure 16.3 Agarose gel electrophoresis analysis of plasmid DNA extraction (Lanes 1 and 2 show the plasmids extracted from BL21)</div>
        </div>
      </div>
    </section>

    {/* 2. Transformation */}
    <section id="transformation" className="results-section">
      <div className="content-section-header">
        <div className="h2">2. Transformation</div>
      </div>
      <p>
        The first step is the successful transformation of the plasmid into E. coli. We used the BL21(DE3) strain, which lacks specific proteases, allowing the expressed recombinant protein to be more stable within the cell and less prone to degradation. Remove the competent bacterial suspension from -80°C, then thaw on ice for 1-2 minutes. Take 100 μL of BL21(DE3) and 10 μL of plasmid, gently mix them by pipetting up and down. Incubate on ice for 30 minutes. Heat at 42°C (immersion below the liquid level in the tube) for 90 seconds. Cool on ice for 2-3 minutes. Add 1 mL LB liquid medium, incubate on ice for 5 min, then transfer to a 37°C shaking incubator for 1 hour. Centrifuge after incubation.
      </p>
      <p>
        Following transformation, inoculate cells onto LB agar plates containing ampicillin for selection. Since the plasmid carries an ampicillin resistance gene, only E. coli cells that successfully took up the plasmid will grow on these plates. After overnight incubation, distinct bacterial colonies were observed (Figure 2), indicating successful transformation.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure17} alt="successfully transformed E. coli BL21(DE3)" className="figure-image" />
          <div className="h4">Figure 17. Successfully transformed E. coli BL21(DE3) (cultivated on LB agar plates with ampicillin)</div>
        </div>
      </div>
    </section>

    {/* 3. Induction */}
    <section id="induction" className="results-section">
      <div className="content-section-header">
        <div className="h2">3. Induction</div>
      </div>
      <p>
        Subsequently, we continued to pick single colonies for E. coli cultivation. To induce target protein expression, we added IPTG inducer utilizing the inducible lac operon from the plasmid. Following induction, we performed ultrasonic lysis, centrifugation, and BCA protein concentration measurement as described in the experiment. Finally, the supernatant was loaded at equal concentrations for SDS-PAGE gel electrophoresis as shown in the experiment. Over a defined period, we tested various IPTG concentrations alongside different incubation times and temperatures to determine optimal protein production conditions. Ultimately, LB medium containing ampicillin and 1 mM IPTG at 20°C, 80 rpm for 16 hours yielded the thickest band on the SDS-PAGE gel, indicating the highest concentration of target protein in the supernatant. The expected molecular weight of the target protein is 61.53 kDa.
      </p>
    </section>

    {/* 4. Purification */}
    <section id="purification" className="results-section">
      <div className="content-section-header">
        <div className="h2">4. Purification</div>
      </div>
      <p>
        The purification process is detailed in the experiment. We utilized the His-tag protein purification kit (NTA-Ni agarose magnetic beads) from Biyuntian Biotechnology Co., Ltd. Purification success was assessed by analyzing the washing and elution fractions on a gel (Figure 3).
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure18} alt="the result of SDS-PAGE gel electrophoresis" className="figure-image" />
          <div className="h4">Figure 18. The result of SDS-PAGE gel electrophoresis</div>
        </div>
      </div>
    </section>

    {/* 5. Dialysis */}
    <section id="dialysis" className="results-section">
      <div className="content-section-header">
        <div className="h2">5. Dialysis</div>
      </div>
      <p>
        The target protein (expected molecular weight 61.53 kDa) was purified and stored in the non-denaturing elution buffer provided by the His-tag Protein Purification Kit from Biyuntian Biotechnology Co., Ltd. For this purpose, we used a dialysis bag: the protein solution was added, the bag was sealed, and placed in a large beaker containing PBS. A rotor was inserted and placed on a magnetic stirrer. The machine was turned on, causing the rotor to continuously stir the PBS buffer. The proteins were thus stored in PBS buffer until their use in the enzyme activity assay.
      </p>
    </section>

    {/* 6. Enzyme Activity Assay */}
    <section id="enzyme-activity-assay" className="results-section">
      <div className="content-section-header">
        <div className="h2">6. Enzyme Activity Assay</div>
      </div>
      <p>
        To validate the cleavage activity of Cas14a, one experimental group (Cas14a + sgRNA + Target DNA) and three control groups were established. Fluorescence measurements were performed at 37°C using an enzyme standard (excitation wavelength 492 nm, emission wavelength 520 nm) for all four sample groups. The variance and mean values were calculated for the three parallel samples in each group and plotted using Origin 8.0 (Figure 4). Only the experimental group exhibited a significant increase in fluorescence (fluorescence value approaching 10⁵). When any component—Cas14a, sgRNA, or Target DNA—was absent from the detection system, no fluorescence signal was generated. This excluded other causes for the fluorescence increase and demonstrated that the Cas14a protein possesses high cleavage activity.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure19} alt="validation of the activity of Cas14a" className="figure-image" />
          <div className="h4">Figure 19. Validation of the activity of Cas14a</div>
        </div>
      </div>
    </section>

    {/* 7. Supplementary Information (SI) */}
    <section id="supplementary-information" className="results-section">
      <div className="content-section-header">
        <div className="h2">7. Supplementary Information (SI)</div>
      </div>
      <ol>
        <li>pET-6×His-Cas14a-insert sequence and amino acid sequence.dna</li>
        <li>pET-6×His-Cas14a sequencing file.zip</li>
        <li>pET-6×His-Cas14a vector map.dna</li>
        <li>pET-6xHis-Cas14a Vector Information.pdf</li>
      </ol>
    </section>

  </div>
</div>




{/* 3. HCR */}
<div id="hcr" className="view-content">
  <div className="content-header">
    <div className="h1">HCR</div>
  </div>
  <div className="content-body">
    <p>
      To establish a highly sensitive and enzyme-free nucleic acid amplification system, we employed a Hybridization Chain Reaction (HCR) combined with CRISPR/Cas12a detection. A series of experiments were conducted to validate system feasibility, optimize reaction parameters, and evaluate amplification efficiency. Specifically, we first confirmed the feasibility of the HCR-triggered signal amplification, then optimized key factors including probe concentration, temperature, and reaction time, and finally quantified the amplification efficiency of four different Trigger strands (ErbB2, PD-L1, MMP-9, EPCAM) using the CRISPR fluorescence readout.
    </p>

    {/* 1. Feasibility Verification of the HCR–CRISPR System */}
    <section id="hcr-feasibility" className="results-section">
      <div className="content-section-header">
        <div className="h2">1. Feasibility Verification of the HCR–CRISPR System</div>
      </div>
      <p>
        To verify the feasibility of the combined HCR amplification and CRISPR detection system, different reaction groups were tested, including unannealed TH2 (250 nM), TH1, TH2, TH1+TH2, Trigger, TH1+Trigger, TH2+Trigger, and TH1+TH2+Trigger. The results showed that:
      </p>
      <ul>
        <li>Systems containing Trigger produced strong fluorescence signals;</li>
        <li>Groups without Trigger, with mismatches, or unannealed probes showed signals close to the baseline.</li>
      </ul>
      <p>
        These results demonstrate that HCR can be specifically triggered and effectively amplify the signal, confirming the feasibility and specificity of the HCR–CRISPR combined system.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure20} alt="Feasibility Verification of the HCR–CRISPR System" className="figure-image" />
          <div className="h4">Figure 20. Feasibility Verification of the HCR–CRISPR System</div>
        </div>
      </div>
    </section>

    {/* 2. Optimization of TH1/TH2 Probe Concentration */}
    <section id="probe-concentration-optimization" className="results-section">
      <div className="content-section-header">
        <div className="h2">2. Optimization of TH1/TH2 Probe Concentration</div>
      </div>
      <p>
        The concentration gradient of TH1/TH2 was set at 250 nM, 500 nM, 750 nM, 1.0 μM, and 1.25 μM. Fluorescence intensity increased with higher probe concentration, but concentrations above 1 μM led to nonspecific aggregation and elevated background. Considering both efficiency and specificity, the optimal concentration was determined to be 1 μM.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure21} alt="Optimization of TH1/TH2 Probe Concentration" className="figure-image" />
          <div className="h4">Figure 21. Optimization of TH1/TH2 Probe Concentration</div>
        </div>
      </div>
    </section>

    {/* 3. Optimization of Reaction Temperature */}
    <section id="temperature-optimization" className="results-section">
      <div className="content-section-header">
        <div className="h2">3. Optimization of Reaction Temperature</div>
      </div>
      <p>
        Reaction temperature critically affects hybridization kinetics and probe stability. Across the temperature gradient of 18–45 °C, excessively high temperatures disrupted hairpin stability, while low temperatures slowed hybridization. At 25 °C, fluorescence signals peaked, indicating a balance between structural stability and reaction efficiency. Thus, 25 °C was selected as the optimal temperature.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure22} alt="Optimization of Reaction Temperature" className="figure-image" />
          <div className="h4">Figure 22. Optimization of Reaction Temperature</div>
        </div>
      </div>
    </section>

    {/* 4. Optimization of Reaction Time */}
    <section id="reaction-time-optimization" className="results-section">
      <div className="content-section-header">
        <div className="h2">4. Optimization of Reaction Time</div>
      </div>
      <p>
        Reaction time gradients were set at 5, 10, 15, 20, and 25 minutes. Fluorescence intensity reached its maximum at 10 minutes, after which prolonged incubation did not further improve signal and even showed slight decline. Therefore, 10 minutes was defined as the optimal reaction time, ensuring sufficient amplification while maintaining efficiency.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure23} alt="Optimization of Reaction Time" className="figure-image" />
          <div className="h4">Figure 23. Optimization of Reaction Time</div>
        </div>
      </div>
    </section>

    {/* 5. Standard Curve of TH2 Strand */}
    <section id="th2-standard-curve" className="results-section">
      <div className="content-section-header">
        <div className="h2">5. Standard Curve of TH2 Strand</div>
      </div>
      <p>
        A standard curve was established using unannealed TH2 at concentrations of 1 nM, 5 nM, 50 nM, 100 nM, and 500 nM. Fluorescence intensity displayed a strong linear correlation with TH2 concentration (high R²), confirming system stability and enabling the calculation of equivalent concentrations of HCR products.
      </p>

      <div className="figure-container">
        <div className="figure-item">
          <img src={figure24} alt="Standard Curve of TH2 Strand" className="figure-image" />
          <div className="h4">Figure 24. Standard Curve of TH2 Strand</div>
        </div>
      </div>
    </section>

    {/* 6. Amplification Performance of Four Trigger Strands */}
    <section id="trigger-amplification" className="results-section">
      <div className="content-section-header">
        <div className="h2">6. Amplification Performance of Four Trigger Strands</div>
      </div>
      <p>
        Under optimal conditions (TH1/TH2 = 1 μM, 25 °C, 10 min), the amplification efficiency of four Trigger strands—ErbB2, PD-L1, MMP-9, and EPCAM—was evaluated at 1 nM, 5 nM, and 50 nM. All four Triggers exhibited significant signal amplification, even at 1 nM, demonstrating the high sensitivity and robust amplification capability of the HCR–CRISPR detection system.
      </p>
      <p>
        To quantitatively evaluate HCR amplification efficiency, equivalent concentrations derived from the standard curve were compared to the actual concentrations. The amplification factor was calculated using the following formula:
      </p>
      <p>
        <strong>Amplification Factor (Fold Change) = C_equiv / C_real</strong>
      </p>
      <p>where:</p>
      <ul>
        <li>C_equiv: Equivalent concentration derived from the TH2 standard curve</li>
        <li>C_real: Actual input concentration of Trigger</li>
      </ul>

      <div className="table-container">
        <table className="results-table">
          <caption>Table 1. Summary of Amplification Factors of Four Trigger Strands</caption>
          <thead>
            <tr>
              <th>Trigger</th>
              <th>Actual Concentration (nM)</th>
              <th>Equivalent Concentration (nM)</th>
              <th>Amplification Factor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">ErbB2</td>
              <td>1</td>
              <td>8.9</td>
              <td>8.9</td>
            </tr>
            <tr>
              <td>5</td>
              <td>79.8</td>
              <td>15.96</td>
            </tr>
            <tr>
              <td>50</td>
              <td>844</td>
              <td>16.88</td>
            </tr>
            <tr>
              <td rowSpan="3">PD-L1</td>
              <td>1</td>
              <td>12.4</td>
              <td>12.4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>69</td>
              <td>13.8</td>
            </tr>
            <tr>
              <td>50</td>
              <td>851</td>
              <td>17.01</td>
            </tr>
            <tr>
              <td rowSpan="3">MMP-9</td>
              <td>1</td>
              <td>7.2</td>
              <td>7.2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>75.0</td>
              <td>15.06</td>
            </tr>
            <tr>
              <td>50</td>
              <td>843</td>
              <td>16.86</td>
            </tr>
            <tr>
              <td rowSpan="3">EPCAM</td>
              <td>1</td>
              <td>9.8</td>
              <td>9.8</td>
            </tr>
            <tr>
              <td>5</td>
              <td>71</td>
              <td>14.2</td>
            </tr>
            <tr>
              <td>50</td>
              <td>847</td>
              <td>16.94</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        All four Trigger strands achieved amplification factors ranging from 7.2 to 17.01, confirming consistent amplification performance and excellent sensitivity.
      </p>
    </section>

  </div>
</div>



{/* 4 */}








  </>
);


function Results() {
  
  const [isLoaded, setIsLoaded] = useState(false);

  // 页面加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 菜单数据
  const menuData = [
    {
      id: 'cd63-aptamer',
      title: 'CD63 Aptamer-Based Magnetic Bead Exosome Capture',
      icon: '🧲',
      subMenus: [
        { id: 'crispr-aptamer-curve', title: 'CRISPR–Aptamer Standard Curve' },
        { id: 'aptamer-coating-optimization', title: 'Aptamer Coating Optimization' },
        { id: 'exosome-capture-optimization', title: 'Exosome Capture Optimization' },
        { id: 'exosome-capture-validation', title: 'Exosome Capture Validation' },
        { id: 'western-blot-validation', title: 'Western Blot Validation' },
        { id: 'tem-observation', title: 'TEM Observation' },
        { id: 'cd63-summary', title: 'Summary' }
      ]
    },
    {
      id: 'cas14a-expression',
      title: 'Cas14a Prokaryotic Expression',
      icon: '🧬',
      subMenus: [
        { id: 'plasmid-design', title: 'Plasmid Design & Extraction' },
        { id: 'transformation', title: 'Transformation' },
        { id: 'induction', title: 'Induction' },
        { id: 'purification', title: 'Purification' },
        { id: 'dialysis', title: 'Dialysis' },
        { id: 'enzyme-activity-assay', title: 'Enzyme Activity Assay' },
        { id: 'supplementary-information', title: 'Supplementary Information' }
      ]
    },
    {
      id: 'hcr',
      title: 'HCR',
      icon: '🔗',
      subMenus: [
        { id: 'hcr-feasibility', title: 'HCR–CRISPR System Feasibility' },
        { id: 'probe-concentration-optimization', title: 'Probe Concentration Optimization' },
        { id: 'temperature-optimization', title: 'Temperature Optimization' },
        { id: 'reaction-time-optimization', title: 'Reaction Time Optimization' },
        { id: 'th2-standard-curve', title: 'TH2 Standard Curve' },
        { id: 'trigger-amplification', title: 'Trigger Amplification Performance' }
      ]
    },
    {
      id: 'apt-crispr-hcr',
      title: 'APT-CRISPR-HCR Detection System',
      icon: '🔬',
      subMenus: [
        { id: 'crispr-cas12a-optimization', title: 'CRISPR/Cas12a Optimization' },
        { id: 'displacement-optimization', title: 'Displacement Optimization' },
        { id: 'complementary-screening', title: 'Complementary Strand Screening' },
        { id: 'crispr-sensitivity-specificity', title: 'CRISPR Sensitivity & Specificity' },
        { id: 'hcr-enhanced-detection', title: 'HCR-Enhanced Detection' },
        { id: 'cell-suspension-validation', title: 'Cell Suspension Validation' }
      ]
    },
    {
      id: 'apt-crispr-cas14a-rca',
      title: 'APT-CRISPR/Cas14a-RCA Detection System',
      icon: '⚡',
      subMenus: [
        { id: 'cas14a-system-optimization', title: 'Cas14a System Optimization' },
        { id: 'rca-amplification', title: 'RCA Amplification' },
        { id: 'cas14a-sensitivity', title: 'Cas14a Sensitivity Analysis' },
        { id: 'system-comparison', title: 'System Comparison' },
        { id: 'clinical-validation', title: 'Clinical Validation' }
      ]
    }
  ];

  // 滚动到指定位置
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 一级菜单点击
  const handleMainMenuClick = (menuId) => {
    scrollToSection(menuId);
  };

  // 二级菜单点击
  const handleSubMenuClick = (subMenuId) => {
    scrollToSection(subMenuId);
  };


  return (
    <div className={`view ${isLoaded ? 'loaded' : ''}`}>
      {/* 左侧菜单栏 */}
      <div className="view-sidebar">

        {/* Logo区域 */}
        <div className="menu-logo">
          <img src={menuLogo} alt="ZZO-CHINA Logo" />
        </div>

        <nav className="sidebar-nav">
          {menuData.map((menu) => (
            <div key={menu.id} className="menu-item">
              <div
                className="menu-title"
                onClick={() => handleMainMenuClick(menu.id)}
              >
                {/* <div className="menu-icon-wrapper">
                  <img src={menuIconDefault} alt="" className="menu-icon default" />
                  <img src={menuIconHover} alt="" className="menu-icon hover" />
                </div> */}
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && (
                <div className="submenu">
                  {menu.subMenus.map((subMenu) => (
                    <div
                      key={subMenu.id}
                      className="submenu-item"
                      onClick={() => handleSubMenuClick(subMenu.id)}
                    >
                      {subMenu.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

      </div>

      {/* 右侧内容区域 */}
      <div className="view-main">
        <div className="main-content">
          {/* 主要内容区域 */}
          <div className="main-content-area">
            <MainContent />
          </div>

        </div>
      </div>


    </div>
  );
}


export default Results;