---
layout: archive
title:  "LCSS 2022: A Constructive Method for Designing Safe Multirate Controllers for Differentially-Flat Systems"
date:   2021-9-12 4:35:00 -0800
categories: Research
tags: [Publications]
---
Devansh R. Agrawal<sup>&#42;</sup>, Hardik Parwana, **Ryan K. Cosner<sup>&#42;</sup>**, Ugo Rosolia, Aaron D. Ames, Dmitra Panagou. 




<hr>
**Abstract**: 
<p align="justify">
We present a multi-rate control architecture that leverages fundamental properties of differential flatness to synthesize controllers for safety-critical nonlinear dynamical systems subject to input constraints. We propose a two-layer architecture, where the high-level generates reference trajectories using a linear Model Predictive Controller, and the low-level tracks this reference using a feedback controller. The novelty lies in how we couple these layers, to achieve formal guarantees on recursive feasibility of the MPC problem, and safety of the nonlinear system. Furthermore, using differential-flatness, we provide a constructive means to synthesize the multi-rate controller, thereby removing the need to search for suitable Lyapunov or barrier functions, or to approximately linearize/discretize nonlinear dynamics. We show the synthesized controller is a convex optimization problem, making it amenable to real-time implementations. The method is demonstrated experimentally on a ground rover and a quadruped robotic system.
</p>

<p align="justify">
This is work performed in collaboration with Devansh Agrawal, Hardik Parwana, and Dmitra Panagou (U Michigan) and Ugo Rosolia and Aaron Ames (Caltech). It was originally published as a 2022 LCSS letter. 
</p>

The full publication can be found [here](https://par.nsf.gov/servlets/purl/10316829).



