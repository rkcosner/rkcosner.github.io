<!-- ---
layout: archive
title:  "Thesis Outline"
date:   2020-12-20 4:35:00 -0800
categories: Blogs
tags : [Blog]
--- -->

This page outlines my motivation and current and future work for my thesis. In general I work on the problem of robot safety in the real world. 

<center>
<img src="/assets/images/coding_meme.png" alt="applications" style="width:300px;"/>
</center>





## Motivation 
Robotics and its related fields have made significant strides forward in the recent decades. Notably, 
* SLAM (Simultaneous Localization And Mapping)
* MPC (Model Predictive Control)
* Deep Learning for Instance Segmentation 

<iframe width="560" height="315" src="https://www.youtube.com/embed/EezdinoG4mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Atlas doing parkour 


<iframe width="560" height="315" src="https://www.youtube.com/embed/3HVJotA-w4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Cassie Autonomously Navigating Around Michigan. 

In this [work](https://arxiv.org/pdf/2108.06699.pdf) the used a CLF as a metric in an RRT* planner. They then used the CLF as a low-level *reactive* controller. The obstacle avoidance is done using the RRT* planner and cannot handle moving environments. The vision system used mobileNet and created a multi-layered map for navigation. They said in future work they would like to incorporate CBFs and non-static environments. They modeled Cassie as a two dimensional single integrator with a single integrator heading angle. A related [work](https://arxiv.org/pdf/2105.01204.pdf) used CBFs and a time-based variant of RRT* (TB-RRT*) to consider non-static environments, although it's unclear how significant the impact of the CBF was. It seems possible that the planner was all that was needed to avoid the obstacles. The probabilistic nature of their guarantees also seems odd and needs further investigation. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/3HVJotA-w4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Scaramuzza's Event-Based Cameras

This [work] (https://www.science.org/doi/pdf/10.1126/scirobotics.aaz9712) explores avoiding a dynamic obstacle using a quadrotor. The purpose of this work seems to have been to highlight the value of event cameras which can react to stimuli faster than regular cameras (microseconds versus 10 ms). However, a little thought experiment, a dodgeball thrown at 20 m/s (approx 50 mph) across a 10 m court would give a player at least 0.5 seconds to react, but humans have a reaction time of about 0.2 seconds (see the ruler drop test), so fast cameras actually seem like they would be ok as long as the hole control loop is running at rates of ~ 10 Hz. It seems like the event cameras might not actually have been necessary. "State-of-the-art consumer drones are not currently capable of reliably detecting and avoiding moving obstacles. For example, the Skydio drone, as of today one of the most advanced autonomous drones on the market, is not capable of dealing wiht moving obstacles. (*If you throw a ball at it, it's almost certainly not going to get out of the way,* said Adam Bry, CEO of Skydio" )


<iframe width="560" height="315" src="https://www.youtube.com/embed/yEtH23rKY8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nvidia Autonomous Vehicle Lab


## Current State of the Art


## My Current Work 


## Future Directions 




## Guiding Reflection Questions
How do I want to change the world? 
>I want to enable real-world deployment of safe robots. 

What is the main problem that I would like to solve? 
>Robots have limited applications because in order to be safe, they either have to be too weak to do anything or cordoned off from the rest of society because they're strong and might hurt someone.

Who do I want to use my work?  
>I want my work to be something that roboticists can easily apply to improve the safety of their systems. I want it to be something that they can stack on to their own work to enable their robots to move from the lab to the real-world. And from isolated settings to human-robot-interactive ones. 
  
What problem am I solving? 
>How to take safe actions in an uncertain world. 

Do we need new methods or do we just need to stack the cards right? 
>I think that we need new methods. I say this because the engineering companies with huge teams working to deploy existing methods (such as the autonomous vehicle, drone, or healthcare robotics industries) still haven't gotten this right. I don't think that it's a question of resources being applied to string the right methods together in the perfect fashion. I think that we need to fundamentally rethink what we mean by safety and how we go about achieving it. 

What am I solving? A theoretical, engineering, or integration problem? 
>I want to focus on solving theoretical and engineering problems. Integration problems make for nice demos, but in general do little to really push the field forward. 


---
---
---
---
# Discussion with Yisong 
Much of this structure was largely inspired by discussions with Prof. Yisong Yue on the future of artificial intelligence and autonomy. 

My work thrusts rotate between 3 different domains: 
* Application
  * What are new capabilities we can strive for? 
  * What are our main obstacles in achieving them? 
* System 
  * How do we think about system design at a holistic level? 
  * What system level changes can be made to drastically simplify tasks? 
* Method
  * What is a key innovation that can unlock many applications? 


### The Role of Machine Learning
Learning can help with 
* Optimization 
  * Planning
  * Policy Design 
  * System Design 
* Modeling 
  * (partial) Dynamics
  * Rewards
* System Integration 
  * Abstractions that connect autonomy layers (CLIP from OpenAI, NN-based video codecs)

Learning can help with game-theoretic applications because the optimization in that context can be difficult. 


### Contributions 
Ways of framing a high-level contribution: 
* Demo-centric: does it even work at all? 
* Engineering-centric: can we build it efficiently? 
* Theory-centric: why does it work? 

### Levels 
Various types of insights: 
* Top-level: 
  * solve some big problem 
* Mid-level: 
  * new methods that help solve some big problem and don't just incrementally improve on an existing low-level method
* Low-level: 
  * improve some method by X% 

Advice from Yisong: 
* Don't commit to a single path
* Be willing to change the game
* be willing to learn about other topics


