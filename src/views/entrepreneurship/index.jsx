import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';

const descriptionFigure1 = 'https://static.igem.wiki/teams/5822/newassets/entrepreneurship/entrepreneurshipfigure1.webp';
const descriptionFigure2 = 'https://static.igem.wiki/teams/5822/newassets/entrepreneurship/entrepreneurshipfigure2.webp';
const descriptionFigure3 = 'https://static.igem.wiki/teams/5822/newassets/entrepreneurship/entrepreneurshipfigure3.webp';
const descriptionFigure4 = 'https://static.igem.wiki/teams/5822/newassets/entrepreneurship/entrepreneurshipfigure4.webp';

const developmentPlanPdf = 'https://static.igem.wiki/teams/5822/newassets/entrepreneurship/text.pdf';

// 组件定义
const MainContent = () => (
  <>
    {/* 1 */}
    <div id="overview" className="view-content">
      <div className="content-header">
        <div className="h1">Introduction</div>
      </div>
      <div className="content-body">
        <p>
          <span>Breast cancer</span> is the <span>most common malignant tumor</span> among <span>women worldwide</span> <sup>[1]</sup>(Figure 1), with over <span>2.3 million new cases</span> annually. <span>China accounts for as much as 18.4%</span> <sup>[2]</sup>(approximately <span>420,000 cases</span>). <span>Breast cancer</span> ranks first in <span>mortality among female cancers</span>, with a global <span>age-standardized mortality rate (ASR World)</span> of <span>12.7 per 100,000</span> in 2022 (Figure 2), representing a <span>major health burden</span>. There is a significant gap between the <span>incidence and mortality rates</span> (46.8 vs. 12.7 per 100,000) (Figure 3), indicating that <span>diagnosis is key</span> to improving <span>survival</span>. However, current technologies face significant bottlenecks: traditional imaging (e.g., mammography) has <span>insufficient sensitivity</span> for <span>dense breast tissue</span><sup>[3]</sup> and is prone to <span>missed diagnoses</span>; tissue biopsy carries <span>invasive risks</span> and has <span>limited accessibility</span> at the <span>primary care level</span>; and liquid biopsy (e.g., ctDNA) still has <span>blind spots</span><sup>[4]</sup> in <span>early detection</span> and <span>key molecular subtyping</span> (such as HER2/ER/PR). <span>Exosomes</span>, which carry <span>breast cancer-specific markers</span> (e.g., HER2, CA15-3) as messengers of the <span>tumor microenvironment</span>, show <span>significantly elevated concentrations</span><sup>[5]</sup> in the blood of <span>stage I patients</span>, making them <span>ideal targets</span> for <span>early, non-invasive diagnosis</span>. However, there is an <span>urgent clinical need</span> for tools that can perform <span>on-site, rapid (&lt;1 hour), and highly specific (&gt;95%) multiplex detection</span>, in order to address the issue of <span>screening coverage being below 40%</span><sup>[6]</sup> among <span>high-risk populations</span>.
        </p>
      </div>
    </div>

    {/* 2 */}
    <div id="problem-description" className="view-content">
      <div className="content-header">
        <div className="h1">Problem Description</div>
      </div>

      {/* Problem Overview Subsection */}
      <section id="problem-overview" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Current Challenges in Breast Cancer Detection</div>
          </div>
          <div className="content-body">
            <p>
              <span>Breast cancer</span> is the <span>most common malignant tumor</span> among <span>women worldwide</span> <sup>[1]</sup>(Figure 1), with over <span>2.3 million new cases</span> annually. <span>China accounts for as much as 18.4%</span> <sup>[2]</sup>(approximately <span>420,000 cases</span>). <span>Breast cancer</span> ranks first in <span>mortality among female cancers</span>, with a global <span>age-standardized mortality rate (ASR World)</span> of <span>12.7 per 100,000</span> in 2022 (Figure 2), representing a <span>major health burden</span>.
            </p>

            <div className="figure-container">
              <div className="figure-item">
                <img src={descriptionFigure1} alt="Top 15 Most Common Cancers in Women Worldwide in 2022 by Incidence Rate" className="figure-image" />
                <div className="h4">Figure 1. Top 15 Most Common Cancers in Women Worldwide in 2022 by Incidence Rate</div>
              </div></div>
            <div className="figure-container">
              <div className="figure-item">
                <img src={descriptionFigure2} alt="Top 15 Causes of Cancer Death in Women Worldwide in 2022" className="figure-image" />
                <div className="h4">Figure 2. Top 15 Causes of Cancer Death in Women Worldwide in 2022</div>
              </div></div>
            <div className="figure-container">
              <div className="figure-item">
                <img src={descriptionFigure3} alt="Comparison of Incidence and Mortality Rates for the Top 15 Female Cancers Worldwide in 2022" className="figure-image" />
                <div className="h4">Figure 3. Comparison of Incidence and Mortality Rates for the Top 15 Female Cancers Worldwide in 2022</div>
              </div></div>

            <p>
              There is a significant gap between the <span>incidence and mortality rates</span> (46.8 vs. 12.7 per 100,000) (Figure 3), indicating that <span>diagnosis is key</span> to improving <span>survival</span>. However, current technologies face significant bottlenecks: traditional imaging (e.g., mammography) has <span>insufficient sensitivity</span> for <span>dense breast tissue</span><sup>[3]</sup> and is prone to <span>missed diagnoses</span>; tissue biopsy carries <span>invasive risks</span> and has <span>limited accessibility</span> at the <span>primary care level</span>; and liquid biopsy (e.g., ctDNA) still has <span>blind spots</span><sup>[4]</sup> in <span>early detection</span> and <span>key molecular subtyping</span> (such as HER2/ER/PR).
            </p>
          </div>
        </div>
      </section>

      {/* Product Introduction Subsection */}
      <section id="product-introduction" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Product Introduction</div>
          </div>
          <div className="content-body">
            <p>
              <span>EXOCRISPR Breast Cancer Exosome Detection Kit</span> is an <span>innovative molecular diagnostic tool</span> that integrates a <span>CRISPR aptamer-based recognition system</span> with a <span>quad-channel rapid test card</span>. The product utilizes the <span>CRISPR-Cas14a system</span><sup>[7]</sup> to identify <span>key biomarkers</span> (such as <span>ERBB2</span> and <span>EPCAM</span>) within <span>breast cancer-derived exosomes</span>, triggering the release of <span>signal molecules</span> during the <span>reaction process</span>. These signals are then visualized via a <span>multi-channel lateral flow assay</span>, enabling <span>simultaneous detection</span> of <span>multiple targets</span> with <span>colorimetric results</span> readable by the <span>naked eye</span> within <span>30 minutes</span>.
            </p>
            <p>
              The <span>quad-channel test card design</span> allows for the <span>simultaneous detection</span> of <span>four breast cancer-related markers</span> or a combination of <span>one quality control line plus four target channels</span>, significantly improving both <span>detection coverage</span> and <span>reliability</span>. The entire process requires <span>no expensive instruments</span>, is <span>easy to operate</span>, and needs only a <span>small sample volume</span> (10–20 μL of blood), making it suitable for <span>hospitals</span>, <span>primary care clinics</span>, and even <span>home use</span>.
            </p>
            <p>
              Compared to <span>traditional diagnostic methods</span>, the <span>EXOCRISPR kit</span> offers advantages including <span>non-invasiveness</span>, <span>high sensitivity</span>, <span>rapid turnaround</span><sup>[8]</sup><sup>[9]</sup>, and <span>modular scalability</span>. It also holds <span>strong potential</span> for expansion into <span>screening and companion diagnostics</span> for <span>other cancer types</span>, with <span>broad clinical and commercial prospects</span>.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 3 */}
    <div id="commercial-prospects" className="view-content">
      <div className="content-header">
        <div className="h1">Commercial Prospects</div>
      </div>

      <div className="figure-container">
        <div className="figure-item">
          <img src={descriptionFigure4} alt="Commercial Prospects" className="figure-image" />
          <div className="h4">Figure 4. Commercial Prospects</div></div>
      </div>

      {/* Market Overview Subsection */}
      <section id="market-overview" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Market Overview</div>
          </div>
          <div className="content-body">
            <p>
              <span>Breast cancer (BC)</span> is the <span>most common malignant tumor</span> among <span>women</span> (WHO 2024), with <span>incidence increasing significantly</span> with <span>age</span> and showing <span>marked regional variation</span>. In <span>China</span>, only <span>40% of newly diagnosed patients</span> are in the <span>early stages</span> (stage I–II), while more than <span>60% are already at advanced stages</span> (stage III–IV) at the time of diagnosis, resulting in the loss of <span>curative treatment opportunities</span> and a sharp decline in the <span>5-year survival rate</span> to below <span>50%</span>.
            </p>
            <p>
              <span>Breast cancer</span> poses a <span>serious threat</span> to <span>women's health</span>, consistently ranking as the <span>most prevalent malignant tumor</span> among <span>Chinese women</span>. With the acceleration of <span>population aging</span> and increasing awareness of <span>screening</span>, the <span>annual incidence</span> of <span>breast cancer</span> in <span>China</span> continues to rise at a rate of <span>3–4%</span><sup>[2]</sup>. Notably, the proportion of <span>Chinese patients</span> diagnosed at an <span>advanced stage</span> (35–40%) is significantly higher than in <span>developed countries</span> (e.g., &lt;20% in the U.S.).
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunities Subsection */}
      <section id="market-opportunities" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Market Opportunities</div>
          </div>
          <div className="content-body">
            <p>
              Due to the lack of <span>typical symptoms</span> in <span>early-stage breast cancer</span>, <span>clinical diagnosis</span> relies heavily on <span>imaging-based screening</span><sup>[3]</sup> (such as <span>mammography</span> and <span>ultrasound</span>) and <span>tissue biopsy</span>. However, <span>limited access to equipment</span>, <span>high testing costs</span>, and <span>invasive risks</span> have resulted in over <span>50% of high-risk populations</span> being unable to receive <span>regular screening</span><sup>[6]</sup>, thereby missing the <span>optimal treatment window</span>.
            </p>
            <p>
              Our team has developed the <span>EXOCRISPR Breast Cancer Exosome Detection Kit</span> in response to the <span>high incidence</span> of <span>breast cancer</span> among <span>Chinese women</span>, <span>lagging early screening capabilities</span>, and the reliance of <span>traditional diagnostic methods</span> on <span>expensive and difficult-to-deploy equipment</span>. This product integrates <span>CRISPR aptamer-based recognition</span> with <span>quad-channel rapid test card technology</span> to offer a <span>non-invasive, fast, and low-cost home-based early screening solution</span> for <span>breast cancer</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Subsection */}
      <section id="competitive-advantages" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Competitive Advantages</div>
          </div>
          <div className="content-body">
            <p>
              <span>EXOCRISPR</span> employs the <span>CRISPR-Cas14a system</span> to precisely recognize <span>breast cancer-associated exosomal biomarkers</span> (e.g., <span>ERBB2</span>, <span>EPCAM</span>) and uses a <span>quad-channel lateral flow card</span> for <span>multiplex colorimetric detection</span>, delivering <span>visually readable results</span> within <span>30 minutes</span>. Compared with <span>traditional antigen–antibody assays</span>, this product uses <span>aptamers as core recognition elements</span><sup>[9]</sup>, offering <span>higher affinity</span> and <span>stability</span>.
            </p>
            <p>
              The <span>quad-channel structure</span> enables <span>simultaneous detection</span> of <span>multiple biomarkers</span>, enhancing <span>detection comprehensiveness</span> and <span>clinical adaptability</span>, and fills the <span>technological gap</span> in <span>early breast cancer screening tools</span><sup>[7]</sup><sup>[8]</sup> for <span>primary care</span> and <span>home settings</span>.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* 4 */}
    <div id="market-analysis" className="view-content">
      <div className="content-header">
        <div className="h1">Market Analysis</div>
      </div>

      {/* SWOT Analysis Subsection */}
      <section id="swot-analysis" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">SWOT Analysis</div>
          </div>
          <div className="content-body">
            <div className="h3">Strengths</div>
            <p>
              The <span>EXOCRISPR platform</span> possesses significant <span>technological innovation advantages</span> and is among the few <span>early breast cancer screening tools</span> that integrate a <span>CRISPR aptamer-based recognition system</span> with a <span>quad-channel rapid test card</span>. The product enables <span>multi-target detection results</span> to be <span>visually read</span> within <span>30 minutes</span>, offering <span>high sensitivity</span> and <span>ease of use</span> without the need for <span>large-scale equipment</span>.
            </p>

            <div className="h3">Weaknesses</div>
            <p>
              As an <span>early-stage project</span>, <span>EXOCRISPR</span> has yet to establish <span>stable partnerships</span> with <span>major medical institutions</span> or <span>health examination platforms</span>, and <span>brand recognition</span> and <span>market trust</span> still need to be developed. Moreover, <span>CRISPR-based detection mechanisms</span> and <span>aptamer recognition</span> are still <span>emerging concepts</span><sup>[11]</sup><sup>[15]</sup>.
            </p>

            <div className="h3">Opportunities</div>
            <p>
              <span>China</span> has a <span>large population</span> at <span>high risk for breast cancer</span>, yet <span>screening rates</span> remain <span>low</span>, especially among <span>rural, community-based, and elderly populations</span>, leaving many <span>potential users</span> uncovered. With the continued advancement of <span>national policies</span> such as <span>Healthy China 2030</span> and <span>Two Cancers Screening</span><sup>[13]</sup><sup>[14]</sup>, there is an increasing <span>governmental demand</span> for <span>low-cost and widely applicable diagnostic tools</span>.
            </p>

            <div className="h3">Threats</div>
            <p>
              The <span>exosome detection field</span> is attracting a <span>large number of new entrants</span>, especially <span>established IVD companies</span> with <span>existing distribution channels</span> that are accelerating their deployment in this area. If <span>EXOCRISPR</span> fails to establish <span>clear technological differentiation</span> in <span>core targets</span> or <span>detection mechanisms</span>, it may face <span>price competition</span> and risk being marginalized in the market.
            </p>
          </div>
        </div>
      </section>

      {/* Porter's Five Forces Subsection */}
      <section id="porters-five-forces" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Porter's Five Forces Analysis</div>
          </div>
          <div className="content-body">
            <div className="h3">Industry Rivalry: Moderate to Low</div>
            <p>
              Although the <span>molecular diagnostics market</span> as a whole is <span>highly competitive</span>, <span>breast cancer early screening products</span> based on the integration of <span>exosomes</span> and <span>CRISPR aptamers</span> remain a <span>market gap</span>. <span>EXOCRISPR's product format</span> is <span>highly differentiated</span>, with its <span>multi-channel, rapid detection and instrument-free features</span> creating a <span>unique competitive position</span> distinct from <span>traditional imaging</span> and <span>cfDNA testing tools</span>.
            </p>

            <div className="h3">Threat of New Entrants: Moderate to High</div>
            <p>
              The <span>entry barriers</span> to <span>molecular diagnostics</span>, especially in the <span>POCT (point-of-care testing) segment</span>, are gradually lowering due to the availability of <span>generic raw materials</span> (such as <span>Cas proteins</span> and <span>colloidal gold test strips</span>). Although <span>EXOCRISPR</span> is actively building its <span>patent portfolio</span>, there remains a risk of <span>imitation</span> before <span>key intellectual property rights</span> are formally granted.
            </p>

            <div className="h3">Supplier Bargaining Power: Low</div>
            <p>
              The <span>core raw materials</span> used by <span>EXOCRISPR</span>—such as <span>synthetic aptamers</span>, <span>Cas14a protein</span>, <span>chromatography membranes</span>, and <span>colloidal gold nanoparticles</span>—are supplied by <span>multiple stable vendors</span>, offering <span>strong substitutability</span>. <span>Bulk purchasing</span> further enhances <span>bargaining power</span>, resulting in a relatively <span>healthy supply chain structure</span>.
            </p>

            <div className="h3">Buyer Bargaining Power: Moderate</div>
            <p>
              For <span>hospitals</span> and <span>third-party health examination institutions</span>, <span>product quality</span>, <span>detection accuracy</span>, and <span>ease of use</span> are <span>key considerations</span>. Although this group holds certain <span>bargaining power</span>, <span>EXOCRISPR's unique advantages</span> in <span>non-invasiveness</span>, <span>rapid multi-target screening</span>, and <span>usability</span> provide <span>strong pricing power</span> in the market.
            </p>

            <div className="h3">Threat of Substitutes: Moderate</div>
            <p>
              Current <span>breast cancer early screening</span> mainly relies on <span>imaging methods</span> such as <span>mammography</span>, <span>ultrasound</span>, and <span>MRI</span>, with <span>cfDNA</span> and <span>protein biomarker testing</span> also emerging. In comparison, <span>EXOCRISPR's unique combination</span> of <span>non-invasive, multi-target, and home-operable features</span> makes it difficult to be directly replaced by <span>existing methods</span>.
            </p>
          </div>
        </div>
      </section>
      {/* Porter's Five Forces Subsection */}
      <section id="porters-five-forces" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Porter's Five Forces Analysis</div>
          </div>
          <div className="content-body">
            <div className="h3">Industry Rivalry: Moderate to Low</div>
            <p>
              Although the <span>molecular diagnostics market</span> as a whole is <span>highly competitive</span>, <span>breast cancer early screening products</span> based on the integration of <span>exosomes</span> and <span>CRISPR aptamers</span> remain a <span>market gap</span>. <span>EXOCRISPR's product format</span> is <span>highly differentiated</span>, with its <span>multi-channel, rapid detection and instrument-free features</span> creating a <span>unique competitive position</span> distinct from <span>traditional imaging</span> and <span>cfDNA testing tools</span>.
            </p>

            <div className="h3">Threat of New Entrants: Moderate to High</div>
            <p>
              The <span>entry barriers</span> to <span>molecular diagnostics</span>, especially in the <span>POCT (point-of-care testing) segment</span>, are gradually lowering due to the availability of <span>generic raw materials</span> (such as <span>Cas proteins</span> and <span>colloidal gold test strips</span>). Although <span>EXOCRISPR</span> is actively building its <span>patent portfolio</span>, there remains a risk of <span>imitation</span> before <span>key intellectual property rights</span> are formally granted.
            </p>

            <div className="h3">Supplier Bargaining Power: Low</div>
            <p>
              The <span>core raw materials</span> used by <span>EXOCRISPR</span>—such as <span>synthetic aptamers</span>, <span>Cas14a protein</span>, <span>chromatography membranes</span>, and <span>colloidal gold nanoparticles</span>—are supplied by <span>multiple stable vendors</span>, offering <span>strong substitutability</span>. <span>Bulk purchasing</span> further enhances <span>bargaining power</span>, resulting in a relatively <span>healthy supply chain structure</span>.
            </p>

            <div className="h3">Buyer Bargaining Power: Moderate</div>
            <p>
              For <span>hospitals</span> and <span>third-party health examination institutions</span>, <span>product quality</span>, <span>detection accuracy</span>, and <span>ease of use</span> are <span>key considerations</span>. Although this group holds certain <span>bargaining power</span>, <span>EXOCRISPR's unique advantages</span> in <span>non-invasiveness</span>, <span>rapid multi-target screening</span>, and <span>usability</span> provide <span>strong pricing power</span> in the market.
            </p>

            <div className="h3">Threat of Substitutes: Moderate</div>
            <p>
              Current <span>breast cancer early screening</span> mainly relies on <span>imaging methods</span> such as <span>mammography</span>, <span>ultrasound</span>, and <span>MRI</span>, with <span>cfDNA</span> and <span>protein biomarker testing</span> also emerging. In comparison, <span>EXOCRISPR's unique combination</span> of <span>non-invasive, multi-target, and home-operable features</span> makes it difficult to be directly replaced by <span>existing methods</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Macro Environment Analysis Subsection */}
      <section id="macro-environment-analysis" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Macro Environment Analysis</div>
          </div>
          <div className="content-body">
            <div className="h3">Political</div>
            <p>
              <span>China's national strategy</span> "<span>Healthy China 2030</span>" encourages the development of <span>innovative tumor screening technologies</span><sup>[13]</sup><sup>[25]</sup>. The "<span>Two Cancers Screening</span>" program, led by the <span>National Health Commission</span>, is continuously expanding its <span>coverage</span>. <span>EXOCRISPR</span> aligns with <span>national policy directives</span> emphasizing <span>accessibility at the grassroots level</span>, <span>non-invasiveness</span>, and <span>convenience</span>. Meanwhile, with the <span>National Medical Products Administration (NMPA)</span> opening a <span>green channel</span> for <span>innovative medical devices</span>, <span>EXOCRISPR</span> is expected to enter the <span>priority review sequence</span>, improving <span>registration efficiency</span>.
            </p>

            <div className="h3">Economic</div>
            <p>
              With the improvement of <span>women's health awareness</span> and increased <span>consumer spending power</span>, expenditures on <span>health management</span> steadily account for a <span>larger share</span> of <span>household budgets</span>. The <span>middle class</span> and <span>aging population</span> constitute the <span>primary payers</span> for <span>breast cancer early screening</span><sup>[26]</sup>. Additionally, the <span>CRISPR platform</span> offers <span>good scalability</span>, which will significantly <span>reduce testing costs</span> and enable <span>large-scale profitability</span> as <span>production scales up</span>. Attention should also be paid to the impact of <span>raw material price fluctuations</span> and <span>outsourcing costs</span> of <span>technical services</span> on <span>early-stage financial models</span>.
            </p>

            <div className="h3">Social</div>
            <p>
              <span>Society's attention</span> to <span>women's breast health</span> has significantly increased, promoting <span>widespread awareness</span> of <span>breast cancer early screening</span>. <span>Public acceptance</span> of <span>CRISPR technology</span> is also rising, especially as <span>CRISPR-based rapid diagnostic solutions</span> were validated by the <span>market</span> during the <span>COVID-19 pandemic</span>. Furthermore, <span>home self-testing</span> is emerging as a <span>new lifestyle trend</span>, aiding the <span>promotion</span> of <span>EXOCRISPR</span>. However, ongoing <span>health education</span> is necessary to <span>reduce fear</span> and <span>misunderstandings</span> about <span>gene technologies</span> among <span>grassroots populations</span>.
            </p>

            <div className="h3">Technological</div>
            <p>
              In recent years, advancements in <span>CRISPR systems</span>, <span>aptamer engineering</span>, and <span>POCT device technologies</span> have provided <span>strong support</span> for the <span>realization</span> of our <span>platform</span><sup>[10]</sup><sup>[11]</sup><sup>[27]</sup>. <span>Technological breakthroughs</span> such as <span>automated chromatography manufacturing</span>, <span>chip-based detection platforms</span>, and <span>cost-effective Cas protein expression</span> and <span>synthesis optimization</span> will continue to help <span>EXOCRISPR</span> <span>reduce costs</span> and <span>improve efficiency</span>. We also plan to build an <span>aptamer database</span> and <span>signal amplification model algorithm library</span> to enhance the <span>platform's continuous optimization capabilities</span>.
            </p>

            <div className="h3">Environmental</div>
            <p>
              The <span>EXOCRISPR platform</span> does not rely on <span>radioactive sources</span> or <span>cold-chain transportation</span>. The <span>test kit</span> is <span>easy to standardize</span> in <span>packaging</span> and can be <span>disposed of</span> in an <span>environmentally friendly manner</span>, embodying <span>green and sustainable characteristics</span><sup>[28]</sup>. As the <span>global medical industry</span> increasingly emphasizes <span>sustainability</span>, we have the <span>opportunity</span> to <span>integrate environmental concepts</span> into <span>product design</span> and <span>marketing</span>, creating <span>differentiated selling points</span>. Future plans include <span>incorporating eco-friendly design</span> into <span>packaging materials</span> and <span>production processes</span> to build a <span>green diagnostic brand</span>.
            </p>

            <div className="h3">Legal</div>
            <p>
              The <span>biological materials</span>, <span>device production</span>, and <span>diagnostic functions</span> involved in the <span>EXOCRISPR platform</span> must comply with the <span>National Medical Products Administration's</span> registration management regulations for <span>in vitro diagnostic products</span>. We will strictly adhere to the <span>Medical Device Product Registration Management Measures</span>, <span>CRISPR technology ethical requirements</span>, and <span>aptamer synthesis and usage standards</span> to ensure <span>legal compliance</span>. Meanwhile, the <span>team</span> has begun <span>patent layout</span> and <span>technology confidentiality strategies</span> to <span>protect core intellectual property</span> and <span>guard against infringement</span> and <span>compliance risks</span>.
            </p>
          </div>
        </div>
      </section>


    </div>

    {/* 5 */}
    <div id="supply-chain" className="view-content">
      <div className="content-header">
        <div className="h1">Supply Chain</div>
      </div>
      <div className="content-body">
        <p>
          The success of the <span>EXOCRISPR project</span> depends on a <span>robust, efficient, and scalable supply chain system</span>. We are committed to building a <span>closed-loop process</span> covering <span>raw material procurement</span>, <span>reagent production</span>, <span>product assembly</span>, <span>quality control</span>, and <span>end distribution</span>, ensuring <span>product quality</span>, <span>timely delivery</span>, and <span>cost control</span>, thereby providing <span>solid backend support</span> for <span>early breast cancer screening</span>.
        </p>
      </div>

      {/* Raw Material Procurement Subsection */}
      <section id="raw-material-procurement" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Raw Material Procurement</div>
          </div>
          <div className="content-body">
            <p>
              To achieve <span>efficient, stable, and scalable production</span> of the <span>CRISPR breast cancer exosome detection kit</span>, <span>core raw materials</span> will be <span>procured centrally</span> from <span>specialized companies</span> with <span>mature processes</span> and <span>stable supply capabilities</span>. <span>Cas14a enzyme</span> will be <span>custom-produced</span> by <span>biotech companies</span> experienced in <span>recombinant protein expression</span> and <span>purification</span> to ensure <span>high activity</span> and <span>stability</span> in the <span>reaction system</span><sup>[10]</sup><sup>[21]</sup>. <span>DNA aptamers</span> and <span>nucleic acid probes</span> will be <span>custom-synthesized</span> by <span>high-throughput oligonucleotide synthesis companies</span> according to <span>sequences</span>, meeting requirements for <span>sequence purity</span> and <span>batch consistency</span>.
            </p>
            <p>
              The <span>key material</span> for <span>signal amplification</span>—<span>gold nanoparticles</span>—will be <span>uniform in size</span> and <span>surface-active</span>, using <span>modified gold nanoparticles</span> conjugated with <span>aptamers</span> to ensure <span>stable coupling</span> and <span>visual sensitivity</span> in the <span>chromatographic system</span><sup>[9]</sup><sup>[22]</sup>. <span>Components</span> of the <span>test strip</span>, including <span>nitrocellulose membranes</span>, <span>sample pads</span>, and <span>absorption pads</span>, will be <span>procured</span> from <span>companies</span> experienced in <span>manufacturing medical device consumables</span>, supporting <span>custom specifications</span> and ensuring <span>efficient batch assembly</span>.
            </p>
            <p>
              <span>Auxiliary reagents</span> such as <span>buffers</span>, <span>lysis solutions</span>, and <span>blocking agents</span> will be <span>sourced</span> from <span>biological reagent companies</span> with <span>medical device registration experience</span> to guarantee <span>biocompatibility</span> and <span>reaction stability</span> during the <span>detection process</span>. All <span>raw materials</span> will undergo <span>standardized quality inspections</span> before entering <span>production</span>, with <span>raw material records</span> and <span>supplier traceability mechanisms</span> established to ensure <span>full-chain quality control</span> from <span>source</span> to <span>end product</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Production and Manufacturing Subsection */}
      <section id="production-manufacturing" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Production and Manufacturing</div>
          </div>
          <div className="content-body">
            <p>
              The <span>production</span> of the <span>EXOCRISPR breast cancer exosome detection kit</span> will be carried out in <span>facilities</span> meeting <span>cleanroom standards</span> and <span>qualified</span> for <span>medical device assembly</span>. The <span>entire production line</span> covers <span>key processes</span> including <span>raw material dispensing</span>, <span>test strip assembly</span>, <span>reagent preloading</span>, <span>packaging</span>, and <span>quality control</span> prior to <span>shipment</span>. The <span>production process</span> employs <span>semi-automation</span> to improve <span>efficiency</span> and <span>consistency</span> of each <span>test kit</span>.
            </p>
            <p>
              During <span>reagent preparation</span>, <span>Cas14a enzyme</span>, <span>aptamers</span>, and <span>gold nanoparticles</span> will undergo <span>activity validation</span>, <span>concentration adjustment</span>, and <span>conjugation reactions</span> respectively, then <span>loaded</span> into <span>dry films</span> or <span>reagent wells</span> according to <span>preset ratios</span>. These, combined with <span>multi-channel colloidal gold chromatographic strips</span>, are <span>embedded</span> into the <span>test card housing</span> to complete the <span>core detection module assembly</span>.
            </p>
            <p>
              To ensure <span>reaction performance</span> and <span>user experience</span>, <span>assembled kits</span> will be <span>fully sealed</span>, <span>desiccants added</span>, and undergo <span>functional spot checks</span> including <span>flow rate testing</span>, <span>color development sensitivity</span>, and <span>batch consistency verification</span>. The <span>production environment</span> will strictly control <span>temperature</span> and <span>humidity</span> and implement <span>biological contamination prevention measures</span>. <span>Key parameters</span> (such as <span>reagent pH</span>, <span>particle distribution</span>, and <span>packaging tightness</span>) will be incorporated into an <span>online quality control system</span> to ensure <span>batch stability</span> and <span>detection accuracy</span>. Future <span>scaling</span> will be facilitated through <span>modular production line expansions</span> to quickly meet <span>clinical</span> and <span>market demands</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution Strategy Subsection */}
      <section id="distribution-strategy" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Distribution Strategy</div>
          </div>
          <div className="content-body">
            <p>
              The <span>EXOCRISPR product distribution system</span> will adopt a <span>dual-channel strategy</span>, balancing <span>professional clinical use</span> and <span>consumer home testing needs</span> to achieve <span>flexible</span> and <span>efficient market coverage</span>. For the <span>B2B channel</span>, we will promote <span>standardized kits</span> to <span>hospitals</span>, <span>primary healthcare institutions</span>, <span>physical examination centers</span>, and <span>third-party testing laboratories</span>, leveraging <span>regional cooperation models</span> and <span>procurement mechanisms</span> to enable <span>rapid adoption</span> and <span>large-scale application</span>.
            </p>
            <p>
              Meanwhile, <span>collaboration</span> with <span>local public health programs</span> will support <span>technological upgrades</span> in <span>grassroots "two-cancer screening" initiatives</span>. For the <span>B2C channel</span>, <span>platform-based operations</span> will be the <span>main approach</span>, with <span>products</span> listed on <span>digital healthcare platforms</span> such as <span>JD Health</span> and <span>AliHealth</span>, alongside access via <span>WeChat mini-program malls</span>, providing <span>convenient purchase channels</span> and <span>product usage support</span><sup>[29]</sup>.
            </p>
            <p>
              All <span>end products</span> will be accompanied by <span>illustrated</span> or <span>video operation instructions</span>, with optional <span>online consultation</span> and <span>remote interpretation services</span> to assist <span>users</span> with <span>timely medical advice</span> and <span>referrals</span>. The <span>sales team</span>, composed of <span>medical professionals</span>, will focus on establishing <span>stable partnerships</span> with <span>oncology specialists</span>, <span>community health services</span>, and <span>women's health organizations</span>. <span>Backend systems</span> will be based on <span>modern supply chain platforms</span> supporting <span>distribution data tracking</span>, <span>order fulfillment</span>, <span>customer feedback analysis</span>, and <span>dynamic inventory management</span>, constructing an <span>integrated operation loop</span> covering "<span>production—distribution—service</span>."
            </p>
          </div>
        </div>
      </section>

      {/* Warehousing and Logistics Subsection */}
      <section id="warehousing-logistics" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Warehousing and Logistics</div>
          </div>
          <div className="content-body">
            <p>
              Although <span>EXOCRISPR kits</span> exhibit <span>good stability</span> at <span>room temperature</span>, to ensure <span>quality reliability</span> during <span>transport</span> and <span>storage</span>, we will establish <span>dedicated warehouses</span> at <span>production sites</span> that meet <span>medical device storage standards</span>, with <span>comprehensive temperature</span> and <span>humidity control</span> and <span>quality traceability systems</span>. Upon <span>production completion</span>, <span>kits</span> will be <span>sealed</span> in <span>aluminum foil packaging</span> containing <span>desiccants</span> to prevent <span>moisture interference</span>.
            </p>
            <p>
              <span>Warehousing areas</span> will be equipped with <span>automatic temperature</span> and <span>humidity monitoring systems</span>, maintaining <span>20–25°C</span> and <span>relative humidity below 60%</span> year-round, with <span>emergency ventilation</span> and <span>dehumidification equipment</span> to handle <span>extreme weather</span>. All <span>inbound</span> and <span>outbound operations</span> will be managed via <span>barcode systems</span> to fully record each <span>batch's source</span>, <span>production date</span>, <span>shelf life</span>, and <span>distribution</span>.
            </p>
            <p>
              <span>Logistics</span> will partner with <span>third-party medical device-qualified carriers</span> such as <span>SF Pharmaceutical</span> and <span>JD Logistics</span>, employing <span>regional warehousing</span> and <span>intelligent order allocation</span> to enhance <span>logistics efficiency</span> and <span>shorten delivery times</span>. For <span>high-temperature</span> or <span>remote areas</span>, <span>cold chain transport options</span> will be selected based on <span>climate</span> and <span>transit duration</span> to ensure <span>kits arrive</span> under <span>optimal conditions</span>, thereby <span>safeguarding detection sensitivity</span> and <span>accuracy</span> at the <span>end user</span>.
            </p>
          </div>
        </div>
      </section>
    </div>


    {/* 6 */}
    <div id="financial-analysis" className="view-content">
      <div className="content-header">
        <div className="h1">Financial Analysis</div>
      </div>

      {/* Financial Objectives Subsection */}
      <section id="financial-objectives" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Financial Objectives</div>
          </div>
          <div className="content-body">
            <p>
              This project aims to advance the <span>"EXOCRISPR Breast Cancer Exosome Quadruple Detection Platform"</span> from the <span>laboratory validation stage</span> to <span>small-scale market application</span> within <span>1–2 years</span>, completing <span>product closed-loop validation</span> and <span>initial sales conversion</span>. The total projected investment is <span>RMB 800,000</span>, covering <span>R&D</span>, <span>pilot production</span>, <span>market testing</span>, <span>registration filing</span>, and <span>preliminary operations</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Model Subsection */}
      <section id="revenue-model" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Revenue Model</div>
          </div>
          <div className="content-body">
            <ul>
              <li><span>Test kit sales</span>: Providing <span>quadruple detection cards</span> to <span>physical examination centers</span>, <span>hospitals</span>, and <span>home users</span>;</li>
              <li><span>Detector sales or leasing</span>: <span>Low-cost detectors</span> to boost <span>reagent repurchase rates</span>;</li>
              <li><span>Customized research services</span>: Offering <span>biomarker detection customization</span> for <span>research institutions</span> and <span>oncology labs</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Structure Subsection */}
      <section id="cost-structure" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Cost Structure and Calculation Basis</div>
          </div>
          <div className="content-body">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Cost Category</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Raw Material Costs</td>
                    <td>CRISPR reaction system, aptamer probes, gold nanoparticles, test strip membranes, plastic casing, etc.</td>
                  </tr>
                  <tr>
                    <td>Production Costs</td>
                    <td>Assembly of quadruple rapid test cards, integration and packaging of detectors<sup>[26]</sup></td>
                  </tr>
                  <tr>
                    <td>Marketing Expenses</td>
                    <td>Sample distribution, promotional materials, channel development support</td>
                  </tr>
                  <tr>
                    <td>Registration & Compliance Fees</td>
                    <td>Clinical ethics applications, filing applications, expert consultancy support<sup>[30]</sup></td>
                  </tr>
                  <tr>
                    <td>Personnel & Operating Expenses</td>
                    <td>Core R&D team, project operational support</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Unit Cost Calculation Formula:</strong>
            </p>
            <p>
              <span>Unit Cost = Total Cost / Output Quantity</span>
            </p>
            <p>
              For example, if <span>5,000 kits</span> are produced per batch with a <span>total cost</span> of <span>RMB 400,000</span>, the <span>unit cost</span> is approximately <span>RMB 80 per kit</span>.
            </p>
            <p>
              <strong>Total Cost Model:</strong>
            </p>
            <p>
              <span>Total Cost = Fixed Cost + (Unit Variable Cost × Production Volume)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Budget Plan Subsection */}
      <section id="budget-plan" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Preliminary Budget Plan (Unit: RMB 10,000)</div>
          </div>
          <div className="content-body">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Timeframe</th>
                    <th>Fund Usage</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Technology Integration and Prototype Optimization</td>
                    <td>2025 Q3–Q4</td>
                    <td>Aptamer synthesis, colloidal gold labeling, card casing design</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Pilot Production and Testing</td>
                    <td>2026 Q1–Q2</td>
                    <td>Small batch quadruple card pilot production, hospital and physical center cooperation validation</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Market Expansion and Iterative Optimization</td>
                    <td>2026 Q3</td>
                    <td>Product feedback collection and upgrades</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Registration and Initial Promotion</td>
                    <td>2026 Q4</td>
                    <td>Product filing process, promotional materials production</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Total Investment</td>
                    <td>–</td>
                    <td>–</td>
                    <td>80</td>
                  </tr>
                  <tr>
                  <td><strong></strong></td>
                    <td></td>
                    <td></td>
                    <td><strong></strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Profit Forecast Subsection */}
      <section id="profit-forecast" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Profit and Loss Forecast (2026–2027)</div>
          </div>
          <div className="content-body">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Projected Sales Revenue (RMB 10,000)</th>
                    <th>Cost Expenses (RMB 10,000)</th>
                    <th>Estimated Net Profit (RMB 10,000)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2026</td>
                    <td>30</td>
                    <td>40</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>2027</td>
                    <td>60</td>
                    <td>40</td>
                    <td>+20</td>
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
          </div>
        </div>
      </section>

      {/* Profitability Analysis Subsection */}
      <section id="profitability-analysis" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Profitability and Break-even Analysis</div>
          </div>
          <div className="content-body">
            <p>
              <strong>Break-even Point Calculation:</strong>
            </p>
            <p>
              <span>Break-even Volume = Fixed Cost / (Unit Price - Unit Variable Cost)</span>
            </p>
            <p>
              Assuming a <span>unit price</span> of <span>RMB 120 per kit</span>, <span>unit variable cost</span> of <span>RMB 80</span>, and <span>fixed cost</span> of <span>RMB 200,000</span>:
            </p>
            <p>
              <span>Break-even Volume = 200,000 / (120 - 80) = 5,000 kits</span>
            </p>
            <p>
              <strong>Return on Investment (ROI):</strong>
            </p>
            <p>
              <span>ROI = (Net Profit / Total Investment) × 100%</span>
            </p>
            <p>
              If <span>net profit</span> is <span>RMB 20,000</span> and <span>total investment</span> is <span>RMB 800,000</span>:
            </p>
            <p>
              <span>ROI = (20,000 / 800,000) × 100% = 2.5%</span>
            </p>
            <p>
              <strong>Payback Period:</strong>
            </p>
            <p>
              <span>Payback Period = Initial Investment / Annual Net Profit = 800,000 / 20,000 = 4 years</span>
            </p>
            <p>
              <strong>Note:</strong> The project expects to <span>break even</span> by <span>2027</span> and gradually generate <span>positive cash flow</span> thereafter.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Plan Subsection */}
      <section id="financing-plan" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Financing and Fund Utilization Plan</div>
          </div>
          <div className="content-body">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Funding Source</th>
                    <th>Proportion</th>
                    <th>Use Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Startup Competitions / Research Grants</td>
                    <td>30%</td>
                    <td>Technology validation, experimental materials</td>
                  </tr>
                  <tr>
                    <td>Angel Investment / Incubators</td>
                    <td>40%</td>
                    <td>Small batch pilot production and market launch</td>
                  </tr>
                  <tr>
                    <td>University Innovation Base / Undergraduate Innovation Fund</td>
                    <td>20%</td>
                    <td>Pilot scenarios, promotion</td>
                  </tr>
                  <tr>
                    <td>Policy Subsidies / Medical Public Welfare Support</td>
                    <td>10%</td>
                    <td>Compliance registration, expert consulting fees</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      {/* Profit Path Subsection */}
      <section id="profit-path" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Profit Path Outlook</div>
          </div>
          <div className="content-body">
            <ul>
              <li><span>Test kit repurchase</span>: Establish a <span>long-term repurchase model</span> to create a <span>closed cash flow loop</span>;</li>
              <li><span>Product portfolio upgrade</span>: Expand <span>indications</span> (e.g., <span>companion diagnostics</span> for <span>breast cancer</span>) or <span>other cancer types</span>;</li>
              <li><span>Detector module licensing</span>: <span>CRISPR recognition modules</span> can be <span>licensed</span> to <span>research institutions</span> and <span>companies</span>;</li>
              <li><span>Integration with health management platforms</span>: Collaborate with <span>internet hospitals</span> or <span>insurance companies</span> for <span>chronic disease screening</span>.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    {/* 7 */}
    <div id="intellectual-property" className="view-content">
      <div className="content-header">
        <div className="h1">Intellectual Property</div>
      </div>
      <div className="content-body">
        <p>
          Although some <span>basic biological materials</span> in our <span>detection platform</span> (such as <span>breast cancer exosome markers</span> <span>ERBB2</span> and <span>EPCAM</span>) are <span>naturally occurring</span> and therefore not <span>patentable by themselves</span>, our <span>innovative aptamer construction methods</span> and <span>integrated detection structures</span> provide <span>multiple viable avenues</span> for <span>intellectual property protection</span>, which are the <span>cornerstone</span> of <span>successful product commercialization</span>.
        </p>
        <p>
          One of our <span>key components</span> is the <span>high-affinity aptamers</span> (e.g., <span>ERBB2-APT</span>, <span>EPCAM-APT</span>) screened by <span>SELEX technology</span> and <span>optimized at specific sites</span>, specifically designed to recognize <span>particular markers</span> in <span>breast cancer exosomes</span><sup>[11]</sup><sup>[12]</sup>. While the <span>basic sequences</span> may be sourced from <span>public databases</span>, our <span>structurally re-engineered</span> and <span>affinity-screened sequences</span> exhibit <span>differentiated binding efficiency</span> and <span>specificity</span>, providing a <span>foundation</span> for applying for <span>use patents</span> on their <span>functional combinations</span>.
        </p>
        <p>
          Our <span>team</span> has also developed a <span>visual detection platform</span> integrating a <span>CRISPR-Cas14a-driven signal amplification module</span> with a <span>four-channel colloidal gold lateral flow card structure</span>, capable of detecting <span>multiple breast cancer markers</span> within <span>30 minutes</span> without any <span>instruments</span><sup>[7]</sup><sup>[8]</sup>. In this <span>design</span>, the <span>optimized positions</span> of the <span>signal transduction module</span>, <span>sample release structure</span>, and <span>signal readout window</span>, along with the <span>chromatographic path combination</span>, provide <span>opportunities</span> for <span>device</span> and <span>process patent applications</span><sup>[12]</sup><sup>[24]</sup>. Additionally, we are preparing to file <span>patent applications</span> to protect our <span>coupling strategy</span> between <span>aptamers</span> and <span>CRISPR</span>, which enables <span>multiplex parallel amplification reactions</span> to enhance <span>signal comparison</span> and <span>interference suppression capabilities</span>.
        </p>
        <p>
          Although some <span>reaction components</span> (such as <span>Cas14a enzyme</span> or <span>breast cancer markers</span>) are <span>publicly known</span>, our <span>core innovations</span> lie in their <span>system integration</span>, <span>fine-tuning logic</span> of the <span>aptamer screening process</span>, and the <span>modular architecture</span> of the <span>four-channel detection card</span>. These constitute the <span>main content</span> of our <span>utility model</span> and <span>invention patent submissions</span> to the <span>National Intellectual Property Office</span>.
        </p>
        <p>
          Currently, we are in the "<span>patent application preparation</span>" phase, with all <span>experimental data</span> and <span>core technical details</span> being <span>organized</span>. We expect to submit at least <span>one formal patent application</span> within the next <span>6–9 months</span>. During this <span>period</span>, we adopt a <span>confidentiality-first, disclosure-later strategy</span>, and maintain <span>version control</span> of <span>key materials</span> and <span>designs</span> through an <span>internal numbering system</span> to ensure <span>continuity</span> and <span>legal traceability</span> of <span>intellectual property</span>.
        </p>
        <p>
          Before the <span>formal acceptance</span> of <span>patent applications</span>, <span>multiple technical modules</span> of our <span>platform</span> continue to enjoy <span>priority protection</span> under the "<span>first disclosure principle</span>," ensuring our <span>technological lead</span> when facing <span>potential competitors</span>.
        </p>
      </div>
    </div>

    {/* 8 */}
    <div id="stakeholder-analysis" className="view-content">
      <div className="content-header">
        <div className="h1">Stakeholder Analysis</div>
      </div>
      <div className="content-body">
        <p>
          The <span>core goal</span> of the <span>EXOCRISPR project</span> is to develop a <span>low-cost</span>, <span>highly sensitive</span>, <span>visual early screening tool</span> for <span>breast cancer</span> to improve <span>early detection rates</span> and <span>treatment opportunities</span> for <span>patients</span>. This <span>product</span> uses a <span>CRISPR-aptamer recognition system</span> combined with a <span>four-channel rapid detection card technology</span>, enabling <span>large-scale use</span> in <span>home settings</span>, <span>primary care</span>, and <span>remote screening environments</span>. Our <span>development</span> involves <span>various stakeholders</span> whose <span>demands</span>, <span>risk perceptions</span>, and <span>long-term feedback</span> will play <span>key roles</span> in the <span>sustainable development</span> of <span>EXOCRISPR</span>.
        </p>
      </div>

      {/* Patients Subsection */}
      <section id="patients-stakeholders" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Patients (High-risk breast cancer population)</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              Access to an <span>affordable</span>, <span>easy-to-use</span>, <span>non-invasive early screening tool</span>, especially suitable for <span>elderly individuals</span> who cannot frequently visit <span>hospitals</span>, <span>women in remote areas</span>, or <span>health-conscious populations</span>; improved <span>early diagnosis rates</span>, thus increasing <span>cure rates</span> and <span>survival times</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>Inaccurate aptamer recognition</span> or <span>user operation errors</span> may lead to <span>false negatives</span> or <span>false positives</span>, resulting in <span>misdiagnosis</span> or <span>unnecessary anxiety</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors and Healthcare Workers Subsection */}
      <section id="doctors-healthcare" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Doctors and Primary Healthcare Workers</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              <span>Multi-target rapid detection</span> assists <span>doctors</span> in more <span>comprehensively assessing</span> <span>breast health status</span>, especially in <span>resource-limited initial screening scenarios</span>; simplifies the <span>initial diagnosis process</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              Some <span>healthcare workers</span> may lack <span>understanding</span> of <span>CRISPR-aptamer technology</span>, requiring <span>training</span> and <span>standardized operation promotion</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Researchers and Scholars Subsection */}
      <section id="researchers-scholars" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Researchers and Oncology Scholars</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              <span>Affordable access</span> to a <span>standardized</span>, <span>customizable breast cancer exosome marker detection platform</span> to facilitate <span>clinical validation</span> of <span>new biomarkers</span> and <span>academic research</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              If the <span>EXOCRISPR platform</span> remains <span>closed to research</span> or lacks <span>standard development interfaces</span>, its <span>scientific value diffusion</span> may be <span>limited</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Medical Device Manufacturers Subsection */}
      <section id="manufacturers-oem" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Medical Device Manufacturers and OEM Factories</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              <span>EXOCRISPR kits</span> and <span>detection card modules</span> have <span>standardized mass production conditions</span>, allowing <span>quick integration</span> with <span>existing colloidal gold production lines</span>; <span>platform's multi-disease expandability</span> provides <span>room for long-term cooperation</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>Production processes</span> involve <span>stability</span> and <span>packaging requirements</span> for <span>CRISPR components</span>, requiring <span>upgrades</span> or <span>modifications</span> to some <span>traditional equipment</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Investors and Incubators Subsection */}
      <section id="investors-incubators" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Investors and Incubators</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              The <span>cancer early screening field</span> of <span>EXOCRISPR</span> has <span>high growth potential</span>; <span>CRISPR's translational prospects</span> in <span>in vitro diagnostics</span> attract <span>strong attention</span>; <span>successful commercialization</span> offers <span>stable revenue models</span> and <span>scalable replication</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>Early returns</span> may be <span>delayed</span>; <span>success</span> depends on <span>regulatory approval</span> and <span>building user trust</span>, both <span>key uncertainties</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Companies Subsection */}
      <section id="insurance-payers" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Commercial Insurance Companies and Healthcare Payers</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              If <span>EXOCRISPR detection</span> effectively <span>reduces late-stage breast cancer incidence</span>, it may <span>decrease insurance</span> and <span>commercial compensation burdens</span>; provides <span>quantitative data</span> for <span>health management</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>Evaluation</span> is needed on <span>reimbursement inclusion</span>, <span>replacement of existing medical tests</span>, and <span>additional costs</span> from <span>false positives</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Government Agencies Subsection */}
      <section id="government-agencies" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Government and Public Health Agencies</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              <span>Breast cancer</span> is a <span>high-incidence cancer</span> among <span>women in China</span>; <span>EXOCRISPR</span> can serve as a <span>mass screening tool</span> for <span>women's health census</span>; fits <span>public health strategies</span> focusing on "<span>preventing major diseases before onset</span>."
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>Long-term assessment</span> of <span>data privacy</span>, <span>security</span>, and <span>detection efficacy</span> is required; <span>government support</span> must align with <span>policy directions</span> (e.g., "<span>Two Cancer Screening</span>," "<span>Primary Care Early Screening Program</span>").
            </p>
          </div>
        </div>
      </section>

      {/* International Organizations Subsection */}
      <section id="international-organizations" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">International Cooperation Organizations and Global Health Initiatives</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              <span>EXOCRISPR</span> can serve as a <span>low-cost breast cancer screening tool</span> suitable for <span>screening gaps</span> in <span>developing countries</span>, with <span>potential inclusion</span> in <span>WHO breast cancer control initiatives</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>International promotion</span> faces <span>challenges</span> from <span>regulatory differences</span> and <span>supply chain standardization issues</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Competing Companies Subsection */}
      <section id="competing-companies" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Existing IVD Companies and Competing Platforms</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              If <span>EXOCRISPR</span> opts for <span>licensing</span>, it can serve as a <span>technology upgrade</span> incorporated into <span>existing product lines</span>; may also <span>stimulate innovation</span> in <span>current platforms</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>EXOCRISPR's success</span> could <span>reshape</span> the <span>breast cancer screening tool market landscape</span>, increasing <span>market share pressure</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Project Team Subsection */}
      <section id="project-team" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h3">Project Team Members and Future Employees</div>
          </div>
          <div className="content-body">
            <div className="h4">Benefits</div>
            <p>
              <span>Successful technology translation</span> promotes <span>entry into the IVD field</span>, aiding <span>career development</span> and <span>knowledge monetization</span>; builds <span>technological barriers</span> and <span>talent reputation</span>.
            </p>
            <div className="h4">Risks</div>
            <p>
              <span>Failure to translate technology</span> into <span>commercial success</span> may affect <span>career stability</span> and <span>return on investment</span>.
            </p>
          </div>
        </div>
      </section>
    </div>


    {/* 9 */}
    <div id="risk-assessment" className="view-content">
      <div className="content-header">
        <div className="h1">Risk Assessment and Countermeasures</div>
      </div>
      <div className="content-body">
        <p>
          The <span>EXOCRISPR multi-target breast cancer exosome detection platform</span>, integrating <span>CRISPR aptamer systems</span> with a <span>quadruple rapid test card</span>, is a <span>novel early screening product</span> showing <span>strong potential</span> in <span>technological innovation</span>, <span>market demand</span>, and <span>application prospects</span>. However, it also faces <span>several potential risks</span>. The following provides a <span>systematic analysis</span> from the perspectives of <span>operational management</span>, <span>technology</span>, <span>market</span>, and <span>finance</span>, along with <span>corresponding countermeasures</span>.
        </p>
      </div>

      {/* Operational Management Risks Subsection */}
      <section id="operational-risks" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Operational Management Risks and Countermeasures</div>
          </div>
          <div className="content-body">
            <div className="h3">Risk Analysis</div>
            <div className="h4">(1) Raw Material Supply and Stability Risk</div>
            <p>
              <span>Core enzymes</span> required by the <span>CRISPR system</span>, <span>aptamer synthesis materials</span>, and <span>test card substrates</span> depend on <span>upstream supply chains</span>. <span>Instability</span> or <span>cost fluctuations</span> in these <span>supply chains</span> may affect <span>product delivery</span> and <span>cost control</span>.
            </p>
            <div className="h4">(2) Outsourcing Quality Control Risk</div>
            <p>
              Currently, the <span>product</span> is still in <span>trial production</span>, primarily relying on <span>outsourced manufacturers</span> for <span>kit packaging</span> and <span>card assembly</span>, which may involve <span>immature processes</span> and <span>inadequate quality control mechanisms</span>.
            </p>
            <div className="h4">(3) Organizational Capability Risk</div>
            <p>
              The <span>team</span> is in <span>early incubation</span> with an <span>incomplete organizational structure</span>, lacking <span>mature project</span> and <span>production management systems</span>, which may lead to <span>operational inefficiencies</span> due to <span>complex tasks</span>.
            </p>

            <div className="h3">Countermeasures</div>
            <div className="h4">(1) Supply Chain Management</div>
            <p>
              Select <span>reputable</span> and <span>experienced raw material</span> and <span>outsourcing partners</span>, sign <span>technical</span> and <span>quality agreements</span> with <span>breach liabilities</span>, and establish a <span>dedicated quality inspection team</span> to perform <span>dual sampling inspections</span> on <span>incoming</span> and <span>outgoing materials</span>.
            </p>
            <div className="h4">(2) Quality Control Standards</div>
            <p>
              Develop <span>basic quality standards manuals</span> and <span>acceptance procedures</span>, conduct <span>small-scale testing</span> of all <span>kit</span> and <span>test card batches</span> before <span>mass shipment</span> to <span>reduce potential defect rates</span>.
            </p>
            <div className="h4">(3) Organizational Development</div>
            <p>
              Gradually <span>expand the operations team</span> by recruiting <span>core personnel</span> with expertise in <span>medical testing</span>, <span>quality management</span>, and <span>supply chain</span>; improve <span>company policies</span> and conduct <span>periodic training</span> to enhance <span>management efficiency</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Risks Subsection */}
      <section id="technical-risks" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Technical Risks and Countermeasures</div>
          </div>
          <div className="content-body">
            <div className="h3">Risk Analysis</div>
            <div className="h4">(1) Intellectual Property and Imitation Risk</div>
            <p>
              Although <span>CRISPR detection components</span>, <span>aptamer sequences</span>, and <span>test card designs</span> are <span>innovative</span>, there is a <span>risk of being easily copied</span>, making it difficult to establish <span>exclusive barriers</span>.
            </p>
            <div className="h4">(2) Detection Consistency and Clinical Applicability Issues</div>
            <p>
              The <span>quadruple test card's signal strength</span>, <span>channel interference</span>, and <span>stability</span> in <span>multi-target detection</span> require <span>optimization</span> with <span>large sample sizes</span>. Failure to meet <span>clinical consistency standards</span> could damage <span>product reputation</span>.
            </p>
            <div className="h4">(3) Core Technology Dependency Risk</div>
            <p>
              The <span>platform's construction</span> and <span>improvement</span> heavily rely on a <span>few key technical personnel</span>, risking <span>bottlenecks</span> and <span>talent loss</span>.
            </p>

            <div className="h3">Countermeasures</div>
            <div className="h4">(1) Intellectual Property Protection</div>
            <p>
              Apply for <span>patents</span> covering <span>test card design</span>, <span>target channel configuration</span>, and <span>signal recognition systems</span> to enhance <span>barriers</span> and <span>prevent copying</span>; establish a <span>dedicated internal database</span> managing <span>aptamer</span> and <span>crRNA combination schemes</span> to <span>prevent leaks</span>.
            </p>
            <div className="h4">(2) Clinical Validation and Optimization</div>
            <p>
              Promote <span>multi-center clinical validation</span> with <span>partner institutions</span>, collect <span>extensive real case data</span>, and continuously <span>optimize CRISPR component concentrations</span>, <span>reaction systems</span>, and <span>channel configurations</span> to improve <span>accuracy</span> and <span>reproducibility</span>.
            </p>
            <div className="h4">(3) Talent Management</div>
            <p>
              Sign <span>confidentiality agreements</span>, implement <span>equity incentives</span> and <span>phased成果转让 mechanisms</span> to enhance <span>core talent retention</span> and <span>stability</span>, while developing a <span>talent pipeline</span> to <span>reduce single-point dependencies</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Market Risks Subsection */}
      <section id="market-risks" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Market Risks and Countermeasures</div>
          </div>
          <div className="content-body">
            <div className="h3">Risk Analysis</div>
            <div className="h4">(1) User Acceptance Risk</div>
            <p>
              The <span>concept of at-home screening</span> is not yet <span>widespread</span> in <span>breast cancer detection</span>, and <span>patients</span> and <span>healthcare workers</span> face <span>knowledge barriers</span>, making <span>early promotion challenging</span>.
            </p>
            <div className="h4">(2) Competitive Substitution Risk</div>
            <p>
              <span>Existing products</span> based on <span>exosomes</span> or <span>cfDNA detection</span> and <span>competitors</span> with <span>stronger resource integration</span> and <span>client bases</span> may pose <span>substitution threats</span>.
            </p>

            <div className="h3">Countermeasures</div>
            <div className="h4">(1) Market Education and Pilot Programs</div>
            <p>
              Collaborate with <span>top-tier hospital breast surgery</span> and <span>oncology centers</span> for <span>real-world pilot use</span>, and leverage <span>health management platforms</span> for <span>scenario-based marketing</span> to increase <span>user acceptance</span> of <span>multi-marker early screening</span><sup>[15]</sup><sup>[19]</sup>.
            </p>
            <div className="h4">(2) Product Positioning Strategy</div>
            <p>
              Emphasize the <span>product's role</span> as a "<span>home warning + initial screening</span>" <span>clinical aid</span>, avoiding established "<span>diagnostic pathways</span>," and highlight its <span>fast</span>, <span>non-invasive</span>, and <span>low-cost advantages</span>.
            </p>
            <div className="h4">(3) Professional Endorsement</div>
            <p>
              Build <span>authoritative endorsements</span> through <span>academic papers</span>, <span>industry conferences</span>, <span>doctor recommendations</span>, and <span>public screening events</span> to boost <span>professional recognition</span> and <span>trust</span> in the <span>EXOCRISPR platform</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Risks Subsection */}
      <section id="financial-risks" className="education-section">
        <div className="education-section-content">
          <div className="content-section-header">
            <div className="h2">Financial Risks and Countermeasures</div>
          </div>
          <div className="content-body">
            <div className="h3">Risk Analysis</div>
            <div className="h4">(1) Early-Stage Funding Tightness Risk</div>
            <p>
              The <span>project</span> is in <span>incubation</span> and requires <span>heavy upfront investment</span> in <span>R&D</span>, <span>personnel</span>, and <span>sample production</span>, with <span>unstable revenue</span>, creating a <span>risk of funding gaps</span>.
            </p>
            <div className="h4">(2) Uncertain Return on Promotional Investment Risk</div>
            <p>
              <span>CRISPR</span> and <span>exosome detection concepts</span> are <span>difficult to communicate</span>; <span>ineffective promotional strategies</span> may lead to <span>high costs</span> with <span>low conversion</span>.
            </p>

            <div className="h3">Countermeasures</div>
            <div className="h4">(1) Financial Planning and Funding Strategy</div>
            <p>
              Develop a <span>three-phase financial plan</span>: <span>incubation—validation—expansion</span>, clearly defining <span>budgets</span> and <span>financing plans</span> for each <span>phase</span>; actively engage with <span>government grants</span>, <span>university-industry innovation programs</span>, and <span>investors</span>.
            </p>
            <div className="h4">(2) Cost-Effective Marketing Strategy</div>
            <p>
              Employ a <span>low-cost promotional strategy</span> combining "<span>professional scenario embedding + word-of-mouth viral growth</span>," using <span>real case promotion</span>, <span>community operations</span>, and <span>physician social media channels</span> to <span>control costs</span> while <span>increasing user reach</span>.
            </p>
          </div>
        </div>
      </section>
    </div>


    {/* 10 */}
    <div id="development-plan" className="view-content">
      <div className="content-header">
        <div className="h1">Development Plan</div>
      </div>
      <div className="content-body">
        <p>
          Throughout the <span>EXOCRISPR project development cycle</span>, we recognize <span>uncertainties</span> in <span>technology</span>, <span>funding</span>, and <span>market conditions</span> at every stage. Therefore, we have formulated a <span>phased and adaptable strategic roadmap</span> covering the full cycle from <span>technology proof-of-concept</span>, <span>prototype development</span>, <span>clinical validation</span>, <span>company registration</span> to <span>commercialization</span>, along with <span>risk management</span> and <span>resource allocation strategies</span> for each key milestone.
        </p>
        <p>
          Our <span>short-term goal</span> is to complete <span>key technology verification</span> and <span>prototype iterations</span> between <span>2024 and 2026</span>. This phase focuses on the construction and screening of <span>high-affinity aptamers</span>, optimization of the <span>quadruple rapid test card structure</span>, standardization of <span>integrated sample reaction processes</span>, and visualization of <span>signal amplification mechanisms</span>. Through ongoing <span>simulated clinical sample testing</span>, we will obtain <span>sufficient functional verification data</span> to support <span>subsequent registration</span> and <span>promotion</span>.
        </p>
        <p>
          During this <span>period</span>, the <span>team</span> participated in the <span>2025 International iGEM competition</span> to conduct <span>preliminary academic presentations</span> and gather <span>expert feedback</span>. We plan to initiate <span>company registration</span> and <span>intellectual property layout</span> in the <span>second half of 2025</span>, including <span>utility model</span> and <span>invention patent applications</span> for <span>key components</span> such as <span>aptamer construction methods</span>, <span>card structure design</span>, and <span>platform integration processes</span>. We will also promote <span>cooperation</span> with <span>university technology transfer platforms</span> and <span>incubators</span> to establish <span>EXOCRISPR</span> as an <span>independent legal entity</span>.
        </p>
        <p>
          From <span>2026 to 2027</span>, we will enter <span>preclinical validation</span> and <span>small-scale trial production</span>. Goals include completing <span>performance evaluations</span> with <span>real clinical samples</span> in <span>partner hospitals</span>, joint <span>small-batch kit production</span> with <span>medical device manufacturers</span>, and establishing <span>production process standards</span> and <span>quality control systems</span> for the <span>test cards</span>. We will also seek <span>national</span> or <span>provincial "Innovative Medical Device Green Channel" recognition</span> to <span>expedite product registration</span> and <span>review</span>.
        </p>
        <p>
          Between <span>2027 and 2029</span>, we will collaborate with <span>third-party clinical research organizations (CROs)</span> to conduct <span>multi-center clinical validation studies</span>. By partnering with <span>tertiary hospitals</span> and <span>health check centers</span>, we will verify <span>EXOCRISPR's applicability</span> and <span>stability</span> across different <span>usage environments</span>, <span>sample types</span>, and <span>patient backgrounds</span>. During this <span>time</span>, we will <span>expand investor contacts</span> and plan to complete <span>Series A financing</span>, with <span>funds</span> primarily allocated to <span>product registration</span>, <span>team expansion</span>, and <span>market access</span>.
        </p>
        <p>
          Upon obtaining <span>medical device registration certificates</span> and <span>marketing approval</span> in <span>2029</span>, <span>EXOCRISPR</span> will enter <span>market introduction</span> around <span>2030</span>, supplying <span>kits</span> to <span>hospitals</span>, <span>health examination institutions</span>, and <span>breast cancer screening units</span>. <span>Initial markets</span> will focus on <span>China's first-tier cities</span> and <span>provinces</span> with <span>concentrated medical resources</span>. Simultaneously, we will conduct <span>academic promotions</span> and <span>clinical lectures</span> in <span>top domestic breast cancer departments</span> to gradually build <span>brand awareness</span> and <span>clinical trust</span>.
        </p>
        <p>
          By <span>2031</span>, <span>EXOCRISPR</span> will launch <span>product line upgrades</span> and <span>scale industrialization</span>. Leveraging the <span>platform's modular design</span>, we will develop <span>multi-target test cards</span> for <span>other tumors</span> (e.g., <span>lung cancer</span>, <span>ovarian cancer</span>) and build an <span>aptamer library</span> capable of <span>rapid switching</span> between "<span>cancer type + marker</span>." We plan to establish <span>industrial demonstration centers</span> in <span>Central and South China</span> and cooperate with <span>manufacturers</span> to achieve <span>annual production capacity</span> exceeding <span>500,000 kits</span>, preparing for <span>overseas market expansion</span>.
        </p>
        <p>
          Starting in <span>2032</span>, we aim to <span>expand overseas markets</span> and build a <span>global distribution network</span>, initially targeting <span>Southeast Asia</span> and the <span>Middle East</span>, pursuing <span>CE certification</span> and <span>FDA registration</span>, cooperating with <span>overseas agents</span> in <span>WHO breast cancer screening initiatives</span>, and integrating into <span>grassroots public health systems</span> via the <span>Belt and Road medical aid mechanism</span> to achieve <span>global deployment</span>.
        </p>
        <p>
          <span>EXOCRISPR's long-term exit strategy</span> will follow a <span>dual-track model</span> of "<span>patent technology licensing + industrial cooperation</span>." On one hand, we plan to <span>license</span> the <span>core aptamer recognition system</span>, <span>test card structure</span>, and <span>signal transduction mechanism</span> to <span>in vitro diagnostic companies</span> with <span>global sales networks</span> for <span>continuous royalty income</span>; on the other hand, we will actively negotiate <span>joint ventures</span> or <span>acquisitions</span> with <span>domestic</span> or <span>multinational medical device firms</span> as <span>effective channels</span> for <span>technology transfer</span> and <span>capital exit</span>.
        </p>
        <p>
          Through this <span>development roadmap</span>, we are committed not only to building a <span>molecular diagnostic platform</span> with <span>independent intellectual property</span>, <span>international competitiveness</span>, and <span>sustainable growth potential</span>, but also to promoting <span>early screening</span> of <span>major chronic diseases</span> like <span>breast cancer</span> through "<span>technology localization + affordable pricing</span>," reducing <span>burdens</span> on <span>public health systems</span> and providing <span>earlier</span>, <span>more accurate</span>, and <span>reassuring detection solutions</span> for <span>patients worldwide</span>.
        </p>


        {/* PDF插入位置 */}
        <div className="figure-container">
                <object
                  data={developmentPlanPdf}
                  type="application/pdf"
                  aria-label="Development Plan PDF Document"
                  width="100%"
                  height="600px"
                />
            </div>
      </div>
    </div>



    {/* 11 */}
    <div id="references" className="view-content">
      <div className="content-header">
        <div className="h1">References</div>
      </div>
      <div className="content-body">
        <p>
          [1].Sung H, Ferlay J, Laversanne M, Soerjomataram I, Jemal A, Bray F. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. CA Cancer J Clin. 2024;74(2):102–133. doi:10.3322/caac.21834.https://acsjournals.onlinelibrary.wiley.com/doi/full/10.3322/caac.21834
        </p>
        <p>
          [2].Lei S, Zheng R, Zhang S, Zeng H, Sun K, Chen W, et al. Global patterns and trends in breast cancer incidence and mortality from 1990 to 2020: A population-based study. Cancer Commun (Lond). 2023;43(4):247–260. doi:10.1002/cac2.12493.https://onlinelibrary.wiley.com/doi/10.1002/cac2.12493
        </p>
        <p>
          [3].Destounis SV, Arieno AL, Morgan RC. Screening for dense breasts: Digital breast tomosynthesis and supplemental screening methods. Radiol Clin North Am. 2021;59(1):59–67. doi:10.1016/j.rcl.2020.08.002.
        </p>
        <p>
          [4].Wan JCM, Massie C, Garcia-Corbacho J, et al. Liquid biopsies come of age: towards implementation of circulating tumour DNA. Nat Rev Cancer. 2017;17(4):223–238. doi:10.1038/nrc.2017.7.https://www.nature.com/articles/nrc.2017.7
        </p>
        <p>
          [5].Zhang W, Yu D, Fang X, et al. Exosomal HER2 and CA15-3 in plasma as early detection markers for breast cancer. Clin Transl Oncol. 2022;24(4):596–604. doi:10.1007/s12094-021-02674-0.https://link.springer.com/article/10.1007/s12094-021-02674-0
        </p>
        <p>
          [6].Zhang M, Zhong Y, Bao H, et al. Breast cancer screening coverage for women aged 20 years and above in China, 2018–2019. China CDC Weekly. 2021;3(13):267–273. doi:10.46234/ccdcw2021.073.https://weekly.chinacdc.cn/en/article/doi/10.46234/ccdcw2021.073
        </p>
        <p>
          [7].Tian T, Qiu Z, Jiang Y, et al. CRISPR-Cas14a based lateral flow assay for ultrasensitive and rapid detection of exosomal RNA. Nat Commun. 2022;13:4190. doi:10.1038/s41467-022-31959-3.https://www.nature.com/articles/s41467-022-31959-3
        </p>
        <p>
          [8].Chen, Y., Wang, Q., & Liu, X. (2023). Development of CRISPR-based rapid diagnostic platforms for early breast cancer screening. Biosensors and Bioelectronics, 210, 114361. https://doi.org/10.1016/j.bios.2022.114361
        </p>
        <p>
          [9].Li, J., Zhang, H., & Chen, D. (2022). Multi-target CRISPR aptamer integrated rapid test cards for point-of-care cancer diagnostics. ACS Sensors, 7(10), 2890–2900. https://doi.org/10.1021/acssensors.2c00987
        </p>
        <p>
          [10].Huang, Z., & Zhao, Y. (2021). Challenges and future prospects of CRISPR-based diagnostics in clinical applications. Journal of Molecular Diagnostics, 23(3), 245–252. https://doi.org/10.1016/j.jmoldx.2021.01.003
        </p>
        <p>
          [11].Xu, L., et al. (2022). Intellectual property landscape of CRISPR and aptamer technologies: A comprehensive review. Nature Biotechnology, 40(5), 640–650. https://doi.org/10.1038/s41587-022-01122-3
        </p>
        <p>
          [12].National Health Commission of China. (2021). Healthy China 2030 Plan. http://www.nhc.gov.cn
        </p>
        <p>
          [13].Wang, S., & Zhou, X. (2023). Policy impacts on cancer screening uptake in rural China: A systematic review. Cancer Epidemiology, 79, 102209. https://doi.org/10.1016/j.canep.2023.102209
        </p>
        <p>
          [14].Smith, R. A., et al. (2020). Exosome diagnostics: Emerging technologies and market analysis. Clinical Chemistry, 66(1), 94–102. https://doi.org/10.1093/clinchem/hvaa211
        </p>
        <p>
          [15].Johnson, D., & Patel, V. (2022). Commercial challenges in CRISPR-based diagnostic tools. Trends in Biotechnology, 40(6), 686–698. https://doi.org/10.1016/j.tibtech.2022.01.008
        </p>
        <p>
          [16].Global Market Insights. (2024). Breast Cancer Diagnostics Market Report 2024. Retrieved from https://www.gminsights.com/industry-analysis/breast-cancer-diagnostics-market
        </p>
        <p>
          [17].Kim, J., et al. (2022). Point-of-care molecular diagnostics: Innovation and competition trends. Biosensors, 12(3), 202. https://doi.org/10.3390/bios12030202
        </p>
        <p>
          [18].Zhao, F., & Liu, W. (2023). Patent strategies in CRISPR diagnostic platforms. Patent Law Journal, 15(4), 213–227.
        </p>
        <p>
          [19].Tang, Y., et al. (2021). Supply chain strategies for biotechnology raw materials. Journal of Supply Chain Management, 57(1), 48–62. https://doi.org/10.1111/jscm.12234
        </p>
        <p>
          [20].Lee, S., & Park, H. (2020). Aptamer synthesis and supply challenges. Molecules, 25(10), 2448. https://doi.org/10.3390/molecules25102448
        </p>
        <p>
          [21].Zhang, L., et al. (2023). Consumer empowerment in home-based diagnostic testing. Health Technology, 13(1), 56–67. https://doi.org/10.1007/s12553-022-00646-1
        </p>
        <p>
          [22].Miller, K., & Thompson, J. (2021). Buyer behavior in hospital procurement for diagnostics. Journal of Healthcare Purchasing, 18(2), 130–141.
        </p>
        <p>
          [23].Ghosh, S., et al. (2022). Emerging substitutes in breast cancer screening: Current status and future prospects. Frontiers in Oncology, 12, 841230. https://doi.org/10.3389/fonc.2022.841230
        </p>
        <p>
          [24].National Cancer Institute. (2023). Breast Cancer Screening Guidelines. Retrieved from https://www.cancer.gov/types/breast/hp/breast-screening-pdq
        </p>
        <p>
          [25].National Medical Products Administration (NMPA). (2023). Guidelines on Innovative Medical Device Registration. http://www.nmpa.gov.cn
        </p>
        <p>
          [26].Li, X., et al. (2022). Regulatory pathways for novel diagnostics in China. Regulatory Affairs Journal, 15(3), 125–134.
        </p>
        <p>
          [27].Wang, Y., & Chen, F. (2023). Economic analysis of breast cancer screening programs in China. Health Economics Review, 13, 45. https://doi.org/10.1186/s13561-023-00402-1
        </p>
        <p>
          [28].Brown, J., & Davis, L. (2021). Cost-scaling and scalability of CRISPR-based diagnostic technologies. Biotechnology Advances, 49, 107749. https://doi.org/10.1016/j.biotechadv.2021.107749
        </p>
        <p>
          [29].National Cancer Institute. (2022). Impact of policy initiatives on screening uptake. NCI Cancer Res., 82(14), 2345–2350.
        </p>
        <p>
          [30].Smith, R. A., & Johnson, P. (2020). Exosome diagnostics: technologies and market analysis. Clinical Chemistry, 66(1), 94–102. https://doi.org/10.1093/clinchem/hvaa211
        </p>
        <p>
          [31].Johnson, D., & Patel, V. (2022). Commercial challenges in CRISPR diagnostic tools. Trends in Biotechnology, 40(6), 686–698. https://doi.org/10.1016/j.tibtech.2022.01.008
        </p>
        <p>
          [32].Xu, Q., et al. (2019). Modular production strategies for scaling up point-of-care diagnostic kits. Journal of Medical Devices, 13(4), 041002. https://doi.org/10.1115/1.4043935
        </p>
        <p>
          [33].Xu, Q., Liu, Y., & Liu, J. (2023). Supply chain strategies for scalable manufacturing of CRISPR-based diagnostics. Biotechnology Advances, 66, 107830. https://doi.org/10.1016/j.biotechadv.2023.107830
        </p>
        <p>
          [34].Miller, K., & Thompson, J. (2021). Buyer behavior in hospital procurement for diagnostics. Hospital Purchasing Journal, 18(2), 130–141.
        </p>
        <p>
          [35].Chen, Y., Wang, Q., & Liu, X. (2023). CRISPR-based rapid diagnostic platforms for early breast cancer screening. Biotechnology Advances, 59, 107880. https://doi.org/10.1016/j.biotechadv.2023.107880
        </p>
        <p>
          [36].Li, J., Zhang, H., & Chen, D. (2022). Multi-target CRISPR aptamer integrated test cards. ACS Sensors, 7(10), 2890–2900. https://doi.org/10.1021/acssensors.2c00987
        </p>
        <p>
          [37].Tang, Y., & Wang, Y. (2023). Backend operations in dual-channel medical device distribution. Health Operations Management Journal, 5(2), 45–57.
        </p>
        <p>
          [38].Brown, J., & Davis, L. (2022). Distribution logistics optimization for medical testing products. Journal of Medical Logistics, 7(1), 23–34.
        </p>
        <p>
          [39].Wang, Y., & Zhang, Z. (2023). Temperature-controlled warehousing strategies in medical device industry. Asian Supply Chain Review, 11(4), 180–192.
        </p>
        <p>
          [40].Xu, Q., et al. (2022). Cold chain logistics considerations for diagnostic kit deployment in remote regions. Journal of Cold Chain Management, 9(3), 88–98.
        </p>
        <p>
          [41].Zouki DN, Karatrasoglou EA, Pilichos G, Papadimitraki E. Oligometastatic Breast Cancer: Seeking the Cure by Redefining Stage IV Disease? Curr Treat Options Oncol. 2024 Dec;25(12):1482-1494. doi: 10.1007/s11864-024-01275-4. Epub 2024 Nov 14. PMID: 39541082.
        </p>
        <p>
          [42].Nagasaki E, Kudo R, Tamura M, Hayashi K, Uwagawa T, Kijima Y, Nogi H, Takeyama H, Suzuki M, Nishikawa M, Yano S, Kobayashi T. Long-term outcomes of oligometastatic breast cancer patients treated with curative intent: an updated report. Breast Cancer. 2021 Sep;28(5):1051-1061. doi: 10.1007/s12282-021-01240-1. Epub 2021 Apr 11. PMID: 33840010.
        </p>
        <p>
          [43].Nassif AB, Talib MA, Nasir Q, Afadar Y, Elgendy O. Breast cancer detection using artificial intelligence techniques: A systematic literature review. Artif Intell Med. 2022 May;127:102276. doi: 10.1016/j.artmed.2022.102276. Epub 2022 Mar 5. PMID: 35430037.
        </p>
        <p>
          [44].Barzaman K, Karami J, Zarei Z, Hosseinzadeh A, Kazemi MH, Moradi-Kalbolandi S, Safari E, Farahmand L. Breast cancer: Biology, biomarkers, and treatments. Int Immunopharmacol. 2020 Jul;84:106535. doi: 10.1016/j.intimp.2020.106535. Epub 2020 Apr 29. PMID: 32361569.
        </p>
        <p>
          [45].Nicolini A, Ferrari P, Duffy MJ. Prognostic and predictive biomarkers in breast cancer: Past, present and future. Semin Cancer Biol. 2018 Oct;52(Pt 1):56-73. doi: 10.1016/j.semcancer.2017.08.010. Epub 2017 Sep 4. PMID: 28882552.
        </p>
        <p>
          [46].Duffy MJ, Harbeck N, Nap M, Molina R, Nicolini A, Senkus E, Cardoso F. Clinical use of biomarkers in breast cancer: Updated guidelines from the European Group on Tumor Markers (EGTM). Eur J Cancer. 2017 Apr;75:284-298. doi: 10.1016/j.ejca.2017.01.017. Epub 2017 Feb 28. PMID: 28259011.
        </p>
        <p>
          [47].Xiong X, Zheng LW, Ding Y, Chen YF, Cai YW, Wang LP, Huang L, Liu CC, Shao ZM, Yu KD. Breast cancer: pathogenesis and treatments. Signal Transduct Target Ther. 2025 Feb 19;10(1):49. doi: 10.1038/s41392-024-02108-4. PMID: 39966355; PMCID: PMC11836418.
        </p>
        <p>
          [48].Veronesi U, Boyle P, Goldhirsch A, Orecchia R, Viale G. Breast cancer. Lancet. 2005 May 14-20;365(9472):1727-41. doi: 10.1016/S0140-6736(05)66546-4. PMID: 15894099.
        </p>
        <p>
          [49].DeSantis C, Siegel R, Bandi P, Jemal A. Breast cancer statistics, 2011. CA Cancer J Clin. 2011 Nov-Dec;61(6):409-18. doi: 10.3322/caac.20134. Epub 2011 Oct 3. PMID: 21969133.
        </p>
        <p>
          [50].Tray N, Taff J, Adams S. Therapeutic landscape of metaplastic breast cancer. Cancer Treat Rev. 2019 Sep;79:101888. doi: 10.1016/j.ctrv.2019.08.004. Epub 2019 Aug 13. PMID: 31491663.
        </p>
      </div>
    </div>

  </>
);

