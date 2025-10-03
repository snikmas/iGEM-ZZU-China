import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';
import { DownloadOutlined } from '@ant-design/icons';


const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';
// 导入PDF文件 - 按照提供的路径结构
// APT-CRISPR
const APTRCACRISPRPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-apt-rca-crispr.pdf';
const ComplementaryChainPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-complementary-chain-screening.pdf';
const CRISPRCellSuspensionPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-crispr-cas12a-fluorescence-detection-in-cell-suspension-samples.pdf';
const CRISPRSensitivityPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-crispr-cas12a-fluorescence-sensitivity-specificity-valuation.pdf';
const CRISPRHCRDetectionPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-crispr-cas12a-hcr-fluorescence-detection.pdf';
const CRISPRHCRSensitivityPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-crispr-cas12a-hcr-fluorescence-sensitivity-specificity-valuation.pdf';
const DisplacementOptimizationPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-optimization-of-reaction-time-and-temperature-for-displacement-reactions.pdf';

// Cas14a
const EnzymeActivityPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-enzyme-activity-assay.pdf';
const PlasmidConstructionPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-plasmid-construction.pdf';
const PlasmidExtractionPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-plasmid-extraction.pdf';
const ProteinExpressionPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-protein-expression.pdf';
const ProteinPurificationPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-protein-purification.pdf';
const ProteinQuantificationPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-protein-quantification.pdf';
const SDSPagePDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-sds-page.pdf';
const TransformationPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-transformation.pdf';

// Extracellular
const BCAProteinPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-bca-protein-quantification.pdf';
const ElectronMicroscopyPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-electron-microscopy-detection.pdf';
const EVCapturePDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-extracellular-vesicle-capture.pdf';
const WBPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-wb.pdf';

// HCR
const HCRAmplificationPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-determination-of-hcr-amplification-fold.pdf';
const HCRFinalPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-hcr-final-protocol.pdf';
const HCROptimizationConcPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-optimization-of-hcr-reaction-concentration.pdf';
const HCROptimizationTempPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-optimization-of-hcr-reaction-temperature.pdf';
const HCROptimizationTimePDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-optimization-of-hcr-reaction-time.pdf';

// RCA
const RCAPDF = 'https://static.igem.wiki/teams/5822/newassets/files/igem-zzu-china-2025-wet-lab-rca.pdf';






