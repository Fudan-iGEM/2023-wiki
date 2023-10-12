---
sidebar: auto
title: Results
author:
- Siliang Zhan
- Zhenmao Ye
- Yijun Wang
authorlink:
- /fudan/team/#siliang-zhan-the-conscientious-researcher
- /fudan/team/#zhenmao-ye-the-multifaceted-talent
- /fudan/team/#yijun-wang-the-meticulous-leader
---
## Overview

To expand humanity's horizons beyond Earth, our project, known as **Biofilm Harnessing for Offworld Mankind Establishment** (**B.HOME**), has raised a groundbreaking approach to terraforming, transforming barren rocks on terrestrial planets in fertile soil. Drawing inspiration from the pioneer plants of lichens, we have developed an ecological biofilm with the symbiotic relationship between cyanobacteria and *Escherichia coli* (*E. coli*). We integrated four interconnected systems into our biofilm: **Survival, Symbiotic, Biofilm Formation,** and **Terraforming Systems**. Through these systems, we have engineered an ecological biofilm with remarkable resilience, autotrophic survival capabilities, structural integrity, and terraforming functionality.

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/results-wyj/overview.png" style='width:90%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 1: Systems Overview<br>B.HOME is composed of four interconnected systems: Survival, Symbiotic, Biofilm Formation, and Terraforming Systems</small></p>
    </div>
</div>



## 1. Survival System

In the Survival System, we introduced **Anti-UV Module**, **Anti-Freeze Module** and **Anti-Desiccation Module** to arm our biofilm with the necessary adaptability against inhospitable conditions.

### Anti-UV Module

