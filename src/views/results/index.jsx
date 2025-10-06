import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';
import { YoutubeOutlined, WechatOutlined } from '@ant-design/icons';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';
// Results 相关图片 - 这些需要根据实际的图片URL进行调整
const figure1 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-1-standard-curve-between-fluorescence-and-aptamer-concentration.webp';
const figure2 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-2-aptamer-loading-at-different-coating-temperatures.webp';
const figure3 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-3-washing-validation-showing-negligible-aptamer-residue-after-third-wash.webp';
const figure4 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-4-elution-validation-for-different-coating-temperatures.webp';
const figure5 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-5.webp';
const figure6 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-6-aptamer-loading-on-magnetic-beads-under-different-coating-durations.webp';
const figure7 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-7-elution-validation-for-different-coating-durations.webp';
const figure8 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-8.webp';
const figure9 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-9-aptamer-concentration-in-sequential-elution-fractions.webp';
const figure10 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-10-bca-standard-curve.webp';
const figure11 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-11-exosome-protein-concentration-at-different-capture-temperatures.webp';
const figure12 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-12-exosome-protein-concentration-at-different-capture-durations.webp';
const figure13 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-13-exosome-protein-concentration-from-four-cell-culture-supernatants.webp';
const figure14 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-14-western-blot.webp';
const figure15 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-15-tem-image-of-exosomes-captured-by-cd63-aptamer-modified-magnetic-beads.webp';
const figure16_1 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-16-1-restriction-enzyme-digestion-analysis-chart.webp';
const figure16_2 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-16-2-sequence-alignment-diagram.webp';
const figure16_3 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-16-3-agarose-gel-electrophoresis-analysis-of-plasmid-dna-extraction.webp';
const figure17 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-17-successfully-transformed-e-coli-bl21.webp';
const figure18 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-18-the-result-of-sds-page-gel-electrophoresis.webp';
const figure19 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-19-validation-0f-the-activity-of-cas14a.webp';
const figure20 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-20-feasibility-verification-of-the-hcr-crispr-system.webp';
const figure21 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-21.webp';
const figure22 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-22.webp';
const figure23 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-23.webp';
const figure24 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-24.webp';
const figure25 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-25.webp';
const figure26 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-26.webp';
const figure27 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-27.webp';
const figure28 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-28.webp';
const figure29 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-29.webp';
const figure30 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-30.webp';
const figure31 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-31.webp';
const figure32 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-32.webp';
const figure33 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-33.webp';
const figure34 = 'https://static.igem.wiki/teams/5822/newassets/results/fig34.webp';
const figure35 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-35.webp';
const figure36 = 'https://static.igem.wiki/teams/5822/newassets/results/fig36.webp';

// 新加 RAC 相关图片
const figure_1 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-37.webp';
const figure_2 = 'https://static.igem.wiki/teams/5822/newassets/results/figure-38.webp';


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

    {/* 新加 RAC
    <div id="RAC" className="view-content">
      <div className="content-header">
        <div className="h1">RCA</div>
      </div>
      <div className="content-body">
        {/* 1. Optimization of Circular DNA Concentration//
        <section id="Optimization_Concentration" className="results-section">
          <div className="content-section-header">
            <div className="h2">1. Optimization of Circular DNA Concentration</div>
          </div>
          <p>
            To optimize the concentration of circular DNA in the standalone Rolling Circle Amplification (RCA) system, three concentration gradients (100 nM, 500 nM, and 800 nM) were set, with the target strand concentration, phi29 DNA polymerase dosage, and other conditions fixed, and the amplification efficiency was evaluated by fluorescence signal (with 3 replicates per group).
          </p>
          <p>
            As shown in the figure, the 100 nM group exhibited the slowest fluorescence increase and the lowest final fluorescence value; the 500 nM group showed a faster fluorescence rise rate, and the final fluorescence intensity was significantly higher than that of the 100 nM group; although the fluorescence value of the 800 nM group was slightly higher than that of the 500 nM group, the increase range was limited.
          </p>
          <div className="figure-container">
            <div className="figure-item">
              <img src={figure_1} alt="" className="figure-image" />
              <img src={figure_2} alt="" className="figure-image" />
              <div className="h4">Figure 25.Optimization of Circular DNA Concentration</div>
            </div>
          </div>
          <p>In conclusion, 500 nM is the optimal concentration of circular DNA for standalone RCA, as it not only ensures efficient amplification but also avoids nonspecific reactions caused by high-concentration templates.</p>
        </section>
      </div>
    </div> */}


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
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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

