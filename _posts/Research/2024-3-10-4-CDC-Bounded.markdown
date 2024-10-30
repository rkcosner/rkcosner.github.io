---
layout: archive
title:  "L-CSS  2024: Bounding Stochastic Safety:: Leveraging Freedman's INequality with Discrete-Time Control Barrier Functions"
date:   2023-10-4 4:35:00 -0800
categories: Research
tags: [Publications]
---
**Ryan K. Cosner<sup>&#42;</sup>**, Preston Culbertson, and Aaron D. Ames. 

<!-- <p align="center">
<img src="/assets/images/icra23_authors_picture.png
" alt="paper headshot"
/>
<img src="/assets/images/orio_logo.png
" alt="orio" width="400"
/>
</p> -->


*Accepted as a L-CSS paper with a presentation at CDC 2024*

Links: 
- [Official IEEE Xplore Version](https://ieeexplore.ieee.org/abstract/document/10547223)
- [Free Extended arXiv Version](https://arxiv.org/pdf/2403.05745)
<!-- - [video](https://drive.google.com/file/d/1cWbQ8rvKEUbG7617Muvp86xPz6d6YM_n/preview) -->
<!-- - [colab notebook](https://colab.research.google.com/drive/1PdD8qGjWKXsrNFoWuth10nI7-SRQ61-r?usp=sharing) -->
<!-- - [github repo](https://github.com/rkcosner/icra23_paper_code)  -->

<hr>
## Abstract

<p align="justify">
When deployed in the real world, safe con-
trol methods must be robust to unstructured uncertainties such as modeling error and external disturbances. Typical robust safety methods achieve their guarantees by always assuming that the worst-case disturbance will occur. 
</p>

<p align="justify">
In contrast, this paper utilizes Freedman’s inequality in the context of discrete-time control barrier functions (DTCBFs) and c-martingales to provide stronger (less conservative) safety guarantees for stochastic systems. Our approach accounts for the underlying disturbance distribution instead of relying exclusively on its worst-case bound and does not require the barrier function to be upper-bounded, which makes the resulting safety probability bounds more useful for intuitive safety constraints such as signed distance. 
</p>

<p align="justify">
We compare our results with existing safety guarantees, such as input-to-state safety (ISSf) and martingale results that rely on Ville’s inequality. When the assumptions for all methods hold, we provide a range of parameters for which our guarantee is stronger. Finally, we present simulation examples, including a bipedal walking robot, that demonstrate the utility and tightness of our safety guarantee.
</p>

<hr> 

