---
layout: archive
title:  "ICRA 2024: Generative Modeling of Residuals for Real-Time Risk-Sensitive Safety with Discrete-Time Control Barrier Functions (Under Review)"
date:   2023-10-4 4:35:00 -0800
categories: Research
tags: [Publications]
---
**Ryan K. Cosner<sup>&#42;</sup>**, Igor Sadalski, Jana K. Woo, Preston Culbertson, and Aaron D. Ames. [[pdf]](https://drive.google.com/file/d/1h1i2P1oLIH9gGgi2g6ciR3EFWSTiJb7s/view?usp=sharing)


<hr>
**Abstract**:
<p align="justify">
A key source of brittleness for robotic systems is the presence of model uncertainty and external disturbances. Most existing approaches to robust control either seek to bound the worst-case disturbance (which results in conservative behavior), or to learn a deterministic dynamics model (which is unable to capture uncertain dynamics or disturbances). This work proposes a different approach: training a state- conditioned generative model to represent the distribution of error residuals between the nominal dynamics and the actual system. In particular we introduce the Online Risk-Informed Optimization controller (ORIO), which uses Discrete-Time Control Barrier Functions, combined with a learned, generative disturbance model, to ensure the safety of the system up to some level of risk. We demonstrate our approach in both simulations and hardware, and show our method can learn a disturbance model that is accurate enough to enable risk-sensitive control of a quadrotor flying aggressively with an unmodelled slung load. We use a conditional variational autoencoder (CVAE) to learn a state-conditioned dynamics residual distribution, and find that the resulting probabilistic safety controller, which can be run at 100Hz on an embedded computer, exhibits less conservative behavior while retaining theoretical safety properties.
</p>
<hr> 

[extended version](https://drive.google.com/file/d/1h1i2P1oLIH9gGgi2g6ciR3EFWSTiJb7s/view?usp=sharing). 