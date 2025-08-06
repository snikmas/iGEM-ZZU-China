import React from 'react'

export function Members() {
  return (<>
    <h1 className="title">Model</h1>
    <h3>Introduction</h3>
    <p>In our designed detection system, there are four different types of magnetic beads, each of which carries an aptamer specific to a target protein and its complementary strand. When the target protein enters the detection system, the corresponding complementary strand is competitively replaced. The complementary strand contains a complementary segment to crRNA, which can activate the CRISPR/Cas14a enzyme, cleave the fluorescent probe, and emit fluorescence. Therefore, in our system, we utilized molecular docking technology and some software to assist us in the design and establishment of the model.</p>
<h3>Fig1.Schematic diagram</h3>
<h3>Aptamer screening</h3>
<p>Aptamers are a class of single-stranded oligonucleotides obtained through in vitro screening techniques, capable of binding to target molecules (including proteins, small molecules, metal ions, etc.) with high affinity and specificity. Their binding ability stems from the unique three-dimensional structure formed by their self-folding, interacting with target molecules through non-covalent bonds such as hydrogen bonding, hydrophobic interactions, and van der Waals forces[1]。</p>
<p>&nbsp;</p>
<p><strong>Fig2. The structure of the aptamer</strong></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>In this study, the screening of aptamers was primarily accomplished by reviewing literature and comparing equilibrium dissociation constants (KD values). The specific process is as follows:</p>
<ol>
<li>Literature search: Using the keywords "aptamer + target protein name", search for relevant literature in databases such as PubMed and Web of Science, and collect reported aptamer information specific to the target protein.</li>
<li>Preliminary screening: Eliminate literature with duplicate reports, ambiguous sequences, or insufficient experimental verification, and retain literature containing aptamer sequences, KD values, and specificity verification results.</li>
<li>KD value comparison: The KD value is an important indicator reflecting the binding affinity between the aptamer and the target. The smaller the KD value, the higher the affinity. For the aptamers initially selected, those with smaller KD values (usually &lt;100 nM) are preferred.</li>
</ol>
<p>&nbsp;</p>
<p>Table 1 Aptamer sequence of target protein</p>
<table width="765">
<tbody>
<tr>
<td width="114">
<p>Target Protein</p>
</td>
<td width="533">
<p>Sequence(5&rsquo;-3&rsquo;)</p>
</td>
<td width="117">
<p>Reference</p>
</td>
</tr>
<tr>
<td width="114">
<p>CD63</p>
</td>
<td width="533">
<p>CACCCCACCTCGCTCCCGTGACACTAATGCTA</p>
</td>
<td width="117">
<p>[2]</p>
</td>
</tr>
<tr>
<td width="114">
<p>ERBB2</p>
</td>
<td width="533">
<p>GCAGCGGTGTGGGGGCAGCGGTGTGGGGGCAGCGGTGTGGGG</p>
</td>
<td width="117">
<p>[3]</p>
</td>
</tr>
<tr>
<td width="114">
<p>PD-L1</p>
</td>
<td width="533">
<p>ACGGGCCACATCAACTCATTGATAGACAATGCGTCCACTGCCCGT</p>
</td>
<td width="117">
<p>[4]</p>
</td>
</tr>
<tr>
<td width="114">
<p>EPCAM</p>
</td>
<td width="533">
<p>CACTACAGAGGTTGCGTCTGTCCCACGTTGTCATGGGGGGTTGGCCTGTTTT</p>
</td>
<td width="117">
<p>[5]</p>
</td>
</tr>
<tr>
<td width="114">
<p>MMP9</p>
</td>
<td width="533">
<p>TACGGCCGCACGAAAAGGTGCCCCATAACTCAATGCCGTA</p>
</td>
<td width="117">
<p>[6]</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>Molecular docking</h3>
<p>Molecular docking is a crucial method in drug design and biomolecular interaction research based on molecular structure. In aptamer research, it is used to simulate the interaction between aptamers and target molecules. We utilize molecular docking to predict the binding sites of aptamers and target proteins, aiding in the subsequent design of complementary strands and ensuring the efficiency of the substitution reaction.</p>
<ol>
<li>Preparation of 3D structure</li>
</ol>
<p>(1) Construction of aptamer structure</p>
<p>① Secondary structure prediction: Input the selected aptamer sequence into the UNAfold website, select the RNA folding module, and set the parameters as follows:</p>
<ul>
<li>Temperature: 37&deg;C (simulated physiological conditions)</li>
<li>Ion concentration: 140 mM Na⁺, 5 mM Mg&sup2;⁺ (simulating intracellular environment)</li>
<li>Folding algorithm: Using mfold default parameters</li>
<li>Output format: ct file (for tertiary structure modeling)</li>
</ul>
<p>&nbsp;</p>
<p><strong>Fig.3 The tertiary structure of nucleic acid aptamers</strong></p>
<p>&nbsp;</p>
<p>② Generation of tertiary structure: Upload the ct file output by UNAfold to RNA Composer, and select to generate the tertiary structure:</p>
<ul>
<li>Modeling accuracy: High accuracy</li>
<li>Optimization rounds: 100 cycles</li>
<li>Output format: PDB file</li>
</ul>
<p>(2) Acquisition of target protein structure</p>
<p>Retrieve the ID of the target protein from the UniProt database</p>
<p>Link to the PDB database via ID and download the corresponding crystal structure file</p>
<p><strong>Fig.4 Schematic diagram of protein structure</strong></p>
<p>&nbsp;</p>
<ol start="2">
<li>Molecular docking simulation</li>
</ol>
<p>Submit the preprocessed aptamer and target protein PDB files to the Z-DOCK Server:</p>
<p>Docking parameter settings:</p>
<ul>
<li>Docking type: Protein-RNA</li>
<li>Search space: Global docking</li>
<li>Sampling density: Medium (ensuring computational efficiency while covering the main binding modes)</li>
<li>Constraint conditions: None (no constraints are set in the initial screening stage)</li>
<li>Output: The server generates 2000 possible docking conformations, which are arranged in descending order based on the ZDOCK score</li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ol start="3">
<li>Result analysis and visualization (determination of docking sites)</li>
</ol>
<p>Download the top 10 docking conformation files, and open the file with the best docking activity for subsequent analysis.</p>
<p>&nbsp;</p>
<p>Visualize and analyze the docking results using PyMOL</p>
<p>&nbsp;</p>
<p><strong>Fig5. Schematic diagram of docking results of four target proteins</strong></p>
<p><strong>&nbsp;</strong></p>
<p>Table 2 Aptamer sequence of target protein</p>
<table width="765">
<tbody>
<tr>
<td width="114">
<p>Target Protein</p>
</td>
<td width="533">
<p>Sequence(5&rsquo;-3&rsquo;)</p>
</td>
<td width="117">
<p>Reference</p>
</td>
</tr>
<tr>
<td width="114">
<p>CD63</p>
</td>
<td width="533">
<p>CACCCCACCTCGCTCCCGTGACACTAATGCTA</p>
</td>
<td width="117">
<p>[2]</p>
</td>
</tr>
<tr>
<td width="114">
<p>ERBB2</p>
</td>
<td width="533">
<p>GCAGCGGTGTGGGGGCAGCGGTGTGGGGGCAGCGGTGTGGGG</p>
</td>
<td width="117">
<p>[3]</p>
</td>
</tr>
<tr>
<td width="114">
<p>PD-L1</p>
</td>
<td width="533">
<p>ACGGGCCACATCAACTCATTGATAGACAATGCGTCCACTGCCCGT</p>
</td>
<td width="117">
<p>[4]</p>
</td>
</tr>
<tr>
<td width="114">
<p>EPCAM</p>
</td>
<td width="533">
<p>CACTACAGAGGTTGCGTCTGTCCCACGTTGTCATGGGGGGTTGGCCTGTTTT</p>
</td>
<td width="117">
<p>[5]</p>
</td>
</tr>
<tr>
<td width="114">
<p>MMP9</p>
</td>
<td width="533">
<p>TACGGCCGCACGAAAAGGTGCCCCATAACTCAATGCCGTA</p>
</td>
<td width="117">
<p>[6]</p>
</td>
</tr>
</tbody>
</table>
<p><strong>&nbsp;</strong></p>
<p>&nbsp;</p>
<h3>Complementary strand design</h3>
<p><strong>Complementary strand design</strong></p>
<p>&nbsp;</p>
<p><strong>1.Determine the binding region:<br /> </strong>Through molecular docking (ZDOCK), obtain the docking sites between the target protein and the aptamer, and select a binding segment with a length of approximately 20 bp from the APT sequence to ensure that the marker can replace APT-c.</p>
<p>&nbsp;</p>
<p><strong>2.Generate the main sequence of APT-c via reverse complement:</strong></p>
<p>Subject the selected APT binding segment to reverse complement treatment, which serves as the first segment of the APT-c sequence. This segment is used for specific binding with APT.</p>
<p><strong>Fig6. APT&amp;APT-c Complementary Sequence</strong></p>
<ol start="3">
<li><strong>Splice functional fragments:</strong></li>
</ol>
<p>Splice an experimentally verified and structurally stable crRNA recognition segment after the first segment of APT-c, to ensure that the target site recognized by the Cas system can be completely exposed or constructed after APT binds to APT-c, thereby realizing the signal conversion function.</p>
<p><strong>Fig7. CrRNA Identification Sequence and PAM Sequence</strong></p>
<p>&nbsp;</p>
<p>Obtain the APT-c sequence</p>
<p><strong>Fig8. APT-c Sequence</strong></p>
<p>&nbsp;</p>
<p>Complementary strand analysis</p>
<p>&nbsp;</p>
<p>To ensure that APT-c possesses good binding ability and structural properties, we use Oligo7 software to analyze its thermodynamic stability and structural feasibility:</p>
<ol>
<li>Construct a complete structural template:<br /> Reverse complement the designed APT-c sequence, splice it to the end of the APT sequence, and form a complete "APT-APT-c" complex sequence to simulate its behavior in the actual binding state.</li>
<li>Input into the analysis platform:<br /> Input the complete sequence into Oligo7 software; in the "Primer Analysis" module, set the original APT sequence as the "forward primer" and APT-c as the "reverse primer", which simulates the primer pair when they bind as complementary strands.</li>
<li>Structural and thermodynamic evaluation:</li>
</ol>
<p>After clicking for analysis, the system will output the following key parameters:</p>
<p>&nbsp;</p>
<ul>
<li>Tm value (binding temperature): Used to evaluate the binding strength between APT and APT-c. The ideal range is usually set at 58~62℃, which can ensure stable binding while avoiding overly tight binding that would affect the dynamic response of the system.</li>
<li>&Delta;G value (free energy): Reflects the thermodynamic spontaneity of the binding reaction. The larger the absolute value, the more stable the binding; it is recommended that &Delta;G &le; -25 kcal/mol.</li>
<li>Hairpin structure analysis: Analyze the possible hairpin structures formed by APT and APT-c, as well as their structural stability. For APT-c, the formation of stable hairpin structures by itself should be avoided to prevent "self-sealing" in the reaction system, which would hinder its effective binding to APT.</li>
</ul>
<p><strong>Fig9. Her-2 APT&amp;APT-c Binding Site and </strong><strong>&Delta;</strong><strong>G,Tm Value</strong></p>
<p>&nbsp;</p>
<p><strong>Fig10. Her-2 APT</strong> <strong>Hairpin Structure and </strong><strong>&Delta;</strong><strong>G,Tm Value</strong></p>
<p><strong>Fig11. APT-c</strong> <strong>Hairpin Structure and </strong><strong>&Delta;</strong><strong>G,Tm Value</strong></p>
<p>&nbsp;</p>
<ol start="4">
<li>Comprehensive evaluation of the rationality of the design:
<ul>
<li>If the Tm values of APT and APT-c fall within the set range, and APT-c is not prone to forming hairpin structures, the design is judged to be effective and reliable and can be used in experiments；</li>
<li>If the Tm value is too low or APT-c has stable hairpin structures, it is necessary to reselect the binding region or adjust parameters such as sequence length and GC content to optimize structural performance.</li>
</ul>
</li>
</ol>
<p>&nbsp;</p>
<p>Table 3 Aptamer complementary strand</p>
<table width="648">
<tbody>
<tr>
<td width="114">
<p>Target Protein</p>
</td>
<td width="533">
<p>Sequence(5&rsquo;-3&rsquo;)</p>
</td>
</tr>
<tr>
<td rowspan="2" width="114">
<p>ERBB2</p>
</td>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATCACACCGCTGCCCCCACA</p>
</td>
</tr>
<tr>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATACACCGCTGCCCCCACA</p>
</td>
</tr>
<tr>
<td rowspan="2" width="114">
<p>PD-L1</p>
</td>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATTTGTCTATCAATGAGTTGATGTGGC</p>
</td>
</tr>
<tr>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATGGACGCATTGTCTATCAATGAG</p>
</td>
</tr>
<tr>
<td rowspan="2" width="114">
<p>MMP9</p>
</td>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATTTATGGGGCACCTTTTCGTG</p>
</td>
</tr>
<tr>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATGTTATGGGGCACCTTTTCGT</p>
</td>
</tr>
<tr>
<td rowspan="2" width="114">
<p>EPCAM</p>
</td>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATCCCATGACAACGTGGGACAG</p>
</td>
</tr>
<tr>
<td width="533">
<p>TTTCGATTAAAGCTCGCCATCAAATCATGACAACGTGGGACAGACGC</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>To quantify the competitive displacement efficiency(E) of the target protein (T) on the aptamer-complementary strand (APT-APT-c) complex, We have established the following formula:</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ul>
<li><em>K</em><em>D</em>&prime;：Dissociation constant of APT and APT-c（Deducing &Delta;G calculated by Oligo7：<em>K</em><em>D</em>&prime;=<em>e</em><sup>&Delta;</sup><em><sup>G</sup></em><sup>/(</sup><em><sup>RT</sup></em><sup>)</sup>）；</li>
<li>[<em>APT</em>&minus;<em>c</em>]：Complementary strand concentration (experimental controllable variable)。</li>
</ul>
<p>&nbsp;</p>
<p>The process of calculating substitution efficiency using competition substitution model takes ERBB2 as an example:</p>
<p>CS1 exhibits higher displacement efficiency, confirming it is the optimal choice.</p>
<h3>&nbsp;</h3>
<h3>Reference</h3>
<ul>
<li>Ji C, Wei J, Zhang L, et al. Aptamer-Protein Interactions: From Regulation to Biomolecular Detection. Chem Rev. 2023;123(22):12471-12506.</li>
<li>Song Z, Mao J, Barrero RA, Wang P, Zhang F, Wang T. Development of a CD63 Aptamer for Efficient Cancer Immunochemistry and Immunoaffinity-Based Exosome Isolation.&nbsp;Molecules. 2020;25(23):5585. Published 2020 Nov 27. doi:10.3390/molecules25235585</li>
<li>Yan, J., Bhadane, R., Ran, M.&nbsp;et al.&nbsp;Development of Aptamer-DNAzyme based metal-nucleic acid frameworks for gastric cancer therapy.&nbsp;Nat Commun&nbsp;15, 3684 (2024). <a href="https://doi.org/10.1038/s41467-024-48149-9">https://doi.org/10.1038/s41467-024-48149-9</a></li>
<li>Lai WY, Huang BT, Wang JW, Lin PY, Yang PC. A Novel PD-L1-targeting Antagonistic DNA Aptamer With Antitumor Effects.&nbsp;Mol Ther Nucleic Acids. 2016;5(12):e397. Published 2016 Dec 13. doi:10.1038/mtna.2016.102</li>
<li>Guan X, Zhao J, Sha Z, et al. CRISPR/Cas12a and aptamer-chemiluminescence based analysis for the relative abundance determination of tumor-related protein positive exosomes for breast cancer diagnosis.&nbsp;Biosens Bioelectron. 2024;259:116380. doi:10.1016/j.bios.2024.116380</li>
<li>Yu XA, Hu Y, Zhang Y, et al. Integrating the Polydopamine Nanosphere/Aptamers Nanoplatform with a DNase-I-Assisted Recycling Amplification Strategy for Simultaneous Detection of MMP-9 and MMP-2 during Renal Interstitial Fibrosis.&nbsp;ACS Sens. 2020;5(4):1119-1125. doi:10.1021/acssensors.0c00058</li>
</ul>
 </> )
}
