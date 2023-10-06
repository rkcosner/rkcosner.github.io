---
layout: archive
title:  "ICRA 2023: Receding Horizon Planning with Rule Hierarchies for Autonomous Vehicles"
date:   2023-10-4 4:35:00 -0800
categories: Research
tags: [Publications]
---
Shushant Veer, Karen Leung, **Ryan K. Cosner<sup>&#42;</sup>**, Yuxiao Chen, Peter Karkus, and Marco Pavone. [[pdf]](https://arxiv.org/pdf/2212.03323.pdf)


<hr>
**Abstract**:
<p align="justify">
Autonomous vehicles must often contend with conflicting planning requirements, e.g., safety and comfort could be at odds with each other if avoiding a collision calls for slamming the brakes. To resolve such conflicts, assigning importance ranking to rules (i.e., imposing a rule hierarchy) has been proposed, which, in turn, induces rankings on trajectories based on the importance of the rules they satisfy. On one hand, imposing rule hierarchies can enhance interpretability, but introduce combinatorial complexity to planning; while on the other hand, differentiable reward structures can be leveraged by modern gradient-based optimization tools, but are less interpretable and unintuitive to tune. In this paper, we present an approach to equivalently express rule hierar- chies as differentiable reward structures amenable to modern gradient-based optimizers, thereby, achieving the best of both worlds. We achieve this by formulating rank-preserving reward functions that are monotonic in the rank of the trajectories induced by the rule hierarchy; i.e., higher ranked trajectories receive higher reward. Equipped with a rule hierarchy and its corresponding rank-preserving reward function, we develop a two-stage planner that can efficiently resolve conflicting planning requirements. We demonstrate that our approach can generate motion plans in ∼7-10 Hz for various challenging road navigation and intersection negotiation scenarios.
</p>
<hr> 

[pdf](https://arxiv.org/pdf/2212.03323.pdf). 