const MainContent = () => (
  <>
    <section id="overview" className="education-hero-section">
      <div className="hero-image-container">
        <div className="hero-quote">
          <blockquote>
            "On this page you can find step by step protocols for the methods applied in our wet lab. Click on the links to open the pdf files. If you want to follow our protocols download and print them to use in the lab."
          </blockquote>
        </div>
      </div>
    </section>

    {/* 1. Extracellular vesicle capture and efficacy testing */}
    <div id="extracellular-vesicle" className="view-content">
      <div className="content-header">
        <div className="h1">Extracellular vesicle capture and efficacy testing</div>
      </div>

      <section id="ev-capture" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Extracellular vesicle capture</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Extracellular vesicle capture
                  <a href={EVCapturePDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Describes the magnetic bead–based capture of exosomes using biotin-labeled CD63 aptamers conjugated to streptavidin-coated beads, enabling efficient exosome enrichment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bca-protein" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">BCA protein quantification</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab BCA protein quantification
                  <a href={BCAProteinPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explains the construction of a BSA standard curve and quantification of exosomal protein concentration using the BCA assay for standardized sample loading in downstream experiments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="wb" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">WB</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab WB
                  <a href={WBPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Demonstrates Western blot analysis to verify the expression of exosomal marker proteins such as CD9, CD63, and CD81.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="electron-microscopy" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Electron microscopy detection</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Electron microscopy detection
                  <a href={ElectronMicroscopyPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Presents the preparation, negative staining, and transmission electron microscopy (TEM) imaging steps for visualizing the bilayer structure of exosomes (50–150 nm) and confirming their morphology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* 2. Cas14a Prokaryotic Expression */}
    <div id="cas14a-expression" className="view-content">
      <div className="content-header">
        <div className="h1">Cas14a Prokaryotic Expression</div>
      </div>

      <section id="plasmid-construction" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Plasmid Construction</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Plasmid Construction
                  <a href={PlasmidConstructionPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Describe the construction process of the plasmid containing the Cas14a-expressing gene and provide detailed plasmid information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plasmid-extraction" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Plasmid extraction</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Plasmid extraction
                  <a href={PlasmidExtractionPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explains the process of isolating plasmids from a bacterial culture, followed by their transformation into competent bacterial cells.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="transformation" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Transformation</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Transformation
                  <a href={TransformationPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explains how engineered plasmids are integrated into the organism and subsequently inoculated onto agar plates. Our production organism is E.coli BL21 (DE3). The target gene can be successfully transformed directly into BL21 (DE3).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="protein-quantification" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Protein Quantification</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Protein Quantification
                  <a href={ProteinQuantificationPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explains the sample concentration on SDS-PAGE and the data source for measuring the pipetting system volume. Results were obtained using the BCA Protein Concentration Assay Kit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sds-page" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">SDS Page</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet SDS Page
                  <a href={SDSPagePDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explains how to prepare samples from liquid colonies, prepare SDS gels using a 10% SDS-PAGE pre-mixed rapid gel kit (Zhonghui Hecai Co., Ltd.), and perform SDS gel electrophoresis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="protein-expression" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Protein Expression</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Protein Expression
                  <a href={ProteinExpressionPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explains how to express proteins in (already transformed) ampicillin-resistant bacteria. For effective IPTG-induced expression, an expression system based on the lac promoter must be employed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="protein-purification" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Protein Purification</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Protein Purification
                  <a href={ProteinPurificationPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explains how to purify His-tagged proteins using the His-tag Protein Purification Kit (NTA-Ni agarose magnetic beads).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="enzyme-activity" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Enzyme activity assay</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Enzyme activity assay
                  <a href={EnzymeActivityPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Describes how to determine the activity of purified Cas14a enzyme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* 3. HCR amplification */}
    <div id="hcr-amplification" className="view-content">
      <div className="content-header">
        <div className="h1">HCR amplification</div>
      </div>

      <section id="hcr-optimization-temp" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Optimization of HCR reaction temperature</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Optimization of HCR reaction temperature
                  <a href={HCROptimizationTempPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Introduces a temperature-gradient experiment to identify optimal HCR reaction temperature maximizing hybridization efficiency and fluorescence signal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hcr-optimization-time" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Optimization of HCR reaction time</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Optimization of HCR reaction time
                  <a href={HCROptimizationTimePDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Describes time-course optimization experiments to determine the ideal incubation duration for complete HCR amplification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hcr-optimization-conc" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Optimization of HCR reaction concentration</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Optimization of HCR reaction concentration
                  <a href={HCROptimizationConcPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Explores the concentration optimization of hairpin strands (H1, H2) to achieve optimal signal-to-noise ratio in HCR reactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hcr-amplification-fold" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Determination of HCR Amplification Fold</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Determination of HCR Amplification Fold
                  <a href={HCRAmplificationPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Describes fluorescence quantification experiments comparing HCR-amplified and unamplified samples to evaluate amplification efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hcr-final-protocol" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">HCR final protocol</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab HCR final protocol
                  <a href={HCRFinalPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Presents the finalized, optimized HCR workflow summarizing ideal strand concentrations, temperature, and time, to be integrated into CRISPR/Cas12a detection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* 4. RCA amplification */}
    <div id="rca-amplification" className="view-content">
      <div className="content-header">
        <div className="h1">RCA amplification</div>
      </div>

      <section id="rca" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">RCA</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab RCA
                  <a href={RCAPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Describes the design of circular ssDNA templates, ligation and exonuclease treatment for linear DNA removal, and Phi29-based rolling circle amplification (RCA) for signal enhancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* 5. APT-CRISPR detection system */}
    <div id="apt-crispr" className="view-content">
      <div className="content-header">
        <div className="h1">APT-CRISPR detection system</div>
      </div>

      <section id="complementary-chain" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Complementary chain screening</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Complementary chain screening
                  <a href={ComplementaryChainPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Screens and identifies the optimal complementary strand (APT-c1 or APT-c2) for efficient aptamer displacement and signal activation in CRISPR/Cas12a assays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="displacement-optimization" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Optimization of reaction time and temperature</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab Optimization of reaction time and temperature for displacement reactions
                  <a href={DisplacementOptimizationPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Optimizes incubation temperature and reaction time for aptamer-target displacement to ensure maximal signal generation and stability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crispr-sensitivity" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">CRISPR-Cas12a Fluorescence Sensitivity & Specificity</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab CRISPR-Cas12a Fluorescence Sensitivity & Specificity Valuation
                  <a href={CRISPRSensitivityPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Evaluates sensitivity via serial dilutions (10 μg/mL–1 ng/mL) and assesses specificity using interfering proteins and different media (DMEM, RPMI 1640).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crispr-cell-suspension" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">CRISPR-Cas12a Fluorescence Detection in Cell Suspension</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab CRISPR-Cas12a Fluorescence Detection in Cell Suspension Samples
                  <a href={CRISPRCellSuspensionPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Demonstrates the detection performance of the APT–CRISPR/Cas12a system in real cell suspension samples, including capture, displacement, and fluorescence readout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crispr-hcr-sensitivity" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">CRISPR-Cas12a-HCR Fluorescence Sensitivity & Specificity</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab CRISPR-Cas12a-HCR Fluorescence Sensitivity & Specificity Valuation
                  <a href={CRISPRHCRSensitivityPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Evaluates the HCR-enhanced CRISPR/Cas12a system for improved sensitivity and specificity under gradient protein concentrations and interference conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crispr-hcr-detection" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">CRISPR-Cas12a-HCR Fluorescence Detection</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab CRISPR-Cas12a-HCR Fluorescence Detection
                  <a href={CRISPRHCRDetectionPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Describes the step-by-step procedure of performing the displacement reaction followed by HCR amplification and CRISPR/Cas12a fluorescence detection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apt-rca-crispr" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">APT-RCA-CRISPR-Cas14a</div>
          </div>
          <div className="content-body">
            <div className="protocol-item">
              
              <div className="protocol-content">
                <div className="protocol-title">
                  iGEM ZZU-China 2025 Wet Lab APT-RCA-CRISPR-Cas14a
                  <a href={APTRCACRISPRPDF} download className="download-link">
                    <DownloadOutlined className="download-icon" />
                    (pdf)
                  </a>
                </div>
                <p>Details the integrated APT–RCA–CRISPR/Cas14a workflow involving aptamer displacement, RCA amplification, and Cas14a detection for ultra-sensitive fluorescence readout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

function Experiments() {
  
  const [isLoaded, setIsLoaded] = useState(false);

  // 页面加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 菜单数据 - 添加完整的二级目录
  const menuData = [
    {
      id: 'overview',
      title: 'Overview',
      icon: '🧪'
    },
    {
      id: 'extracellular-vesicle',
      title: 'Extracellular vesicle capture and efficacy testing',
      icon: '🔬',
      subMenus: [
        { id: 'ev-capture', title: 'Extracellular vesicle capture' },
        { id: 'bca-protein', title: 'BCA protein quantification' },
        { id: 'wb', title: 'WB' },
        { id: 'electron-microscopy', title: 'Electron microscopy detection' }
      ]
    },
    {
      id: 'cas14a-expression',
      title: 'Cas14a Prokaryotic Expression',
      icon: '🧬',
      subMenus: [
        { id: 'plasmid-construction', title: 'Plasmid Construction' },
        { id: 'plasmid-extraction', title: 'Plasmid extraction' },
        { id: 'transformation', title: 'Transformation' },
        { id: 'protein-quantification', title: 'Protein Quantification' },
        { id: 'sds-page', title: 'SDS Page' },
        { id: 'protein-expression', title: 'Protein Expression' },
        { id: 'protein-purification', title: 'Protein Purification' },
        { id: 'enzyme-activity', title: 'Enzyme activity assay' }
      ]
    },
    {
      id: 'hcr-amplification',
      title: 'HCR amplification',
      icon: '⚡',
      subMenus: [
        { id: 'hcr-optimization-temp', title: 'Optimization of HCR reaction temperature' },
        { id: 'hcr-optimization-time', title: 'Optimization of HCR reaction time' },
        { id: 'hcr-optimization-conc', title: 'Optimization of HCR reaction concentration' },
        { id: 'hcr-amplification-fold', title: 'Determination of HCR Amplification Fold' },
        { id: 'hcr-final-protocol', title: 'HCR final protocol' }
      ]
    },
    {
      id: 'rca-amplification',
      title: 'RCA amplification',
      icon: '🔄',
      subMenus: [
        { id: 'rca', title: 'RCA' }
      ]
    },
    {
      id: 'apt-crispr',
      title: 'APT-CRISPR detection system',
      icon: '🎯',
      subMenus: [
        { id: 'complementary-chain', title: 'Complementary chain screening' },
        { id: 'displacement-optimization', title: 'Optimization of reaction time and temperature' },
        { id: 'crispr-sensitivity', title: 'CRISPR-Cas12a Fluorescence Sensitivity & Specificity' },
        { id: 'crispr-cell-suspension', title: 'CRISPR-Cas12a Fluorescence Detection in Cell Suspension' },
        { id: 'crispr-hcr-sensitivity', title: 'CRISPR-Cas12a-HCR Fluorescence Sensitivity & Specificity' },
        { id: 'crispr-hcr-detection', title: 'CRISPR-Cas12a-HCR Fluorescence Detection' },
        { id: 'apt-rca-crispr', title: 'APT-RCA-CRISPR-Cas14a' }
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
                <span className="menu-text">{menu.title}</span>
              </div>
              {menu.subMenus && menu.subMenus.length > 0 && (
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

export default Experiments;