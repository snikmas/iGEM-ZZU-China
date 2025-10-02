import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';

// Model相关图片导入 (假设图片在model文件夹中)
const modelFigure1 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure1.webp';
const modelFigure2 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure2.webp';
const modelFigure3 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure3.webp';
const modelFigure4 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure4.webp';
const modelFigure5 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure5.webp';
const modelFigure6 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure6.webp';
const modelFigure7 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure7.webp';
const modelFigure8 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure8.webp';
const modelFigure9 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure9.webp';
const modelFigure10 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure10.webp';
const modelFigure11 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure11.webp';
const modelFigure12 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure12.webp';
const modelFigure13 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure13.webp';
const modelFigure14 = 'https://static.igem.wiki/teams/5822/newassets/images/model/Figure14.webp';

const howtousePymol = 'https://static.igem.wiki/teams/5822/newassets/images/model/howtousePymol.pdf';
// 组件定义
const MainContent = () => (
  <>
    {/* 1 Introduction */}
    <div id="introduction" className="view-content">
      <div className="content-header">
        <div className="h1">Introduction</div>
      </div>
      <div className="content-body">
        <p>
          In our initial detection system, four different types of <span>magnetic beads</span> were functionalized with <span>aptamers</span> specific to distinct target proteins, together with their corresponding <span>complementary strands</span>. Upon the introduction of <span>target proteins</span> into the reaction system, specific <span>aptamer–target binding</span> triggered competitive displacement of the complementary strands. Each released complementary strand contained a sequence segment partially complementary to the <span>crRNA</span>, enabling activation of the <span>CRISPR/Cas12a complex</span>. Once activated, <span>Cas12a</span> cleaved the fluorescent reporter probes, generating a detectable <span>fluorescence signal</span>. Therefore, at this stage, we employed <span>molecular docking analysis</span> and <span>bioinformatics-assisted software tools</span> to support the aptamer design, verify structural feasibility, and guide the modeling of the overall detection workflow.
        </p>
        
        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure1} alt="Schematic diagram" className="figure-image" />
            <div className="figure-caption">Figure 1. Schematic diagram</div>
          </div>
        </div>
      </div>
    </div>

    {/* 2 Aptamer screening */}
    <div id="aptamer-screening" className="view-content">
      <div className="content-header">
        <div className="h1">Aptamer Screening</div>
      </div>
      <div className="content-body">
        <p>
          <span>Aptamers</span> are a class of single-stranded oligonucleotides obtained through <span>in vitro screening techniques</span>, capable of binding to target molecules (including proteins, small molecules, metal ions, etc.) with <span>high affinity and specificity</span>. Their binding ability stems from the unique <span>three-dimensional structure</span> formed by their self-folding, interacting with target molecules through non-covalent bonds such as <span>hydrogen bonding</span>, <span>hydrophobic interactions</span>, and <span>van der Waals forces</span>.
        </p>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure2} alt="The structure of the aptamer" className="figure-image" />
            <div className="figure-caption">Figure 2. The structure of the aptamer</div>
          </div>
        </div>

        <p>
          In this study, the screening of aptamers was primarily accomplished by reviewing literature and comparing <span>equilibrium dissociation constants (KD values)</span>. The specific process is as follows:
        </p>
        
        <ol>
          <li><strong>Literature search:</strong> Using the keywords "aptamer + target protein name", search for relevant literature in databases such as PubMed and Web of Science, and collect reported aptamer information specific to the target protein.</li>
          <li><strong>Preliminary screening:</strong> Eliminate literature with duplicate reports, ambiguous sequences, or insufficient experimental verification, and retain literature containing aptamer sequences, KD values, and specificity verification results.</li>
          <li><strong>KD value comparison:</strong> The KD value is an important indicator reflecting the binding affinity between the aptamer and the target. The smaller the KD value, the higher the affinity. For the aptamers initially selected, those with smaller KD values (usually &lt;100 nM) are preferred.</li>
        </ol>

        <div className="table-container">
          <table className="data-table">
            <caption>Table 1. Aptamer sequence of target protein</caption>
            <thead>
              <tr>
                <th>Target Protein</th>
                <th>Sequence (5'-3')</th>
                <th>Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CD63</td>
                <td>CACCCCACCTCGCTCCCGTGACACTAATGCTA</td>
                <td>[2]</td>
              </tr>
              <tr>
                <td>ERBB2</td>
                <td>GCAGCGGTGTGGGGGCAGCGGTGTGGGGGCAGCGGTGTGGGG</td>
                <td>[3]</td>
              </tr>
              <tr>
                <td>PD-L1</td>
                <td>ACGGGCCACATCAACTCATTGATAGACAATGCGTCCACTGCCCGT</td>
                <td>[4]</td>
              </tr>
              <tr>
                <td>EPCAM</td>
                <td>CACTACAGAGGTTGCGTCTGTCCCACGTTGTCATGGGGGGTTGGCCTGTTTT</td>
                <td>[5]</td>
              </tr>
              <tr>
                <td>MMP9</td>
                <td>TACGGCCGCACGAAAAGGTGCCCCATAACTCAATGCCGTA</td>
                <td>[6]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* 3 Molecular docking */}
    <div id="molecular-docking" className="view-content">
      <div className="content-header">
        <div className="h1">Molecular Docking</div>
      </div>
      <div className="content-body">
        <p>
          <span>Molecular docking</span> is a crucial method in drug design and biomolecular interaction research based on molecular structure. In aptamer research, it is used to simulate the interaction between aptamers and target molecules. We utilize molecular docking to predict the <span>binding sites</span> of aptamers and target proteins, aiding in the subsequent design of complementary strands and ensuring the efficiency of the substitution reaction.
        </p>

        <div className="h2">1. Preparation of 3D structure</div>
        
        <div className="h3">(1) Construction of aptamer structure</div>
        <div className="h4">1) Secondary structure prediction:</div>
        <p>Input the selected aptamer sequence into the <span>UNAfold website</span>, select the RNA folding module, and set the parameters as follows:</p>
        <ul>
          <li>Temperature: 37°C (simulated physiological conditions)</li>
          <li>Ion concentration: 140 mM Na⁺, 5 mM Mg²⁺ (simulating intracellular environment)</li>
          <li>Folding algorithm: Using mfold default parameters</li>
          <li>Output format: ct file (for tertiary structure modeling)</li>
        </ul>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure3} alt="The tertiary structure of nucleic acid aptamers" className="figure-image" />
            <div className="figure-caption">Figure 3. The tertiary structure of nucleic acid aptamers</div>
          </div>
        </div>

        <div className="h4">2) Generation of tertiary structure:</div>
        <p>Upload the ct file output by UNAfold to <span>RNA Composer</span>, and select to generate the tertiary structure:</p>
        <ul>
          <li>Modeling accuracy: High accuracy</li>
          <li>Optimization rounds: 100 cycles</li>
          <li>Output format: PDB file</li>
        </ul>

        <div className="h3">(2) Acquisition of target protein structure</div>
        <ul>
          <li>Retrieve the ID of the target protein from the UniProt database.</li>
          <li>Link to the PDB database via ID and download the corresponding crystal structure file.</li>
        </ul>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure4} alt="Schematic diagram of protein structure" className="figure-image" />
            <div className="figure-caption">Figure 4. Schematic diagram of protein structure</div>
          </div>
        </div>

        <div className="h2">2. Molecular docking simulation</div>
        <p>Submit the preprocessed aptamer and target protein PDB files to the <span>Z-DOCK Server</span>:</p>
        <p><strong>Docking parameter settings:</strong></p>
        <ul>
          <li>Docking type: Protein-RNA</li>
          <li>Search space: Global docking</li>
          <li>Sampling density: Medium (ensuring computational efficiency while covering the main binding modes)</li>
          <li>Constraint conditions: None (no constraints are set in the initial screening stage)</li>
          <li>Output: The server generates 2000 possible docking conformations, which are arranged in descending order based on the ZDOCK score</li>
        </ul>

        <div className="h2">3. Result analysis and visualization</div>
        <p>Download the top 10 docking conformation files, and open the file with the best docking activity for subsequent analysis.</p>
        <p>Visualize and analyze the docking results using <span>PyMOL</span></p>

        <object
              data={howtousePymol}
              type="application/pdf"
              width="100%"
              height="600px"
              className="pdf-object"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              >
            </object>



        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure5} alt="Schematic diagram of docking results of four target proteins" className="figure-image" />
            <div className="figure-caption">Figure 5. Schematic diagram of docking results of four target proteins</div>
          </div>
        </div>
      </div>
    </div>

    {/* 4 Complementary strand design */}
    <div id="complementary-strand-design" className="view-content">
      <div className="content-header">
        <div className="h1">Complementary Strand Design</div>
      </div>
      <div className="content-body">
        <div className="h2">1. Complementary strand design</div>

        <div className="h3">(1) Determine the binding region:</div>
        <p>Through molecular docking (ZDOCK), obtain the docking sites between the target protein and the aptamer, and select a binding segment with a length of approximately 20 bp from the APT sequence to ensure that the marker can replace APT-c.</p>

        <div className="h3">(2) Generate the main sequence of APT-c via reverse complement:</div>
        <p>Subject the selected APT binding segment to reverse complement treatment, which serves as the first segment of the APT-c sequence. This segment is used for specific binding with APT.</p>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure6} alt="APT&APT-c Complementary Sequence" className="figure-image" />
            <div className="figure-caption">Figure 6. APT&APT-c Complementary Sequence</div>
          </div>
        </div>

        <div className="h3">(3) Splice functional fragments:</div>
        <p>Splice an experimentally verified and structurally stable crRNA recognition segment after the first segment of APT-c, to ensure that the target site recognized by the Cas system can be completely exposed or constructed after APT binds to APT-c, thereby realizing the signal conversion function.</p>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure7} alt="CrRNA Identification Sequence and PAM Sequence" className="figure-image" />
            <div className="figure-caption">Figure 7. CrRNA Identification Sequence and PAM Sequence</div>
          </div>
        </div>

        <p><strong>Obtain the APT-c sequence</strong></p>
        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure8} alt="APT-c Sequence" className="figure-image" />
            <div className="figure-caption">Figure 8. APT-c Sequence</div>
          </div>
        </div>

        <div className="h2">2. Complementary strand analysis</div>
        <p>To ensure that APT-c possesses good binding ability and structural properties, we use <span>Oligo7 software</span> to analyze its thermodynamic stability and structural feasibility:</p>

        <div className="h3">(1) Construct a complete structural template:</div>
        <p>Reverse complement the designed APT-c sequence, splice it to the end of the APT sequence, and form a complete "APT-APT-c" complex sequence to simulate its behavior in the actual binding state.</p>

        <div className="h3">(2) Input into the analysis platform:</div>
        <p>Input the complete sequence into Oligo7 software; in the "Primer Analysis" module, set the original APT sequence as the "forward primer" and APT-c as the "reverse primer", which simulates the primer pair when they bind as complementary strands.</p>

        <div className="h3">(3) Structural and thermodynamic evaluation:</div>
        <p>After clicking for analysis, the system will output the following key parameters:</p>
        <ol>
          <li><strong>Tm value (binding temperature):</strong> Used to evaluate the binding strength between APT and APT-c. The ideal range is usually set at 58~62℃, which can ensure stable binding while avoiding overly tight binding that would affect the dynamic response of the system.</li>
          <li><strong>ΔG value (free energy):</strong> Reflects the thermodynamic spontaneity of the binding reaction. The larger the absolute value, the more stable the binding; it is recommended that ΔG ≤ -25 kcal/mol.</li>
          <li><strong>Hairpin structure analysis:</strong> Analyze the possible hairpin structures formed by APT and APT-c, as well as their structural stability. For APT-c, the formation of stable hairpin structures by itself should be avoided to prevent "self-sealing" in the reaction system, which would hinder its effective binding to APT.</li>
        </ol>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure9} alt="Her-2 APT&APT-c Binding Site and ΔG,Tm Value" className="figure-image" />
            <div className="figure-caption">Figure 9. Her-2 APT&APT-c Binding Site and ΔG,Tm Value</div>
          </div>
        </div>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure10} alt="Her-2 APT Hairpin Structure and ΔG,Tm Value" className="figure-image" />
            <div className="figure-caption">Figure 10. Her-2 APT Hairpin Structure and ΔG,Tm Value</div>
          </div>
        </div>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure11} alt="APT-c Hairpin Structure and ΔG,Tm Value" className="figure-image" />
            <div className="figure-caption">Figure 11. APT-c Hairpin Structure and ΔG,Tm Value</div>
          </div>
        </div>

        <div className="h3">(4) Comprehensive evaluation of the rationality of the design:</div>
        <ol>
          <li>If the Tm values of APT and APT-c fall within the set range, and APT-c is not prone to forming hairpin structures, the design is judged to be effective and reliable and can be used in experiments;</li>
          <li>If the Tm value is too low or APT-c has stable hairpin structures, it is necessary to reselect the binding region or adjust parameters such as sequence length and GC content to optimize structural performance.</li>
        </ol>

        <div className="table-container">
          <table className="data-table">
            <caption>Table 2. Aptamer complementary strand</caption>
            <thead>
              <tr>
                <th>Target Protein</th>
                <th>Sequence (5'-3')</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2">ERBB2</td>
                <td>TTTCGATTAAAGCTCGCCATCAAATCACACCGCTGCCCCCACA</td>
              </tr>
              <tr>
                <td>TTTCGATTAAAGCTCGCCATCAAATACACCGCTGCCCCCACA</td>
              </tr>
              <tr>
                <td rowSpan="2">PD-L1</td>
                <td>TTTCGATTAAAGCTCGCCATCAAATTTGTCTATCAATGAGTTGATGTGGC</td>
              </tr>
              <tr>
                <td>TTTCGATTAAAGCTCGCCATCAAATGGACGCATTGTCTATCAATGAG</td>
              </tr>
              <tr>
                <td rowSpan="2">MMP9</td>
                <td>TTTCGATTAAAGCTCGCCATCAAATTTATGGGGCACCTTTTCGTG</td>
              </tr>
              <tr>
                <td>TTTCGATTAAAGCTCGCCATCAAATGTTATGGGGCACCTTTTCGT</td>
              </tr>
              <tr>
                <td rowSpan="2">EPCAM</td>
                <td>TTTCGATTAAAGCTCGCCATCAAATCCCATGACAACGTGGGACAG</td>
              </tr>
              <tr>
                <td>TTTCGATTAAAGCTCGCCATCAAATCATGACAACGTGGGACAGACGC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* 5 Aptamer–Target Equilibrium Model */}
    <div id="aptamer-target-equilibrium" className="view-content">
      <div className="content-header">
        <div className="h1">Aptamer–Target Equilibrium Model</div>
      </div>
      <div className="content-body">
        <p>
          This document outlines the theoretical framework for establishing the <span>dynamic equilibrium equation</span> governing the interaction between the <span>Aptamer (APT)</span>, <span>Target protein (T)</span>, and <span>Complementary strand (APT-c)</span> in a competitive displacement assay. By analyzing the system's key reversible binding reactions and applying the principle of mass conservation, we derive the expression for the equilibrium concentration of the desired APT–T complex, which is directly proportional to the detection signal.
        </p>

        <div className="h2">1. Introduction</div>
        <p>
          The designed detection system utilizes a <span>competitive displacement strategy</span>. The aptamer (APT) is initially complexed with its complementary strand (APT-c). The presence of the target protein (T) then competitively displaces the APT-c from the APT–APT-c complex. The released APT-c, which contains a complementary segment to crRNA, subsequently activates the <span>CRISPR/Cas14a enzyme</span>, leading to cleavage of the fluorescent probe and signal emission. Therefore, accurately quantifying the equilibrium state of the APT–T–APT-c system is crucial for predicting and optimizing the sensor's performance.
        </p>

        <div className="h2">2. Governing Equilibrium Reactions</div>
        <p>The dynamic balance of the system is governed by two primary reversible binding reactions:</p>

        <div className="h3">(1) Reaction 1: Aptamer (APT) and Target Protein (T) Binding</div>
        <p>This reaction represents the signal-generating pathway, where the APT binds to the target protein (T) to form the APT–T complex:</p>
        <div className="equation">APT + T ⇌ APT–T</div>
        <p>The equilibrium is defined by the dissociation constant (K<sub>D</sub>) for the APT–T complex:</p>
        <div className="equation">K<sub>D</sub> = [APT][T] / [APT–T]</div>
        <p>A smaller K<sub>D</sub> value indicates higher binding affinity between the APT and the target protein.</p>

        <div className="h3">(2) Reaction 2: Aptamer (APT) and Complementary Strand (APT-c) Binding</div>
        <p>This reaction represents the initial 'OFF' state of the sensor, where the APT binds to the complementary strand (APT-c) to form the APT–APT-c complex:</p>
        <div className="equation">APT + APT-c ⇌ APT–APT-c</div>
        <p>The equilibrium is defined by the dissociation constant (K<sub>D</sub>') for the APT–APT-c complex:</p>
        <div className="equation">K<sub>D</sub>' = [APT][APT-c] / [APT–APT-c]</div>
        <p>The K<sub>D</sub>' value is directly related to the thermodynamic stability of the complex, often deduced from the Gibbs free energy (ΔG) calculated via software like Oligo7, where K<sub>D</sub>' = e<sup>(ΔG / RT)</sup>.</p>

        <div className="h2">3. Conservation of Mass and Derivation</div>
        <p>To establish the equilibrium equation, the total concentration of the Aptamer ([APT]<sub>total</sub>) is considered constant. At equilibrium, the total APT concentration is distributed among the free APT, the target-bound complex, and the complementary strand-bound complex:</p>
        <div className="equation">[APT]<sub>total</sub> = [APT] + [APT–T] + [APT–APT-c]</div>

        <div className="h3">Derivation of the APT–T Equilibrium Concentration:</div>
        <ol>
          <li><strong>Express Bound Species in terms of Free Aptamer ([APT]):</strong> Rearranging the dissociation constant equations yields:
            <div className="equation">[APT–T] = [APT][T] / K<sub>D</sub>   (1)</div>
            <div className="equation">[APT–APT-c] = [APT][APT-c] / K<sub>D</sub>'   (2)</div>
          </li>
          <li><strong>Substitute into the Mass Conservation Equation:</strong>
            <div className="equation">[APT]<sub>total</sub> = [APT] + [APT][T] / K<sub>D</sub> + [APT][APT-c] / K<sub>D</sub>'</div>
          </li>
          <li><strong>Solve for the Free Aptamer Concentration ([APT]):</strong> Factoring out [APT]:
            <div className="equation">[APT]<sub>total</sub> = [APT] (1 + [T] / K<sub>D</sub> + [APT-c] / K<sub>D</sub>')</div>
            <div className="equation">[APT] = [APT]<sub>total</sub> / (1 + [T] / K<sub>D</sub> + [APT-c] / K<sub>D</sub>')   (3)</div>
          </li>
          <li><strong>Final Equilibrium Equation for [APT–T]:</strong> Substituting Equation (3) back into Equation (1):
            <div className="equation">[APT–T] = ([APT]<sub>total</sub> × [T] / K<sub>D</sub>) / (1 + [T] / K<sub>D</sub> + [APT-c] / K<sub>D</sub>')</div>
          </li>
        </ol>

        <div className="h2">4. Application: Quantifying Displacement Efficiency (E)</div>
        <p>For design optimization, the competitive displacement efficiency (E) is introduced, which quantifies the fraction of the aptamer that is successfully bound to the target protein relative to all bound aptamer forms:</p>
        <div className="equation">E = [APT–T] / ([APT–T] + [APT–APT-c]) × 100%</div>
        <p>Under simplifying assumptions (where free concentrations of T and APT-c approximate their total concentrations), this formula can be expressed solely in terms of the dissociation constants and concentrations:</p>
        <div className="equation">E = ([T] / K<sub>D</sub>) / ([T] / K<sub>D</sub> + [APT-c] / K<sub>D</sub>') × 100%</div>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure12} alt="Schematic of APT–Target–Complementary Strand Dynamic Equilibrium" className="figure-image" />
            <div className="figure-caption">Figure 12. Schematic of APT–Target–Complementary Strand Dynamic Equilibrium</div>
          </div>
        </div>
        <p>This diagram illustrates the competition between the target protein (T) and the complementary strand (APT-c) for binding to the Aptamer (APT), defining the two simultaneous equilibrium reactions (K<sub>D</sub> and K<sub>D</sub>').</p>
      </div>
    </div>

    {/* 6 Cas14a Enzyme Activity Modeling */}
    <div id="cas14a-enzyme-modeling" className="view-content">
      <div className="content-header">
        <div className="h1">Cas14a Enzyme Activity Modeling</div>
      </div>
      <div className="content-body">
        <div className="h2">1. Background</div>
        <p>
          <span>Cas14a</span> is a small RNA-guided nuclease with <span>trans-cleavage activity</span> upon recognition of target single-stranded DNA. To quantify and predict the catalytic efficiency of Cas14a in our APT–RCA–CRISPR detection system, we established a <span>Michaelis–Menten kinetic model</span> describing the relationship between substrate concentration and reaction velocity. This model allows us to optimize reaction conditions (substrate dosage, enzyme concentration, reaction time) and interpret experimental fluorescence data quantitatively.
        </p>

        <div className="h2">2. Mathematical Model</div>
        <div className="h3">(1) Michaelis–Menten Equation</div>
        <p>The catalytic reaction of Cas14a with the fluorescent reporter substrate follows Michaelis–Menten kinetics:</p>
        <div className="equation">v = (V<sub>max</sub> × [S]) / (K<sub>m</sub> + [S])</div>
        <p>Where:</p>
        <ul>
          <li>v: reaction velocity (RFU/min)</li>
          <li>[S]: substrate concentration (nM)</li>
          <li>V<sub>max</sub>: maximum velocity (enzyme fully saturated)</li>
          <li>K<sub>m</sub>: Michaelis constant (substrate concentration at half-maximal rate)</li>
        </ul>

        <div className="h3">(2) Fluorescence Output Function</div>
        <p>Assuming the substrate concentration remains constant during the early reaction phase, total fluorescence intensity (FI) after time t can be expressed as:</p>
        <div className="equation">FI(t) = FI₀ + v × t = FI₀ + (V<sub>max</sub> × [S]) / (K<sub>m</sub> + [S]) × t</div>
        <p>In our simulation, FI₀ (initial background fluorescence) is set to 0 for simplicity, and t = 30 min</p>

        <div className="h2">3. Parameter Setting</div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Unit</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>V<sub>max</sub></td>
                <td>1.2 × 10⁶</td>
                <td>RFU/min</td>
                <td>Maximum velocity</td>
              </tr>
              <tr>
                <td>K<sub>m</sub></td>
                <td>5</td>
                <td>nM</td>
                <td>Michaelis constant</td>
              </tr>
              <tr>
                <td>t</td>
                <td>30</td>
                <td>min</td>
                <td>Reaction time</td>
              </tr>
              <tr>
                <td>[S]</td>
                <td>0.1–50</td>
                <td>nM</td>
                <td>Substrate concentration range</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h2">4. Simulation Results</div>
        <div className="h3">(1) Reaction Velocity vs Substrate Concentration</div>
        <div className="equation">v = (1.2×10⁶ × [S]) / (5 + [S])</div>
        <p>At low [S] (&lt; 5 nM), velocity rises sharply (substrate-limited region). At high [S] (&gt; 20 nM), velocity plateaus (enzyme saturation). This indicates Cas14a exhibits high catalytic efficiency and strong affinity (low K<sub>m</sub>) for the fluorescent reporter.</p>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure13} alt="Michaelis–Menten Kinetics of Cas14a" className="figure-image" />
            <div className="figure-caption">Figure 13. Michaelis–Menten Kinetics of Cas14a</div>
          </div>
        </div>

        <div className="h3">(2) Fluorescence Intensity after 30 min Reaction</div>
        <div className="equation">FI = (1.2×10⁶ × [S]) / (5 + [S]) × 30</div>
        <p>Fluorescence intensity increases nearly linearly in the 0.1–10 nM range, suitable for constructing calibration curves. Beyond 20 nM, FI approaches saturation, reflecting the maximal catalytic capacity of Cas14a. The linear segment defines the quantitative detection range for our biosensor.</p>

        <div className="figure-container">
          <div className="figure-item">
            <img src={modelFigure14} alt="Cas14a Fluorescence Signal (30 min)" className="figure-image" />
            <div className="figure-caption">Figure 14. Cas14a Fluorescence Signal (30 min)</div>
          </div>
        </div>

        <div className="h2">5. Model Insights</div>
        <ul className="insights-list">
          <li>✅ The model quantitatively links substrate dosage with signal output, enabling rational design of the reporter system.</li>
          <li>✅ The linear range (0.1–10 nM) defines the optimal window for calibration.</li>
          <li>✅ The saturation plateau (&gt;20 nM) suggests excess substrate provides no additional sensitivity.</li>
          <li>✅ Estimated K<sub>m</sub> = 5 nM indicates high binding affinity of Cas14a to the substrate.</li>
          <li>✅ V<sub>max</sub> = 1.2 × 10⁶ RFU/min reflects robust enzyme activity achieved through prokaryotic expression.</li>
        </ul>
      </div>
    </div>

    {/* 7 Reference */}
    <div id="reference" className="view-content">
      <div className="content-header">
        <div className="h1">Reference</div>
      </div>
      <div className="content-body">
        <ol className="reference-list">
          <li>[1] Ji C, Wei J, Zhang L, et al. Aptamer-Protein Interactions: From Regulation to Biomolecular Detection. Chem Rev. 2023;123(22):12471-12506.</li>
          <li>[2] Song Z, Mao J, Barrero RA, Wang P, Zhang F, Wang T. Development of a CD63 Aptamer for Efficient Cancer Immunochemistry and Immunoaffinity-Based Exosome Isolation. Molecules. 2020;25(23):5585. Published 2020 Nov 27. doi:10.3390/molecules25235585</li>
          <li>[3] Yan, J., Bhadane, R., Ran, M. et al. Development of Aptamer-DNAzyme based metal-nucleic acid frameworks for gastric cancer therapy. Nat Commun 15, 3684 (2024). https://doi.org/10.1038/s41467-024-48149-9</li>
          <li>[4] Lai WY, Huang BT, Wang JW, Lin PY, Yang PC. A Novel PD-L1-targeting Antagonistic DNA Aptamer With Antitumor Effects. Mol Ther Nucleic Acids. 2016;5(12):e397. Published 2016 Dec 13. doi:10.1038/mtna.2016.102</li>
          <li>[5] Guan X, Zhao J, Sha Z, et al. CRISPR/Cas12a and aptamer-chemiluminescence based analysis for the relative abundance determination of tumor-related protein positive exosomes for breast cancer diagnosis. Biosens Bioelectron. 2024;259:116380. doi:10.1016/j.bios.2024.116380</li>
          <li>[6] Yu XA, Hu Y, Zhang Y, et al. Integrating the Polydopamine Nanosphere/Aptamers Nanoplatform with a DNase-I-Assisted Recycling Amplification Strategy for Simultaneous Detection of MMP-9 and MMP-2 during Renal Interstitial Fibrosis. ACS Sens. 2020;5(4):1119-1125. doi:10.1021/acssensors.0c00058</li>
        </ol>
      </div>
    </div>
  </>
);

function Model() {
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
      id: 'introduction',
      title: 'Introduction',
      icon: '🧬'
    },
    {
      id: 'aptamer-screening',
      title: 'Aptamer Screening',
      icon: '🔍'
    },
    {
      id: 'molecular-docking',
      title: 'Molecular Docking',
      icon: '🔗'
    },
    {
      id: 'complementary-strand-design',
      title: 'Complementary Strand Design',
      icon: '🧩'
    },
    {
      id: 'aptamer-target-equilibrium',
      title: 'Aptamer–Target Equilibrium Model',
      icon: '⚖️'
    },
    {
      id: 'cas14a-enzyme-modeling',
      title: 'Cas14a Enzyme Activity Modeling',
      icon: '📊'
    },
    {
      id: 'reference',
      title: 'Reference',
      icon: '📚'
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

export default Model;