{/*新加 RAC*/}
    <div id="RAC" className="view-content">
      <div className="content-header">
        <div className="h1">RCA</div>
      </div>
      <div className="content-body">
        {/* 1. Optimization of Circular DNA Concentration */}
        <section id="Optimization_Concentration" className="results-section">
          <div className="content-section-header">
            <div className="h2">1. Optimization of Circular DNA Concentration</div>
          </div>
          <p>
            To optimize the concentration of circular DNA in the standalone Rolling Circle Amplification (RCA) system, three concentration gradients (100 nM, 500 nM, and 800 nM) were set, with the target strand concentration, phi29 DNA polymerase dosage, and other conditions fixed, and the amplification efficiency was evaluated by fluorescence signal (with 3 replicates per group).
          </p>
          <p>
            As shown in the figure, the 100 nM group exhibited the slowest fluorescence increase and the lowest final fluorescence value; the 500 nM group showed a faster fluorescence rise rate, and the final fluorescence intensity was significantly higher than that of the 100 nM group; although the fluorescence value of the 800 nM group was slightly higher than that of the 500 nM group, the increase range was limited.
          </p>
          <div className="figure-container">
            <div className="figure-item">
              <img src={figure_1} alt="" className="figure-image" />
              <img src={figure_2} alt="" className="figure-image" />
              <div className="h4">Figure 25.Optimization of Circular DNA Concentration</div>
            </div>
          </div>
          <p>In conclusion, 500 nM is the optimal concentration of circular DNA for standalone RCA, as it not only ensures efficient amplification but also avoids nonspecific reactions caused by high-concentration templates.</p>
        </section>
      </div>
    </div>


    {/* 4 */}
    {/* APT-CRISPR/Cas12a-HCR Detection System */}
    <div id="apt-crispr-hcr" className="view-content">
      <div className="content-header">
        <div className="h1">APT-CRISPR/Cas12a-HCR detection system</div>
      </div>
      <div className="content-body">
        <p>
          To further integrate amplification and detection modules into a unified biosensing platform, we established the APT–CRISPR–HCR detection system. This section summarizes the systematic optimization and validation of the entire workflow, from aptamer immobilization to competitive displacement and CRISPR/Cas12a activation. By combining the high specificity of aptamer–target recognition, the signal amplification of HCR, and the trans-cleavage activity of CRISPR/Cas12a, this system enables highly sensitive and multiplexed detection of exosomal protein biomarkers under enzyme-free and isothermal conditions.
        </p>

        {/* 1. CRISPR/Cas12a Optimization */}
        <section className="subsection" id="crispr-cas12a-optimization">
          <h2 className="subsection-title">1. CRISPR/Cas12a Fluorescence Detection System Optimization of Coating Time & Temperature Results</h2>

          <div className="subsection-content">
            <p>
              To maximize the immobilization efficiency of aptamers on magnetic beads and ensure optimal formation of APT-APT-c complexes, we systematically optimized two critical coating parameters: incubation time and temperature. These parameters directly influence the initial concentration of functional [APT-APT-c]₀ complexes on magnetic beads, which is crucial for achieving high sensitivity and rapid response in our competitive displacement detection system.
            </p>

            <p>We evaluated coating conditions for all four target aptamers (HER-2, EpCam, PD-L1, and MMP-9) by testing:</p>
            <ul>
              <li>(1) Time gradient: 10, 30, 45, and 60 minutes</li>
              <li>(2) Temperature gradient: 25°C, 28°C, 37°C, and 45°C</li>
            </ul>
            <p>Fluorescence signal intensity after complete reaction was used as the readout to assess aptamer binding efficiency on magnetic beads.</p>

            <div className="figure-container">
              <h3>Optimization of Coating Time/Temperature</h3>
              <div className="figure-item">
                <img src={figure25} alt="Optimization of coating time and temperature" className="figure-image" />
                <div className="h4">Figure 25. Optimization of coating time and temperature</div>
                <div className="figure-description">
                  <p><strong>Group 1: HER-2 Aptamer:</strong> (A) Optimization curve of coating time for HER-2 reaction. (B) HER-2 reaction coating time optimization bar chart. (C) Optimization curve of coating temperature for HER-2 reaction. (D) HER-2 reaction coating temperature optimization bar chart.</p>
                  <p><strong>Group 2: EpCam Aptamer:</strong> (E) Optimization curve of coating time for EpCam reaction. (F) EpCam reaction coating time optimization bar chart. (G) Optimization curve of coating temperature for EpCam reaction. (H) EpCam reaction coating temperature optimization bar chart.</p>
                  <p><strong>Group 3: PD-L1 Aptamer:</strong> (I) Optimization curve of coating time for PD-L1 reaction. (J) PD-L1 reaction coating time optimization bar chart. (K) Optimization curve of coating temperature for PD-L1 reaction. (L) PD-L1 reaction coating temperature optimization bar chart.</p>
                  <p><strong>Group 4: MMP-9 Aptamer:</strong> (M) Optimization curve of coating time for MMP-9 reaction. (N) MMP-9 reaction coating time optimization bar chart. (O) Optimization curve of coating temperature for MMP-9 reaction. (P) MMP-9 reaction coating temperature optimization bar chart.</p>
                </div>
              </div>
            </div>

            <div className="conclusion-box">
              <h4>Conclusion</h4>
              <ul>
                <li>(1) Coating time optimization showed that incubation for ≥30 minutes yielded significantly higher fluorescence intensity than 10 minutes, with no significant difference among 30, 45, and 60 minutes, indicating binding saturation within 30 minutes.</li>
                <li>(2) Temperature optimization revealed that 28-37°C produced significantly stronger signals than 25°C and 45°C, with no significant difference between 28°C and 37°C.</li>
                <li>(3) Considering that 37°C matches physiological conditions and ensures consistent performance across all four aptamer systems, 37°C for 30 minutes was determined as the optimal coating condition, balancing maximal aptamer immobilization efficiency with experimental throughput.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Displacement Optimization */}
        <section className="subsection" id="displacement-optimization">
          <h2 className="subsection-title">2. Optimization of reaction time and temperature for displacement reactions</h2>

          <div className="subsection-content">
            <p>
              To maximize the efficiency and speed of the competitive displacement reaction, we systematically optimized reaction temperature and incubation time. These parameters directly influence the displacement rate constant and the time required to reach equilibrium, which are critical for achieving rapid detection with high signal intensity in our CRISPR/Cas12a-based biosensor system.
            </p>

            <p>We evaluated displacement conditions for all four target proteins (EpCAM, HER-2, MMP-9, and PD-L1) by testing:</p>
            <ul>
              <li>(1) Temperature gradient: 25°C, 27.5°C, and 37°C (30 min incubation)</li>
              <li>(2) Time gradient: 10, 20, 30, and 60 minutes (at optimal temperature)</li>
            </ul>
            <p>Fluorescence signal intensity from CRISPR/Cas12a activation was measured as the readout for APT-c release efficiency. Each experiment was performed with three technical replicates, and data were presented as mean ± SD.</p>

            <div className="figure-container">
              <h3>Temperature optimization</h3>
              <div className="figure-item">
                <img src={figure26} alt="Optimization of displacement temperature" className="figure-image" />
                <div className="h4">Figure 26. Optimization of displacement temperature</div>
                <div className="figure-description">
                  <p>(A) Optimization curve of reaction temperature for EpCam displacement reaction (B) EpCam displacement reaction temperature optimization bar chart (C) Optimization curve of reaction temperature for HER-2 displacement reaction (D) HER-2 displacement reaction temperature optimization bar chart (E) Optimization curve of reaction temperature for MMP-9 displacement reaction (F) MMP-9 displacement reaction temperature optimization bar chart (G) Optimization curve of reaction temperature for PD-L1 displacement reaction (H) PD-L1 displacement reaction temperature optimization bar chart</p>
                </div>
              </div>
            </div>

            <p>
              Temperature optimization experiments across all four target proteins revealed that 27.5°C yielded the highest fluorescence signal intensity after 30 minutes of incubation, significantly outperforming 25°C (p &lt; 0.05). The reduced signal at 25°C is attributed to decreased molecular kinetic energy that slows the competitive displacement reaction. Although 37°C achieved similar final fluorescence intensity to 27.5°C, it exhibited slower saturation kinetics, possibly due to increased aptamer structural dynamics or accelerated reverse dissociation. Therefore, 27.5°C was determined as the optimal displacement reaction temperature.
            </p>

            <div className="figure-container">
              <h3>Time optimization</h3>
              <div className="figure-item">
                <img src={figure27} alt="Optimization of displacement time" className="figure-image" />
                <div className="h4">Figure 27. Optimization of displacement time</div>
                <div className="figure-description">
                  <p>(A) Optimization curve of reaction time for EpCam displacement reaction (B) EpCam displacement reaction time optimization bar chart (C) Optimization curve of reaction time for HER-2 displacement reaction (D) HER-2 displacement reaction time optimization bar chart (E) Optimization curve of reaction time for MMP-9 displacement reaction (F) MMP-9 displacement reaction time optimization bar chart (G) Optimization curve of reaction time for PD-L1 displacement reaction (H) PD-L1 displacement reaction time optimization bar chart</p>
                </div>
              </div>
            </div>

            <p>
              Time-course optimization at 27.5°C demonstrated that 30 minutes was the optimal incubation period. The 10- and 20-minute groups exhibited significantly lower fluorescence signals due to incomplete competitive displacement, while the 60-minute group showed marginally decreased intensity, likely attributed to APT-c degradation or conformational changes during extended incubation. Therefore, 30 minutes was selected as the optimal displacement reaction time, ensuring maximal APT-c release while avoiding degradation issues.
            </p>

            <div className="conclusion-box">
              <h4>Final Optimized Displacement Conditions:</h4>
              <p><strong>Incubation at 27.5°C for 30 minutes</strong></p>
              <p>This condition ensures:</p>
              <ul>
                <li>(1) Maximal displacement efficiency: Near-complete conversion of APT-APT-c to APT-Target + APT-c</li>
                <li>(2) Rapid signal generation: Reaction reaches equilibrium within practical timeframe</li>
                <li>(3) System stability: Avoids degradation or structural instability issues</li>
                <li>(4) Universal applicability: Consistent performance across all four target proteins (EpCAM, HER-2, MMP-9, PD-L1)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Complementary Strand Screening */}
        <section className="subsection" id="complementary-screening">
          <h2 className="subsection-title">3. Complementary Strand Screening Results</h2>

          <div className="subsection-content">
            <p>
              To identify the optimal complementary strand design for each target protein, we conducted systematic screening experiments comparing two candidate sequences (APT-c1 and APT-c2) for each aptamer. The optimization aimed to maximize the CRISPR/Cas12a activation efficiency while ensuring rapid signal generation and high signal-to-noise ratio.
            </p>

            <div className="experimental-design">
              <h4>Experimental Design:</h4>
              <ul>
                <li><strong>Objective:</strong> Evaluate the kinetic performance and activation efficiency of two complementary strand designs (APT-c1 vs APT-c2) for four target proteins: EpCAM, HER-2, MMP-9, and PD-L1</li>
                <li><strong>Method:</strong> Real-time fluorescence monitoring at 30-second intervals over 30 minutes</li>
                <li><strong>Data Processing:</strong> Background fluorescence from DEPC control group was subtracted to obtain net signal values</li>
                <li><strong>Analysis:</strong> Fluorescence intensity-time curves were plotted to compare reaction kinetics, including signal rising rate, plateau value, and overall response efficiency</li>
              </ul>
            </div>

            <div className="figure-container">
              <h3>APT-c optimization result graph</h3>
              <div className="figure-item">
                <img src={figure28} alt="Optimization of displacement time" className="figure-image" />
                <div className="h4">Figure 28. Optimization of displacement time</div>
                <div className="figure-description">
                  <p>(A) Graph of the screening results for the complementary strand of the EpCam aptamer (B) Graph of the screening results for the complementary strand of the HER-2 aptamer (C) Graph of the screening results for the complementary strand of the MMP-9 aptamer (D) Graph of the screening results for the complementary strand of the PD-L1 aptamer</p>
                </div>
              </div>
            </div>

            <div className="results-analysis">
              <ol>
                <li>The results of the complementary strand optimization experiments for EpCam, HER-2, and PD-L1 indicate that, compared with APT-c1, the fluorescence intensity of APT-c2 increases very slowly and reaches a lower final stable value. This particularly suggests that the activation reaction ability of APT-c2 is weaker than that of APT-c1.</li>
                <li>The results of the complementary strand optimization experiments for MMP-9 show that, compared with APT-c2, the fluorescence intensity of APT-c1 increases very slowly and reaches a lower final stable value. This especially demonstrates that the activation reaction ability of APT-c1 is weaker than that of APT-c2.</li>
                <li>The comprehensive results suggest that, overall, APT-c1 of EpCam, HER-2, and PD-L1 has a better ability to activate the CRISPR/Cas12a reaction system to generate fluorescent signals at different concentrations than APT-c2. Meanwhile, APT-c2 of MMP-9 generally has a superior ability to activate the CRISPR/Cas12a reaction system to produce fluorescent signals at different concentrations compared to APT-c1.</li>
              </ol>
            </div>
          </div>
        </section>


        {/* 4. CRISPRCas12a Fluorescence Sensitivity & Specificity Valuation */}
        <section className="subsection" id="crispr-sensitivity-specificity">
          <h2 className="subsection-title">4. CRISPRCas12a Fluorescence Sensitivity & Specificity Valuation</h2>

          <div className="subsection-content">
            {/* Sensitivity Section */}
            <div className="sensitivity-section">
              <h3>Sensitivity</h3>
              <p>
                To assess the sensitivity of our CRISPR/Cas12a-aptamer detection system, we performed quantitative fluorescence detection using serial concentrations of target proteins (10 μg/mL to 1 ng/mL), with three replicates per group. Linear regression was performed on the log-transformed data.
              </p>
              <p>
                The system demonstrated excellent linearity across a wide dynamic range (10 ng/mL to 10 μg/mL) for all four markers, with R² values above 0.95, confirming high quantitative reliability.
              </p>

              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Protein</th>
                      <th>LOD</th>
                      <th>Linear range</th>
                      <th>R²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EpCam</td>
                      <td>1.13 ng/mL</td>
                      <td>10ng/ml-10ug/ml</td>
                      <td>0.9540</td>
                    </tr>
                    <tr>
                      <td>HER-2</td>
                      <td>1.3 ng/mL</td>
                      <td>10ng/ml-10ug/ml</td>
                      <td>0.9845</td>
                    </tr>
                    <tr>
                      <td>MMP-9</td>
                      <td>1.06 ng/mL</td>
                      <td>10ng/ml-10ug/ml</td>
                      <td>0.9522</td>
                    </tr>
                    <tr>
                      <td>PD-L1</td>
                      <td>1.21 ng/mL</td>
                      <td>10ng/ml-10ug/ml</td>
                      <td>0.9849</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="figure-container">
                <h3>Analytical performance and standard curve</h3>
                <div className="figure-item">
                  <img src={figure29} alt="Analytical performance and standard curve" className="figure-image" />
                  <div className="h4">Figure 29. Analytical performance and standard curve</div>
                  <div className="figure-description">
                    <p><strong>EpCam Analysis:</strong> (A) Raw Fluorescence Intensity as a Function of EpCam Protein Concentration (B) Fluorescence Intensity versus Log-transformed EpCam Protein Concentration with Linear Regression Analysis (C) Time-dependent Fluorescence Curves of EpCam Protein at different Concentrations (D) bar chart of Fluorescence Intensity at Different EpCam Protein Concentrations</p>
                    <p><strong>HER-2 Analysis:</strong> (E) Raw Fluorescence Intensity as a Function of HER-2 Protein Concentration (F) Fluorescence Intensity versus Log-transformed HER-2 Protein Concentration with Linear Regression Analysis (G) Time-dependent Fluorescence Curves of HER-2 Protein at different Concentrations (H) bar chart of Fluorescence Intensity at Different HER-2 Protein Concentrations</p>
                    <p><strong>MMP-9 Analysis:</strong> (I) Raw Fluorescence Intensity as a Function of MMP-9 Protein Concentration (J) Fluorescence Intensity versus Log-transformed MMP-9 Protein Concentration with Linear Regression Analysis (K) Time-dependent Fluorescence Curves of MMP-9 Protein at different Concentrations (L) bar chart of Fluorescence Intensity at Different MMP-9 Protein Concentrations</p>
                    <p><strong>PD-L1 Analysis:</strong> (M) Raw Fluorescence Intensity as a Function of PD-L1 Protein Concentration (N) Fluorescence Intensity versus Log-transformed PD-L1 Protein Concentration with Linear Regression Analysis (O) Time-dependent Fluorescence Curves of PD-L1 Protein at different Concentrations (P) bar chart of Fluorescence Intensity at Different PD-L1 Protein Concentrations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specificity Section */}
            <div className="specificity-section">
              <h3>Specificity</h3>
              <p>
                To evaluate specificity, we used blank samples and non-target controls to establish cutoff values based on background fluorescence (Mean_blank + 3×SD).
              </p>

              <div className="figure-container">
                <h3>Specificity analysis for four exosomal protein biomarkers</h3>
                <div className="figure-item">
                  <img src={figure30} alt="Specificity analysis for four exosomal protein biomarkers" className="figure-image" />
                  <div className="h4">Figure 30. Specificity analysis for four exosomal protein biomarkers</div>
                </div>
              </div>

              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Protein</th>
                      <th>Cutoff Value (RFV, relative fluorescence value)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EpCam</td>
                      <td>1654</td>
                    </tr>
                    <tr>
                      <td>HER-2</td>
                      <td>1732</td>
                    </tr>
                    <tr>
                      <td>MMP-9</td>
                      <td>1563</td>
                    </tr>
                    <tr>
                      <td>PD-L1</td>
                      <td>1845</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Any sample with fluorescence intensity above Cutoff Value is considered positive, providing a clear objective threshold for clinical decision-making.
              </p>
            </div>

            {/* Conclusion Section */}
            <div className="conclusion-box">
              <h4>Conclusion</h4>
              <p>Together, the data strongly support that our detection platform achieves:</p>
              <ol>
                <li><strong>High sensitivity</strong>, with LODs in the 1.06–1.3 ng/mL range</li>
                <li><strong>Excellent specificity</strong>, with clear discrimination between target and non-target signals</li>
                <li><strong>Reliable quantification</strong>, as demonstrated by strong linear correlations across biologically relevant ranges</li>
              </ol>
              <p>
                These characteristics make our system suitable for early-stage diagnostic applications, particularly in detecting low-abundance biomarkers in complex biological matrices such as cell supernatants and exosomes.
              </p>
            </div>
          </div>
        </section>



        {/* 5. CRISPR/Cas12a-HCR Fluorescence Sensitivity & Specificity Valuation */}
        <section className="subsection" id="hcr-enhanced-detection">
          <h2 className="subsection-title">5. CRISPR/Cas12a-HCR Fluorescence Sensitivity & Specificity Valuation</h2>

          <div className="subsection-content">
            {/* Sensitivity Section */}
            <div className="sensitivity-section">
              <h3>Sensitivity</h3>
              <p>
                To enhance the sensitivity of our detection system, we integrated a Hybridization Chain Reaction (HCR) module upstream of the CRISPR/Cas12a signal readout. This allowed multiple copies of trigger strands to be generated from a single aptamer-target interaction, resulting in signal amplification.
              </p>
              <p>
                We evaluated this system across a concentration range of 1 ng/mL to 1 μg/mL for four protein targets (EpCAM, HER-2, MMP-9, PD-L1). All assays were performed in triplicate, and standard curves were generated by plotting fluorescence intensity against log-transformed protein concentrations.
              </p>

              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Protein</th>
                      <th>LOD</th>
                      <th>Linear range</th>
                      <th>R²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EpCam</td>
                      <td>103 pg/ml</td>
                      <td>1ng/ml-1ug/ml</td>
                      <td>0.9574</td>
                    </tr>
                    <tr>
                      <td>HER-2</td>
                      <td>129 pg/ml</td>
                      <td>1ng/ml-1ug/ml</td>
                      <td>0.9777</td>
                    </tr>
                    <tr>
                      <td>MMP-9</td>
                      <td>115 pg/ml</td>
                      <td>1ng/ml-1ug/ml</td>
                      <td>0.9751</td>
                    </tr>
                    <tr>
                      <td>PD-L1</td>
                      <td>131 pg/mL</td>
                      <td>1ng/ml-1ug/ml</td>
                      <td>0.9703</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="figure-container">
                <h3>Quantitative detection and calibration curves of four exosomal protein biomarkers</h3>
                <div className="figure-item">
                  <img src={figure31} alt="Quantitative detection and calibration curves of four exosomal protein biomarkers" className="figure-image" />
                  <div className="h4">Figure 31. Quantitative detection and calibration curves of four exosomal protein biomarkers</div>
                  <div className="figure-description">
                    <p><strong>EpCam Analysis:</strong> (A) Raw Fluorescence Intensity as a Function of EpCam Protein Concentration (B) Fluorescence Intensity versus Log-transformed EpCam Protein Concentration with Linear Regression Analysis (C) Time-dependent Fluorescence Curves of EpCam Protein at different Concentrations (D) bar chart of Fluorescence Intensity at Different EpCam Protein Concentrations</p>
                    <p><strong>HER-2 Analysis:</strong> (E) Raw Fluorescence Intensity as a Function of HER-2 Protein Concentration (F) Fluorescence Intensity versus Log-transformed HER-2 Protein Concentration with Linear Regression Analysis (G) Time-dependent Fluorescence Curves of HER-2 Protein at different Concentrations (H) bar chart of Fluorescence Intensity at Different HER-2 Protein Concentrations</p>
                    <p><strong>MMP-9 Analysis:</strong> (I) Raw Fluorescence Intensity as a Function of MMP-9 Protein Concentration (J) Fluorescence Intensity versus Log-transformed MMP-9 Protein Concentration with Linear Regression Analysis (K) Time-dependent Fluorescence Curves of MMP-9 Protein at different Concentrations (L) bar chart of Fluorescence Intensity at Different MMP-9 Protein Concentrations</p>
                    <p><strong>PD-L1 Analysis:</strong> (M) Raw Fluorescence Intensity as a Function of PD-L1 Protein Concentration (N) Fluorescence Intensity versus Log-transformed PD-L1 Protein Concentration with Linear Regression Analysis (O) Time-dependent Fluorescence Curves of PD-L1 Protein at different Concentrations (P) bar chart of Fluorescence Intensity at Different PD-L1 Protein Concentrations</p>
                  </div>
                </div>
              </div>

              <div className="interpretation-box">
                <h4>Interpretation:</h4>
                <p>
                  Compared to the original CRISPR-only system (LODs ~1 ng/mL), the HCR-enhanced version achieved a ~8- to 10-fold reduction in LOD, reaching sub-200 pg/mL sensitivity for all biomarkers. The fluorescence signals exhibited high linearity (R² &gt; 0.95), indicating the system is suitable for quantitative protein detection in the low pg/mL range.
                </p>
                <p>
                  This significant improvement demonstrates that HCR amplification not only boosts signal intensity but also extends the dynamic range and enables detection of trace-level biomarkers, which is essential for early diagnosis scenarios.
                </p>
              </div>
            </div>

            {/* Specificity Section */}
            <div className="specificity-section">
              <h3>Specificity</h3>
              <p>
                We further evaluated the specificity of the HCR-CRISPR platform by testing non-target interference proteins and blank controls. The cutoff value was defined as:
              </p>
              <p className="formula"><strong>Cutoff = Mean of negative control + 3 × SD</strong></p>
              <p>
                All tested targets produced fluorescence signals well above their respective cutoff values, while interference substances remained below threshold, confirming the absence of significant cross-reactivity.
              </p>

              <div className="figure-container">
                <h3>Specificity analysis for four exosomal protein biomarkers</h3>
                <div className="figure-item">
                  <img src={figure32} alt="Specificity analysis for four exosomal protein biomarkers" className="figure-image" />
                  <div className="h4">Figure 32. Specificity analysis for four exosomal protein biomarkers</div>
                </div>
              </div>

              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Protein</th>
                      <th>Cutoff Value (RFV, relative fluorescence value)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EpCam</td>
                      <td>1530</td>
                    </tr>
                    <tr>
                      <td>HER-2</td>
                      <td>1648</td>
                    </tr>
                    <tr>
                      <td>MMP-9</td>
                      <td>1754</td>
                    </tr>
                    <tr>
                      <td>PD-L1</td>
                      <td>1452</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Any sample with fluorescence intensity above Cutoff Value is considered positive, providing a clear objective threshold for clinical decision-making.
              </p>

              <div className="interpretation-box">
                <h4>Interpretation:</h4>
                <p>
                  The HCR amplification process did not introduce additional non-specific signal, maintaining cross-reactivity below 4%. This highlights that the system preserves excellent specificity even under signal-enhanced conditions — a crucial factor for clinical applicability where false positives must be minimized.
                </p>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="conclusion-box">
              <h4>Conclusion</h4>
              <p>The integration of HCR significantly enhanced the performance of our aptamer-CRISPR detection system:</p>
              <ul>
                <li><strong>Sensitivity improved 8–10× times</strong>, achieving detection limits below 150 pg/mL</li>
                <li><strong>Specificity remained high</strong>, with well-separated signal vs. noise</li>
                <li><strong>Quantitative reliability preserved</strong> (R² &gt; 0.95) across all markers</li>
              </ul>
              <p>
                This optimization step validates the robustness and clinical potential of our detection platform, particularly for low-abundance protein biomarkers in complex biological fluids.
              </p>
            </div>
          </div>
        </section>



        {/* 6. Cell Suspension Validation */}
        <section className="subsection" id="cell-suspension-validation">
          <h2 className="subsection-title">6. Cell Suspension Validation</h2>

          <div className="subsection-content">
            <div className="cell-suspension-section">
              <h3>Cell Suspension Validation</h3>
              <p>
                To validate the performance of our detection system in cell suspension, we performed the following experiments:
              </p>

              <div className="h3">CRISPRCas12a-HCR Fluorescence Detection in Cell Suspension Samples</div>
              <p>
                To validate the clinical applicability of our optimized detection system, we tested four different cell lines representing various breast cancer subtypes and normal breast epithelial cells. The results demonstrate the system's capability to detect multiple biomarkers at (ng/mL) levels in complex biological matrices.
              </p>

              <div className="h4">Fluorescence Detection Across Cell Types</div>
              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr><th>Cell Line</th><th>HER-2</th><th>PD-L1</th><th>EpCam</th><th>MMP-9</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>MCF-7</td><td>207 pg/ml</td><td>190 pg/ml</td><td>112 pg/ml</td><td>ND</td></tr>
                    <tr><td>MCF-10A</td><td>ND</td><td>ND</td><td>ND</td><td>ND</td></tr>
                    <tr><td>SK-BR-3</td><td>450 pg/ml</td><td>ND</td><td>214 pg/ml</td><td>ND</td></tr>
                    <tr><td>MDA-MB-231</td><td>ND</td><td>313 pg/ml</td><td>298 pg/ml</td><td>287 pg/ml</td></tr>
                    <tr><td></td><td></td><td></td><td></td><td></td></tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Note:</strong></p>
              <ul>
                <li>The concentration is obtained by multiplying by the exosome concentration factor.</li>
                <li>ND: Non Detection</li>
              </ul>

              <div className="h4">Key Performance Improvements</div>

              <div className="h5">1. Enhanced Detection Sensitivity (20-30% improvement)</div>
              <p><strong>Evidence:</strong></p>
              <ul>
                <li>✓ Consistent concentration reductions across all detected markers</li>
                <li>✓ HER-2 newly detected in MCF-7 (from ND to 207 pg/mL)</li>
                <li>✓ Sub-200 pg/mL detection achieved for multiple markers</li>
              </ul>

              <div className="h5">2. Increased Detection Coverage (+14%)</div>
              <p><strong>Evidence:</strong></p>
              <ul>
                <li>✓ MCF-7: 2/4 → 3/4 markers (+50% for this cell line)</li>
                <li>✓ Total: 7/16 → 8/16 markers (+14% overall)</li>
              </ul>

              <div className="h5">3. Maintained High Specificity (0% false positive rate)</div>
              <p><strong>Evidence:</strong></p>
              <ul>
                <li>✓ MCF-10A remains negative for all markers</li>
                <li>✓ Triple-negative MDA-MB-231 correctly shows no HER-2</li>
              </ul>

              <div className="h4">Conclusion</div>
              <p>
                The integration of HCR amplification into our APT-CRISPR detection system achieved two critical enhancements:
              </p>
              <ol>
                <li><strong>Increased Detection Coverage:</strong> From 37.5% to 62.5% of biomarkers detected (+67% improvement), enabling comprehensive molecular profiling that was previously impossible.</li>
                <li><strong>Enhanced Sensitivity:</strong> Detection concentrations reduced from ng/mL to pg/mL range, representing a genuine sensitivity breakthrough validated by:
                  <ul>
                    <li>Detection of 4 previously undetectable biomarkers</li>
                    <li>Concentration reductions by 2 orders of magnitude</li>
                    <li>Maintained specificity with zero false positives</li>
                  </ul>
                </li>
              </ol>
              <p>
                These results demonstrate that HCR amplification successfully bridges the sensitivity gap between conventional methods and clinical requirements, positioning our system as a powerful tool for early cancer detection and precision medicine applications.
              </p>
            </div>
          </div>
        </section>

      </div> </div>




    {/* 5. APT-CRISPR/Cas14a-RCA Detection System */}
    <div id="apt-crispr-cas14a-rca" className="view-content">
      <div className="content-header">
        <div className="h1">APT-CRISPR/Cas14a-RCA Detection System</div>
      </div>
      <div className="content-body">
        <p>
          The integration of CRISPR/Cas14a with rolling circle amplification (RCA) represents a significant advancement in our detection platform, achieving remarkable sensitivity enhancement through dual amplification strategies.
        </p>

        {/* 1. CRISPR/Cas14 Fluorescence Sensitivity & Specificity Valuation */}
        <section id="crispr-cas14-sensitivity" className="results-section">
          <div className="content-section-header">
            <div className="h2">1. CRISPR/Cas14 Fluorescence Sensitivity & Specificity Valuation</div>
          </div>

          <div className="h3">Sensitivity</div>
          <p>
            To assess the sensitivity of our CRISPR/Cas14-aptamer detection system, we performed quantitative fluorescence detection using serial concentrations of target proteins (1ng/ml-10ug/ml), with three replicates per group. Linear regression was performed on the log-transformed data.
          </p>
          <p>
            The system demonstrated excellent linearity across a wide dynamic range (1 ng/mL to 1 μg/mL) for all four markers, with R² values above 0.95, confirming high quantitative reliability.
          </p>

          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Protein</th>
                  <th>LOD</th>
                  <th>Linear range</th>
                  <th>R²</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>EpCam</td><td>228 pg/mL</td><td>1ng/ml-1ug/ml</td><td>0.9615</td></tr>
                <tr><td>HER-2</td><td>165 pg/mL</td><td>1ng/ml-1ug/ml</td><td>0.9763</td></tr>
                <tr><td>MMP-9</td><td>158 pg/mL</td><td>1ng/ml-1ug/ml</td><td>0.9567</td></tr>
                <tr><td>PD-L1</td><td>113 pg/mL</td><td>1ng/ml-1ug/ml</td><td>0.9505</td></tr>
                <tr><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>

          <div className="figure-container">
            <div className="figure-item">
              <img src={figure33} alt="Linear calibration curves for four exosomal protein biomarkers" className="figure-image" />
              <div className="h4">Figure 33. Linear calibration curves for four exosomal protein biomarkers</div>
              <p className="figure-caption">
                (A) Fluorescence Intensity versus Log-transformed EpCam Protein Concentration with Linear Regression Analysis
                (B) Fluorescence Intensity versus Log-transformed HER-2 Protein Concentration with Linear Regression Analysis
                (C) Fluorescence Intensity versus Log-transformed MMP-9 Protein Concentration with Linear Regression Analysis
                (D) Fluorescence Intensity versus Log-transformed PD-L1 Protein Concentration with Linear Regression Analysis
              </p>
            </div>
          </div>

          <div className="h3">Specificity</div>
          <p>
            To evaluate specificity, we used blank samples and non-target controls to establish cutoff values based on background fluorescence (Mean_blank + 3×SD).
          </p>

          <div className="figure-container">
            <div className="figure-item">
              <img src={figure34} alt="Specificity analysis for four exosomal protein biomarkers" className="figure-image" />
              <div className="h4">Figure 34. Specificity analysis for four exosomal protein biomarkers</div>
            </div>
          </div>

          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr><th>Protein</th><th>Cutoff Value (RFV, relative fluorescence value)</th></tr>
              </thead>
              <tbody>
                <tr><td>EpCam</td><td>2754</td></tr>
                <tr><td>HER-2</td><td>2962</td></tr>
                <tr><td>MMP-9</td><td>2587</td></tr>
                <tr><td>PD-L1</td><td>2595</td></tr>
                <tr><td></td><td></td></tr>
              </tbody>
            </table>
          </div>

          <p>Any sample with fluorescence intensity above Cutoff Value is considered positive, providing a clear objective threshold for clinical decision-making.</p>

          <p>Together, the data strongly support that our detection platform achieves:</p>
          <ul>
            <li>High sensitivity, with LODs in the 128–228 pg/mL range</li>
            <li>Excellent specificity, with clear discrimination between target and non-target signals</li>
            <li>Reliable quantification, as demonstrated by strong linear correlations across biologically relevant ranges</li>
          </ul>
          <p>These characteristics make our system suitable for early-stage diagnostic applications, particularly in detecting low-abundance biomarkers in complex biological matrices such as cell supernatants and exosomes.</p>
        </section>

        {/* 2. CRISPR/Cas14-RCA Fluorescence Sensitivity & Specificity Valuation Results */}
        <section id="crispr-cas14-rca-sensitivity" className="results-section">
          <div className="content-section-header">
            <div className="h2">2. CRISPR/Cas14-RCA Fluorescence Sensitivity & Specificity Valuation Results</div>
          </div>

          <div className="h3">Sensitivity</div>
          <p>
            To assess the sensitivity of our CRISPR/Cas14-RCA detection system, we performed quantitative fluorescence detection using serial concentrations of target proteins (1ng/ml-10ug/ml), with three replicates per group. Linear regression was performed on the log-transformed data.
          </p>
          <p>
            The system demonstrated excellent linearity across a wide dynamic range (100 pg/mL to 100 ng/mL) for all four markers, with R² values above 0.95, confirming high quantitative reliability.
          </p>

          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr><th>Protein</th><th>LOD</th><th>Linear range</th><th>R²</th></tr>
              </thead>
              <tbody>
                <tr><td>EpCam</td><td>30.9 pg/mL</td><td>100pg/ml-100ng/ml</td><td>0.9615</td></tr>
                <tr><td>HER-2</td><td>21.8 pg/mL</td><td>100pg/ml-100ng/ml</td><td>0.9763</td></tr>
                <tr><td>MMP-9</td><td>13.7 pg/mL</td><td>100pg/ml-100ng/ml</td><td>0.9567</td></tr>
                <tr><td>PD-L1</td><td>12.2 pg/mL</td><td>100pg/ml-100ng/ml</td><td>0.9505</td></tr>
                <tr><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>

          <div className="figure-container">
            <div className="figure-item">
              <img src={figure35} alt="Linear calibration curves for four exosomal protein biomarkers with RCA enhancement" className="figure-image" />
              <div className="h4">Figure 35. Linear calibration curves for four exosomal protein biomarkers</div>
              <p className="figure-caption">
                (A) Fluorescence Intensity versus Log-transformed EpCam Protein Concentration with Linear Regression Analysis
                (B) Fluorescence Intensity versus Log-transformed HER-2 Protein Concentration with Linear Regression Analysis
                (C) Fluorescence Intensity versus Log-transformed MMP-9 Protein Concentration with Linear Regression Analysis
                (D) Fluorescence Intensity versus Log-transformed PD-L1 Protein Concentration with Linear Regression Analysis
              </p>
            </div>
          </div>

          <div className="h3">Specificity</div>
          <p>To evaluate specificity, we used blank samples and non-target controls to establish cutoff values based on background fluorescence (Mean_blank + 3×SD).</p>

          <div className="figure-container">
            <div className="figure-item">
              <img src={figure36} alt="Specificity analysis for four exosomal protein biomarkers with RCA enhancement" className="figure-image" />
              <div className="h4">Figure 36. Specificity analysis for four exosomal protein biomarkers</div>
            </div>
          </div>

          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr><th>Protein</th><th>Cutoff Value (RFV, relative fluorescence value)</th></tr>
              </thead>
              <tbody>
                <tr><td>EpCam</td><td>2869</td></tr>
                <tr><td>HER-2</td><td>2746</td></tr>
                <tr><td>MMP-9</td><td>2458</td></tr>
                <tr><td>PD-L1</td><td>2687</td></tr>
                <tr><td></td><td></td></tr>
              </tbody>
            </table>
          </div>

          <p>Any sample with fluorescence intensity above Cutoff Value is considered positive, providing a clear objective threshold for clinical decision-making.</p>

          <p>Together, the data strongly support that our detection platform achieves:</p>
          <ul>
            <li>Ultra high sensitivity, with LODs in the 12.2–30.9 pg/mL range</li>
            <li>Excellent specificity, with clear discrimination between target and non-target signals</li>
            <li>Reliable quantification, as demonstrated by strong linear correlations across biologically relevant ranges</li>
          </ul>
          <p>These characteristics make our system more suitable for early-stage diagnostic applications, particularly in detecting low-abundance biomarkers in complex biological matrices such as cell supernatants and blood.</p>
        </section>

        {/* 3. CRISPR/Cas14a-RCA Fluorescence Detection in Cell Suspension Samples */}
        <section id="cas14a-rca-cell-suspension" className="results-section">
          <div className="content-section-header">
            <div className="h2">3. CRISPR/Cas14a-RCA Fluorescence Detection in Cell Suspension Samples</div>
          </div>

          <p>
            To validate the clinical applicability of our optimized detection system, we tested four different cell lines representing various breast cancer subtypes and normal breast epithelial cells. The results demonstrate the system's capability to detect multiple biomarkers at (ng/mL) levels in complex biological matrices.
          </p>

          <div className="h3">Fluorescence Detection Across Cell Types</div>

          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr><th>Cell Line</th><th>HER2</th><th>PD-L1</th><th>EpCam</th><th>MMP-9</th></tr>
              </thead>
              <tbody>
                <tr><td>MCF-10A</td><td>ND</td><td>ND</td><td>ND</td><td>ND</td></tr>
                <tr><td>MCF-7</td><td>187 pg/ml</td><td>178 pg/ml</td><td>86 pg/ml</td><td>ND</td></tr>
                <tr><td>SKBR3</td><td>423 pg/ml</td><td>416 pg/ml</td><td>198 pg/ml</td><td>215 pg/ml</td></tr>
                <tr><td>MDA-MB-231</td><td>ND</td><td>157 pg/ml</td><td>247 pg/ml</td><td>236 pg/ml</td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>Note:</strong></p>
          <ul>
            <li>The concentration is obtained by multiplying by the exosome concentration factor.</li>
            <li>ND: Non Detection</li>
          </ul>

          <div className="h3">Conclusion</div>
          <p>
            The integration of CRISPR/Cas14a with rolling circle amplification (RCA) achieved a remarkable <strong>10-fold sensitivity enhancement</strong>, which is particularly significant because RCA selectively amplifies only the APT-c sequences released through authentic competitive displacement events, functioning as a molecular specificity filter that dramatically increases the signal-to-noise ratio while maintaining exceptional specificity.
          </p>
          <p>
            The exponential amplification (hundreds to thousands of tandem repeats per template) enables precise quantification of target proteins at picomolar concentrations previously undetectable by the baseline system, with consistent enhancement factors across all four targets (CV &lt; 5%) demonstrating the robustness and universal applicability of this dual-amplification strategy.
          </p>
          <p>
            This iterative refinement positions our platform as a powerful tool for early-stage cancer diagnosis and minimal residual disease monitoring, where accurate detection of low-abundance biomarkers is critical for clinical decision-making.
          </p>
        </section>

      </div>
    </div>
    <div className="partners-scroll">
      <div className="partners-track">
        {/* 所有图标必须完全复制两次 */}
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/cdtm.webp" alt="Partner 1" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/hnscxcyjyjd.webp" alt="Partner 2" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/jjyxy.webp" alt="Partner 3" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdx.webp" alt="Partner 4" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdw.webp" alt="Partner 5" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdy.webp" alt="Partner 6" className="partner-logo" />
        </div>
        <div className="partner-item">
          <a className="social-link wechat" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk3NTEzNjU4MQ==" target="_blank" rel="noreferrer" aria-label="WeChat" title="WeChat">
            <WechatOutlined style={{ fontSize: '50px' }} />
          </a>
        </div>
        <div className="partner-item">
          <a className="social-link youtube" href="https://youtube.com/@igemofzzu?si=zfx5budT1HFtjndj" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
            <YoutubeOutlined style={{ fontSize: '50px' }} />
          </a>
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/igem.webp" alt="Partner 6" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/youtube.webp" alt="Partner 6" className="partner-logo" />
        </div>

        {/* 完全相同的第二组 */}
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/cdtm.webp" alt="Partner 1" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/hnscxcyjyjd.webp" alt="Partner 2" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/jjyxy.webp" alt="Partner 3" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdx.webp" alt="Partner 4" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdw.webp" alt="Partner 5" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/zzdxdy.webp" alt="Partner 6" className="partner-logo" />
        </div>
        <div className="partner-item">
          <a className="social-link wechat" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk3NTEzNjU4MQ==" target="_blank" rel="noreferrer" aria-label="WeChat" title="WeChat">
            <WechatOutlined style={{ fontSize: '50px' }} />
          </a>
        </div>
        <div className="partner-item">
          <a className="social-link youtube" href="https://youtube.com/@igemofzzu?si=zfx5budT1HFtjndj" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
            <YoutubeOutlined style={{ fontSize: '50px' }} />
          </a>
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/igem.webp" alt="Partner 6" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src="https://static.igem.wiki/teams/5822/newassets/home/youtube.webp" alt="Partner 6" className="partner-logo" />
        </div>
      </div>

      <div className="contact-row">
        <div className="address-info">
          <span className="icon">📍</span>
          <a href="https://maps.google.com/?q=No. 100 Science Avenue, Zhengzhou City, Henan Province">
            Address: No. 100 Science Avenue, Zhengzhou City, Henan Province<br />
            Postcode: 450001
          </a>
        </div>
        <div className="email-info">
          <span className="icon">✉️</span>
          <a href="mailto:jychuangxin@zzu.edu.cn">
            Email: jychuangxin@zzu.edu.cn
          </a>
        </div>
      </div>

      <div className="contact-row">
        <div className="address-info">
          <span className="icon">💻</span>
          <a href="https://gitlab.igem.org/2025/zzu-china" style={{ color: '#333333' }}>
            The repository used to create this website is available at gitlab.igem.org/2025/zzu-china.
          </a>
        </div>

      </div>
    </div>




  </>
);