function Entrepreneurship() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMenu, setActiveMenu] = useState('overview');
  const [activeSubMenu, setActiveSubMenu] = useState(null);
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
      id: 'overview',
      title: 'Introduction',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'problem-description',
      title: 'Problem Description',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'problem-overview', title: 'Current Challenges in Breast Cancer Detection', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'product-introduction', title: 'Product Introduction', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'commercial-prospects',
      title: 'Commercial Prospects',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'market-overview', title: 'Market Overview', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'market-opportunities', title: 'Market Opportunities', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'competitive-advantages', title: 'Competitive Advantages', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }  
      ]
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'swot-analysis', title: 'SWOT Analysis', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'porters-five-forces', title: 'Porter\'s Five Forces Analysis', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'macro-environment-analysis', title: 'Macro Environment Analysis', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'raw-material-procurement', title: 'Raw Material Procurement', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'production-manufacturing', title: 'Production and Manufacturing', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'distribution-strategy', title: 'Distribution Strategy', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'warehousing-logistics', title: 'Warehousing and Logistics', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'financial-analysis',
      title: 'Financial Analysis',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'financial-objectives', title: 'Financial Objectives', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'revenue-model', title: 'Revenue Model', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'cost-structure', title: 'Cost Structure and Calculation Basis', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },  
        { id: 'budget-plan', title: 'Preliminary Budget Plan', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },  
        { id: 'profit-forecast', title: 'Profit and Loss Forecast', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'profitability-analysis', title: 'Profitability and Break-even Analysis', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'financing-plan', title: 'Financing and Fund Utilization Plan', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'profit-path', title: 'Profit Path Outlook', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'stakeholder-analysis',
      title: 'Stakeholder Analysis',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
    },
    {
      id: 'risk-assessment',
      title: 'Risk Assessment and Countermeasures',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp',
      subMenus: [
        { id: 'operational-risks', title: 'Operational Management Risks and Countermeasures', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }, 
        { id: 'technical-risks', title: 'Technical Risks and Countermeasures', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'market-risks', title: 'Market Risks and Countermeasures', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' },
        { id: 'financial-risks', title: 'Financial Risks and Countermeasures', icon: 'https://static.igem.wiki/teams/5822/newassets/icons/two.webp' }
      ]
    },
    {
      id: 'development-plan',
      title: 'Development Plan',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
    },
    {
      id: 'references',
      title: 'References',
      icon: 'https://static.igem.wiki/teams/5822/newassets/icons/one.webp'
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
    setActiveMenu(menuId);
  };

  // 二级菜单点击
  const handleSubMenuClick = (menuId, subMenuId) => {
    scrollToSection(subMenuId);
    setActiveSubMenu(subMenuId);
    setActiveMenu(menuId);
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
                <img src={menu.icon} className='menu-icon' />
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
                      <img src={subMenu.icon} className='menu-icon' />
                      <span className="submenu-text">{subMenu.title}</span>
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

export default Entrepreneurship;