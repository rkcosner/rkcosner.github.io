---
layout: archive
title:  "Three Body Problem by Cixin Liu"
date:   2020-12-20 4:35:00 -0800
categories: Sundry
tags : [Sundry, Books]
---

This book was recommended to me and it is one of my new favorites. Firstly, it is Chinese science fiction and reading things written from the perspective of a different culture is always interesting and provides great insight. In particular this book is set during and following the Cultural Revolution in China and reading about that from the Chinese academic perspective provided a very different perspective from the traditional American one. In addition to the interesting perspective, engaging prose, and thrilling story, the science of this book seem almost designed for me.

Before I continue, I want to give a ***spoiler alert***. I wont spoil too much, but if you're interested in reading the book, it might be best to do that first. 

The story revolves around a group of physicists who are interested in the ["three body"](https://en.wikipedia.org/wiki/Three-body_problem) which is a chaotic nonlinear system. Because of that, it almost felt like my version of Jurassic Park. I was thrilled to see nonlinear dynamics come up as the central topic for a science fiction novel. 

## The Three Body Problem 
Briefly, the three body problem is
> **The Three Body Problem**: Consider a system of three equal point masses under mutual gravitational attraction. Given an initial condition can we find a closed-form solution to the associated odinary differential equation. 

We consider a system of three point masses of mass $$m$$ under standard Newtonian universal gravitation: 
<center>
$$F_{(1,2)} = \frac{G m^2}{||\mathbf{x}_1 - \mathbf{x}_2||^2_2}$$
</center>
where $$\mathbf{x}_i$$ represents the position of mass $$i$$. From here we can generate the Lagrangian: 
<center>
$$L = \underbrace{\frac{1}{2}\sum_i^3 ||\dot{\mathbf{x}}||_2^2}_{\textrm{Kinetic Energy}}  -  \underbrace{ \sum_{i\neq j} \frac{Gm^2}{||\mathbf{x}_i - \mathbf{x}_j||_2}}_{\textrm{Gravitational Potential}}$$
</center>
Using the Lagrangian we can generate an ordinary differential equation that describes the motion of the system. I calculated it using Matlab to evaluate the Lagrangian's derivatives: $$\frac{\partial L}{\partial \mathbf{x}} + \frac{d }{dt} \frac{\partial L}{\partial \dot{\mathbf{x}}} = 0 $$. This results in a system that can be described as: 
<center>
$$
\begin{bmatrix}
\mathbf{x} \\ \dot{\mathbf{x}}
\end{bmatrix} = f(\mathbf{x}, \dot{\mathbf{x}})
$$
</center>

Given an initial condition ($$\mathbf{x}_0$$) for the system we can solve it using numerical methods. Resulting in beautifully chaotic solutions like the one in the video below. (*note that this is not displayed with a constant time rate. The time fluctuates to ease numerical computation.) 
<iframe src="https://player.vimeo.com/video/495110620" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## My Issues with the Representation of Chaotic Systems in Three Body Problem
Firstly, I should say that I really really enjoyed the book and by writing this, I don't mean to imply that the book is poorly written, rather the book was so good that it made me want to engage further. 

A minor issue that I take with how the book is presented is that the book perhaps should have placed more focus on mathematics as "pure research". It focuses very heavily on physicists which is fine, but in the fields of academia experts on nonlinear systems like the Three Body Problem are not necessarily phycists, but are more likely to by Dynamicists like Hassan Khalil of Michigan State or Oliver O'Rielly of UC Berkeley or even my advisor Aaron Ames of Caltech. I understand that the general reader-base is more familiar with the field of Physics and Nonlinear Dynamics might not mean anything to them, but it'd be really cool to see my field represented.

My main issue with the book is that the book hinges around the fact that no one has been able to solve the Three Body Problem (no closed form solution has been found). However, a closed form solution would actually be unnecessary and useless! 

It would be unnecessary because the numerical methods for approximating the evolution of the system are highly accurate (and I believe can also be made arbitrarily accurate). In particular, they are highly accurate near the initial time, so the motion of the bodies can be predicted for at least some amount of time. With the appropriate application of a numerical method, approximate solutions can be found with high confidence. Thus, there is no actual need for a closed form solution. Much of nonlinear dynamics works with systems that lack closed form solutions and we instead use numerical methods to approximate solutions. 

A closed form solution would not necessarily be useful because the system is chaotic! Loosely defined a chaotic system is one whose apparent randomness is actually governed by deterministic equations that are highly sensitive to initial conditions. 

> **Chaotic system**: A system whose apparent randomness is actually governed by deterministic equations that are highly sensitive to initial conditions. 

Thus, even if a closed form solution were found for the Three Body Problem it would be useless without a way of exactly measuring the initial conditions of the bodies in motion. Without ***exact*** initial conditions, the chaotic nature of the system would cause any modeled solution to diverge from the true solution. In the context of the book, this would require the residents of Trisolaris to *exactly* measure the mass, position, and velocity of the suns. In addition, the simple model outlined above would be insufficient. An highly accurate model would need to be developed as any deviation of the model from the true system could also cause chaotic behavior. 

For those reasons, the book should not have focused on ***solving*** the Three Body Problem, but instead should have focused on the problem of exactly modeling the system and simultaneously measuring the initial conditions of the system. 

## Overall Review
I really enjoyed this book eventhough I disagreed with its science at points. I would highly recommend anyone who likes a good scifi book and especially to my fellow Dynamicists and Controls Engineers. It truly felt like our Jurassic Park! I was thrilled to see my science make its way into popular culture. And it's even going to be made into a Netflix show! 