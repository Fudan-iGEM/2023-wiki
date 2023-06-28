---
sidebar: auto
sidebarDepth: 2
---
# Description
123
## Background & Inspiration

![](https://static.igem.wiki/teams/4765/wiki/test.jpg)

In his novel *The Songs of the Distant Earth*, Arthur C. Clarke, often referred to as the "Great Space Prophet," envisions a future where humanity, having predicted the imminent supernova explosion of the sun, reestablishes civilization on the distant planet Salazar through space migration. In our current era, with the advancement of human civilization and aerospace technology, Earth's ecological environment is facing irreversible damage. This leads us to contemplate: When the Earth is no longer suitable for human habitation, new life may dawn on other planets.

Among the planets in the solar system, Mars stands out as the most suitable for interstellar navigation and space migration. As the closest Earth-like planet, it has been the subject of significant exploration. Mars boasts a gravity one-third that of Earth's and a soil rich in water (mostly in the form of ice), which can be converted into liquid water to serve as a foundation for biological survival. In comparison to the Moon, Mars possesses a relatively stable atmosphere consisting primarily of 95% carbon dioxide and 3% nitrogen [^1].

However, before we can colonize Mars, modifications are necessary. The term "terraforming," coined by Jack Williamson in 1942, refers to the planetary engineering that artificially alters the surface environment of celestial bodies to resemble Earth's climate, temperature, and ecological conditions. Nevertheless, terraforming Mars is no easy task. Even with its favorable gravity, atmosphere, and water resources, the grand plan of human colonization of Mars encounters numerous significant challenges. Among these challenges, soil plays a crucial role. Without soil, the establishment of a terrestrial ecosystem becomes arduous, and the foundation for human settlement is lost. The Martian surface is predominantly covered in bare rock, primarily composed of basalt, with regolith consisting mainly of silicate rock and sulfate rock. The chemical composition is primarily: O (50%), Si (15% - 30%), Fe (12% - 16%), Mg (5%), Ca (3% - 8%), S (3% - 4%), Al (2% - 7%), K (2%) [^2]. To transform this barren rock into soil conducive to the establishment of an ecosystem from scratch poses a significant challenge in the process of Martian transformation.

Drawing inspiration from the early stages of terrestrial succession on Earth, we find that pioneer lichens play a vital role in shaping the planet's environment. Lichens are symbiotic organisms consisting of fungi and either chlorophyta or cyanobacteria. They grow on dry rocks or tree bark and secrete organic acids and mucopolysaccharides, which accelerate rock weathering and soil formation, creating favorable conditions for the emergence of other species and vegetation. The photosynthetic green algae provide nutrients for carbon and nitrogen fixation, while the fungi provide water and minerals, preventing excessive evaporation. However, directly applying lichens to improve the Martian surface is not practical due to the significant differences in crust and atmospheric composition between Earth and Mars. Lichens that thrive on Earth may not survive in extraterrestrial environments.

So, how can we draw inspiration from lichens and apply their principles to terraforming the Martian surface?



## Overview

Our team proposes the development of an ecological biofilm inspired by the functions of lichens that can adapt to the Martian environment and facilitate the transformation of barren rocks into soil. Autotrophic cyanobacteria will be responsible for nitrogen fixation and carbon fixation, providing oxygen and organic matter essential for *Escherichia coli* metabolism. *E. coli*, with its genetic components modified to mimic the role of fungi in lichens, will secrete chemical weathering agents to erode rock debris and express elements that enable the biofilm to adapt to the harsh Martian environment, promoting its functionality. The ecological membrane, evenly spread on the rocks, will facilitate the transformation of rock debris into soil suitable for supporting life, enabling future habitation, agriculture, and animal husbandry on Mars. This project aims to accelerate the terraforming of Mars and provide technical support for future space exploration endeavors.



## Identify the problems

1. The barren rocks on Mars lack organic nutrients, necessitating the ability of the ecological biofilm to grow autotrophically using solar energy and atmospheric components, without relying on external nutrients. It should be able to accumulate organic matter and transport it extracellularly for use by heterotrophic bacteria.

2. Martian regolith primarily consists of silicate rock and sulfate rock. The ecological biofilm needs to secrete organic acids to dissolve these rock components. (Mars rocks are also rich in phosphorus [^3], an important component of genetic material and widely involved in energy metabolism and membrane synthesis. Phosphate recycling can be achieved by expressing it in *E. coli* [^4]). (High concentrations of perchlorate in Martian soil are toxic to organisms. Perchlorate reductase and chlorite dismutase can be expressed in *E. coli* to decompose sodium perchlorate. Various anaerobic microorganisms can degrade perchlorate into non-toxic chlorate and oxygen, utilizing organic matter such as acetic acid, ethanol, lactic acid or inorganic matter like hydrogen, zero-valent iron, elemental sulfur, etc.) [^5].

3. Mars experiences significant atmospheric pressure drops of about 30% due to the formation of dry ice in the polar regions during winter. This results in two atmospheric maximum and two atmospheric minimum periods each year, leading to global airflow cycles and violent storms on Mars [^6]. The ecological membrane needs to possess high adhesion ability and resistance to high wind speeds.

4. Mars has a thin atmosphere, strong surface radiation, and significant temperature differences between day and night [^6] (surface temperatures can reach 28 °C during the day and drop as low as -132 °C at night, averaging -52 °C). The ecological membrane should incorporate anti-radiation and temperature buffering mechanisms.

5. Maintaining a certain bacterial density within the biofilm is crucial for material exchange and quorum sensing among bacteria.

6. Mars experiences large temperature variations, making it difficult to maintain stable liquid water. Gaseous water is only present for a few hours per day, which is insufficient time for microorganisms to acquire the water they need for normal survival [^7]. Ensuring a secure water source for bacteria in this dry environment remains a significant problem (unresolved).

7. The low atmospheric nitrogen pressure on Mars presents challenges for nitrogen fixation organisms in ensuring a sufficient supply of nitrogen sources [^8] (unresolved).



## Symbiotic System

### Cyanobacteria （& *Escherichia coli*）

Cyanobacteria have the ability to fix carbon dioxide through photosynthesis, producing sucrose as a carbon source for the symbiotic membrane in space. However, we have encountered two problems in this process, as learned from the 2022 ShanghaiTech solution [^9].

The first problem is that wild-type cyanobacteria lack natural sucrose transporters, preventing them from secreting sucrose outside the cell. As a result, the carbon source cannot be utilized by *Escherichia coli*. To address this, we plan to express the sucrose transporter gene cscB in cyanobacteria, which will facilitate the secretion of sucrose into the extracellular environment.

The second problem involves the difficulty that wild-type *Escherichia coli* faces in utilizing sucrose as the sole carbon source. To overcome this, we suggest expressing the β-glucosidase gene SacaC in *Escherichia coli*. This gene enables *E. coli* to break down sucrose into glucose and fructose, thus promoting the utilization of sucrose as a carbon source by *E. coli*.

### *Escherichia coli*

#### Interaction Module

Most of the co-culture systems used in previous iGEM projects involve directly mixing two microorganisms. However, this approach often leads to uneven distribution of microorganisms, making it challenging to regulate their metabolic relationship and ensure the stable operation of the system. Through our research, we discovered that the fixed spatial structure formed by the biofilm of fungi in lichen symbionts plays a crucial role in their adaptation to the environment, providing them with a strong ability to store water and nutrients. Drawing inspiration from this, we propose using Living Assembled Material by Bacterial Adhesion (LAMBA) [^10] to express adhesive antigen-antibody pairs on the surface of cyanobacteria and engineered bacteria. This will allow for the orderly arrangement and self-assembly of these microorganisms, forming a biofilm-like structure. This unique interaction module enables the predictable and controllable spatial combination of the two microorganisms, providing our "pioneer bacteria" with a physical framework to enhance their environmental adaptability.

#### Organic Acid Module

To facilitate the weathering of bare rocks on Mars, we require the biofilm capable of dissolving the predominant silicate rocks in the regolith. Under similar pH conditions, organic acids are more effective than inorganic acids. Commonly used organic acids, such as oxalic acid, citric acid, acetic acid, and malic acid, simulate the natural dissolution process of silicate minerals. In our project, we plan to adopt the strategy proposed by CAU China 2022 [^11], which involves modifying the TCA cycle in *Escherichia coli* by introducing obcA and obcB genes. This modification enables the bacteria to produce oxalates. Down-regulating oxdC and gltA can reduce oxalate degradation, inhibit the conversion of oxalacetic acid to citric acid, and increase oxalate production. The FpOAR protein acts as an oxalate efflux protein, facilitating the efflux of oxalate into the extracellular environment.

#### Exopolysaccharides Module

drther promote the dissolution of silicate minerals. The side chain groups of polysaccharides contain hydrogen and oxygen bonds, which provide strong adsorption capacity. As a result, the "bacteria-mineral complexes" primarily exhibit significant adsorption effects on the metabolites secreted by the bacteria (such as organic acids and certain inorganic ions). Additionally, these complexes bind the cells around the minerals together, forming a polymeric structure. To enhance the transformation of bare rocks into soil, we plan to draw inspiration from the work of XJTU-China in 2022 [^12]. Specifically, we aim to overexpress PgmA and GalU, two crucial rate-limiting enzymes in the exopolysaccharide synthesis pathway, in *Escherichia coli*'s membrane. This overexpression will increase the expression of exopolysaccharides, further promoting the conversion of bare rocks into soil based on organic acids.

#### Anti-UV Module

The thin atmosphere of Mars exposes the bacterial membrane sprayed on its surface to radiation, posing a risk of ultraviolet (UV) light damaging the organisms' genomes. Drawing from research conducted at 2009 Tokyo Tech[^13], our plan is to enhance the expression of melanin in *Escherichia coli*. Melanin efficiently absorbs heat and UV light, providing protection to the E. coli genome against UV damage. Additionally, it helps absorb radiation heat, enabling the membrane to better withstand cold temperatures at night. To increase melanin expression, we will promote the overexpression of melA tyrosinase, which catalyzes the conversion of tyrosine into dopa quinone. Subsequently, dopa quinone undergoes a non-enzymatic chain reaction to form melanin. Temperature-sensitive promoters can also be utilized: when the surface temperature of Mars is low, *E. coli* produces more melanin, resulting in a black appearance and warming the surface. Conversely, when the temperature exceeds a certain threshold, melanin production ceases, and the color of E. coli turns white.

#### Anti-Freeze Module

Mars experiences significant temperature variations between day and night, and the low temperatures at night can lead to the formation of ice crystals in the cells of the bacterial strain. This phenomenon causes a loss of cell water and physical damage to the cell membrane. Taking inspiration from antifreeze proteins (AFP), our plan involves expressing AFP in *E. coli* to enhance the adaptability of the ecological biofilm to extremely low temperatures.



## Function Summary

Through modular design of the ecological membrane, we have successfully integrated photoautotrophic cyanobacteria to capture carbon and transfer it as a carbon source to heterotrophic *Escherichia coli*. The physical framework of the ecological membrane is established using antigen-antibody binding. In *Escherichia coli*, we have achieved expression of organic acids and extracellular polysaccharides that facilitate the weathering of barren rocks, along with components for UV protection and temperature buffering that enable biofilm adaptation to the Martian environment. This pioneering biofilm design aims to promote the transformation of Mars' surface into a habitable environment.

Looking ahead, we envision a diverse array of microorganisms comprising the "pioneer membrane" that can be mixed, amplified, and stored in a specialized container for transportation. Upon arrival at the destination, they can be mixed with inducers for pre-assembly and sprayed onto the Martian rock surface by space explorers, initiating the seeding process of the "pioneer membrane." Once seeded, the membrane will undergo self-growth and expansion, facilitating the colonization of Mars and accelerating the ecological succession process within the Martian environment.



## References

[^1]: Ouyang Ziyuan, Xiao Fugen. Mars and its Environment [J]. Spacecraft Environmental Engineering,2012,29(06):591-601.
[^2]: Wray, J., Hansen, S., Dufek, J. *et al.* Prolonged magmatic activity on Mars inferred from the detection of felsic rocks. *Nature Geosci* **6**, 1013–1017 (2013). https://doi.org/10.1038/ngeo1994
[^3]: https://www.cjss.ac.cn/article/doi/10.11728/cjss2021.01.129
[^4]: https://2017.igem.org/Team:Manchester
[^5]: https://2021.igem.org/Team:MTU-CORK
[^6]: Martian atmosphere [J]. Nature Exploration,2005(6):21.
[^7]: Li Danming, Li Yi. Research and simulation experiment of water extraction method from Martian soil [J]. Chinese Journal of Spaceflight, 2019,27(1):10-14.
[^8]: https://www.sciencealert.com/cyanobacteria-can-be-grown-in-mars-conditions-opening-avenues-for-human-life-support
[^9]: https://2022.igem.wiki/shanghaitech-china/
[^10]: Chen, B., Kang, W., Sun, J. *et al.* Programmable living assembly of materials by bacterial adhesion. *Nat Chem Biol* **18**, 289–294 (2022). https://doi.org/10.1038/s41589-021-00934-z
[^11]: https://2022.igem.wiki/scu-china/overview.html
[^12]: https://2022.igem.wiki/xjtu-china/index.html
[^13]: Zhong, L., Zhang, Y., Duan, C. A., Deng, J., Pan, J., & Xu, N.-L. (2019). Causal contributions of parietal cortex to perceptual decision-making during stimulus categorization. *Nature Neuroscience*, *22*(6), 963–973. https://doi.org/10.1038/s41593-019-0383-6



***Drafted in Chinese, manual translated into English, then embellished by chatGPT***