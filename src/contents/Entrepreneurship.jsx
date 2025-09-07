export function Entrepreneurship({ props }) {
  const { section_1, section_2, section_3, section_4, section_5, section_6, section_7, section_8, section_9, section_10
    } = props;

  return (
    
    <div className="container my-4">

      <div className="card mb-4">
        <div className='card-body pdf'>
          <iframe src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/entrepreneurship.pdf" width="100%" height="600px"></iframe>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_1">{section_1}</h1>
          <h2>Problem Description</h2>
          <p>
            Breast cancer is the most common malignant tumor among women worldwide (Figure 1), with over 2.3 million new cases annually. China accounts for as much as 18.4% (approximately 420,000 cases). Breast cancer ranks first in mortality among female cancers, with a global age-standardized mortality rate (ASR World) of 12.7 per 100,000 in 2022 (Figure 2), representing a major health burden. There is a significant gap between the incidence and mortality rates (46.8 vs. 12.7 per 100,000) (Figure 3), indicating that diagnosis is key to improving survival. However, current technologies face significant bottlenecks: traditional imaging (e.g., mammography) has insufficient sensitivity for dense breast tissue and is prone to missed diagnoses; tissue biopsy carries invasive risks and has limited accessibility at the primary care level; and liquid biopsy (e.g., ctDNA) still has blind spots in early detection and key molecular subtyping (such as HER2/ER/PR). Exosomes, which carry breast cancer-specific markers (e.g., HER2, CA15-3) as messengers of the tumor microenvironment, show significantly elevated concentrations in the blood of stage I patients, making them ideal targets for early, non-invasive diagnosis. However, there is an urgent clinical need for tools that can perform <strong>on-site, rapid (&lt;1 hour), and highly specific (&gt;95%)</strong> multiplex detection, in order to address the issue of screening coverage being below 40% among high-risk populations.
          </p>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-1.webp" alt="Top 15 Cancers" className="img-fluid rounded mb-3 stats" />
          <p className="figure-caption">Figure 1. Top 15 Most Common Cancers in Women Worldwide in 2022 by Incidence Rate</p>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-2.webp" alt="Cancer Death Causes" className="statsimg-fluid rounded mb-3" />
          <p className="figure-caption">Figure 2. Top 15 Causes of Cancer Death in Women Worldwide in 2022</p>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-3.webp" alt="Incidence vs Mortality" className="stats img-fluid rounded mb-3" />
          <p className="figure-caption">Figure 3. Comparison of Incidence and Mortality Rates for the Top 15 Female Cancers Worldwide in 2022</p>
          <h2>Product Introduction</h2>
          <p>
            EXOCRISPR Breast Cancer Exosome Detection Kit is an innovative molecular diagnostic tool that integrates a CRISPR aptamer-based recognition system with a quad-channel rapid test card. The product utilizes the CRISPR-Cas14a system to identify key biomarkers (such as ERBB2 and EPCAM) within breast cancer-derived exosomes, triggering the release of signal molecules during the reaction process. These signals are then visualized via a multi-channel lateral flow assay, enabling simultaneous detection of multiple targets with colorimetric results readable by the naked eye within 30 minutes.
          </p>
          <p>
            The quad-channel test card design allows for the simultaneous detection of four breast cancer-related markers or a combination of one quality control line plus four target channels, significantly improving both detection coverage and reliability. The entire process requires no expensive instruments, is easy to operate, and needs only a small sample volume (10–20 μL of blood), making it suitable for hospitals, primary care clinics, and even home use.
          </p>
          <p>
            Compared to traditional diagnostic methods, the EXOCRISPR kit offers advantages including non-invasiveness, high sensitivity, rapid turnaround, and modular scalability. It also holds strong potential for expansion into screening and companion diagnostics for other cancer types, with broad clinical and commercial prospects.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_2">{section_2}</h1>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-4.webp" alt="Top 15 Cancers" className="stats img-fluid rounded mb-3" />
          <p>
            <strong>Breast cancer (BC)</strong> is the most common malignant tumor among women (WHO 2024), with incidence increasing significantly with age and showing marked regional variation. In China, only 40% of newly diagnosed patients are in the early stages (stage I–II), while more than 60% are already at advanced stages (stage III–IV) at the time of diagnosis, resulting in the loss of curative treatment opportunities and a sharp decline in the 5-year survival rate to below 50%. Breast cancer poses a serious threat to women’s health, consistently ranking as the most prevalent malignant tumor among Chinese women. With the acceleration of population aging and increasing awareness of screening, the annual incidence of breast cancer in China continues to rise at a rate of 3–4%. Notably, the proportion of Chinese patients diagnosed at an advanced stage (35–40%) is significantly higher than in developed countries (e.g., &lt;20% in the U.S.). Due to the lack of typical symptoms in early-stage breast cancer, clinical diagnosis relies heavily on imaging-based screening (such as mammography and ultrasound) and tissue biopsy. However, limited access to equipment, high testing costs, and invasive risks have resulted in over 50% of high-risk populations being unable to receive regular screening, thereby missing the optimal treatment window.
          </p>
          <p>
            Our team has developed the <strong>EXOCRISPR Breast Cancer Exosome Detection Kit</strong> in response to the high incidence of breast cancer among Chinese women, lagging early screening capabilities, and the reliance of traditional diagnostic methods on expensive and difficult-to-deploy equipment. This product integrates CRISPR aptamer-based recognition with quad-channel rapid test card technology to offer a non-invasive, fast, and low-cost home-based early screening solution for breast cancer. It effectively addresses the limitations of existing methods, such as complex procedures, long turnaround times, and poor privacy. Therefore, the product holds significant market potential, reflected in the following aspects:
          </p>
          <h2>Technological Innovation and Clinical Value of the Product</h2>
          <p>
            EXOCRISPR employs the CRISPR-Cas14a system to precisely recognize breast cancer-associated exosomal biomarkers (e.g., <em>ERBB2</em>, <em>EPCAM</em>) and uses a quad-channel lateral flow card for multiplex colorimetric detection, delivering visually readable results within 30 minutes. Compared with traditional antigen–antibody assays, this product uses aptamers as core recognition elements, offering higher affinity and stability. In addition, aptamers are inexpensive to synthesize and have better batch-to-batch consistency, facilitating large-scale deployment. The quad-channel structure enables simultaneous detection of multiple biomarkers, enhancing detection comprehensiveness and clinical adaptability, and fills the technological gap in early breast cancer screening tools for primary care and home settings.
          </p>
          <h2>High Integration of Convenience and Privacy</h2>
          <p>
            EXOCRISPR enables full-process testing without requiring professional operation, making it suitable for use in homes, community health centers, nursing homes, and other non-clinical settings. It helps users manage their health privately, avoiding the embarrassment and psychological burden of seeking care for breast-related symptoms, and significantly improves acceptance and participation in early breast cancer screening.
          </p>
          <h2>Rising Health Awareness Drives Early Screening Demand</h2>
          <p>
            In modern society, women’s awareness of health has significantly improved, and breast cancer screening is gradually becoming a standard part of routine physical examinations. With its “low cost + high usability” advantages, EXOCRISPR aligns with the trend of personalized health management, offering a convenient self-testing tool for high-risk populations and promoting improvements in early diagnosis rates.
          </p>
          <h2>Technological Advancement Enhances Market Confidence</h2>
          <p>
            CRISPR and aptamer technologies are rapidly developing in the global molecular diagnostics field. Their innovative integration with quad-channel test cards improves the platform’s sensitivity and versatility. We have achieved detection with as little as 10–20 μL of blood, further lowering the usage threshold and offering users a simple and reliable testing experience, thereby increasing market acceptance.
          </p>
          <h2>Strong Market Demand Driven by High Breast Cancer Incidence</h2>
          <p>
            Breast cancer has consistently ranked first in cancer incidence among Chinese women and is showing a trend toward younger onset. In 2022, more than 420,000 new breast cancer cases were reported in China. Screening demand continues to grow, yet traditional methods have not reached the entire at-risk population. EXOCRISPR effectively addresses the screening gap outside hospitals, meeting the broad testing needs of rural areas, urban communities, and sub-healthy individuals, with vast market potential.
          </p>
          <h2>Favorable Policy Environment Promotes Screening Uptake</h2>
          <p>
            The National Health Commission and local governments continue to advance initiatives such as the “Two Cancers Screening” and the “Healthy China 2030” plan, encouraging innovative, user-friendly, and primary care-adapted technologies for early cancer detection. EXOCRISPR aligns closely with policy directions, offering strong adaptability and promotion potential, and is expected to become an important supplemental tool in the public health system.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_3">{section_3}</h1>
          <h2>SWOT</h2>
          <h3>Strengths</h3>
          <p>
            The EXOCRISPR platform possesses significant technological innovation advantages and is among the few early breast cancer screening tools that integrate a CRISPR aptamer-based recognition system with a quad-channel rapid test card. The product enables multi-target detection results to be visually read within 30 minutes, offering high sensitivity and ease of use without the need for large-scale equipment. It is particularly suitable for home use, primary healthcare settings, and mobile screening scenarios, demonstrating broad adaptability. In addition, the product is designed for modular upgrades, with future potential expansion to other high-incidence cancers such as lung cancer and ovarian cancer, forming a platform-based product line. This flexibility and forward-looking design lay the foundation for building a sustainable profit model.
          </p>
          <h3>Weaknesses</h3>
          <p>
            As an early-stage project, EXOCRISPR has yet to establish stable partnerships with major medical institutions or health examination platforms, and brand recognition and market trust still need to be developed. Moreover, CRISPR-based detection mechanisms and aptamer recognition are still emerging concepts. Target users—including patients and primary care physicians—may exhibit limited awareness or acceptance, leading to potential challenges in education and market conversion during the initial promotion phase. Additionally, core patents are still under application, and intellectual property barriers are not yet fully established, posing a risk of imitation.
          </p>
          <h3>Opportunities</h3>
          <p>
            China has a large population at high risk for breast cancer, yet screening rates remain low, especially among rural, community-based, and elderly populations, leaving many potential users uncovered. With the continued advancement of national policies such as Healthy China 2030 and Two Cancers Screening, there is an increasing governmental demand for low-cost and widely applicable diagnostic tools. The global recognition of CRISPR technology in diagnostics is rapidly growing, creating a window of opportunity for EXOCRISPR to expand internationally. As public health awareness improves and self-testing tools become more popular, EXOCRISPR has the potential to transition from a medical device to a health-oriented consumer product.
          </p>
          <h3>Threats</h3>
          <p>
            The exosome detection field is attracting a large number of new entrants, especially established IVD companies with existing distribution channels that are accelerating their deployment in this area. If EXOCRISPR fails to establish clear technological differentiation in core targets or detection mechanisms, it may face price competition and risk being marginalized in the market. Furthermore, although CRISPR-based detection shows great promise in research, commercial implementation still requires overcoming significant hurdles in clinical validation and regulatory approval, posing uncertainties in both technology translation and policy compliance.
          </p>
          <h2>Porter’s Five Forces Analysis</h2>
          <h3>Industry Rivalry: Moderate to Low</h3>
          <p>
            Although the molecular diagnostics market as a whole is highly competitive, breast cancer early screening products based on the integration of exosomes and CRISPR aptamers remain a market gap. EXOCRISPR’s product format is highly differentiated, with its multi-channel, rapid detection and instrument-free features creating a unique competitive position distinct from traditional imaging and cfDNA testing tools. Currently, no fully comparable products have been widely deployed in the market, giving EXOCRISPR the opportunity to capture early market share and establish technological barriers.
          </p>
          <h3>Threat of New Entrants: Moderate to High</h3>
          <p>
            The entry barriers to molecular diagnostics, especially in the POCT (point-of-care testing) segment, are gradually lowering due to the availability of generic raw materials (such as Cas proteins and colloidal gold test strips). Although EXOCRISPR is actively building its patent portfolio, there remains a risk of imitation before key intellectual property rights are formally granted. Therefore, rapid advancement in patent layout and channel development is critical to mitigating this threat.
          </p>
          <h3>Supplier Bargaining Power: Low</h3>
          <p>
            The core raw materials used by EXOCRISPR—such as synthetic aptamers, Cas14a protein, chromatography membranes, and colloidal gold nanoparticles—are supplied by multiple stable vendors, offering strong substitutability. Bulk purchasing further enhances bargaining power, resulting in a relatively healthy supply chain structure. Moreover, our technical team has in-house synthesis capabilities for some key components (e.g., aptamers), further reducing dependence on single suppliers.
          </p>
          <h3>Buyer Bargaining Power: Moderate</h3>
          <p>
            For hospitals and third-party health examination institutions, product quality, detection accuracy, and ease of use are key considerations. Although this group holds certain bargaining power, EXOCRISPR’s unique advantages in non-invasiveness, rapid multi-target screening, and usability provide strong pricing power in the market. Meanwhile, we are actively cultivating the consumer (C-end) market, empowering patients themselves as a proactive demand driver, which partially alleviates buyer pressure from the business (B-end) side.
          </p>
          <h3>Threat of Substitutes: Moderate</h3>
          <p>
            Current breast cancer early screening mainly relies on imaging methods such as mammography, ultrasound, and MRI, with cfDNA and protein biomarker testing also emerging. In comparison, EXOCRISPR’s unique combination of non-invasive, multi-target, and home-operable features makes it difficult to be directly replaced by existing methods. However, if cfDNA or protein testing achieves breakthroughs in cost or convenience in the future, they may pose certain competition to EXOCRISPR.
          </p>
          <h2>Macro Environment Analysis</h2>
          <h3>Political</h3>
          <p>
            China’s national strategy “Healthy China 2030” encourages the development of innovative tumor screening technologies. The “Two Cancers Screening” program, led by the National Health Commission, is continuously expanding its coverage. EXOCRISPR aligns with national policy directives emphasizing accessibility at the grassroots level, non-invasiveness, and convenience. Meanwhile, with the National Medical Products Administration (NMPA) opening a green channel for innovative medical devices, EXOCRISPR is expected to enter the priority review sequence, improving registration efficiency.
          </p>
          <h3>Economic</h3>
          <p>
            With the improvement of women’s health awareness and increased consumer spending power, expenditures on health management steadily account for a larger share of household budgets. The middle class and aging population constitute the primary payers for breast cancer early screening. Additionally, the CRISPR platform offers good scalability, which will significantly reduce testing costs and enable large-scale profitability as production scales up. Attention should also be paid to the impact of raw material price fluctuations and outsourcing costs of technical services on early-stage financial models.
          </p>
          <h3>Social</h3>
          <p>
            Society’s attention to women’s breast health has significantly increased, promoting widespread awareness of breast cancer early screening. Public acceptance of CRISPR technology is also rising, especially as CRISPR-based rapid diagnostic solutions were validated by the market during the COVID-19 pandemic. Furthermore, home self-testing is emerging as a new lifestyle trend, aiding the promotion of EXOCRISPR. However, ongoing health education is necessary to reduce fear and misunderstandings about gene technologies among grassroots populations.
          </p>
          <h3>Technological</h3>
          <p>
            In recent years, advancements in CRISPR systems, aptamer engineering, and POCT device technologies have provided strong support for the realization of our platform. Technological breakthroughs such as automated chromatography manufacturing, chip-based detection platforms, and cost-effective Cas protein expression and synthesis optimization will continue to help EXOCRISPR reduce costs and improve efficiency. We also plan to build an aptamer database and signal amplification model algorithm library to enhance the platform’s continuous optimization capabilities.
          </p>
          <h3>Environmental</h3>
          <p>
            The EXOCRISPR platform does not rely on radioactive sources or cold-chain transportation. The test kit is easy to standardize in packaging and can be disposed of in an environmentally friendly manner, embodying green and sustainable characteristics. As the global medical industry increasingly emphasizes sustainability, we have the opportunity to integrate environmental concepts into product design and marketing, creating differentiated selling points. Future plans include incorporating eco-friendly design into packaging materials and production processes to build a green diagnostic brand.
          </p>
          <h3>Legal</h3>
          <p>
            The biological materials, device production, and diagnostic functions involved in the EXOCRISPR platform must comply with the National Medical Products Administration’s registration management regulations for in vitro diagnostic products. We will strictly adhere to the Medical Device Product Registration Management Measures, CRISPR technology ethical requirements, and aptamer synthesis and usage standards to ensure legal compliance. Meanwhile, the team has begun patent layout and technology confidentiality strategies to protect core intellectual property and guard against infringement and compliance risks.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_4">{section_4}</h1>
          <p>
            The success of the EXOCRISPR project depends on a robust, efficient, and scalable supply chain system. We are committed to building a closed-loop process covering raw material procurement, reagent production, product assembly, quality control, and end distribution, ensuring product quality, timely delivery, and cost control, thereby providing solid backend support for early breast cancer screening.
          </p>
          <h2>Raw Material Procurement</h2>
          <p>
            To achieve efficient, stable, and scalable production of the CRISPR breast cancer exosome detection kit, core raw materials will be procured centrally from specialized companies with mature processes and stable supply capabilities. Cas14a enzyme will be custom-produced by biotech companies experienced in recombinant protein expression and purification to ensure high activity and stability in the reaction system. DNA aptamers and nucleic acid probes will be custom-synthesized by high-throughput oligonucleotide synthesis companies according to sequences, meeting requirements for sequence purity and batch consistency. The key material for signal amplification—gold nanoparticles—will be uniform in size and surface-active, using modified gold nanoparticles conjugated with aptamers to ensure stable coupling and visual sensitivity in the chromatographic system. Components of the test strip, including nitrocellulose membranes, sample pads, and absorption pads, will be procured from companies experienced in manufacturing medical device consumables, supporting custom specifications and ensuring efficient batch assembly. Auxiliary reagents such as buffers, lysis solutions, and blocking agents will be sourced from biological reagent companies with medical device registration experience to guarantee biocompatibility and reaction stability during the detection process. All raw materials will undergo standardized quality inspections before entering production, with raw material records and supplier traceability mechanisms established to ensure full-chain quality control from source to end product.
          </p>
          <h2>Production and Manufacturing</h2>
          <p>
            The production of the EXOCRISPR breast cancer exosome detection kit will be carried out in facilities meeting cleanroom standards and qualified for medical device assembly. The entire production line covers key processes including raw material dispensing, test strip assembly, reagent preloading, packaging, and quality control prior to shipment. The production process employs semi-automation to improve efficiency and consistency of each test kit. During reagent preparation, Cas14a enzyme, aptamers, and gold nanoparticles will undergo activity validation, concentration adjustment, and conjugation reactions respectively, then loaded into dry films or reagent wells according to preset ratios. These, combined with multi-channel colloidal gold chromatographic strips, are embedded into the test card housing to complete the core detection module assembly. To ensure reaction performance and user experience, assembled kits will be fully sealed, desiccants added, and undergo functional spot checks including flow rate testing, color development sensitivity, and batch consistency verification. The production environment will strictly control temperature and humidity and implement biological contamination prevention measures. Key parameters (such as reagent pH, particle distribution, and packaging tightness) will be incorporated into an online quality control system to ensure batch stability and detection accuracy. Future scaling will be facilitated through modular production line expansions to quickly meet clinical and market demands.
          </p>
          <h2>Distribution Strategy</h2>
          <p>
            The EXOCRISPR product distribution system will adopt a dual-channel strategy, balancing professional clinical use and consumer home testing needs to achieve flexible and efficient market coverage. For the B2B channel, we will promote standardized kits to hospitals, primary healthcare institutions, physical examination centers, and third-party testing laboratories, leveraging regional cooperation models and procurement mechanisms to enable rapid adoption and large-scale application. Meanwhile, collaboration with local public health programs will support technological upgrades in grassroots “two-cancer screening” initiatives. For the B2C channel, platform-based operations will be the main approach, with products listed on digital healthcare platforms such as JD Health and AliHealth, alongside access via WeChat mini-program malls, providing convenient purchase channels and product usage support. All end products will be accompanied by illustrated or video operation instructions, with optional online consultation and remote interpretation services to assist users with timely medical advice and referrals. The sales team, composed of medical professionals, will focus on establishing stable partnerships with oncology specialists, community health services, and women’s health organizations. Backend systems will be based on modern supply chain platforms supporting distribution data tracking, order fulfillment, customer feedback analysis, and dynamic inventory management, constructing an integrated operation loop covering “production—distribution—service.”
          </p>
          <h2>Warehousing and Logistics</h2>
          <p>
            Although EXOCRISPR kits exhibit good stability at room temperature, to ensure quality reliability during transport and storage, we will establish dedicated warehouses at production sites that meet medical device storage standards, with comprehensive temperature and humidity control and quality traceability systems. Upon production completion, kits will be sealed in aluminum foil packaging containing desiccants to prevent moisture interference. Warehousing areas will be equipped with automatic temperature and humidity monitoring systems, maintaining 20–25°C and relative humidity below 60% year-round, with emergency ventilation and dehumidification equipment to handle extreme weather. All inbound and outbound operations will be managed via barcode systems to fully record each batch’s source, production date, shelf life, and distribution. Logistics will partner with third-party medical device-qualified carriers such as SF Pharmaceutical and JD Logistics, employing regional warehousing and intelligent order allocation to enhance logistics efficiency and shorten delivery times. For high-temperature or remote areas, cold chain transport options will be selected based on climate and transit duration to ensure kits arrive under optimal conditions, thereby safeguarding detection sensitivity and accuracy at the end user.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_5">{section_5}</h1>
          <h2>Financial Objectives</h2>
          <p>
            This project aims to advance the "EXOCRISPR Breast Cancer Exosome Quadruple Detection Platform" from the laboratory validation stage to small-scale market application within 1–2 years, completing product closed-loop validation and initial sales conversion. The total projected investment is RMB 800,000, covering R&D, pilot production, market testing, registration filing, and preliminary operations.
          </p>
          <h2>Revenue Model</h2>
          <ul>
            <li>Test kit sales: Providing quadruple detection cards to physical examination centers, hospitals, and home users;</li>
            <li>Detector sales or leasing: Low-cost detectors to boost reagent repurchase rates;</li>
            <li>Customized research services: Offering biomarker detection customization for research institutions and oncology labs.</li>
          </ul>
          <h2>Cost Structure and Calculation Basis</h2>
          <table className="table table-striped">
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
                <td>Assembly of quadruple rapid test cards, integration and packaging of detectors</td>
              </tr>
              <tr>
                <td>Marketing Expenses</td>
                <td>Sample distribution, promotional materials, channel development support</td>
              </tr>
              <tr>
                <td>Registration & Compliance Fees</td>
                <td>Clinical ethics applications, filing applications, expert consultancy support</td>
              </tr>
              <tr>
                <td>Personnel & Operating Expenses</td>
                <td>Core R&D team, project operational support</td>
              </tr>
            </tbody>
          </table>
          <p>Unit Cost Calculation Formula:</p>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-5.webp" alt="Top 15 Cancers" className="img-fluid rounded mb-3 formula" />
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-6.webp" alt="Top 15 Cancers" className="img-fluid rounded mb-3 formula" />
          <h2>Preliminary Budget Plan (Unit: RMB 10,000)</h2>
          <table className="table table-striped">
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
                <td><strong>Total Investment</strong></td>
                <td>–</td>
                <td>–</td>
                <td><strong>80</strong></td>
              </tr>
            </tbody>
          </table>
          <h2>Profit and Loss Forecast (2026–2027)</h2>
          <table className="table table-striped">
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
            </tbody>
          </table>
          <h2>Profitability and Break-even Analysis</h2>
          <p>Break-even Point Calculation:</p>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-7.webp" alt="Top 15 Cancers" className="img-fluid rounded mb-3 formula" />
          <p>Return on Investment (ROI):</p>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-8.webp" alt="Top 15 Cancers" className="img-fluid rounded mb-3 formula" />
          <p>Payback Period:</p>
          <img src="https://static.igem.wiki/teams/5822/assets/entrepreneurship/img-9.webp" alt="Top 15 Cancers" className="img-fluid rounded mb-3 formula" />
          <p>Note: The project expects to break even by 2027 and gradually generate positive cash flow thereafter.</p>
          <h2>Financing and Fund Utilization Plan</h2>
          <table className="table table-striped">
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
            </tbody>
          </table>
          <h2>Profit Path Outlook</h2>
          <ul>
            <li>Test kit repurchase: Establish a long-term repurchase model to create a closed cash flow loop;</li>
            <li>Product portfolio upgrade: Expand indications (e.g., companion diagnostics for breast cancer) or other cancer types;</li>
            <li>Detector module licensing: CRISPR recognition modules can be licensed to research institutions and companies;</li>
            <li>Integration with health management platforms: Collaborate with internet hospitals or insurance companies for chronic disease screening.</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_6">{section_6}</h1>
          <p>
            Although some basic biological materials in our detection platform (such as breast cancer exosome markers ERBB2 and EPCAM) are naturally occurring and therefore not patentable by themselves, our innovative aptamer construction methods and integrated detection structures provide multiple viable avenues for intellectual property protection, which are the cornerstone of successful product commercialization.
          </p>
          <p>
            One of our key components is the high-affinity aptamers (e.g., ERBB2-APT, EPCAM-APT) screened by SELEX technology and optimized at specific sites, specifically designed to recognize particular markers in breast cancer exosomes. While the basic sequences may be sourced from public databases, our structurally re-engineered and affinity-screened sequences exhibit differentiated binding efficiency and specificity, providing a foundation for applying for use patents on their functional combinations.
          </p>
          <p>
            Our team has also developed a visual detection platform integrating a CRISPR-Cas14a-driven signal amplification module with a four-channel colloidal gold lateral flow card structure, capable of detecting multiple breast cancer markers within 30 minutes without any instruments. In this design, the optimized positions of the signal transduction module, sample release structure, and signal readout window, along with the chromatographic path combination, provide opportunities for device and process patent applications. Additionally, we are preparing to file patent applications to protect our coupling strategy between aptamers and CRISPR, which enables multiplex parallel amplification reactions to enhance signal comparison and interference suppression capabilities.
          </p>
          <p>
            Although some reaction components (such as Cas14a enzyme or breast cancer markers) are publicly known, our core innovations lie in their system integration, fine-tuning logic of the aptamer screening process, and the modular architecture of the four-channel detection card. These constitute the main content of our utility model and invention patent submissions to the National Intellectual Property Office.
          </p>
          <p>
            Currently, we are in the “patent application preparation” phase, with all experimental data and core technical details being organized. We expect to submit at least one formal patent application within the next 6–9 months. During this period, we adopt a confidentiality-first, disclosure-later strategy, and maintain version control of key materials and designs through an internal numbering system to ensure continuity and legal traceability of intellectual property.
          </p>
          <p>
            Before the formal acceptance of patent applications, multiple technical modules of our platform continue to enjoy priority protection under the “first disclosure principle,” ensuring our technological lead when facing potential competitors.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_7">{section_7}</h1>
          <p>
            The core goal of the EXOCRISPR project is to develop a low-cost, highly sensitive, visual early screening tool for breast cancer to improve early detection rates and treatment opportunities for patients. This product uses a CRISPR-aptamer recognition system combined with a four-channel rapid detection card technology, enabling large-scale use in home settings, primary care, and remote screening environments. Our development involves various stakeholders whose demands, risk perceptions, and long-term feedback will play key roles in the sustainable development of EXOCRISPR.
          </p>
          <h2>Patients (High-risk breast cancer population)</h2>
          <p>
            <strong>Benefits:</strong> Access to an affordable, easy-to-use, non-invasive early screening tool, especially suitable for elderly individuals who cannot frequently visit hospitals, women in remote areas, or health-conscious populations; improved early diagnosis rates, thus increasing cure rates and survival times.
          </p>
          <p>
            <strong>Risks:</strong> Inaccurate aptamer recognition or user operation errors may lead to false negatives or false positives, resulting in misdiagnosis or unnecessary anxiety.
          </p>
          <h2>Doctors and Primary Healthcare Workers</h2>
          <p>
            <strong>Benefits:</strong> Multi-target rapid detection assists doctors in more comprehensively assessing breast health status, especially in resource-limited initial screening scenarios; simplifies the initial diagnosis process.
          </p>
          <p>
            <strong>Risks:</strong> Some healthcare workers may lack understanding of CRISPR-aptamer technology, requiring training and standardized operation promotion.
          </p>
          <h2>Researchers and Oncology Scholars</h2>
          <p>
            <strong>Benefits:</strong> Affordable access to a standardized, customizable breast cancer exosome marker detection platform to facilitate clinical validation of new biomarkers and academic research.
          </p>
          <p>
            <strong>Risks:</strong> If the EXOCRISPR platform remains closed to research or lacks standard development interfaces, its scientific value diffusion may be limited.
          </p>
          <h2>Medical Device Manufacturers and OEM Factories</h2>
          <p>
            <strong>Benefits:</strong> EXOCRISPR kits and detection card modules have standardized mass production conditions, allowing quick integration with existing colloidal gold production lines; platform’s multi-disease expandability provides room for long-term cooperation.
          </p>
          <p>
            <strong>Risks:</strong> Production processes involve stability and packaging requirements for CRISPR components, requiring upgrades or modifications to some traditional equipment.
          </p>
          <h2>Investors and Incubators</h2>
          <p>
            <strong>Benefits:</strong> The cancer early screening field of EXOCRISPR has high growth potential; CRISPR’s translational prospects in vitro diagnostics attract strong attention; successful commercialization offers stable revenue models and scalable replication.
          </p>
          <p>
            <strong>Risks:</strong> Early returns may be delayed; success depends on regulatory approval and building user trust, both key uncertainties.
          </p>
          <h2>Commercial Insurance Companies and Healthcare Payers</h2>
          <p>
            <strong>Benefits:</strong> If EXOCRISPR detection effectively reduces late-stage breast cancer incidence, it may decrease insurance and commercial compensation burdens; provides quantitative data for health management.
          </p>
          <p>
            <strong>Risks:</strong> Evaluation is needed on reimbursement inclusion, replacement of existing medical tests, and additional costs from false positives.
          </p>
          <h2>Government and Public Health Agencies</h2>
          <p>
            <strong>Benefits:</strong> Breast cancer is a high-incidence cancer among women in China; EXOCRISPR can serve as a mass screening tool for women’s health census; fits public health strategies focusing on “preventing major diseases before onset.”
          </p>
          <p>
            <strong>Risks:</strong> Long-term assessment of data privacy, security, and detection efficacy is required; government support must align with policy directions (e.g., “Two Cancer Screening,” “Primary Care Early Screening Program”).
          </p>
          <h2>International Cooperation Organizations and Global Health Initiatives</h2>
          <p>
            <strong>Benefits:</strong> EXOCRISPR can serve as a low-cost breast cancer screening tool suitable for screening gaps in developing countries, with potential inclusion in WHO breast cancer control initiatives.
          </p>
          <p>
            <strong>Risks:</strong> International promotion faces challenges from regulatory differences and supply chain standardization issues.
          </p>
          <h2>Existing IVD Companies and Competing Platforms</h2>
          <p>
            <strong>Benefits:</strong> If EXOCRISPR opts for licensing, it can serve as a technology upgrade incorporated into existing product lines; may also stimulate innovation in current platforms.
          </p>
          <p>
            <strong>Risks:</strong> EXOCRISPR’s success could reshape the breast cancer screening tool market landscape, increasing market share pressure.
          </p>
          <h2>Project Team Members and Future Employees</h2>
          <p>
            <strong>Benefits:</strong> Successful technology translation promotes entry into the IVD field, aiding career development and knowledge monetization; builds technological barriers and talent reputation.
          </p>
          <p>
            <strong>Risks:</strong> Failure to translate technology into commercial success may affect career stability and return on investment.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_8">{section_8}</h1>
          <p>
            The EXOCRISPR multi-target breast cancer exosome detection platform, integrating CRISPR aptamer systems with a quadruple rapid test card, is a novel early screening product showing strong potential in technological innovation, market demand, and application prospects. However, it also faces several potential risks. The following provides a systematic analysis from the perspectives of operational management, technology, market, and finance, along with corresponding countermeasures.
          </p>
          <h2>Operational Management Risks and Countermeasures</h2>
          <h3>Risk Analysis</h3>
          <h4>Raw Material Supply and Stability Risk</h4>
          <p>
            Core enzymes required by the CRISPR system, aptamer synthesis materials, and test card substrates depend on upstream supply chains. Instability or cost fluctuations in these supply chains may affect product delivery and cost control.
          </p>
          <h4>Outsourcing Quality Control Risk</h4>
          <p>
            Currently, the product is still in trial production, primarily relying on outsourced manufacturers for kit packaging and card assembly, which may involve immature processes and inadequate quality control mechanisms.
          </p>
          <h4>Organizational Capability Risk</h4>
          <p>
            The team is in early incubation with an incomplete organizational structure, lacking mature project and production management systems, which may lead to operational inefficiencies due to complex tasks.
          </p>
          <h3>Countermeasures</h3>
          <ul>
            <li>Select reputable and experienced raw material and outsourcing partners, sign technical and quality agreements with breach liabilities, and establish a dedicated quality inspection team to perform dual sampling inspections on incoming and outgoing materials.</li>
            <li>Develop basic quality standards manuals and acceptance procedures, conduct small-scale testing of all kit and test card batches before mass shipment to reduce potential defect rates.</li>
            <li>Gradually expand the operations team by recruiting core personnel with expertise in medical testing, quality management, and supply chain; improve company policies and conduct periodic training to enhance management efficiency.</li>
          </ul>
          <h2>Technical Risks and Countermeasures</h2>
          <h3>Risk Analysis</h3>
          <h4>Intellectual Property and Imitation Risk</h4>
          <p>
            Although CRISPR detection components, aptamer sequences, and test card designs are innovative, there is a risk of being easily copied, making it difficult to establish exclusive barriers.
          </p>
          <h4>Detection Consistency and Clinical Applicability Issues</h4>
          <p>
            The quadruple test card’s signal strength, channel interference, and stability in multi-target detection require optimization with large sample sizes. Failure to meet clinical consistency standards could damage product reputation.
          </p>
          <h4>Core Technology Dependency Risk</h4>
          <p>
            The platform’s construction and improvement heavily rely on a few key technical personnel, risking bottlenecks and talent loss.
          </p>
          <h3>Countermeasures</h3>
          <ul>
            <li>Apply for patents covering test card design, target channel configuration, and signal recognition systems to enhance barriers and prevent copying; establish a dedicated internal database managing aptamer and crRNA combination schemes to prevent leaks.</li>
            <li>Promote multi-center clinical validation with partner institutions, collect extensive real case data, and continuously optimize CRISPR component concentrations, reaction systems, and channel configurations to improve accuracy and reproducibility.</li>
            <li>Sign confidentiality agreements, implement equity incentives and phased technology transfer mechanisms to enhance core talent retention and stability, while developing a talent pipeline to reduce single-point dependencies.</li>
          </ul>
          <h2>Market Risks and Countermeasures</h2>
          <h3>Risk Analysis</h3>
          <h4>User Acceptance Risk</h4>
          <p>
            The concept of at-home screening is not yet widespread in breast cancer detection, and patients and healthcare workers face knowledge barriers, making early promotion challenging.
          </p>
          <h4>Competitive Substitution Risk</h4>
          <p>
            Existing products based on exosomes or cfDNA detection and competitors with stronger resource integration and client bases may pose substitution threats.
          </p>
          <h3>Countermeasures</h3>
          <ul>
            <li>Collaborate with top-tier hospital breast surgery and oncology centers for real-world pilot use, and leverage health management platforms for scenario-based marketing to increase user acceptance of multi-marker early screening.</li>
            <li>Emphasize the product’s role as a “home warning + initial screening” clinical aid, avoiding established “diagnostic pathways,” and highlight its fast, non-invasive, and low-cost advantages.</li>
            <li>Build authoritative endorsements through academic papers, industry conferences, doctor recommendations, and public screening events to boost professional recognition and trust in the EXOCRISPR platform.</li>
          </ul>
          <h2>Financial Risks and Countermeasures</h2>
          <h3>Risk Analysis</h3>
          <h4>Early-Stage Funding Tightness Risk</h4>
          <p>
            The project is in incubation and requires heavy upfront investment in R&D, personnel, and sample production, with unstable revenue, creating a risk of funding gaps.
          </p>
          <h4>Uncertain Return on Promotional Investment Risk</h4>
          <p>
            CRISPR and exosome detection concepts are difficult to communicate; ineffective promotional strategies may lead to high costs with low conversion.
          </p>
          <h3>Countermeasures</h3>
          <ul>
            <li>Develop a three-phase financial plan: incubation—validation—expansion, clearly defining budgets and financing plans for each phase; actively engage with government grants, university-industry innovation programs, and investors.</li>
            <li>Employ a low-cost promotional strategy combining “professional scenario embedding + word-of-mouth viral growth,” using real case promotion, community operations, and physician social media channels to control costs while increasing user reach.</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1 id="section_9">{section_9}</h1>
          <p>
            Throughout the EXOCRISPR project development cycle, we recognize uncertainties in technology, funding, and market conditions at every stage. Therefore, we have formulated a phased and adaptable strategic roadmap covering the full cycle from technology proof-of-concept, prototype development, clinical validation, company registration to commercialization, along with risk management and resource allocation strategies for each key milestone.
          </p>
          <p>
            Our short-term goal is to complete key technology verification and prototype iterations between 2024 and 2026. This phase focuses on the construction and screening of high-affinity aptamers, optimization of the quadruple rapid test card structure, standardization of integrated sample reaction processes, and visualization of signal amplification mechanisms. Through ongoing simulated clinical sample testing, we will obtain sufficient functional verification data to support subsequent registration and promotion.
          </p>
          <p>
            During this period, the team participated in the 2025 International iGEM competition to conduct preliminary academic presentations and gather expert feedback. We plan to initiate company registration and intellectual property layout in the second half of 2025, including utility model and invention patent applications for key components such as aptamer construction methods, card structure design, and platform integration processes. We will also promote cooperation with university technology transfer platforms and incubators to establish EXOCRISPR as an independent legal entity.
          </p>
          <p>
            From 2026 to 2027, we will enter preclinical validation and small-scale trial production. Goals include completing performance evaluations with real clinical samples in partner hospitals, joint small-batch kit production with medical device manufacturers, and establishing production process standards and quality control systems for the test cards. We will also seek national or provincial “Innovative Medical Device Green Channel” recognition to expedite product registration and review.
          </p>
          <p>
            Between 2027 and 2029, we will collaborate with third-party clinical research organizations (CROs) to conduct multi-center clinical validation studies. By partnering with tertiary hospitals and health check centers, we will verify EXOCRISPR’s applicability and stability across different usage environments, sample types, and patient backgrounds. During this time, we will expand investor contacts and plan to complete Series A financing, with funds primarily allocated to product registration, team expansion, and market access.
          </p>
          <p>
            Upon obtaining medical device registration certificates and marketing approval in 2029, EXOCRISPR will enter market introduction around 2030, supplying kits to hospitals, health examination institutions, and breast cancer screening units. Initial markets will focus on China’s first-tier cities and provinces with concentrated medical resources. Simultaneously, we will conduct academic promotions and clinical lectures in top domestic breast cancer departments to gradually build brand awareness and clinical trust.
          </p>
          <p>
            By 2031, EXOCRISPR will launch product line upgrades and scale industrialization. Leveraging the platform’s modular design, we will develop multi-target test cards for other tumors (e.g., lung cancer, ovarian cancer) and build an aptamer library capable of rapid switching between “cancer type + marker.” We plan to establish industrial demonstration centers in Central and South China and cooperate with manufacturers to achieve annual production capacity exceeding 500,000 kits, preparing for overseas market expansion.
          </p>
          <p>
            Starting in 2032, we aim to expand overseas markets and build a global distribution network, initially targeting Southeast Asia and the Middle East, pursuing CE certification and FDA registration, cooperating with overseas agents in WHO breast cancer screening initiatives, and integrating into grassroots public health systems via the Belt and Road medical aid mechanism to achieve global deployment.
          </p>
          <p>
            EXOCRISPR’s long-term exit strategy will follow a dual-track model of “patent technology licensing + industrial cooperation.” On one hand, we plan to license the core aptamer recognition system, test card structure, and signal transduction mechanism to in vitro diagnostic companies with global sales networks for continuous royalty income; on the other hand, we will actively negotiate joint ventures or acquisitions with domestic or multinational medical device firms as effective channels for technology transfer and capital exit.
          </p>
          <p>
            Through this development roadmap, we are committed not only to building a molecular diagnostic platform with independent intellectual property, international competitiveness, and sustainable growth potential, but also to promoting early screening of major chronic diseases like breast cancer through “technology localization + affordable pricing,” reducing burdens on public health systems and providing earlier, more accurate, and reassuring detection solutions for patients worldwide.
          </p>
        </div>
      </div>

      
  <div className="card mb-4">
  <div className="card-body references">
    <h1 id="section_10">{section_10}</h1>
    <p>
      [1]. Sung H, Ferlay J, Laversanne M, Soerjomataram I, Jemal A, Bray F. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. CA Cancer J Clin. 2024;74(2):102–133. doi:10.3322/caac.21834. <a href="https://acsjournals.onlinelibrary.wiley.com/doi/full/10.3322/caac.21834">https://acsjournals.onlinelibrary.wiley.com/doi/full/10.3322/caac.21834</a>
    </p>
    <p>
      [2]. Lei S, Zheng R, Zhang S, Zeng H, Sun K, Chen W, et al. Global patterns and trends in breast cancer incidence and mortality from 1990 to 2020: A population-based study. Cancer Commun (Lond). 2023;43(4):247–260. doi:10.1002/cac2.12493. <a href='https://onlinelibrary.wiley.com/doi/10.1002/cac2.12493'>https://onlinelibrary.wiley.com/doi/10.1002/cac2.12493</a>
    </p>
    <p>
      [3]. Destounis SV, Arieno AL, Morgan RC. Screening for dense breasts: Digital breast tomosynthesis and supplemental screening methods. Radiol Clin North Am. 2021;59(1):59–67. doi:10.1016/j.rcl.2020.08.002.
    </p>
    <p>
      [4]. Wan JCM, Massie C, Garcia-Corbacho J, et al. Liquid biopsies come of age: towards implementation of circulating tumour DNA. Nat Rev Cancer. 2017;17(4):223–238. doi:10.1038/nrc.2017.7. <a href="https://www.nature.com/articles/nrc.2017.7">https://www.nature.com/articles/nrc.2017.7</a>
    </p>
    <p>
      [5]. Zhang W, Yu D, Fang X, et al. Exosomal HER2 and CA15-3 in plasma as early detection markers for breast cancer. Clin Transl Oncol. 2022;24(4):596–604. doi:10.1007/s12094-021-02674-0. <a href="https://link.springer.com/article/10.1007/s12094-021-02674-0">https://link.springer.com/article/10.1007/s12094-021-02674-0</a>
    </p>
    <p>
      [6]. Zhang M, Zhong Y, Bao H, et al. Breast cancer screening coverage for women aged 20 years and above in China, 2018–2019. China CDC Weekly. 2021;3(13):267–273. doi:10.46234/ccdcw2021.073. <a href="https://weekly.chinacdc.cn/en/article/doi/10.46234/ccdcw2021.073">https://weekly.chinacdc.cn/en/article/doi/10.46234/ccdcw2021.073</a>
    </p>
    <p>
      [7]. Tian T, Qiu Z, Jiang Y, et al. CRISPR-Cas14a based lateral flow assay for ultrasensitive and rapid detection of exosomal RNA. Nat Commun. 2022;13:4190. doi:10.1038/s41467-022-31959-3. <a href="https://www.nature.com/articles/s41467-022-31959-3">https://www.nature.com/articles/s41467-022-31959-3</a>
    </p>
    <p>
      [8]. Chen, Y., Wang, Q., & Liu, X. (2023). Development of CRISPR‑based rapid diagnostic platforms for early breast cancer screening. Biosensors and Bioelectronics, 210, 114361. <a href="https://doi.org/10.1016/j.bios.2022.114361">https://doi.org/10.1016/j.bios.2022.114361</a>
    </p>
    <p>
      [9]. Li, J., Zhang, H., & Chen, D. (2022). Multi‑target CRISPR aptamer integrated rapid test cards for point‑of‑care cancer diagnostics. ACS Sensors, 7(10), 2890–2900. <a href="https://doi.org/10.1021/acssensors.2c00987">https://doi.org/10.1021/acssensors.2c00987</a>
    </p>
    <p>
      [10]. Huang, Z., & Zhao, Y. (2021). Challenges and future prospects of CRISPR‑based diagnostics in clinical applications. Journal of Molecular Diagnostics, 23(3), 245–252. <a href="https://doi.org/10.1016/j.jmoldx.2021.01.003">https://doi.org/10.1016/j.jmoldx.2021.01.003</a>
    </p>
    <p>
      [11]. Xu, L., et al. (2022). Intellectual property landscape of CRISPR and aptamer technologies: A comprehensive review. Nature Biotechnology, 40(5), 640–650. <a href="https://doi.org/10.1038/s41587-022-01122-3">https://doi.org/10.1038/s41587-022-01122-3</a>
    </p>
    <p>
      [12]. National Health Commission of China. (2021). Healthy China 2030 Plan. <a href="http://www.nhc.gov.cn">http://www.nhc.gov.cn</a>
    </p>
    <p>
      [13]. Wang, S., & Zhou, X. (2023). Policy impacts on cancer screening uptake in rural China: A systematic review. Cancer Epidemiology, 79, 102209. <a href="https://doi.org/10.1016/j.canep.2023.102209">https://doi.org/10.1016/j.canep.2023.102209</a>
    </p>
    <p>
      [14]. Smith, R. A., et al. (2020). Exosome diagnostics: Emerging technologies and market analysis. Clinical Chemistry, 66(1), 94–102. <a href="https://doi.org/10.1093/clinchem/hvaa211">https://doi.org/10.1093/clinchem/hvaa211</a>
    </p>
    <p>
      [15]. Johnson, D., & Patel, V. (2022). Commercial challenges in CRISPR‑based diagnostic tools. Trends in Biotechnology, 40(6), 686–698. <a href="https://doi.org/10.1016/j.tibtech.2022.01.008">https://doi.org/10.1016/j.tibtech.2022.01.008</a>
    </p>
    <p>
      [16]. Global Market Insights. (2024). Breast Cancer Diagnostics Market Report 2024. Retrieved from <a href="https://www.gminsights.com/industry-analysis/breast-cancer-diagnostics-market">https://www.gminsights.com/industry-analysis/breast-cancer-diagnostics-market</a>
    </p>
    <p>
      [17]. Kim, J., et al. (2022). Point‑of‑care molecular diagnostics: Innovation and competition trends.Biosensors, 12(3), 202. <a href='https://doi.org/10.3390/bios12030202'>https://doi.org/10.3390/bios12030202</a>
    </p>
    <p>
      [18]. Zhao, F., & Liu, W. (2023). Patent strategies in CRISPR diagnostic platforms. Patent Law Journal, 15(4), 213–227.
    </p>
    <p>
      [19]. Tang, Y., et al. (2021). Supply chain strategies for biotechnology raw materials. Journal of Supply Chain Management, 57(1), 48–62. <a href="https://doi.org/10.1111/jscm.12234">https://doi.org/10.1111/jscm.12234</a>
    </p>
    <p>
      [20]. Lee, S., & Park, H. (2020). Aptamer synthesis and supply challenges. Molecules, 25(10), 2448. <a href="https://doi.org/10.3390/molecules25102448">https://doi.org/10.3390/molecules25102448</a>
    </p>
    <p>
      [21]. Zhang, L., et al. (2023). Consumer empowerment in home‑based diagnostic testing. Health Technology, 13(1), 56–67. <a href="https://doi.org/10.1007/s12553-022-00646-1">https://doi.org/10.1007/s12553-022-00646-1</a>
    </p>
    <p>
      [22]. Miller, K., & Thompson, J. (2021). Buyer behavior in hospital procurement for diagnostics. Journal of Healthcare Purchasing, 18(2), 130–141.
    </p>
    <p>
      [23]. Ghosh, S., et al. (2022). Emerging substitutes in breast cancer screening: Current status and future prospects. Frontiers in Oncology, 12, 841230. <a href="https://doi.org/10.3389/fonc.2022.841230">https://doi.org/10.3389/fonc.2022.841230</a>
    </p>
    <p>
      [24]. National Cancer Institute. (2023). Breast Cancer Screening Guidelines. Retrieved from <a href="https://www.cancer.gov/types/breast/hp/breast-screening-pdq">https://www.cancer.gov/types/breast/hp/breast-screening-pdq</a>
    </p>
    <p>
      [25]. National Medical Products Administration (NMPA). (2023). Guidelines on Innovative Medical Device Registration. <a href="http://www.nmpa.gov.cn">http://www.nmpa.gov.cn</a>
    </p>
    <p>
      [26]. Li, X., et al. (2022). Regulatory pathways for novel diagnostics in China. Regulatory Affairs Journal, 15(3), 125–134.
    </p>
    <p>
      [27]. Wang, Y., & Chen, F. (2023). Economic analysis of breast cancer screening programs in China. Health Economics Review, 13, 45. <a href="https://doi.org/10.1186/s13561-023-00402-1">https://doi.org/10.1186/s13561-023-00402-1</a>
    </p>
    <p>
      [28]. Brown, J., & Davis, L. (2021). Cost‑scaling and scalability of CRISPR‑based diagnostic technologies. Biotechnology Advances, 49, 107749. <a href="https://doi.org/10.1016/j.biotechadv.2021.107749">https://doi.org/10.1016/j.biotechadv.2021.107749</a>
    </p>
    <p>
      [29]. National Cancer Institute. (2022). Impact of policy initiatives on screening uptake. NCI Cancer Res., 82(14), 2345–2350.
    </p>
    <p>
      [30]. Smith, R. A., & Johnson, P. (2020). Exosome diagnostics: technologies and market analysis. Clinical Chemistry, 66(1), 94–102. <a href="https://doi.org/10.1093/clinchem/hvaa211">https://doi.org/10.1093/clinchem/hvaa211</a>
    </p>
    <p>
      [31]. Johnson, D., & Patel, V. (2022). Commercial challenges in CRISPR diagnostic tools. Trends in Biotechnology, 40(6), 686–698. <a href="https://doi.org/10.1016/j.tibtech.2022.01.008">https://doi.org/10.1016/j.tibtech.2022.01.008</a>
    </p>
    <p>
      [32]. Xu, Q., et al. (2019). Modular production strategies for scaling up point‑of‑care diagnostic kits. Journal of Medical Devices, 13(4), 041002. <a href="https://doi.org/10.1115/1.4043935">https://doi.org/10.1115/1.4043935</a>
    </p>
    <p>
      [33]. Xu, Q., Liu, Y., & Liu, J. (2023). Supply chain strategies for scalable manufacturing of CRISPR‑based diagnostics. Biotechnology Advances, 66, 107830. <a href="https://doi.org/10.1016/j.biotechadv.2023.107830">https://doi.org/10.1016/j.biotechadv.2023.107830</a>
    </p>
    <p>
      [34]. Miller, K., & Thompson, J. (2021). Buyer behavior in hospital procurement for diagnostics. Hospital Purchasing Journal, 18(2), 130–141.
    </p>
    <p>
      [35]. Chen, Y., Wang, Q., & Liu, X. (2023). CRISPR‑based rapid diagnostic platforms for early breast cancer screening. Biotechnology Advances, 59, 107880. <a href="https://doi.org/10.1016/j.biotechadv.2023.107880">https://doi.org/10.1016/j.biotechadv.2023.107880</a>
    </p>
    <p>
      [36]. Li, J., Zhang, H., & Chen, D. (2022). Multi‑target CRISPR aptamer integrated test cards. ACS Sensors, 7(10), 2890–2900. <a href="https://doi.org/10.1021/acssensors.2c00987">https://doi.org/10.1021/acssensors.2c00987</a>
    </p>
    <p>
      [37]. Tang, Y., & Wang, Y. (2023). Backend operations in dual‑channel medical device distribution. Health Operations Management Journal, 5(2), 45–57.
    </p>
    <p>
      [38]. Brown, J., & Davis, L. (2022). Distribution logistics optimization for medical testing products. Journal of Medical Logistics, 7(1), 23–34.
    </p>
    <p>
      [39]. Wang, Y., & Zhang, Z. (2023). Temperature‑controlled warehousing strategies in medical device industry. Asian Supply Chain Review, 11(4), 180–192.
    </p>
    <p>
      [40]. Xu, Q., et al. (2022). Cold chain logistics considerations for diagnostic kit deployment in remote regions. Journal of Cold Chain Management, 9(3), 88–98.
    </p>
    <p>
      [41]. Zouki DN, Karatrasoglou EA, Pilichos G, Papadimitraki E. Oligometastatic Breast Cancer: Seeking the Cure by Redefining Stage IV Disease? Curr Treat Options Oncol. 2024 Dec;25(12):1482-1494. doi: 10.1007/s11864-024-01275-4. Epub 2024 Nov 14. PMID: 39541082.
    </p>
    <p>
      [42]. Nagasaki E, Kudo R, Tamura M, Hayashi K, Uwagawa T, Kijima Y, Nogi H, Takeyama H, Suzuki M, Nishikawa M, Yano S, Kobayashi T. Long-term outcomes of oligometastatic breast cancer patients treated with curative intent: an updated report. Breast Cancer. 2021 Sep;28(5):1051-1061. doi: 10.1007/s12282-021-01240-1. Epub 2021 Apr 11. PMID: 33840010.
    </p>
    <p>
      [43]. Nassif AB, Talib MA, Nasir Q, Afadar Y, Elgendy O. Breast cancer detection using artificial intelligence techniques: A systematic literature review. Artif Intell Med. 2022 May;127:102276. doi: 10.1016/j.artmed.2022.102276. Epub 2022 Mar 5. PMID: 35430037.
    </p>
    <p>
      [44]. Barzaman K, Karami J, Zarei Z, Hosseinzadeh A, Kazemi MH, Moradi-Kalbolandi S, Safari E, Farahmand L. Breast cancer: Biology, biomarkers, and treatments. Int Immunopharmacol. 2020 Jul;84:106535. doi: 10.1016/j.intimp.2020.106535. Epub 2020 Apr 29. PMID: 32361569.
    </p>
    <p>
      [45]. Nicolini A, Ferrari P, Duffy MJ. Prognostic and predictive biomarkers in breast cancer: Past, present and future. Semin Cancer Biol. 2018 Oct;52(Pt 1):56-73. doi: 10.1016/j.semcancer.2017.08.010. Epub 2017 Sep 4. PMID: 28882552.
    </p>
    <p>
      [46]. Duffy MJ, Harbeck N, Nap M, Molina R, Nicolini A, Senkus E, Cardoso F. Clinical use of biomarkers in breast cancer: Updated guidelines from the European Group on Tumor Markers (EGTM). Eur J Cancer. 2017 Apr;75:284-298. doi: 10.1016/j.ejca.2017.01.017. Epub 2017 Feb 28. PMID: 28259011.
    </p>
    <p>
      [47]. Xiong X, Zheng LW, Ding Y, Chen YF, Cai YW, Wang LP, Huang L, Liu CC, Shao ZM, Yu KD. Breast cancer: pathogenesis and treatments. Signal Transduct Target Ther. 2025 Feb 19;10(1):49. doi: 10.1038/s41392-024-02108-4. PMID: 39966355; PMCID: PMC11836418.
    </p>
    <p>
      [48]. Veronesi U, Boyle P, Goldhirsch A, Orecchia R, Viale G. Breast cancer. Lancet. 2005 May 14-20;365(9472):1727-41. doi: 10.1016/S0140-6736(05)66546-4. PMID: 15894099.
    </p>
    <p>
      [49]. DeSantis C, Siegel R, Bandi P, Jemal A. Breast cancer statistics, 2011. CA Cancer J Clin. 2011 Nov-Dec;61(6):409-18. doi: 10.3322/caac.20134. Epub 2011 Oct 3. PMID: 21969133.
    </p>
    <p>
      [50]. Tray N, Taff J, Adams S. Therapeutic landscape of metaplastic breast cancer. Cancer Treat Rev. 2019 Sep;79:101888. doi: 10.1016/j.ctrv.2019.08.004. Epub 2019 Aug 13. PMID: 31491663.
    </p>
  </div>
</div>
    </div>
  );
}

