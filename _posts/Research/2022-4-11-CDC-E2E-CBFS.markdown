---
layout: archive
title:  "CDC 2022: End-to-End Imitation Learning with Safety Guarantees using Control Barrier Functions"
date:   2021-9-15 4:35:00 -0800
categories: Research
tags: [Publications]
---
**Ryan K. Cosner<sup>&#42;</sup>**, Yisong Yue, Aaron D. Ames. [[pdf]](../../assets/files/e2eIlCBF.pdf)




<hr>
**Abstract**: Imitation learning (IL) is a learning paradigm 
which can be used to synthesize controllers for complex systems that
mimic behavior demonstrated by an expert (user or control algorithm). Despite its popularity, IL methods generally lack guarantees of safety, which limits their utility for complex safety-critical systems. In this work we consider safety, formulated as set-invariance, and the associated formal guarantees endowed by Control Barrier Functions (CBFs). We develop conditions under which robustly-safe expert controllers, utilizing CBFs, can be used to learn end-to-end controllers (which we refer to as \textit{CBF-Compliant} controllers) that have safety guarantees. These guarantees are presented from the perspective of of input-to-state safety (ISSf) which considers safety in the context of 
disturbances, wherein it is shown that IL using  robustly safe expert demonstrations results in ISSf with the 
disturbance directly related to properties of the learning problem.  We demonstrate these safety guarantees in simulated vision-based end-to-end control of an inverted pendulum and a car driving on a track. 



<hr> 

[Paper preprint](../../assets/files/e2eIlCBF.pdf) and [code base](https://github.com/rkcosner/E2E-IL-CBF.git). 