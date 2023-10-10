---
layout: archive
title:  "ICRA 2024: Generative Modeling of Residuals for Real-Time Risk-Sensitive Safety with Discrete-Time Control Barrier Functions"
date:   2023-10-4 4:35:00 -0800
categories: Research
tags: [Publications]
---
**Ryan K. Cosner<sup>&#42;</sup>**, Igor Sadalski, Jana K. Woo, Preston Culbertson, and Aaron D. Ames. 

<p align="center">
<img src="/assets/images/icra23_authors_picture.png
" alt="paper headshot"
/>
<img src="/assets/images/orio_logo.png
" alt="orio" width="400"
/>
</p>


*Submitted to the International Conference on Robotics and Automation (ICRA) 2024, Yokohama*

[[extended version pdf]](https://drive.google.com/file/d/1h1i2P1oLIH9gGgi2g6ciR3EFWSTiJb7s/view?usp=sharing)


<hr>
## Abstract

<p align="justify">
  A key source of brittleness for robotic systems is the presence of model uncertainty and external disturbances. Most existing approaches to robust control either seek to bound the worst-case disturbance (which results in conservative behavior), or to learn a deterministic dynamics model (which is unable to capture uncertain dynamics or disturbances). 
</p>

<p align="justify">
This work proposes a different approach: training a state- conditioned generative model to represent the distribution of error residuals between the nominal dynamics and the actual system. In particular we introduce the Online Risk-Informed Optimization controller (ORIO), which uses Discrete-Time Control Barrier Functions, combined with a learned, generative disturbance model, to ensure the safety of the system up to some level of risk. 
</p>

<p align="justify">
We demonstrate our approach in both simulations and hardware, and show our method can learn a disturbance model that is accurate enough to enable risk-sensitive control of a quadrotor flying aggressively with an unmodelled slung load. We use a conditional variational autoencoder (CVAE) to learn a state-conditioned dynamics residual distribution, and find that the resulting probabilistic safety controller, which can be run at 100Hz on an embedded computer, exhibits less conservative behavior while retaining theoretical safety properties.
</p>

<hr> 


## Extended Paper Version

<p align="center">
<a href="https://drive.google.com/file/d/1h1i2P1oLIH9gGgi2g6ciR3EFWSTiJb7s/view?usp=sharing"> 
<img src="/assets/images/icra23_paper_headshot.png
" alt="paper headshot"
style="border:1px solid black"
/>
</a>
</p>

<hr>

## Project Video
<p>
<iframe src="https://drive.google.com/file/d/1cWbQ8rvKEUbG7617Muvp86xPz6d6YM_n/preview" width="630" height="360" allow="autoplay"></iframe>
</p>

<hr>

## Acknowledgements
<p align="justify">
Special thanks to Albert Li for his help with understanding and coding the CVAEs and to Amy Li for her insightful feedback on our manuscript. This work was also supported by BP. 
</p>

<hr>

## Contact 

If you have any questions, please feel free to contact [Ryan Cosner](rkcosner@caltech.edu). 