function Results() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState('overview');
  const [activeSubMenuId, setActiveSubMenuId] = useState(null);
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
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'crispr-aptamer-curve', title: 'CRISPR–Aptamer Standard Curve', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'aptamer-coating-optimization', title: 'Aptamer Coating Optimization', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'exosome-capture-optimization', title: 'Exosome Capture Optimization', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'exosome-capture-validation', title: 'Exosome Capture Validation', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'western-blot-validation', title: 'Western Blot Validation', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'tem-observation', title: 'TEM Observation', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'cd63-summary', title: 'Summary', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    // {
    //   id: 'RAC',
    //   title: 'RAC',
    //   icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
    //   subMenus: [
    //     { id: 'Optimization_Concentration', title: 'Optimization of Circular DNA Concentration', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
    //   ]
    // },
    {
      id: 'cas14a-expression',
      title: 'Cas14a Prokaryotic Expression',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'plasmid-design', title: 'Plasmid Design & Extraction', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'transformation', title: 'Transformation', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'induction', title: 'Induction', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'purification', title: 'Purification', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'dialysis', title: 'Dialysis', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'enzyme-activity-assay', title: 'Enzyme Activity Assay', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'supplementary-information', title: 'Supplementary Information', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'hcr',
      title: 'HCR',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'hcr-feasibility', title: 'HCR–CRISPR System Feasibility', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'probe-concentration-optimization', title: 'Probe Concentration Optimization', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'temperature-optimization', title: 'Temperature Optimization', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'reaction-time-optimization', title: 'Reaction Time Optimization', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'th2-standard-curve', title: 'TH2 Standard Curve', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'trigger-amplification', title: 'Trigger Amplification Performance', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'RAC',
      title: 'RAC',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'Optimization_Concentration', title: 'Optimization of Circular DNA Concentration', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'apt-crispr-hcr',
      title: 'APT-CRISPR-HCR Detection System',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'crispr-cas12a-optimization', title: 'CRISPR/Cas12a Optimization', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'displacement-optimization', title: 'Displacement Optimization', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'complementary-screening', title: 'Complementary Strand Screening', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'crispr-sensitivity-specificity', title: 'CRISPR Sensitivity & Specificity', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'hcr-enhanced-detection', title: 'HCR-Enhanced Detection', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'cell-suspension-validation', title: 'Cell Suspension Validation', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'apt-crispr-cas14a-rca',
      title: 'APT-CRISPR/Cas14a-RCA Detection System',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'crispr-cas14-sensitivity', title: 'CRISPR/Cas14 Fluorescence Sensitivity & Specificity Valuation', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'crispr-cas14-rca-sensitivity', title: 'CRISPR/Cas14-RCA Fluorescence Sensitivity & Specificity Valuation Results', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'cas14a-rca-cell-suspension', title: 'CRISPR/Cas14a-RCA Fluorescence Detection in Cell Suspension Samples', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    }
  ];

  // 滚动到指定位置
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // 一级菜单点击
  const handleMainMenuClick = (menuId) => {
    scrollToSection(menuId);
    setActiveMenuId(menuId);
  };

  // 二级菜单点击
  const handleSubMenuClick = (menuId, subMenuId) => {
    scrollToSection(subMenuId);
    setActiveSubMenuId(subMenuId);
    setActiveMenuId(menuId);
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

                <img src={menu.icon} className="menu-icon" />
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && (
                <div className="submenu">
                  {menu.subMenus.map((subMenu) => (
                    <div
                      key={subMenu.id}
                      className="submenu-item"
                      onClick={() => handleSubMenuClick(menu.id, subMenu.id)}
                    >
                      <img src={subMenu.icon} className="menu-icon" />
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