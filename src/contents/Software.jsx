import React from 'react'

export function Software({props}) {
   const { section_1, section_2, section_3, section_4, section_5
    } = props;
  return (
    <div className='container my-4'>
    <div className="card mb-4">
  <div className="card-body ">
    <h1 className="text-2xl font-bold mb-4">Bioinformatics in Target Screening</h1>

    <p className="mb-4">
      In the exploration of non-invasive breast cancer detection, bioinformatics
      has provided data-driven approaches for target screening. By integrating
      multi-omics data with bioinformatics tools, we have precisely identified
      highly specific exosomal biomarkers associated with breast cancer,
      establishing a scientific foundation for subsequent experimental designs.
    </p>
    {/* 1 */}
    <h2 className="text-xl font-semibold mt-6 mb-3" id='section_1'>{section_1}</h2>
    <p className="mb-4">
      Traditional breast cancer detection relies on imaging and surgical biopsy,
      which suffer from limitations such as high invasiveness and heavy
      dependence on operator experience. To achieve non-invasive detection, we
      focus on exosomes — membrane vesicles secreted by cells carrying
      tumor-specific molecules — that serve as ideal liquid biopsy biomarkers.
      Bioinformatics plays a pivotal role here: by integrating tumor genomic
      data with exosome molecular databases, we screen for target proteins that
      are <em>highly expressed in breast cancer exosomes and closely associated
      with disease progression</em>, thereby addressing the problem of
      insufficient specificity and abundance.
    </p>

    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-1.webp" alt="The process of target protein screening" className="statsimg-fluid rounded mb-3 w-[70%]" />
      <p className="figure-caption">Figure 1. The process of target protein screening</p>
    </figure>

{/* 2 */}
    <h2 className="text-xl font-semibold mt-6 mb-3" id="section_2">{section_2}</h2>
{/* 2.1 */}
    <h3 className="text-lg font-medium mt-4 mb-2">Data Sources and Screening Strategies</h3>
    <p className="mb-3">
      We constructed a cross-screening framework of “tumor differential
      genes–extracellular enriched proteins” (Figure 1), with core data from two
      authoritative databases:
    </p>
    <ul className="list-disc list-inside mb-4 space-y-2">
      <li>
        <strong>TCGA database:</strong> Downloaded the breast cancer
        transcriptome data set (including tumor and normal tissue samples), and
        used DESeq2 tool for differential analysis. The threshold of |log₂FC| &gt;
        1 and adj p &lt; 0.05 was selected to screen out 8,104 differentially
        expressed genes (DEGs).
      </li>
      <li>
        <strong>ExoCarta database:</strong> Contains exosome-specific molecules
        of 10 organisms. We extracted the list of 6,663 human exosomal proteins
        as the reference standard.
      </li>
    </ul>
    <p className="mb-4">
      By matching gene names to obtain the intersection, the set of breast
      cancer–related proteins highly expressed on exosomes was finally obtained,
      providing a candidate pool for initial screening of targets.
    </p>

    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-2.webp" alt="Intersection genes" className="statsimg-fluid rounded mb-3 w-[50%]" />
      <p className="figure-caption">Figure 2. Intersection genes</p>
    </figure>

{/* 2.2 */}
    <h3 className="text-lg font-medium mt-4 mb-2">Identification of Core Targets</h3>
    <p className="mb-3">
      Based on the intersection results, combined with literature and expert
      consultation, we selected four core targets:
    </p>
    <ul className="list-disc list-inside mb-4 space-y-2">
      <li>
        <strong>ErbB2:</strong> Overexpressed due to gene amplification in
        breast cancer, classic biomarker for prognosis prediction and targeted
        therapy; exosome level reflects tumor invasiveness [1].
      </li>
      <li>
        <strong>CD274 (PD-L1):</strong> Immune checkpoint molecule that enables
        tumor immune escape; exosome expression correlates with immunotherapy
        response [2].
      </li>
      <li>
        <strong>EPCAM:</strong> Highly expressed in most breast cancers; a
        potential imaging biomarker [3].
      </li>
      <li>
        <strong>MMP9:</strong> Promotes tumor invasion/metastasis via
        extracellular matrix degradation; polymorphism linked to cancer risk
        [4].
      </li>
    </ul>

{/* 3 */}
    <h2 className="text-xl font-semibold mt-6 mb-3" id='section_3'>{section_3}</h2>

{/* 3.1 */}
    <h3 className="text-lg font-medium mt-4 mb-2">Verification of Differential Expression</h3>
    <p className="mb-4">
      Differential analysis confirmed overexpression of the four targets in
      breast cancer tissues. ErbB2 and CD274 showed log<sub>2</sub> fold changes
      of 2.8 and 2.1, supporting their specificity in exosome detection.
    </p>
    <div className='flex'>
    <figure>
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-3.webp" alt="Visualization of differential genes in TCGA-BRCA" className="statsimg-fluid rounded mb-3 w-[89%]"/>
    </figure>
    <figure>
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-4.webp" alt="Visualization of differential genes in TCGA-BRCA" className="statsimg-fluid rounded mb-3 w-[130%]"/>
    </figure>
    </div>
      <p className="figure-caption mb-5">Figure 3. Visualization of differential genes in TCGA-BRCA</p>

{/* 3.2 */}
    <h3 className="text-lg font-medium mt-4 mb-2">3.2 Functional Pathway Enrichment (KEGG & GO Analysis)</h3>
    <p className="mb-3">
      KEGG and GO enrichment analyses verified that targets are enriched in key
      breast cancer–related pathways such as PI3K–Akt signaling, ECM–receptor
      interaction, and proteoglycan pathways. GO enrichment highlighted the role
      of MMP9 in the collagen-containing extracellular matrix, confirming its
      detection value.
    </p>
    <div className='flex'>

    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-6.webp" alt="KEGG enrichment analysis" className="statsimg-fluid rounded mb-3 w-[78%]" />
    </figure>
    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-5.webp" alt="KEGG enrichment analysis" className="statsimg-fluid rounded mb-3 w-[100%]" />
    </figure>
    </div>
          <p className="figure-caption">Figure 4. KEGG enrichment analysis</p>
    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-7.webp" alt="GO enrichment analysis" className="statsimg-fluid rounded mb-3 w-[50%]" />
      <p className="figure-caption">Figure 5. GO enrichment analysis</p>
    </figure>
{/* 3.3 */}
    <h3 className="text-lg font-medium mt-4 mb-2">Clinical Significance Verification</h3>
    <h4 className="font-semibold mt-3 mb-2">(1) Survival Analysis</h4>
    <p className="mb-3">
      Kaplan–Meier analysis showed high CD274 and EPCAM expression correlated
      with poorer survival trends, supporting their prognostic potential.
    </p>
    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-8.webp" alt="Survival analysis curve" className="statsimg-fluid rounded mb-3 w-[70%]" />
        <p className="figure-caption">Figure 6. Survival analysis curve</p>
    </figure>

    <h4 className="font-semibold mt-3 mb-2">(2) ROC Curve Analysis</h4>
    <p className="mb-3">
      ROC analysis showed AUC values: ErbB2 (0.80), MMP9 (0.85), CD274 (0.81),
      EPCAM (0.82). Combined detection reached 0.96, proving superior diagnostic
      value.
    </p>
    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-9.webp" alt="ROC curve" className="statsimg-fluid rounded mb-3 w-[50%]" />
          <p className="figure-caption">Figure 7. ROC curve</p>
    </figure>

    <h4 className="font-semibold mt-3 mb-2">(3) Immune Infiltration Analysis</h4>
    <p className="mb-3">
      CD274 expression negatively correlated with CD8<sup>+</sup> T-cell
      infiltration (p ≤ 0.05), consistent with immune suppression function.
    </p>
    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-10.webp" alt="Immune infiltration" className="statsimg-fluid rounded mb-3 w-[50%]" />
          <p className="figure-caption">Figure 8. Immune infiltration</p>
    </figure>
{/* (4) ? */}
    <h4 className="font-semibold mt-3 mb-2">(4) Clinical Correlation Analysis</h4>
    <p className="mb-4">
      Target expression was linked with tumor stage, sex differences, and immune
      score. For example, ErbB2 was higher in advanced cases, while EPCAM was
      higher in female patients.
    </p>
    <figure className="my-4 text-center">
      <img src="https://static.igem.wiki/teams/5822/assets/software/img-11.webp" alt="Clinical correlation analysis" className="statsimg-fluid rounded mb-3 w-[80%]" />
          <p className="figure-caption">Figure 9. Clinical correlation analysis</p>
    </figure>

{/* 4 */}
    <h2 className="text-xl font-semibold mt-6 mb-3" id='section_4'>{section_4}</h2>
    <p className="mb-4">
      This project establishes a complete workflow of
      “data integration–target screening–multi-dimensional validation,” solving
      challenges in specificity, functional correlation, and clinical relevance.
      Bioinformatics here is not just a tool but the driving force ensuring that
      screened targets are biologically relevant, clinically valuable, and
      experimentally translatable.
    </p>
</div>
</div>
<div className="card mb-4">
  <div className="card-body references">
    <h1 id="section_5">{section_5}</h1>
    <p>
      [1]. Slamon DJ, Clark GM, Wong SG, et al. Human breast cancer: correlation of
      relapse and survival with amplification of the HER-2/neu oncogene.
      <em>Science</em>. 1987;235(4785):177–182. doi:10.1126/science.3798106
    </p>
    <p>
      [2]. Chen G, Huang AC, Zhang W, et al. Exosomal PD-L1 contributes to
      immunosuppression and is associated with anti-PD-1 response.
      <em>Nature</em>. 2018;560(7718):382–386.
      doi:10.1038/s41586-018-0392-8
    </p>
    <p>
      [3]. Mohiuddin TM, Sheng W, Zhang C, et al. Multiplex Immunofluorescence
      Reveals Therapeutic Targets EGFR, EpCAM, Tissue Factor, and TROP2 in
      Triple-Negative Breast Cancer. <em>Int J Mol Sci</em>. 2025;26(15):7430.
      doi:10.3390/ijms26157430
    </p>
    <p>
      [4]. Egeblad M, Werb Z. New functions for the matrix metalloproteinases in
      cancer progression. <em>Nat Rev Cancer</em>. 2002;2(3):161–174.
      doi:10.1038/nrc745
    </p>
  </div>
</div>

</div>
  )
}
