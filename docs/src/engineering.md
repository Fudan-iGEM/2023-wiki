---
sidebar: auto
title: Engineering
author:
- Zhiyue Chen
- Zhenmao Ye
authorlink:
- /fudan/team/#zhiyue-chen-the-software-wizard
- /fudan/team/#zhenmao-ye-the-multifaceted-talent
---
## Selecting Surface Display Systems through Aggregation Assay

### Design

In our biofilm research, we introduced a biofilm formation system, which displays antigen/nanobody pairs on the surface of *E.coli*. To achieve our objective more efficiently, we needed to identify a suitable surface display system for antigen/ nanobody transporting. After researching, we have identified two candidate proteins: INPNC and Intimin. The former has been used by multiple teams in previous projects [BBa_K4195034](http://parts.igem.org/Part:BBa_K4195034) while the latter has been reported to show promising results in the literature[^1]. Therefore, our plan is to compare the surface display efficiency of intimin and INPNC by evaluating their biofilm formation capabilities facilitated through fusion with antigen and nanobody.

### Build

We constructed four parts, including intimin-Ag3 fusion ([BBa_K4765105](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765105)), intimin-Nb3 fusion ([BBa_K4765106](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765106)), INPNC-Ag3 fusion ([BBa_K4765107](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765107)), and INPNC-Nb3 ([BBa_K4765108](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765108)) fusion. When designing these parts, we utilized the ribozyme-assisted polycistronic co-expression (pRAP) system, which promotes the stable expression of sequences.

### Test

We compared the efficiency of the two surface display system by mixing the *E.coli* pairs mentioned above. As Figure 1 indicates, When both the antigen and nanobody select intimin as the display protein, the results are significantly better than other combinations.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/intimin-vs-inpnc.jpg" style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 1: Bacteria Percentage Remaining in the Supernatant 3h after Mixation<br>The bacterial quantity in the supernatant is reflected by measuring the OD<sub>600</sub> (1 OD<sub>600</sub> corresponds to 10<sup>8</sup> bacterial particles).<br>In Figure 1, bacterial solutions of intimin-Ag3 and intimin-Nb3, INPNC-Nb3 and intimin-Ag3, INPNC-Ag3 and intimin-Nb3, as well as plain bacteria (control), were mixed in a 1:1 ratio (600μL per strain per tube, with 1.2mL for plain bacteria aggregation) and allowed to settle. Sampling was performed at 0, 3, and 6 hours by collecting 100μL aliquots from the upper 25% of each mixture (supernatant) in each tube. These samples were subsequently transferred to EP tubes and stored at 4℃ until the final sampling. Afterward, they were resuspended and transferred to a 96-well assay plate for OD<sub>600</sub> measurement. The percentage of bacteria remaining in the supernatant at 3 hours was determined by dividing the bacterial count at 3 hours (as determined by the OD<sub>600</sub> measurement) by the bacterial count at 0 hours.</small></p >
</div>
</div>


### Learn

In aggregation experiments, we compare the surface display efficiency of intimin and INPNC. The optimal biofilm formation was observed when both antigen and nanobody were presented using intimin. Consequently, we predominantly employ intimin as the display protein in our subsequent experiments.

## Developing our software: RAP

### Cycle 1: Design

During the initial design phase of the RAP, our emphasis lies on the RAP's purpose and its intended outputs. We engaged in consultations with team members of the Fudan iGEM 2022, and they presented two primary requisites to us:

1. Modeling the optimization of metabolic flux
2. Designing of synthetic ribosome binding site (RBS) for pRAP system

Hence, we have defined the purpose of RAP as the development of software for the quantitative optimization of the pRAP system design. Following a comprehensive background survey on metabolic optimization, we identified a requirement for an enzyme kinetics database. And the outputs of RAP should be pRAP sequence. At the same time, we considered an intuitive user interface, and we finally decided to develop a web UI based on Vue.js. To streamline the development of RAP, we have chosen Python as the backend programming language and MySQL as the database for enzyme dynamics.

### Cycle 1: Build

In order to facilitate debugging and maintenance for the software, we have opted to modularize the development of RAP with docker. Consequently, we have developed three modules necessary to implement our design: KineticHub, RAP Builder, Web UI.

- KineticHub aims at quantitative optimization of the pRAP system
- RAP Builder designs synthetic RBS and output pRAP sequence
- Web UI offers an intuitive user interface for users

We obtained data from the open-source version of BRENDA to build KineticHub with MySQL and provide RESTFul APIs with Flask. We utilize a thermodynamic model based on Gibbs free energy and Monte Carlo algorithm for RAP Builder to design synthetic RBS in Cycle 1. [RAP (v0.2.0-beta)](https://gitlab.igem.org/2023/software-tools/fudan/-/tree/v0.2.0-beta) was released in this phase.

### Cycle 1: Test

We conducted an efficiency test of the Monte Carlo algorithm implemented in RAP Builder, and the results are illustrated in [Figure 2](#fig-2).

<div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/4765/wiki/czy/monte-carlo-efficiency.svg" style='width:60%'>
<br>
<div>
  <p><small style="color: gray">Figure 2: The Efficiency of RBS searching by Monte Carlo algorithm. The ddG means difference between dG target and current dG.</small></p>
</div>
</div>

RAP Builder's Monte Carlo algorithm has a good search efficiency and can get a suitable sequence in a range of up to 1,000 iterations.

### Cycle 1: Learn

We initiated RAP trials involving the team members responsible for experiments, along with the Fudan iGEM 2022 team members, engaging in two-way dialogues with them. They were introduced to the workflow of RAP and instructed on how to use RAP. Simultaneously, they provided us with valuable suggestions for further enhancing the RAP system (Figure 3).

Review: It was observed that RAP also requires external sequence searching to construct the pRAP system. However, Fudan iGEM 2022 already has a PartHub for Parts searching. Therefore, further enhancements to PartHub and its integration into the RAP workflow could potentially enhance RAP even further.

### Cycle 2: Design

For PartHub 2, our emphasis was primarily on the following features:

1. Updating database with 2022 iGEM Registery of Standard Biological Parts
2. Improving the user interaction interface
3. Developing a diversified recommendation algorithm utilizing graph algorithms

Similar to PartHub, we continued to employ Neo4j as the graph database for the storage of Parts. However, this year, we designed RESTful APIs to PartHub, expanding its capabilities for more advanced functionality. We designed a diversified recommendation algorithm using the PageRank and Louvain method.

### Cycle 2: Build

We used the web crawler of PartHub to obtain Parts in 2022 iGEM Registery of Standard Biological Parts. PageRank and Louvain method was performed with [Neo4j Graph Data Science (GDS) library](https://neo4j.com/docs/graph-data-science/current/). [RAP (v0.3.0-beta)](https://gitlab.igem.org/2023/software-tools/fudan/-/tree/v0.3.0-beta) was released in this phase.

### Cycle 2: Test

We utilized PartHub 2 to search for all the Parts we employed. Detailed records can be found in our [Improve](/improve/) page.

### Cycle 2: Learn

We had a discussion with the team member responsible for the wet lab regarding the feasibility of experimentally validating RAP. In addition, we collaborated with external users ([SCUT-China iGEM 2023](https://2023.igem.wiki/scut-china/other-teams6) & Nanjing-China iGEM 2023) and conducted a two way dialogue on the user interface.

<div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/4765/wiki/collaboration/scut-tiny.png" style='width:70%'>
<br>
<div>
  <p><small style="color: gray">Figure 3: Introduction to potential users in SCUT-China</small></p>
</div>
</div>

<div style="text-align: center;" id="fig-2">
<img src=" https://static.igem.wiki/teams/4765/wiki/hp/software2.png" style='width:70%'>
<br>
<div>
  <p><small style="color: gray">Figure 4: Introduction to potential users in Nanjing-China</small></p>
</div>
</div>

Review: During the discussion regarding the experimental validation of RAP, we have put forth a new proposal for the design of an additional regulatory element for the pRAP system: stem-loop. During the discussion with SCUT-China iGEM 2023, their team members presented a valuable suggestion: to enhance user-friendliness, it was proposed to create an annotation file for the generated results.

### Cycle 3: Design

Similar to the RBS design already implemented in RAP at that time, we have also developed a thermodynamic model for the design of the stem-loop. For more details, visit our [software page](/software/#assumption-4).

### Cycle 3: Build

We employed support vector regression to determine the relationship between stem-loop structures and protein expression in pRAP. Additionally, when generating sequences in RAP, an `annotation.csv` file was provided to the user. [RAP (v0.4.0-beta)](https://gitlab.igem.org/2023/software-tools/fudan/-/tree/v0.4.0-beta) was released in this phase.

### Cycle 3: Test

We designed experiments to validate the synthetic stem loop generated by RAP and obtained positive results. For more information, please refer to our [software page](/software/#assumption-4).

### Cycle3: Learn

Following the previous DBTL cycles, we believe that RAP exhibits reliability in the system design for pRAP, and this system holds significant relevance for gene circuit design.

## References

[^1]: Glass, D. S., & Riedel-Kruse, I. H. (2018). A Synthetic Bacterial Cell-Cell Adhesion Toolbox for Programming Multicellular Morphologies and Patterns. *Cell*, *174*(3), 649-658.e16. https://doi.org/10.1016/j.cell.2018.06.041