import React, { useState, useEffect } from 'react';
import './index.css';
// 引入共通样式
import '../../styles/common.css';

const menuLogo = 'https://static.igem.wiki/teams/5822/newassets/menulogo.webp';

// Engineering相关图片导入
const engineeringFigure1 = 'https://static.igem.wiki/teams/5822/newassets/engineering/figure1-igem-engineering-cycle.webp';
const engineeringFigure2 = 'https://static.igem.wiki/teams/5822/newassets/engineering/figure2-lab-iteration-diagram.webp';
const engineeringFigure3 = 'https://static.igem.wiki/teams/5822/newassets/engineering/figure3.webp';

// Tab组件
const IterationTabs = ({ iterations, activeTab, onTabChange }) => {
  return (
    <div className="iteration-tabs">
      {iterations.map((iteration, index) => (
        <button
          key={index}
          className={`iteration-tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => onTabChange(index)}
        >
          Iteration {index + 1}
        </button>
      ))}
    </div>
  );
};

// 组件定义
const MainContent = () => {
  // CD63 的 4 个 iterations
  const [cd63ActiveTab, setCd63ActiveTab] = useState(0);
  const cd63Iterations = [
    {
      title: "Iteration 1: Optimization of aptamer coating temperature",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            Efficient aptamer–bead binding underpins capture performance and is strongly temperature-dependent. Low temperatures cause incomplete coupling, while high temperatures risk protein denaturation or aptamer degradation. To develop a stable coating protocol, four temperatures (25°C, 28°C, 37°C, 45°C) were tested with a fixed 30-min incubation to assess their impact on aptamer loading.
          </p>

          <div className="h4">Build</div>
          <p>
            At each temperature condition, prepare a 400 μL coating system using 80 μL annealed product, 40 μL streptavidin magnetic beads, and 280 μL PBS buffer. Place the reaction mixture on a rotary mixer and strictly control incubation conditions for each temperature group to ensure uniform and complete reactions. After incubation, employ standard magnetic separation techniques with PBS buffer for five thorough washes to completely remove unbound nucleic acid molecules, establishing a solid foundation for accurate subsequent assay quantification.
          </p>

          <div className="h4">Test</div>
          <p>
            The conjugate antibody loading was determined using the competitive displacement method. Magnetic beads coated at various temperatures were taken in 15 μL and reacted with an excess CD63 protein working solution (15 μL, 1000 ng/mL) at 27.5°C for 30 minutes to displace complementary strands. Fluorescence signals were detected through a high-sensitivity CRISPR/Cas12a system, with quantitative analysis performed using a standard curve (Y=41.868X+3244.3, R²=0.9704). Results showed that the conjugate antibody loading in the 37°C group was significantly higher than in other temperature groups.
          </p>

          <div className="h4">Learn</div>
          <p>
            Studies have established <span>37°C as the optimal coating temperature</span>. This temperature ensures high efficiency in biotin-streptavidin binding while preventing structural damage caused by elevated heat. This finding provides a critical parameter for developing stable magnetic bead preparation protocols, and all subsequent coating experiments uniformly adopted this temperature condition.
          </p>
        </>
      )
    },
    {
      title: "Iteration 2: Optimization of aptamer coating time",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            Insufficient incubation time results in low surface antibody coverage on magnetic beads, reducing capture capacity. Conversely, prolonged incubation decreases experimental efficiency and increases non-specific adsorption risks. To precisely determine the critical point of binding saturation, we established four time gradients (10-60 minutes) at 37°C—the optimal temperature—to clarify how loading capacity evolves over time and identify the optimal balance between efficiency and effectiveness.
          </p>

          <div className="h4">Build</div>
          <p>
            Under strictly controlled environmental conditions, incubation reactions were conducted for different durations using identical coating systems with identical composition and volume. Three technical replicates were set at each time point. After incubation, standardized magnetic cleaning procedures were uniformly performed to minimize operational errors.
          </p>

          <div className="h4">Test</div>
          <p>
            Using the same displacement reaction and CRISPR detection workflow, we systematically evaluated aptamer loading at different time points. Data showed that after 10 minutes of incubation, the loading level was only 90 nM, indicating the binding reaction had not yet reached equilibrium. At 30 minutes, the loading reached a plateau of 264 nM. When incubation time was extended to 45 and 60 minutes, the loading levels dropped to 242 nM and 229 nM respectively.
          </p>

          <div className="h4">Learn</div>
          <p>
            <span>30 minutes was determined to be the optimal coating time</span>. This duration ensured the binding efficiency close to the maximum theoretical load and significantly improved the experimental results. This optimization result provided a clear time parameter for large-scale and standardized magnetic bead preparation.
          </p>
        </>
      )
    },
    {
      title: "Iteration 3: Optimization of exosome capture temperature",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            The capture phase is critical in determining exosome yield. Temperature directly regulates capture efficiency by influencing molecular thermal motion, aptamer three-dimensional conformation, and binding affinity with membrane protein CD63. While excessively low temperatures may slow down binding rates, elevated temperatures could compromise the stability of aptamer-target complexes or damage exosomal membrane structures. To systematically investigate temperature effects on exosome enrichment from complex cell supernatants, we selected three temperature points across the range from room temperature to physiological temperature (25°C, 27.5°C, and 30°C) while maintaining a fixed 30-minute capture duration.
          </p>

          <div className="h4">Build</div>
          <p>
            The CD63 aptamer magnetic beads prepared under optimized conditions were used to perform capture reactions with SK-BR-3 cell supernatants at different temperatures. Incubation conditions for each temperature group were strictly controlled to ensure temperature fluctuations remained within ±0.5 °C. After capture, a standardized washing protocol was employed to remove non-specific adsorbed impurities. Finally, exosomes were eluted using acidic elution buffer and immediately adjusted to physiological pH conditions with neutralizing buffer.
          </p>

          <div className="h4">Test</div>
          <p>
            The total amount of exosomes captured under different temperature conditions was precisely measured using the BCA protein quantification method. The results showed that the capture efficiency at 27.5°C was significantly higher than at other temperatures. This indicates that 27.5°C is optimal for maintaining the ideal conformational balance required for aptamer-target interactions.
          </p>

          <div className="h4">Learn</div>
          <p>
            The optimal capture temperature of <span>27.5°C</span> has been established, which not only achieves the highest exosome yield but also demonstrates the optimal balance between molecular binding kinetics and structural stability. This parameter determination provides standardized temperature conditions for all subsequent exosome capture experiments.
          </p>
        </>
      )
    },
    {
      title: "Iteration 4: Optimization of exosome capture time",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            After determining the optimal capture temperature, optimizing binding kinetics is crucial for establishing a rapid and efficient detection process. Insufficient capture time leads to unbalanced reactions and low exosome yield, while excessive time results in resource waste and reduced experimental throughput. To determine the minimum incubation time required for maximum capture efficiency, we set three time points (15,30, and 45 minutes) at the optimal temperature of 27.5°C. This approach aims to precisely map the capture kinetics curve, providing data support for developing standardized rapid capture protocols.
          </p>

          <div className="h4">Build</div>
          <p>
            Under strictly controlled 27.5°C constant temperature conditions, optimized magnetic beads were incubated with cell supernatants for varying durations. All time points utilized identical batches of magnetic beads, cell supernatants, and reaction systems to ensure consistent experimental conditions. Three technical replicates were established at each time point. After incubation, standardized washing and elution procedures were performed to minimize operational errors.
          </p>

          <div className="h4">Test</div>
          <p>
            The quantitative results of BCA showed that the capture amount showed a typical saturation growth trend with the extension of time: the yield was about 65% of the maximum at 15 minutes, reached the peak at 30 minutes, and continued to 45 minutes without significant improvement, indicating that the capture reaction had reached the dynamic equilibrium at 30 minutes.
          </p>

          <div className="h4">Learn</div>
          <p>
            <span>30 minutes was identified as the optimal capture time</span>. This duration can not only ensure the capture of exosomes close to the maximum theoretical yield, but also control the whole capture process within a reasonable time range, providing a key time parameter for achieving efficient and standardized exosome enrichment.
          </p>
        </>
      )
    }
  ];

  // HCR 的 3 个 iterations
  const [hcrActiveTab, setHcrActiveTab] = useState(0);
  const hcrIterations = [
    {
      title: "Iteration 1: TH1/TH2 Concentration Optimization",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            The goal was to identify TH1/TH2 concentrations that maximize amplification efficiency (high fluorescence) while minimizing non-specific signal. We fixed Trigger concentration at 50 nM, reaction time at 20 min, temperature at 25°C, and the CRISPR detection system at 40 μL total volume. The variable tested was 5 TH1/TH2 concentration gradients (1.25 μM, 1.0 μM, 750 nM, 500 nM, 250 nM), with TH1 and TH2 used at equal concentrations to avoid ratio imbalance.
          </p>

          <div className="h4">Build</div>
          <p>
            We prepared each concentration gradient using DEPC-treated water, with 100 μL of solution per gradient to accommodate replicates. For each gradient, we assembled 10 μL HCR reaction systems by mixing 8 μL of the gradient solution with 2 μL of Trigger in sterile centrifugal tubes, setting up 3 technical replicates per group to ensure data reliability.
          </p>

          <div className="h4">Test</div>
          <p>
            After incubating the reactions at 25°C for 20 min, we measured CRISPR fluorescence intensity. Results showed that the <span>1.0 μM group yielded the highest fluorescence</span>, with minimal non-specific signal. Concentrations above 1.0 μM led to reduced fluorescence and increased non-specific signal, likely due to excessive probe aggregation. Concentrations below 1.0 μM resulted in lower fluorescence, attributed to insufficient probe availability for complete cascade reactions.
          </p>

          <div className="h4">Learn</div>
          <p>
            <span>1.0 μM was determined to be the optimal TH1/TH2 concentration</span>, as it provided sufficient probes to drive robust cascade reactions while avoiding the non-specific aggregation and signal reduction observed at higher concentrations. This concentration was fixed as a parameter for subsequent iterations.
          </p>
        </>
      )
    },
    {
      title: "Iteration 2: HCR Reaction Time Optimization",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            The objective was to identify the shortest reaction time enabling sufficient HCR amplification while shortening the overall detection workflow. We fixed TH1/TH2 concentration at 1 μM, Trigger concentration at 50 nM, temperature at 25°C, and CRISPR detection conditions. The variable tested was 5 reaction time gradients (5 min, 10 min, 15 min, 20 min, 25 min).
          </p>

          <div className="h4">Build</div>
          <p>
            We assembled 10 μL HCR reactions (consistent with prior concentration optimization) and incubated them at 25°C for each time gradient. To halt reactions precisely, samples were transferred to an ice bath for 5 min immediately after the incubation period. Each time point included 3 technical replicates to ensure data reproducibility.
          </p>

          <div className="h4">Test</div>
          <p>
            Fluorescence measurements showed that 5 min yielded the lowest signal (incomplete cascades), while fluorescence increased notably by 10 min and remained relatively stable from 10 min to 25 min. Though 25 min showed a slightly higher mean fluorescence, the marginal increase did not justify extended incubation.
          </p>

          <div className="h4">Learn</div>
          <p>
            <span>10 min was identified as the optimal reaction time</span>—it achieved sufficiently high amplification for reliable detection while significantly shortening the assay duration compared to longer time points (20–25 min). This time was fixed for subsequent experiments to balance efficiency and signal quality.
          </p>
        </>
      )
    },
    {
      title: "Iteration 3: HCR Reaction Temperature Optimization",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            The goal was to balance nucleic acid hybridization kinetics (to enable fast probe binding) and hairpin structural stability (to avoid denaturation). We fixed TH1/TH2 concentration at 1 μM, Trigger concentration at 50 nM, reaction time at 20 min, and CRISPR detection conditions. The variable tested was 7 temperature gradients (45°C, 37°C, 30°C, 27.5°C, 25°C, 20°C, 18°C).
          </p>

          <div className="h4">Build</div>
          <p>
            We used temperature incubators pre-stabilized for 30 min to maintain target temperatures. 10 μL HCR reactions were incubated at each temperature for 20 min, then cooled to room temperature for 2 min to stabilize products before CRISPR detection. Each temperature condition included 3 technical replicates.
          </p>

          <div className="h4">Test</div>
          <p>
            Fluorescence measurements showed that 45°C resulted in low fluorescence, likely due to hairpin denaturation and disrupted probe interactions. While 37°C yielded relatively high fluorescence, <span>25°C provided a favorable compromise</span>: fluorescence remained sufficiently strong for reliable detection, and the reaction exhibited good consistency across replicates. Temperatures from 18–20°C showed reduced fluorescence, attributed to slower hybridization kinetics.
          </p>

          <div className="h4">Learn</div>
          <p>
            <span>25°C was determined to be the optimal reaction temperature</span>—it ensures adequate probe binding kinetics while maintaining hairpin structural integrity, and also fits convenient ambient laboratory conditions for streamlined assay operation. This temperature was fixed for subsequent experiments.
          </p>
        </>
      )
    }
  ];

  // APT-CRISPR 的 4 个 iterations
  const [aptCrisprActiveTab, setAptCrisprActiveTab] = useState(0);
  const aptCrisprIterations = [
    {
      title: "Iteration 1 | Foundational APT-CRISPR/Cas12a System",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            In the initial detection system, we established a foundational platform based on <span>aptamer–target recognition</span> and <span>competitive strand displacement</span> coupled with <span>CRISPR/Cas12a readout</span>. Magnetic beads were functionalized with biotinylated aptamers (HER-2, PD-L1, MMP-9, EpCAM) and their complementary strands to form duplexes. Upon target binding, complementary strands were competitively released, subsequently activating Cas12a to cleave fluorescent probes and generate signals for specific detection.
          </p>
          <p>
            The design optimized the aptamer-to-strand ratio (1:2), reaction temperature (27.5°C), and bead loading to ensure efficient displacement. This modular architecture enabled multiplex detection and provided a foundation for further amplification and refinement.
          </p>

          <div className="h4">Build</div>
          <p>
            During construction, streptavidin magnetic beads were functionalized with 2 μM biotinylated aptamers annealed to 2 μM complementary strands, forming trigger-ready complexes. After PBS washing, beads were incubated with samples for 30 min to induce target-mediated strand displacement.
          </p>
          <p>
            Released strands were added to the Cas12a detection system (1 μM Cas12a, 1 μM crRNA, 10 μM FAM–BHQ probe; 40 μL total volume) and reacted at 27.5°C for 30 min. Fluorescence was monitored in real time, generating standard curves across 1–10,000 ng/mL, with validation in diverse cell culture supernatants to confirm system applicability.
          </p>

          <div className="h4">Test</div>
          <p>
            Results demonstrated dose-dependent responses within the 1-10,000 ng/mL range with <span>R² &gt; 0.95</span>, achieving reproducible and linear fluorescent responses for all four targets. Non-target proteins and blank controls showed signals close to baseline, indicating high system specificity. Cell culture supernatant detection further validated the method's reliability and biological consistency.
          </p>

          <div className="h4">Learn</div>
          <p>
            Iteration 1 confirmed the feasibility and specificity of the APT–CRISPR/Cas12a system for multiplex detection. However, low-abundance targets produced near-background signals, limiting sensitivity. To address this, HCR amplification was introduced in the next iteration to enhance signal output and expand the linear range.
          </p>
        </>
      )
    },
    {
      title: "Iteration 2 | HCR Signal Amplification Integration",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            In the second iteration, we introduced the <span>HCR (Hybridization Chain Reaction)</span> module by designing the released complementary strand from competitive displacement as an HCR trigger strand. This drives autonomous polymerization of H1/H2 hairpin probes, generating repetitive dsDNA structures that provide multiple activation sites for Cas12a, achieving signal amplification. Design priorities included matching trigger strand sequences with hairpin structures, balancing amplification efficiency with background control, and seamless integration of HCR with Cas12a modules.
          </p>

          <div className="h4">Build</div>
          <p>
            First, we validated HCR feasibility through combinatorial experiments, setting up different combinations (T/H1/H2/Trigger) to screen for configurations producing significant fluorescent signals. The HCR system operated at 25°C with hairpin probe concentrations set at 1 μM and proportional trigger strand addition. Upon completion, the reaction proceeded directly to the Cas12a detection module without purification.
          </p>
          <p>Subsequently, single-factor optimization experiments were conducted:</p>
          <ol>
            <li><strong>Concentration optimization:</strong> Among H1/H2 probe gradients of 250 nM-1.25 μM, 1 μM yielded optimal signal-to-noise ratios.</li>
            <li><strong>Temperature optimization:</strong> Within the 18-45°C gradient, 25°C achieved highest amplification efficiency with lowest background.</li>
            <li><strong>Time optimization:</strong> In the 5-25 minute gradient, moderate time windows achieved sufficient amplification while avoiding premature plateau effects.</li>
          </ol>
          <p>All HCR reaction products were directly added to the Cas12a system under uniform conditions for readout, generating comparable fluorescence curves.</p>

          <div className="h4">Test</div>
          <p>
            Experimental results showed that Trigger-containing groups produced strong fluorescence, whereas controls without Trigger or with mismatches remained near baseline, confirming the validity of the HCR→CRISPR cascade. Compared with the non-amplified system, HCR enhanced overall fluorescence, improved signal-to-noise ratios at low concentrations, and expanded the linear range while maintaining low background.
          </p>

          <div className="h4">Learn</div>
          <p>
            Iteration 2 demonstrated that the APT–HCR–CRISPR/Cas12a system improved sensitivity and linearity for low-abundance targets while retaining specificity. However, added HCR steps increased complexity and time. Thus, Cas14a was selected for the next iteration to simplify workflows and accelerate signal readout.
          </p>
        </>
      )
    },
    {
      title: "Iteration 3 | Cas14a Enzymatic Upgrade",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            Based on validation results from the previous two generations, we upgraded the detection enzyme from <span>Cas12a to Cas14a</span>. The latter exhibits higher sensitivity to single-stranded DNA with enhanced enzymatic activity and lower mismatch tolerance, enabling signal enhancement and improved specificity without additional amplification. This design focused on optimizing Cas14a/crRNA ratios, reaction temperature, and ionic strength to achieve superior catalytic efficiency and signal-to-noise ratios.
          </p>

          <div className="h4">Build</div>
          <p>
            The construction phase centered on Cas14a/crRNA/F-Q probe systems directly interfacing with complementary strands released from competitive displacement. Multiple enzyme-to-substrate ratio groups were established to explore the activity window of the reaction system. Temperature windows from room temperature to 37°C were evaluated for reaction rates and background noise. Combining Michaelis-Menten kinetic models, key parameters (Km, Vmax) were determined to establish linear response ranges and stable working conditions.
          </p>

          <div className="h4">Test</div>
          <p>
            Experimental results demonstrated that the <span>Cas14a system exhibited higher initial velocity and fluorescence response amplitude</span> compared to Cas12a, with significantly shortened readout time. Under mismatched substrate conditions, Cas14a activation levels were lower than Cas12a, demonstrating stronger specificity. Overall curves showed good linearity with stable backgrounds and more agile system operation. Comparison with previous generation systems confirmed that Cas14a achieved signal enhancement and response acceleration without increasing reaction steps.
          </p>

          <div className="h4">Learn</div>
          <p>
            Enzymatic upgrading effectively improved overall detection system performance, achieving higher sensitivity and specificity while maintaining streamlined workflows. To further overcome low-abundance detection bottlenecks, we introduced RCA (Rolling Circle Amplification) isothermal amplification modules in the next iteration, cascading with Cas14a to achieve signal multiplication and further linear range expansion.
          </p>
        </>
      )
    },
    {
      title: "Iteration 4 | RCA-Cas14a Dual Amplification",
      content: (
        <>
          <div className="h4">Design</div>
          <p>
            In the fourth iteration, we combined <span>RCA (Rolling Circle Amplification) with Cas14a</span>, using phi29 DNA polymerase for circular template extension at room temperature to generate long-chain DNA containing repetitive sequences, providing multiple activation sites for Cas14a. The design objective was to achieve multiplicative signal amplification and precise detection of low-abundance samples by optimizing template concentration, reaction time, and temperature to balance amplification efficiency with background control.
          </p>

          <div className="h4">Build</div>
          <p>
            The RCA module comprised circular DNA templates, primers, and phi29 DNA polymerase, operating at 25°C for 30 minutes. Template concentration gradients (100, 500, 800 nM) were compared for amplification product quantity and signal intensity. RCA products proceeded directly to the Cas14a detection module (37°C, 30 minutes) without purification, enabling signal transduction and fluorescent readout.
          </p>

          <div className="h4">Test</div>
          <p>
            Results indicated that the <span>RCA-Cas14a cascade system achieved significant signal enhancement</span> in low-concentration samples, with stable and linear fluorescence curves. By optimizing template concentration and reaction time, the system avoided plateau effects and excessive background amplification, maintaining good specificity and reproducibility suitable for high-sensitivity detection requirements.
          </p>

          <div className="h4">Learn</div>
          <p>
            This iteration achieved multi-level integration from molecular amplification to enzymatic amplification, demonstrating superior signal-to-noise ratios and linear ranges in low-abundance detection. Future work can leverage model simulations and experimental data for multi-parameter synergistic optimization of template concentration-reaction time-Cas14a enzyme quantity, establishing predictive models to lay the foundation for system standardization and high-throughput applications.
          </p>
        </>
      )
    }
  ];

  // IHP 的 4 个 iterations
  const [ihpActiveTab, setIhpActiveTab] = useState(0);
  const ihpIterations = [
    {
      title: "Iteration 1｜Enhancing Public Awareness of Male Breast Cancer",
      content: (
        <>
          <div className="h3">Design</div>
          <p>
            Through comprehensive questionnaires and community interviews, we identified a serious gap in public understanding: awareness of male breast cancer was extremely low. Only <span>4.7% of male participants had ever undergone screening</span>, and their understanding of risk factors was <span>24.8% lower than that of women</span>. Many men mistakenly perceived breast cancer as a "female disease," overlooking their own health risks. In response, we designed a targeted public education campaign focusing on breaking gender stereotypes and promoting male breast health awareness.
          </p>

          <div className="h3">Build</div>
          <p>
            We collaborated with local community health service centers to launch a <span>"Male Breast Health Awareness Month."</span> The campaign combined real patient cases, risk visualization infographics, online videos, and offline lectures to improve understanding of male breast cancer. Interactive Q&A sessions and educational displays were introduced to increase engagement and retention of key messages.
          </p>

          <div className="h3">Learn</div>
          <p>
            Feedback from participants revealed that most men learned for the first time that they were also at risk for breast cancer. Many expressed interest in acquiring self-examination guidance and risk assessment tools. These suggestions highlighted the need for more practical, hands-on educational materials in future sessions.
          </p>

          <div className="h3">Test</div>
          <p>Follow-up surveys demonstrated measurable improvements:</p>
          <ul>
            <li>Accuracy of male breast health knowledge increased by <span>35%</span></li>
            <li>Willingness to perform self-screening significantly improved</li>
            <li>Self-examination rate in pilot communities rose to <span>18%</span></li>
            <li>Overall satisfaction reached <span>93%</span></li>
          </ul>
          <p>These findings confirmed the campaign's effectiveness and guided us to integrate male-inclusive education into the long-term health promotion framework.</p>
        </>
      )
    },
    {
      title: "Iteration 2｜Optimization of the Detection System Based on Stakeholder Feedback",
      content: (
        <>
          <div className="h3">Design</div>
          <p>
            Through interviews with clinical experts and laboratory professionals, we learned that existing early screening technologies for breast cancer face challenges such as <span>low sensitivity</span>, <span>limited specificity</span>, and <span>complex procedures</span>. Patients also expressed concerns regarding accuracy and cost. Based on this insight, our second iteration focused on enhancing detection reliability, reducing non-specific binding, and standardizing operational procedures.
          </p>

          <div className="h3">Build</div>
          <p>
            We introduced a <span>magnetic bead-based exosome capture strategy</span> and utilized blocking agents to minimize non-specific binding and reduce background noise. A comprehensive <span>Standard Operating Procedure (SOP)</span> was developed to ensure reproducibility across operators. Meanwhile, collaboration with domestic reagent manufacturers was initiated to develop cost-effective reagents and reduce per-test expenses.
          </p>

          <div className="h3">Learn</div>
          <p>
            Repeated trials confirmed improved signal specificity and sensitivity, and experimenters reported simplified workflows and enhanced reproducibility. Expert evaluations indicated that the optimized system holds potential for clinical translation, balancing performance and practicality.
          </p>

          <div className="h3">Test</div>
          <p>
            Validation with simulated clinical samples showed enhanced result stability and a <span>30% reduction in false positives</span>. These outcomes informed further fine-tuning of blocking reagent concentration and reaction duration, leading to a finalized optimized detection protocol for future applications.
          </p>
        </>
      )
    },
    {
      title: "Iteration 3｜Refinement of Public Science Communication Strategies",
      content: (
        <>
          <div className="h3">Design</div>
          <p>
            Early feedback indicated that while public interest in breast health was high, knowledge was fragmented and engagement formats were too homogeneous. Demographic analysis revealed significant age-based differences in content preferences: younger audiences favored short videos and animations, while older adults preferred community lectures.
          </p>

          <div className="h3">Build</div>
          <p>We developed a multi-channel, tiered science communication system to address diverse audience needs:</p>
          <ul>
            <li><strong>Youth:</strong> animated short videos titled "One Minute to Early Screening"</li>
            <li><strong>Elderly:</strong> in-person community health lectures</li>
            <li><strong>Working professionals:</strong> lunchtime science seminars</li>
            <li><strong>General public:</strong> online "Breast Health Knowledge Week" quiz challenges</li>
          </ul>

          <div className="h3">Learn</div>
          <p>
            Post-activity analysis showed that short videos achieved <span>82% completion rates</span> and boosted knowledge retention, while community lectures attracted large audiences and improved self-examination rates. Feedback suggested that adding interactive modules and case studies would further strengthen engagement and understanding.
          </p>

          <div className="h3">Test</div>
          <p>
            Follow-up surveys confirmed a rise in public awareness (<span>72%</span>) and self-screening rates (<span>+15%</span>), demonstrating the measurable impact of this diversified communication strategy. The results also provided empirical evidence for future health education planning.
          </p>
        </>
      )
    },
    {
      title: "Iteration 4｜Construction of the Iterative Symbiotic Practice Model (ISPM)",
      content: (
        <>
          <div className="h3">Design</div>
          <p>
            Drawing from multiple human practice cycles, we established an <span>Iterative Symbiotic Practice Model (ISPM)</span> grounded in the principles of <span>Responsible Research and Innovation (RRI)</span>. This model uses societal needs as the starting point and feedback as the driving force, forming a five-layer iterative cycle: <span>Needs Insight → Practice Design → Implementation → Feedback Integration → Iterative Optimization</span>.
          </p>

          <div className="h3">Build</div>
          <p>
            We integrated multi-source feedback from questionnaires, expert interviews, and public responses into the <span>"Needs Insight Layer."</span> Each insight informed the Practice Design Layer, guiding actionable interventions. The Implementation Layer collected real-time feedback, which was interpreted in the Feedback Integration Layer by domain experts. Finally, the Optimization Layer refined future strategies, forming a data-driven feedback loop.
          </p>

          <div className="h3">Learn</div>
          <p>
            The ISPM model enabled the team to achieve synchronous progress between technological innovation and social responsibility. For instance, in male health education, public feedback inspired content expansion; in detection development, expert advice guided technical refinement; in science communication, data analytics shaped dissemination formats.
          </p>

          <div className="h3">Test</div>
          <p>
            After multiple cycles, ISPM successfully established a closed-loop mechanism ensuring that each decision was evidence-based and demand-driven. Continuous validation demonstrated that ISPM significantly enhanced project responsiveness to societal needs, achieving a harmonious balance between innovation and responsibility.
          </p>
        </>
      )
    }
  ];

  return (
    <>
      {/* 1 Engineering Cycles */}
      <div id="engineering-cycles" className="view-content">
        <div className="content-header">
          <div className="h1">Engineering Cycles</div>
        </div>
        <div className="content-body">
          <p>
            Our project follows the <span>iGEM engineering design cycle</span>, which consists of four steps: <span>"design, build, test, and learn"</span>. This iterative model helps us systematically respond to challenges and continuously optimize our work.
          </p>

          <div className="figure-container">
            <div className="figure-item">
              <img src={engineeringFigure1} alt="iGEM Engineering Cycle" className="figure-image" />
              <div className="figure-caption">Figure 1: iGEM Engineering Cycle</div>
            </div>
          </div>

          <ul>
            <li><strong>Design:</strong> We first define the project objectives, define the problems to be solved, and sort out the potential solutions to lay a solid foundation for the follow-up work.</li>
            <li><strong>Build:</strong> After the design is determined, promote the construction of the experimental device, and make the gene components and other test necessary components by hand.</li>
            <li><strong>Test:</strong> After the construction is completed, strict test is carried out to evaluate the actual effect of the structure and provide key data for the design of functionality and effectiveness.</li>
            <li><strong>Learn:</strong> The final step is to analyze the results and summarize the experience. If unexpected situations occur, use these feedbacks to optimize the design and plan, and feed new insights back into the cycle.</li>
          </ul>

          <p>
            This iteration cycle is key to the success of the project —— it allows us to continuously optimize the design based on actual results and ensure that we are flexible to new challenges.
          </p>
        </div>
      </div>

      {/* 2 Lab */}
      <div id="lab" className="view-content">
        <div className="content-header">
          <div className="h1">Lab</div>
        </div>
        <div className="content-body">
          <div className="figure-container">
            <div className="figure-item">
              <img src={engineeringFigure2} alt="Lab iteration diagram" className="figure-image" />
              <div className="figure-caption">Figure 2: Lab iteration diagram</div>
            </div>
          </div>

          <div className="figure-container">
            <div className="figure-item">
              <img src={engineeringFigure3} alt="Our Cycles influences each other" className="figure-image" />
              <div className="figure-caption">Figure 3: Our Cycles influences each other</div>
            </div>
          </div>

          {/* CD63 aptamer magnetic beads capture exosomes */}
          <section id="cd63-aptamer-beads" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">1. CD63 aptamer magnetic beads capture exosomes</div>
              </div>
              <div className="content-body">
                <p>
                  This study employed a systematic engineering-based iterative approach, conducting four consecutive <span>DBTL (Design-Build-Test-Learn) cycles</span> to optimize four key parameters: <span>coating temperature</span>, <span>coating duration</span>, <span>capture temperature</span>, and <span>capture time</span>. Each cycle built upon previously determined optimal parameters, with rigorous variable control to investigate the impact patterns of individual factors. This methodology ultimately achieved simultaneous optimization of aptamer loading capacity and exosome capture efficiency.
                </p>

                {/* Tab导航 */}
                <IterationTabs 
                  iterations={cd63Iterations}
                  activeTab={cd63ActiveTab}
                  onTabChange={setCd63ActiveTab}
                />

                {/* Tab内容 */}
                <div className="iteration-content">
                  <div className="h3">{cd63Iterations[cd63ActiveTab].title}</div>
                  {cd63Iterations[cd63ActiveTab].content}
                </div>

                {cd63ActiveTab === 3 && (
                  <p>
                    Through four structured DBTL iterations, we successfully established optimal process parameters for CD63 aptamer magnetic beads: <span>coating conditions at 37°C for 30 minutes and capture conditions at 27.5°C for 30 minutes</span>. This systematic optimization established a standardized and efficient exosome enrichment platform, laying a solid technical foundation for subsequent exosome-related research.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Cas14a Prokaryotic Expression Cycle - 只有1个iteration,不需要tab */}
          <section id="cas14a-expression" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">2. Cas14a Prokaryotic Expression Cycle</div>
              </div>
              <div className="content-body">
                <p>
                  The Cas14a prokaryotic expression section primarily focuses on <span>induction and purification protocols</span>, emphasizing optimization of protein yield and purity. High-quality protein is essential for the accurate operation of subsequent CRISPR/Cas14a reaction systems. During this cycle, we focus on optimizing the expression and purification of the target protein by testing key parameters during the induction process, including <span>temperature</span>, <span>time</span>, <span>rotation speed</span>, and <span>IPTG inducer concentration</span>. The experimental iterations in this section are primarily explained through four modules: design, construction, testing, and learning.
                </p>

                <div className="h3">Iteration 1:</div>

                <div className="h4">Design</div>
                <p>
                  Our goal is to optimize the expression and purification of the target protein. We identified several key parameters to test: temperature, time, and IPTG inducer concentration during the induction process. Additionally, we plan to optimize the amount of NTA-Ni agarose magnetic beads added during purification to efficiently capture the target protein.
                </p>

                <div className="h4">Build</div>
                <p>We designed experiments to test the following:</p>
                <ol>
                  <li><strong>Different induction temperatures:</strong> their impact on expression efficiency were determined at 20°C for 16 hours and 37°C for 6 hours.</li>
                  <li><strong>Different induction durations:</strong> protein expression levels were assessed at 37°C at four different time points (5, 6, 7, and 8 hours).</li>
                  <li><strong>A range of IPTG concentrations</strong> (0.1-1 mM) to identify the optimal inducer concentration.</li>
                  <li><strong>Optimization of NTA-Ni agarose magnetic bead loading</strong> to ensure complete capture of the target protein.</li>
                </ol>

                <div className="h4">Test</div>
                <p>
                  We observed that 40 mL of culture supplemented with <span>1.0 mM IPTG inducer concentration</span> yielded the highest expression levels. Testing different incubation times and temperatures indicated that <span>16 hours at 20°C</span> was optimal for our system, yielding high protein production. Regarding the purification process, we finalized the NTA-Ni agarose magnetic bead loading volume at <span>50 μL suspension per 100 μL sample</span>. Initial testing with 100 μL sample plus 20 μL NTA-Ni agarose magnetic bead suspension showed target protein electrophoresis results concentrated in the supernatant after bead incubation, indicating significant protein loss. Increasing the bead suspension concentration enhanced target protein recovery in the eluate, confirming the viability of the optimized conditions.
                </p>

                <div className="h4">Learn</div>
                <p>
                  We learned that the highest tested IPTG concentration provided optimal expression without causing bacterial growth toxicity, while low-temperature induction reduced protein degradation. Furthermore, increasing the amount of NTA-Ni agarose magnetic beads during purification should enhance protein yield, facilitating subsequent enzyme activity assays.
                </p>
              </div>
            </div>
          </section>

          {/* HCR amplification */}
          <section id="hcr-amplification" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">3. HCR amplification</div>
              </div>
              <div className="content-body">
                <p>
                  We conducted three iterative <span>DBTL (Design-Build-Test-Learn) cycles</span> to optimize the <span>Hybridization Chain Reaction (HCR)</span> module for ExoAPT-CRISPR tumor exosomal marker detection, focusing sequentially on <span>TH1/TH2 concentration</span>, <span>reaction time</span>, and <span>reaction temperature</span>. Each cycle fixed parameters from prior iterations to isolate the effect of the target variable.
                </p>

                {/* Tab导航 */}
                <IterationTabs 
                  iterations={hcrIterations}
                  activeTab={hcrActiveTab}
                  onTabChange={setHcrActiveTab}
                />

                {/* Tab内容 */}
                <div className="iteration-content">
                  <div className="h3">{hcrIterations[hcrActiveTab].title}</div>
                  {hcrIterations[hcrActiveTab].content}
                </div>

                {hcrActiveTab === 2 && (
                  <p>
                    The three DBTL cycles finalized the HCR module with parameters: <span>TH1/TH2 at 1μM each, reaction time 10 min, and temperature 25°C</span>, enabling consistent amplification (15.0–17.8-fold) across 4 tumor exosomal Triggers.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* RCA Module - 只有1个iteration,不需要tab */}
          <section id="rca-module" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">4. RCA Module</div>
              </div>
              <div className="content-body">
                <p>
                  <span>Rolling Circle Amplification (RCA)</span> is used as an isothermal pre-amplification step to boost nucleic-acid copy number from a circular ssDNA template, thereby enhancing the downstream CRISPR fluorescence readout. In our pipeline, the circular template is prepared from a designed linear precursor (circle2), ligated to form cssDNA, cleaned of residual linear strands, and quantified prior to RCA; RCA products are then taken directly into the Cas/guide/F–Q system for signal detection. This module therefore acts as the signal-raising front end of the ExoAPT-CRISPR workflow and its output quality depends strongly on the amount of circular template entering the reaction.
                </p>

                <div className="h3">Iteration 1</div>

                <div className="h4">Design</div>
                <p>
                  We aimed to optimize only the concentration of the circular DNA template under fixed RCA conditions (room temperature: 25°C; 30 min) so as to maximize fluorescence output while maintaining linearity and low background. Following the module definition in your template, we set a three-point gradient for the circular template at 100 nM, 500 nM, 800 nM.
                </p>

                <div className="h4">Build</div>
                <p>
                  For each concentration (100/500/800 nM), circular DNA was annealed to the fixed primer/target, then added to a standard 20 μL RCA mix (1× Phi29 buffer, dNTPs, Phi29 polymerase) and incubated at ~25°C for 30 min; reactions were heat-inactivated at 65°C for 10 min and cooled on ice. Equal volumes of each RCA product were transferred into the established CRISPR detection system for fluorescence measurement.
                </p>

                <div className="h4">Test</div>
                <p>
                  The 100 nM group produced the lowest Fluorescence Intensity with the cleanest background, consistent with limited input template; the 800 nM group increased Fluorescence Intensity but showed the onset of mild plateau behavior and a small rise in background and CV%, slightly weakening linearity; the <span>500 nM group yielded the highest stable S/N</span> while keeping values within the instrument's dynamic range.
                </p>

                <div className="h4">Learn</div>
                <p>
                  Fixing reaction time and temperature, <span>500 nM circular DNA provided the best operating point</span> for the RCA module—balancing sensitivity, linearity, and reproducibility—so we locked this as the final template concentration for the pipeline. This setting standardizes the RCA input to CRISPR, stabilizes batch-to-batch variation, and leaves dynamic-range headroom for subsequent improvements without risking early saturation.
                </p>
              </div>
            </div>
          </section>

          {/* APT-CRISPR Detection System */}
          <section id="apt-crispr-system" className="education-section">
            <div className="education-section-content">
              <div className="content-section-header">
                <div className="h2">5. APT-CRISPR Detection System DBTL Iteration Summary</div>
              </div>
              <div className="content-body">
                <p>
                  Through four DBTL iterations, our detection system evolved from a basic aptamer-CRISPR/Cas12a platform into a <span>dual-amplification, high-sensitivity module</span>. Each iteration resolved key bottlenecks — from signal weakness to workflow complexity — culminating in a robust, clinically applicable solution.
                </p>

                {/* Tab导航 */}
                <IterationTabs 
                  iterations={aptCrisprIterations}
                  activeTab={aptCrisprActiveTab}
                  onTabChange={setAptCrisprActiveTab}
                />

                {/* Tab内容 */}
                <div className="iteration-content">
                  <div className="h3">{aptCrisprIterations[aptCrisprActiveTab].title}</div>
                  {aptCrisprIterations[aptCrisprActiveTab].content}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 3 Integrated Human Practices */}
      <div id="integrated-human-practices" className="view-content">
        <div className="content-header">
          <div className="h1">Integrated Human Practices</div>
        </div>
        <div className="content-body">
          <p>
            In our project, <span>Integrated Human Practices (IHP)</span> served as the cornerstone to ensure that every stage of our research and development remained closely aligned with <span>societal needs</span>, <span>ethical standards</span>, and <span>stakeholder expectations</span>. Guided by the <span>Design–Build–Learn–Test (DBLT) iterative framework</span>, we continuously engaged with diverse groups—including patients, clinicians, researchers, and the general public—to collect actionable feedback, transform insights into design improvements, and evaluate outcomes through measurable indicators. Each iteration not only enhanced the scientific robustness of our detection system but also deepened our understanding of male breast cancer awareness and education. Ultimately, this dynamic, feedback-driven approach enabled the construction of a socially responsive and technically feasible solution, embodying the principles of <span>Responsible Research and Innovation (RRI)</span>.
          </p>

          {/* Tab导航 */}
          <IterationTabs 
            iterations={ihpIterations}
            activeTab={ihpActiveTab}
            onTabChange={setIhpActiveTab}
          />

          {/* Tab内容 */}
          <div className="iteration-content">
            <div className="h2">{ihpIterations[ihpActiveTab].title}</div>
            {ihpIterations[ihpActiveTab].content}
          </div>
        </div>
      </div>
    </>
  );
};

// ... existing code ...

function Engineering() {
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
      id: 'engineering-cycles',
      title: 'Engineering Cycles',
      icon: '🔄'
    },
    {
      id: 'lab',
      title: 'Lab',
      icon: '🧪',
      subMenus: [
        { id: 'cd63-aptamer-beads', title: 'CD63 Aptamer Magnetic Beads' },
        { id: 'cas14a-expression', title: 'Cas14a Prokaryotic Expression' },
        { id: 'hcr-amplification', title: 'HCR Amplification' },
        { id: 'rca-module', title: 'RCA Module' },
        { id: 'apt-crispr-system', title: 'APT-CRISPR Detection System' }
      ]
    },
    {
      id: 'integrated-human-practices',
      title: 'Integrated Human Practices',
      icon: '🤝',
      subMenus: [
        { id: 'ihp-iteration1', title: 'Male Breast Cancer Awareness' },
        { id: 'ihp-iteration2', title: 'Detection System Optimization' },
        { id: 'ihp-iteration3', title: 'Science Communication' },
        { id: 'ihp-iteration4', title: 'ISPM Model Construction' }
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

export default Engineering;