In the Anti-UV module, we introduced various **DNA repair or binding proteins** (Rv Dsup, FEN1, XRCC1, and *Hypsibius exemplaris* mtSSB) (Details in [BBa_K4765025](http://parts.igem.org/Part:BBa_K4765025), [BBa_K4765018](http://parts.igem.org/Part:BBa_K4765018), [BBa_K4765019](http://parts.igem.org/Part:BBa_K4765019), and [BBa_K4765016](http://parts.igem.org/Part:BBa_K4765016)) and enzymes (MysA/B/C/D/H) (Details in [Part:BBa_K4765118](http://parts.igem.org/Part:BBa_K4765118)) that regulate **UV-absorbing substances** to enhance *E. coli* ’s resistance to UV radiation.


We employed the Colony-Forming Unit (CFU) assay. After plasmid transformation and plating, we shielded one/half of the agar plate from UV light using a black cloth, while the other one/half was exposed to UV irradiation (6W power) with wavelengths of 254 nm and 365 nm for 10 seconds.

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/results-wyj/uv.jpg" style='width:50%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 2: Anti-UV Assay<br>
            After plating, half of the plate is exposed to UV radiation. </small></p>
    </div>
</div>


Our experimental results demonstrated that most DNA repair and binding proteins exhibited **a higher survival rate** compared to plain *E. coli*, indicating improved anti-UV tolerance, especially XRCC1 and FEN1. We hypothesized that these proteins function by aiding in DNA repair or binding to DNA, thus shielding chromatin from hydroxyl radicals induced by UV radiation. Interestingly, we observed that the expression of green fluorescence **(stayGold)** in *E. coli*, intended as a negative control, significantly enhanced the survival rate. We suspected that this effect may be due to fluorescent protein absorbing a certain amount of UV radiation through structural changes.

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/results-wyj/uvresults.png" style='width:40%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 3: Survival Rate after UV Exposure<br> Percentage of viable <em>E. coli</em> expressing proteins following UV radiation exposure<br> (Note: The quantitative graph is based on the whole plate CFU to avoid the blurriness at the boundaries of the cloth-shielded area from UV.)</small></p>
    </div>
</div>



### Anti-Freeze Module

AnAFP (Details in [BBa_K4765015](http://parts.igem.org/Part:BBa_K4765015)) is an anti-freeze protein derived from *Ammopiptanthus nanus*, we heterologously expressed  AnAFP in *E. coli*, endowing it with anti-freeze capability.

To test the anti-freeze capability of AnAFP, we subjected *E. coli* expressing AnAFP to cold treatment at 0°C. Samples were collected at 0, 24, 48, and 96 hours for CFU counting, and a survival rate curve was plotted.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/anafp-protocol.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 4: AnAFP Antifreeze Assay
   <br> CFU counting is performed at 0,24,48,96 hours under during treatment.</small></p>
</div>
</div>


As shown in the following figure, *E. coli* expressing AnAFP exhibited a higher survival rate under prolonged cold treatment conditions compared to *E. coli* transformed with an empty PET28 vector, indicating that **AnAFP possesses anti-freeze ability**.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/anafp-survival-curve.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 5: Survival Curves under Cold Treatment at 0 °C<br>In the initial 48 hours, there was no significant difference in the survival rates between the experimental and control groups.<br> However, after 48 hours, the survival rate of the experimental group was significantly higher than that of the control group.</small></p>
</div>
</div>



### Anti-Desiccation Module

*H. ex* mtSSB (Details in [BBa_K4765016](http://parts.igem.org/Part:BBa_K4765016)) is a type of mitochondrial single-stranded DNA binding protein, it can prevent DNA damage during genotoxic stress.

In Anti-Desiccation Module, we tested the anti-desiccation capability of *E. coli* expressing mtSSB alone and co-expressing mtSSB,  AnAFP and the existing part [SAHS 33020]([Part:BBa K2306003 - parts.igem.org](http://parts.igem.org/Part:BBa_K2306003)). Experiment was conducted as follows:

We centrifuged the liquid culture of the experimental groups, and removed the supernatant. Pellets are dried for 6.5 hr in SpeedVac under 4°C .Finally, the pellets are weighed and resuspended in LB medium and diluted 10^5^-fold for CFU counting.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/anti-desiccation-protocol.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 6: Desiccation Survival Assay
   <br> CFU counting is performed after dried in SppedVac for 6.5 hours.</small></p>
</div>
</div>


In the following figure, we observed that *H. ex* mtSSB has a comparable anti-desiccation capability with SAHS 33020. When both *H. ex* mtSSB and SAHS 33020 are co-expressed, *E. coli* exhibits a higher survival rate under desiccation compared to *E. coli* expressing these two proteins individually. Furthermore, altering the order of these three proteins in pRAP does not affect the survival rate of *E. coli*, indicating that pRAP can correctly express these proteins, regardless of their position.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/connected-anti-desiccation-capability-2.png"
style='width:40%'>
<br>
<div>
<p><small style="color: gray">Figure 7: CFU colony Count of All the Groups after Drying
   <br> The <em>E. coli</em> expressing <em>H.ex</em> mtSSB, SAHS 33020 and AnAFP together showed higher CFU counts after drying compared to <em>E.coli</em> expresssing <em>H. ex</em> mtSSB and SAHS33020 individually. Futhermore there's no significant difference between the two <em>E. coli</em>s with rearranged CDS positions.</small></p>
</div>
</div>



## 2. Symbiotic System

In the symbiotic system, we adopted the approach from the ShanghaiTech 2022 project, wherein we introduced the fructofuranosidase enzyme (SacC) (Details in [BBa_K4115017](http://parts.igem.org/Part:BBa_K4115017)) into *E. coli* to promote the hydrolysis of sucrose into fructose and glucose, enabling *E. coli* to sefficiently utilize sucrose as a carbon source.


We measure the growth curve through measuring optical density at a wavelength of 600 nm (OD~600~) using a spectrophotometer.

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/results-wyj/sacprotocol.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 8: Growth Curve Assay<br> Cultured sucrose-utilizing (SacC) and plain <em>E. coli</em> in nutrient-supplemented M9 medium to measure the growth curve by tracking OD<sub>600</sub>.</small></p>
    </div>
</div>

Our experimental findings demonstrated that all bacterial groups reached a growth plateau approximately 7.5 hours. Notably, *E. coli* expressing SacC exhibited similar growth patterns to empty *E. coli* using glucose, indicating their **effective utilization of sucrose**.

During the experiment's progression, we observed a slight decrease in growth curves across all groups after reaching their peak, with OD~600~ remaining below 0.2. To investigate this phenomenon, we hypothesized that *E. coli* might lack specific growth factors.

To pinpoint the limiting factors, we conducted a second experiment at the 25-hour mark, isolating several tubes from empty *E. coli* cultures supplemented with carbon source, CaCl~2~ or MgSO~4~. Our results indicated that the growth curve notably improved upon the addition of MgSO~4~, suggesting that MgSO4 was the **limiting growth factor**.

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/results-wyj/sacresult-1.png" style='width:90%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 9: Growth Curve of SacC Experiments<br> Growth Curve of <em>E. coli</em> in M9 minimal medium with carbon source and extra nutrient factor</small></p>
    </div>
</div>



## 3. Biofilm Formation System

We've designed a biofilm formation system with two key components. The first involves surface displaying Antigen/Nanobody (Ag/Nb)  through intimin to mediate **the binding between *E. coli* strains**. The second utilizes initimin-lectin fusion to facilitate **the binding between *E. coli* and cyanobacteria**.

### *E. coli - E. coli* Binding

To confirm biofilm formation through intimin-Ag/Nb, we employed both **aggregation experiments** and **fluorescence microscopy imaging** to demonstrate its ability to mediate biofilm formation.

In the aggregation experiment, We combined cultures of *E. coli* expressing intimin-Ag1/Nb1, intimin-Ag2/Nb2 and intimin-Ag3/Nb3, and allowed them to settle. We measured the OD~600~ of the supernatant at 0, 3, 6 hours to reflect the bacteria quantity remaining in the supernatant. (Details in [BBa_K4765106](http://parts.igem.org/Part:BBa_K4765106))

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/ecoliecoli-3.png"
style='width:65%'>
<br>
<div>
<p><small style="color: gray">Figure 10: Aggregation Assay Using Optical Density (OD<sub>600</sub>) Measurements<br>The initial OD values of the cultures were standardized using LB KanR medium</small></p>
</div>
</div>

We observed that at 3 hours, in the aTc-induced *E. coli* samples, bacteria percentage remaining in the supernatant was significantly lower compared to the uninduced samples. This indicates that the intimin-Ag/Nb pairs can **effectively promote** the binding between *E. coli*.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/intimin-pairs.jpg"
style='width:50%'>
<br>
<div>
<p><small style="color: gray">Figure 11: Bacteria Percentage Remaining in the Supernatant at the 3rd Hour<br> The bacterial quantity in the supernatant is reflected by measuring the OD<sub>600</sub>(1 OD<sub>600</sub> corresponds to 10<sup>8</sup> bacterial particles).</small></p>
</div>
</div>


We also employed microscopy imaging to observe the growth and expansion of biofilm. Glass slides were treated with PDL (Poly-D-Lysine) for 10 seconds, followed by mixing *E. coli* expressing intimin-Ag3 and intimin-Nb3-mScarlet on these slides. After several washes with LB KanR medium, 100 μL of LB KanR medium was added. The location of the founder cell was determined, and imaging was initiated on the microscope stage at 25°C, capturing photographs at 0, 2, and 5.5 hours.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/microscopy-show-2.png"
style='width:65%'>
<br>
<div>
<p><small style="color: gray">Figure 12: Visualization of Biofilm Formation Using Fluorescence Microscopy Imaging<br>The glass slides were treated with Poly-L-Lysine for 10 seconds before cell mixing.</small></p>
</div>
</div>

As illustrated in the following figure, the presence of Ag/Nb pairs on the surface enables two different strains of bacteria to coexist harmoniously by attaching to each other in an appropriate ratio. This coexistence is evident even at 5.5 hours, as both strains of bacteria remain within the field of view.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/2.jpg"
style='width:60%'>
<br>
<div>
<p><small style="color: gray">Figure 13: Biofilm Growth at 0, 2, and 5.5 Hours<br> Images were captured under a 150x objective lens in brightfield and fluorescence. </small></p>
</div>
</div>


In the video that follows, we present additional evidence of bacterial growth and division within our biofilm, where bacteria bound by Ag/Nb pairs can be observed continuously dividing. The fluorescent cells in the video consistently undergo cell division throughout the entire recording.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/ag3-nocolor-nb3-red-final-2.gif"
style='width:40%'>
<br>
<div>
<p><small style="color: gray">Figure 14: Visualization of Biofilm Formation through Microscopy Imaging<br>Magnification: 150x <br>Video Duration: Captured at 5min intervals<br>
</small></p>
</div>
</div>


These results collectively demonstrate that intimin-Ag/Nb fusion can mediate specific binding between *E. coli* and effectively promote biofilm formation.

### Cyanobacteria - *E. coli*

To confirm the binding between cyanobacteria and *E. coli*, we mixed *E. coli* strains displaying lectins on their surfaces with the corresponding cyanobacteria and allowed them to settle. We measured the OD~600~,~685~ of the supernatant at 0, 2, 6, and 24 hours to assess the remaining *E.coli* / cyanobacteria in the supernatant. (Details in [BBa_K4765109](http://parts.igem.org/Part:BBa_K4765109), [BBa_K4765110](http://parts.igem.org/Part:BBa_K4765110))

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/cyano-e-coli-3.png" style='width:65%'>
<br>
<div>
<p><small style="color: gray">Figure 15: Aggregation Assay Using Optical Density (OD<sub>600, 685</sub>) Measurements<br>The initial OD values of the cultures were standardized using CoBG-11 medium</small></p>
</div>
</div>

In the following figure, we observed that at 6 hours, in both aTc-induced *E. coli* / cyanobacteria samples,  bacteria percentage of bacteria remaining in the supernatant was significantly lower compared to the uninduced samples. This suggests that intimin-lectin can mediate the specific binding of *E. coli* and cyanobacteria, thereby accelerating the aggregation process.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/lca-mvn3.jpg"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 16: Bacteria Percentage Remaining in the Supernatant 6h after Mixation<br> A: intimin-LCA <em>E.coli</em> / <em>Synechococcus elongatus</em>  B: intimin-MVN <em>E.coli</em> / <em>Microcystis aeruginosa</em> <br>The bacterial quantity in the supernatant is reflected by measuring the OD<sub>600</sub> and OD<sub>685</sub>. 
</small></p>
</div>
</div>


For aTc-induced intimin-MVN *E.coli* / *Microcystis aeruginosa* mixed samples, while the final number of bacteria remaining in the supernatant showed no significant difference compared to the uninduced type. However, the bacterial count at 2 hours and 6 hours was significantly lower than the uninduced type, suggesting that the introduction of lectins contributes to accelerating the biofilm formation process.

For aTc-induced intimin-LCA *E.coli* / *Synechococcus elongatus* mixed samples, the number of bacteria remaining in the supernatant at 2 hours showed no significant difference compared to the uninduced type. Still, the bacterial count at 6 hours and 24 hours was significantly lower than the uninduced type.

The differences in sedimentation patterns may arise from variations in cyanobacterial species and differences in the affinity of adhesins. Nonetheless, these observations support the idea that expressing intimin-lectin in *E.coli* can mediate the specific binding of *E.coli* and cyanobacteria, thereby promoting biofilm formation process.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/lca-mvn-time.jpg"
style='width:300%'>
<br>
<div>
<p><small style="color: gray">Figure 17: Bacteria Remaining in the Supernatant at 0,2,6,24 Hours<br> A: intimin-LCA <em>E.coli</em> / <em>Synechococcus elongatus</em>  B: intimin-MVN <em>E.coli</em> / <em>Microcystis aeruginosa</em><br>The bacterial quantity in the supernatant is reflected by measuring the OD<sub>600</sub> (1 OD<sub>600</sub> corresponds to 10<sup>8</sup> bacterial particles)
</small></p>
</div>
</div>



## 4. Terraforming System

### EPS Module

To validate the adhesion effects of EPS (Details in [BBa_K4765121](http://parts.igem.org/Part:BBa_K4765121) and [BBa_K4765122](http://parts.igem.org/Part:BBa_K4765122)), we performed microscopy imaging using a chamber-based approach. After mixing the *E.coli* expressing EPS with an appropriate concentration of PDL (Poly-D-Lysine), it was forcefully pipetted ten times before loading into the flow chamber. Subsequently, we conducted fluorescence microscopy imaging. We applied two different force intensities to wash the adherent bacteria and observed whether the EPS-expressing *E.coli* could remain adhered to the glass slide without being dislodged.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/flow-chamber.jpg"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 18: Schematic of the Flow Chamber Device for EPS Experiments<br>This figure illustrates the design of the flow chamber and its application in conducting EPS experiments.<br>
</small></p>
</div>
</div>


In Figure 19, in the two left images under lower-intensity washing, EPS-expressing *E. coli* cells (red fulorescence indicated by white arrows) maintained adhesion to the glass surface for an extended period without being dislodged, while the control group (green fluorescence) was washed away. In the two right images, subjecting adherent *E. coli*  to more intense washing forces removed non-adherent cells completely. However, EPS-expressing *E. coli* cells (white arrows) could still adhere to the glass surface for a considerable time. This indicates that EPS effectly promotes *E. coli* adhesion.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/150x-low-pdl-gp-1-blow-final.jpg"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 19. Fluorescence Microscopy Imaging (150x) of <em>E.coli</em> Adhesion<br>All four images were captured from the same field of view, showing <em>E.coli</em> adhesion under different washing conditions. The two images on the left depict bacterial adhesion over an extended period under mild washing, while the two images on the right show bacterial adhesion still remains under stronger washing.<br>
</small></p>
</div>
</div>

In the following video, we further demonstrated the adhesion process of EPS-expressing *E. coli* cells (red fulorescence indicated by white arrows) during the aforementioned washing procedures.

<div style="text-align: center;">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/150x-low-pdl-gp-1-blow-final.gif"
style='width:40%'>
<br>
<div>
<p><small style="color: gray">Figure 20: Visualization of <em>E.coli</em> Adhesion through Fluorescence Microscopy<br>Magnification: 150x <br>Video Duration: Captured at 200ms intervals<br>
</small></p>
</div>
</div>


These results collectively affirm that EPS effectively mediates *E. coli* adhesion to surfaces, thereby enhancing the terraforming process.

