---
sidebar: auto
title: Improve
author:
- Siliang Zhan
authorlink:
- /fudan/team/
---

## Overview

B.HOME is built on the foundation of existing iGEM parts. With support from [Parthub 2](https://2023.igem.wiki/fudan/software/#parthub-2), we can quickly identify suitable parts from previous iGEM teams based on key information and modify these parts according to the functionalities we aim to achieve. (Get details in [Software](https://2023.igem.wiki/fudan/software/#overview))

In this year's project, we focused on three major improvements:

- Further enhancing the pRAP system by introducing stem-loops to prevent degradation of monocistronic mRNA after ribozyme cleavage.
- Improving the existing surface display system for biofilm formation by presenting the Ag-Nb pairs and lectin on the surface of *E. coli*, enabling binding between *E. coli-E. coli* and *E. coli*-cyanobacteria.
- Optimizing our experimental methodologies to gain deeper insights into the adhesive capabilities of exopolysaccharides within the EPS module.

Furthermore, we made minor improvements to various other parts.

## Improvement of  pRAP

Last year, we used pRAP based on the [hammerhead ribozyme](http://parts.igem.org/Part:BBa_K4162005), which could cleave ploycistronic mRNA  into monocistronic mRNA, allowing for efficient expression of proteins on minimal cargo DNA. We also attempted to modulate RBS strength to control protein expression levels, ultimately successfully expressing enzymes related to synthetic β-carotene production.

However, in this year's experiments, we observed degradation of the monocistronic mRNA after ribozyme cleavage in pRAP, affecting protein expression. Therefore, we designed the addition of a stem-loop at the 3' end of the CDS to prevent mRNA degradation. We calculated different strengths of stem-loops using software and tested the anti-degradation capabilities of these stem-loops in  stem-loop test (learn more in [BBa_K4765129](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765129)).

Simultaneously, we also tested the cleavage efficiency of various ribozymes in  [BBa_K4765120 (ribozyme test: leaky expression)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765120).

## Improvement of Biofilm Formation

Taking inspiration from iGEM22_GreatBay_SCIE's [BBa_K4275026 (Neae-Nb3)](http://parts.igem.org/Part:BBa_K4275026), we used the Antigen-Nanobody pairs presented by intimin to facilitate the binding between *E. coli*. To build a programmable biofilm, We required Ag-Nb pairs with varying binding strengths, and we tested three different pairs. Subsequently, We successfully constructed a biofilm using the most effective pair, as described in [BBa_K4765106](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765106).

We also explored the utilization of lectin-mediated binding between cyanobacteria and *E. coli*. In the selection of an appropriate surface display system, we compared [intimin](http://parts.igem.org/Part:BBa_K4275026) from iGEM22_GreatBay_SCIE with [INPNC](http://parts.igem.org/Part:BBa_K4195034#Improved_parts) from iGEM22_XMU-China and opted for the more effective intimin. We added LCA and MVN to its C-terminus, resulting in the creation of part [BBa_K4765109 (Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765109) and part [BBa_K4765110 (Twister P1 + T7_RBS + intimin-LCA fusion + stem-loop)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765110). These parts demonstrated significant binding capabilities with *Microcystis aeruginosa* PCC7806 and *S. elongatus* PCC7942 respectively.

## Improvement of EPS Characterization

Both iGEM20_XJTU-China and iGEM22_XJTU-China teams have overexpressed  *galU* and *pgmA* to increase exopolysaccharide(EPS) production. We adopted their methods for EPS production while focusing on the testing of adhesion capabilities.

We incorporated red fluorescent protein mScarlet after galU and pgmA using the pRAP system, creating [BBa_K4765121 (ribozyme connected: galU + pgmA + mScarlet)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765121). By washing with flowing water under a fluorescence microscope, we observed that *E. coli* with red fluorescence were not washed away, confirming the adhesion capability of EPS.

## Other Improvements

In addition, we made the following improvements:

- Codon-optimized the enzymes related to synthetic MAA ([BBa_K4765010](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765010)-[BBa_K4765011](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765011)).
- Co-expressed the anti-desiccation protein SAHS 33020 with *H. ex* mtSSB to test their anti-desiccation capabilities.
- Analyzed factors affecting [Sac](http://parts.igem.org/Part:BBa_K4115017) functionality.

## Improved Parts

| Original Part                                                | Original Description                                    | Improved Part                                                | Description                                          |
| ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| [BBa K4275026](http://parts.igem.org/Part:BBa_K4275026)      | Neae-Nb3                                                | [BBa_K4765106](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765106) | Twister P1 + T7_RBS + intimin-Nb3 fusion + stem-loop |
|                                                              |                                                         | [BBa_K4765109](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765109) | Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop |
|                                                              |                                                         | [BBa_K4765110](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765110) | Twister P1 + T7_RBS + intimin-LCA fusion + stem-loop |
| [BBa K4195034](http://parts.igem.org/Part:BBa_K4195034#Improved_parts) | INPNC-his                                               | [BBa_K4765108](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765108) | Twister P1 + T7_RBS + INPNC-Nb3 fusion + stem-loop   |
| [BBa K1378003](http://parts.igem.org/Part:BBa_K1378003)      | Microvirin (MVN)---a lectin from Microcystis aeruginosa | [BBa_K4765109](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765109) | Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop |
| [BBa K4273004](http://parts.igem.org/Part:BBa_K4273004)      | NpR5600                                                 | [BBa_K4765010](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765010) | MysA codon optimized                                 |
| [BBa K4273005](http://parts.igem.org/Part:BBa_K4273005)      | NpR5599                                                 | [BBa_K4765011](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765011) | MysB codon optimized                                 |
| [BBa K4273008](http://parts.igem.org/Part:BBa_K4273008)      | Np5598                                                  | [BBa_K4765012](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765012) | MysC codon optimized                                 |
| [BBa K4273013](http://parts.igem.org/Part:BBa_K4273013)      | NlmysD                                                  | [BBa_K4765013](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765013) | MysD codon optimized                                 |
| [BBa K4273014](http://parts.igem.org/Part:BBa_K4273014)      | NlmysH                                                  | [BBa_K4765014](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765014) | MysH codon optimized                                 |
| [BBa K4162005](http://parts.igem.org/Part:BBa_K4162005)      | Hammerhead ribozyme                                     | [BBa_K4765119](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765119) | ribozyme test: constitutive expression               |
|                                                              |                                                         | [BBa_K4765120](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765120) | ribozyme test: T7 leaky expression                   |
|                                                              |                                                         | [BBa_K4765129](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765129) | stem-loop test                                       |
| [BBa K2306003](http://parts.igem.org/Part:BBa_K2306003)      | SAHS 33020                                              | [BBa_K4765126](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765126) | ribozyme connected: H. ex mtSSB + SAHS 33020 + AnAFP |
| [BBa K3331012](http://parts.igem.org/Part:BBa_K3331012)      | E.coli galU+E.coli pgmA                                 | [BBa_K4765121](http://parts.igem.org/wiki/index.php?title=Part:BBa_K4765121) | ribozyme connected: galU + pgmA + mScarlet           |
| [BBa K4115017](http://parts.igem.org/Part:BBa_K4115017)      | SacC                                                    | ——                                                           | ——                                                   |

