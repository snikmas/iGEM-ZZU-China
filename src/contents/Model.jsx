import React from 'react'
import { assets } from '../assets/assets'


export function Model({ props }) {
  const { section_1, section_2, section_3, section_4, section_5 } = props;

  return (
    <div>
      <section id="section_1">
        <h2 className="sub-title">{section_1}</h2>
        <hr />
        <p className="paragraph">
          In our designed detection system, there are four different types of magnetic beads, each of which carries an aptamer specific to a target protein and its complementary strand. When the target protein enters the detection system, the corresponding complementary strand is competitively replaced. The complementary strand contains a complementary segment to crRNA, which can activate the CRISPR/Cas14a enzyme, cleave the fluorescent probe, and emit fluorescence. Therefore, in our system, we utilized molecular docking technology and some software to assist us in the design and establishment of the model.
        </p>
        <div className='div-img'>
          <img src='https://static.igem.wiki/teams/5822/assets/model/model-01.webp' alt="model-01"/>
          <span><em>Fig1. Schematic diagram</em></span>
        </div>
      </section>

      <section id="section_2">
        <h2 className="sub-title">{section_2}</h2>
        <hr />
        <p className="paragraph">
          Aptamers are a class of single-stranded oligonucleotides obtained through in vitro screening techniques, capable of binding to target molecules (including proteins, small molecules, metal ions, etc.) with high affinity and specificity. Their binding ability stems from the unique three-dimensional structure formed by their self-folding, interacting with target molecules through non-covalent bonds such as hydrogen bonding, hydrophobic interactions, and van der Waals forces[1]。
        </p>
        <div className='div-img'>
          <img src='https://static.igem.wiki/teams/5822/assets/model/model-02.webp' alt="model-02"/>
          <span><em>Fig2.The structure of the aptamer</em></span>
        </div>
        <p className="paragraph">
          In this study, the screening of aptamers was primarily accomplished by reviewing literature and comparing equilibrium dissociation constants (KD values). 
          <br></br><br></br><br></br>
          The specific process is as follows:
        </p>
        <ol className='list-01'>
          <li>Literature search: Using the keywords "aptamer + target protein name", search for relevant literature in databases such as PubMed and Web of Science, and collect reported aptamer information specific to the target protein.</li>
          <li>Preliminary screening: Eliminate literature with duplicate reports, ambiguous sequences, or insufficient experimental verification, and retain literature containing aptamer sequences, KD values, and specificity verification results.</li>
          <li>KD value comparison: The KD value is an important indicator reflecting the binding affinity between the aptamer and the target. The smaller the KD value, the higher the affinity. For the aptamers initially selected, those with smaller KD values (usually &lt;100 nM) are preferred.</li>
        </ol>

        <div className='table-div'>
          <table>
          <caption>Table 1: Aptamer Sequence of Target Protein</caption>
            <tr>
              <th>Target Protein</th>
              <th>Sequence (5’-3’)</th>
              <th>Reference</th>
            </tr>
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
          </table>
        </div>
      </section>

      <section id="section_3">
        <h2 className="sub-title">{section_3}</h2>
        <hr />
        <p className="paragraph">
          Molecular docking is a crucial method in drug design and biomolecular interaction research based on molecular structure. In aptamer research, it is used to simulate the interaction between aptamers and target molecules. We utilize molecular docking to predict the binding sites of aptamers and target proteins, aiding in the subsequent design of complementary strands and ensuring the efficiency of the substitution reaction.
        </p>
        
        <ol className='list-01'>
          <li className="li-paragraph"> 
            <strong>Preparation of 3D structure</strong>
            <ol className='list-02'>
              <li>
                <strong>Construction of aptamer structure</strong>
                <ol className='list-01'>
                  <li>
                    <strong>Secondary structure prediction:</strong> Input the selected aptamer sequence into the UNAfold website, select the RNA folding module, and set the parameters as follows:
                    <ul className="list-03">
                      <li>Temperature: 37°C (simulated physiological conditions)</li>
                      <li>Ion concentration: 140 mM Na⁺, 5 mM Mg²⁺ (simulating intracellular environment)</li>
                      <li>Folding algorithm: Using mfold default parameters</li>
                      <li>Output format: ct file (for tertiary structure modeling)</li>
                    </ul>

                    <div className='div-img'>
                      <img src='https://static.igem.wiki/teams/5822/assets/model/model-03.webp' alt="model-03"/>
                      <span><em>Fig3. The tertiary structure of nucleic acid aptamers</em></span>
                    </div>
                  </li>
                  <li className="li-paragraph">
                    <strong>Generation of tertiary structure:</strong> Upload the ct file output by UNAfold to RNA Composer, and select to generate the tertiary structure:
                    <ul className="list-03">
                      <li>Modeling accuracy: High accuracy</li>
                      <li>Optimization rounds: 100 cycles</li>
                      <li>Output format: PDB file</li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                <strong>Acquisition of target protein structure:</strong> Retrieve the ID of the target protein from the UniProt database. Link to the PDB database via ID and download the corresponding crystal structure file.
              </li>
            </ol>

            <div className='div-img'>
              <img src='https://static.igem.wiki/teams/5822/assets/model/model-04.webp' alt="model-04"/>
              <span><em>Fig4. Schematic diagram of protein structure</em></span>
            </div>
          </li>
          <li>
            <strong>Molecular docking simulation</strong>
            <p className="paragraph">
              Submit the preprocessed aptamer and target protein PDB files to the Z-DOCK Server. Docking parameter settings:
            </p>
            <ul className="list-03">
              <li>Docking type: Protein-RNA</li>
              <li>Search space: Global docking</li>
              <li>Sampling density: Medium (ensuring computational efficiency while covering the main binding modes)</li>
              <li>Constraint conditions: None (no constraints are set in the initial screening stage)</li>
            </ul>
          </li>

          <li>
            <strong>Result analysis and visualization (determination of docking sites)</strong>
            <p className="paragraph">
              Download the top 10 docking conformation files, and open the file with the best docking activity for subsequent analysis.
            </p>
          </li>
        </ol>



        <div className='bg-amber-200 h-20'>
          pdf
        </div>

        <div className='div-img'>
          <img src='https://static.igem.wiki/teams/5822/assets/model/model-05.webp' alt="model-05"/>
          <span><em>Fig5. Schematic diagram of docking results of four target proteins</em></span>
        </div>
        <div className='table-div'>
          <table>
            <caption>Table 2: Aptamer Sequence of Target Protein</caption>
            <thead>
              <tr>
                <th>Target Protein</th>
                <th>Sequence (5’-3’)</th>
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
              <tr><td className='border px-4 py-2'>MMP9</td><td className='border px-4 py-2'>TACGGCCGCACGAAAAGGTGCCCCATAACTCAATGCCGTA</td><td className='border px-4 py-2'>[6]</td></tr>
            </tbody>
          </table>
        </div>
      </section>


<section id="section_4">
  <h2 className="sub-title">{section_4}</h2>
  <hr />
  <h3 className='text-lg pt-8 font-semibold'>Complementary strand design</h3>
  <ol className='list-01'>
    <li>
      <strong>Determine the binding region:</strong> Through molecular docking (ZDOCK), obtain the docking sites between the target protein and the aptamer, and select a binding segment with a length of approximately 20 bp from the APT sequence to ensure that the marker can replace APT-c.
    </li>
    <li>
      <strong>Generate the main sequence of APT-c via reverse complement:</strong> Subject the selected APT binding segment to reverse complement treatment, which serves as the first segment of the APT-c sequence. This segment is used for specific binding with APT. <br />
      <div className='div-img-formula'>
        <img src='https://static.igem.wiki/teams/5822/assets/model/model-06.webp' alt="model-06" />
        <span><em>Fig6. APT&APT-c Complementary Sequence</em></span>
      </div>
    </li>
    <li>
      <strong>Splice functional fragments:</strong> Splice an experimentally verified and structurally stable crRNA recognition segment after the first segment of APT-c, to ensure that the target site recognized by the Cas system can be completely exposed or constructed after APT binds to APT-c, thereby realizing the signal conversion function. <br />
      <div className='div-img-formula'>
        <img src='https://static.igem.wiki/teams/5822/assets/model/model-07.webp' alt="model-07" />
        <span><em>Fig7. CrRNA Identification Sequence and PAM Sequence</em></span>
      </div>
      <strong>Obtain the APT-c sequence:</strong> <br />
      <div className='div-img-formula'>
        <img src='https://static.igem.wiki/teams/5822/assets/model/model-08.webp' alt="model-08" />
        <span><em>Fig8. APT-c Sequence</em></span>
      </div>
    </li>
  </ol>

  <h3 className="sub-sub-title">Complementary Strand Analysis</h3>
  <p className='paragraph'>To ensure that APT-c possesses good binding ability and structural properties, we use Oligo7 software to analyze its thermodynamic stability and structural feasibility:</p>

  <ol className='list-01'>
    <li>
      <strong>Construct a complete structural template:</strong> Reverse complement the designed APT-c sequence, splice it to the end of the APT sequence, and form a complete "APT-APT-c" complex sequence to simulate its behavior in the actual binding state.
    </li>
    <li>
      <strong>Input into the analysis platform:</strong> Input the complete sequence into Oligo7 software; in the "Primer Analysis" module, set the original APT sequence as the "forward primer" and APT-c as the "reverse primer", which simulates the primer pair when they bind as complementary strands.
    </li>
    <li>
      <strong>Structural and thermodynamic evaluation:</strong> After clicking for analysis, the system will output the following key parameters:
      <ul className="list-02">
        <li><strong>Tm value (binding temperature):</strong> Used to evaluate the binding strength between APT and APT-c. Ideal range: 58~62℃.</li>
        <li><strong>ΔG value (free energy):</strong> Reflects thermodynamic spontaneity. Recommended: ΔG ≤ -25 kcal/mol.</li>
        <li><strong>Hairpin structure analysis:</strong> APT-c should avoid forming stable hairpins to prevent self-binding issues.</li>
      </ul>
      <div className='div-img-formula'>
        <img src='https://static.igem.wiki/teams/5822/assets/model/model-09.webp' alt="model-09" />
        <span><em>Fig9. Her-2 APT&APT-c Binding Site and ΔG,Tm Value</em></span>
      </div>
      <div className='div-img-formula'>
        <img src='https://static.igem.wiki/teams/5822/assets/model/model-10.webp' alt="model-10" />
        <span><em>Fig10. Her-2 APT Hairpin Structure and ΔG,Tm Value</em></span>
      </div>
      <div className='div-img-formula'>
        <img src='https://static.igem.wiki/teams/5822/assets/model/model-11.webp' alt="model-11" />
        <span><em>Fig11. APT-c Hairpin Structure and ΔG,Tm Value</em></span>
      </div>
    </li>
    <li>
      <strong>Comprehensive evaluation of design:</strong>
      <ul className="list-02">
        <li>If Tm values are within range and APT-c avoids hairpins → design is valid for experiments.</li>
        <li>If not, reselect binding region or adjust GC content and sequence length.</li>
      </ul>
    </li>
  </ol>

  <div className='table-div'>
  <table>
    <caption>Table 3. Aptamer Complementary Strand</caption>
    <thead>
      <tr>
        <th>Target Protein</th>
        <th>Sequence (5’–3’)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ERBB2</td>
        <td>TTTCGATTAAAGCTCGCCATCAAATCACACCGCTGCCCCCACA<br />TTTCGATTAAAGCTCGCCATCAAATACACCGCTGCCCCCACA</td>
      </tr>
      <tr>
        <td>PD-L1</td>
        <td>TTTCGATTAAAGCTCGCCATCAAATTTGTCTATCAATGAGTTGATGTGGC<br />TTTCGATTAAAGCTCGCCATCAAATGGACGCATTGTCTATCAATGAG</td>
      </tr>
      <tr>
        <td>MMP9</td>
        <td>TTTCGATTAAAGCTCGCCATCAAATTTATGGGGCACCTTTTCGTG<br />TTTCGATTAAAGCTCGCCATCAAATGTTATGGGGCACCTTTTCGT</td>
      </tr>
      <tr>
        <td>EPCAM</td>
        <td>TTTCGATTAAAGCTCGCCATCAAATCCCATGACAACGTGGGACAG<br />TTTCGATTAAAGCTCGCCATCAAATCATGACAACGTGGGACAGACGC</td>
      </tr>
    </tbody>
  </table>
  </div>

  <p className="paragraph">
    To quantify the competitive displacement efficiency (E) of the target protein (T) on the aptamer-complementary strand (APT–APT-c) complex, we use the formula:
  </p>

  <ul className="list-03">
    <li><strong>KD′:</strong> Dissociation constant (from ΔG via Oligo7): KD′ = e^(ΔG / RT)</li>
    <li><strong>[APT–c]:</strong> Complementary strand concentration (experimentally controlled)</li>
  </ul>

  <div className="div-img-formula">
    <img src='https://static.igem.wiki/teams/5822/assets/model/model-12.webp' alt="model-12"/>
  </div>

  <p className="paragraph">
    The process of calculating substitution efficiency using the competitive model takes ERBB2 as an example.
  </p>
  <div className='div-img-formula'>
    <img src='https://static.igem.wiki/teams/5822/assets/model/model-13.webp' alt="model-13"/>    
    <img src='https://static.igem.wiki/teams/5822/assets/model/model-14.webp' alt="model-14"/>    
    <img src='https://static.igem.wiki/teams/5822/assets/model/model-15.webp' alt="model-15"/>    
    <img src='https://static.igem.wiki/teams/5822/assets/model/model-16.webp' alt="model-16"/>    
  </div>
  </section>

  

  
<section id="section_5">
  <h2 className="sub-title">{section_5}</h2>
  <hr />
  <section id="references">
    <ol className='list-01'>
      <li>
        Ji C, Wei J, Zhang L, et al. Aptamer-Protein Interactions: From Regulation to Biomolecular Detection. <em>Chem Rev.</em> 2023;123(22):12471-12506.
      </li>
      <li>
        Song Z, Mao J, Barrero RA, Wang P, Zhang F, Wang T. Development of a CD63 Aptamer for Efficient Cancer Immunochemistry and Immunoaffinity-Based Exosome Isolation. <em>Molecules.</em> 2020;25(23):5585. Published 2020 Nov 27. 
        <a href="https://doi.org/10.3390/molecules25235585" target="_blank" rel="noopener noreferrer">doi:10.3390/molecules25235585</a>
      </li>
      <li>
        Yan J, Bhadane R, Ran M, et al. Development of Aptamer-DNAzyme based metal-nucleic acid frameworks for gastric cancer therapy. <em>Nat Commun.</em> 15, 3684 (2024). 
        <a href="https://doi.org/10.1038/s41467-024-48149-9" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41467-024-48149-9</a>
      </li>
      <li>
        Lai WY, Huang BT, Wang JW, Lin PY, Yang PC. A Novel PD-L1-targeting Antagonistic DNA Aptamer With Antitumor Effects. <em>Mol Ther Nucleic Acids.</em> 2016;5(12):e397. Published 2016 Dec 13. 
        <a href="https://doi.org/10.1038/mtna.2016.102" target="_blank" rel="noopener noreferrer">doi:10.1038/mtna.2016.102</a>
      </li>
      <li>
        Guan X, Zhao J, Sha Z, et al. CRISPR/Cas12a and aptamer-chemiluminescence based analysis for the relative abundance determination of tumor-related protein positive exosomes for breast cancer diagnosis. <em>Biosens Bioelectron.</em> 2024;259:116380. 
        <a href="https://doi.org/10.1016/j.bios.2024.116380" target="_blank" rel="noopener noreferrer">doi:10.1016/j.bios.2024.116380</a>
      </li>
      <li>
        Yu XA, Hu Y, Zhang Y, et al. Integrating the Polydopamine Nanosphere/Aptamers Nanoplatform with a DNase-I-Assisted Recycling Amplification Strategy for Simultaneous Detection of MMP-9 and MMP-2 during Renal Interstitial Fibrosis. <em>ACS Sens.</em> 2020;5(4):1119-1125. 
        <a href="https://doi.org/10.1021/acssensors.0c00058" target="_blank" rel="noopener noreferrer">doi:10.1021/acssensors.0c00058</a>
      </li>
    </ol>
    </section>
</section>


      

      
    </div>
  );
}
