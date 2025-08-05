import React from 'react'
import { assets } from '../assets/assets'


export function Model({ props }) {
  const { section_1, section_2, section_3, section_4, section_5, section_6 } = props;

  return (
    <div>
      <h1 className="title">Model</h1>
      <section id="section_1">
        <h2 className="sub-title">{section_1}</h2>
        <hr />
        <p className="paragraph">
          In our designed detection system, there are four different types of magnetic beads, each of which carries an aptamer specific to a target protein and its complementary strand. When the target protein enters the detection system, the corresponding complementary strand is competitively replaced. The complementary strand contains a complementary segment to crRNA, which can activate the CRISPR/Cas14a enzyme, cleave the fluorescent probe, and emit fluorescence. Therefore, in our system, we utilized molecular docking technology and some software to assist us in the design and establishment of the model.
        </p>
        <div className='img text-center items-center flex flex-col font-medium'>
          <img src='https://static.igem.wiki/teams/5822/assets/model/model-01.webp' alt="model-01" className='w-[90%]'/>
          <span>Fig1. Schematic diagram</span>
        </div>
      </section>

      
      <section id="section_2">
        <h2 className="sub-title">{section_2}</h2>
        <hr />
        <p className="paragraph">
          Aptamers are a class of single-stranded oligonucleotides obtained through in vitro screening techniques, capable of binding to target molecules (including proteins, small molecules, metal ions, etc.) with high affinity and specificity. Their binding ability stems from the unique three-dimensional structure formed by their self-folding, interacting with target molecules through non-covalent bonds such as hydrogen bonding, hydrophobic interactions, and van der Waals forces[1]。
        </p>
        <div className='img text-center items-center flex flex-col font-medium'>
          <img src='https://static.igem.wiki/teams/5822/assets/model/model-02.webp' alt="model-02" className='w-[90%]'/>
          <span>Fig2. The Structure of the aptamer</span>
        </div>
        <p className="paragraph">
          In this study, the screening of aptamers was primarily accomplished by reviewing literature and comparing equilibrium dissociation constants (KD values). The specific process is as follows:
        </p>
        <ol>
          <li className="li-paragraph">Literature search: Using the keywords "aptamer + target protein name", search for relevant literature in databases such as PubMed and Web of Science, and collect reported aptamer information specific to the target protein.</li>
          <li className="li-paragraph">Preliminary screening: Eliminate literature with duplicate reports, ambiguous sequences, or insufficient experimental verification, and retain literature containing aptamer sequences, KD values, and specificity verification results. </li>
          <li className="li-paragraph">KD value comparison: The KD value is an important indicator reflecting the binding affinity between the aptamer and the target. The smaller the KD value, the higher the affinity. For the aptamers initially selected, those with smaller KD values (usually &lt;100 nM) are preferred. </li>
        </ol>

        <div className='table'>
          <table>Table1: Aptamer Sequence of Target Protein
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

      <section id="section_2">
        <h2 className="sub-title">{section_2}</h2>
        <hr />
        <p className="paragraph">
          Molecular docking is a crucial method in drug design and biomolecular interaction research based on molecular structure. In aptamer research, it is used to simulate the interaction between aptamers and target molecules. We utilize molecular docking to predict the binding sites of aptamers and target proteins, aiding in the subsequent design of complementary strands and ensuring the efficiency of the substitution reaction.
        </p>
        <ol>
          <li className="li-paragraph">Preparation of 3D structure</li>
          <li className="li-paragraph"><strong>Reverse complement generation:</strong> Binding segments were reverse complemented to form the first part of the APT-c sequence.</li>
          <li className="li-paragraph"><strong>Functional fusion:</strong> A crRNA recognition site was fused to the APT-c to activate CRISPR/Cas14a upon displacement.</li>
        </ol>
      </section>

      {/* <section id="section_4">
        <h2 className="sub-title">{section_4}</h2>
        <hr />
        <p className="paragraph">
          To assess the performance and feasibility of APT-c sequences, we used Oligo7 to analyze their thermodynamic and structural properties.
        </p>
        <ol>
          <li className="li-paragraph"><strong>Structure simulation:</strong> The full “APT-APT-c” duplex was constructed by splicing the reverse-complemented APT-c to the APT sequence.</li>
          <li className="li-paragraph"><strong>Thermodynamic analysis:</strong> Oligo7 was used to evaluate Tm and ΔG values. Ideal Tm: 58–62°C; optimal ΔG ≤ -25 kcal/mol.</li>
          <li className="li-paragraph"><strong>Hairpin prediction:</strong> Hairpin structures in APT-c were examined to avoid self-binding, which could hinder aptamer displacement.</li>
        </ol>
        <p className="paragraph">
          Sequences meeting stability and non-hairpin criteria were considered valid for experimental use.
        </p>
        {/* Insert figures: Hairpin analysis, thermodynamic data */}
      {/* </section> */} 

      {/* <section id="section_5">
        <h2 className="sub-title">{section_5}</h2>
        <hr />
        <p className="paragraph">
          The finalized complementary sequences (APT-c) for each target protein are shown below, including variants with optimized displacement efficiency.
        </p>
        {/* Add complementary strand table for each target protein */}
        <p className="paragraph">
          For example, the complementary strands designed for ERBB2 included:
        </p>
        <ul>
          <li className="li-paragraph">TTTCGATTAAAGCTCGCCATCAAATCACACCGCTGCCCCCACA</li>
          <li className="li-paragraph">TTTCGATTAAAGCTCGCCATCAAATACACCGCTGCCCCCACA</li>
        </ul>
      {/* </section> */} 

      {/* <section id="section_6">
        <h2 className="sub-title">{section_6}</h2>
        <hr />
        <p className="paragraph">
          To evaluate the efficiency of target-mediated displacement of APT-c from the APT-APT-c complex, we defined the displacement efficiency (E) using the following model:
        </p>
        <p className="paragraph">
          <strong>Displacement Efficiency Formula:</strong>
        </p>
        <p className="paragraph">
          E = [T] / (KD′ + [APT−c])
        </p>
        <p className="paragraph">
          Where:
        </p>
        <ul>
          <li className="li-paragraph"><strong>KD′:</strong> Dissociation constant between APT and APT-c, derived from ΔG using KD′ = e^(ΔG / RT)</li>
          <li className="li-paragraph"><strong>[APT−c]:</strong> Concentration of the complementary strand, an experimentally controlled variable</li>
        </ul>
        <p className="paragraph">
          For ERBB2, we applied this model to compare different APT-c variants. Results showed that CS1 exhibited the highest displacement efficiency, validating it as the optimal choice for experimental use.
        </p>
        {/* Insert graphical result or equation visualization if needed */}
      {/* </section> */}
    </div>
  );
}
