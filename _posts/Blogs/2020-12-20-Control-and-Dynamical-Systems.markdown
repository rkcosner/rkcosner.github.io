---
layout: archive
title:  "Control and Dynamical Systems"
date:   2020-12-20 4:35:00 -0800
categories: Blogs
tags : [Blog]
---
This post is intended to provide a gentle introduction to my research field for interested folks regardless of their background. I opted for general understanding over technical detail. 

> **Dynamical Systems Theory**: The study of how things change over time.
> **Control Theory**: The study of how inputs affect outputs.

My research focuses mainly on the two very interrelated topics of **Control and Dynamical Systems**. Together they can provide us with a way of understanding and manipulating the world around us. Despite being rather technical, both fields have very intuitive underpinnings. Once you have an understanding of the fields, you'll find that real-world examples of each of them are endless.

<center>
<img src="/assets/images/blog_controls/applications_of_controls.jpg" alt="applications" style="width:500px;"/>
<hr>
</center>


# Dynamical Systems
Generally, we call something "dynamic" if it changes with time. For example, a dynamic workplace might be a place where the employees' roles change day-by-day. Similarly, a dynamical system describes how things change over time. 

For motivation, lets consider the motion of a falling ball in a a vacuum. In this case, the ball falls with an acceleration of $$g = 9.81 \frac{m}{sec}$$. Let's denote the position of the ball as $$q$$, so its velocity is $$\dot{q}$$ and its acceleration is $$\ddot{q} = - g$$. Using the language of dynamical systems, we can rewrite this as a linear system of equations: 
<center>
$$
\begin{bmatrix}
\dot{q} \\
\ddot{q}
\end{bmatrix}
= \begin{bmatrix}
  0 & 1 \\ 0 & 0 
\end{bmatrix}
\underbrace{
\begin{bmatrix}
  q \\ \dot{q}
\end{bmatrix}}
_{x} + 
\begin{bmatrix}
  0 \\ -g
\end{bmatrix}
$$

</center>
Notationally, $$x$$ is used to denote the **state**.

> ***State***: Information which completely describes the system and encapsulates the effect of its history on its future.

As in the introductory physics problem, if the ball is in the air and we know its current position and velocity then we can figure out where it is going to land, so we say that the state of the system is its current position and velocity. 

As with the ball, a dynamical system is simply a way of writing this change over time.

> ***Dynamical System***: A means of describing how one state develops into another state over the course of time. ([wolfram](https://mathworld.wolfram.com/DynamicalSystem.html))

We can generalize and divide dynamical dynamical systems into two distinct categories of discrete and continuous systems: 
<center>
  $$\begin{align}
    \underbrace{x[k+1] = f(x[k])}_{\textrm{discrete}},  \quad & \quad \underbrace{\dot{x} = f(x)}_{\textrm{continuous}}
    \end{align}$$
</center>
where $$f$$ is some function describing the relationship between the current state and how it is changing. The continuous dynamical system is also often called an *ordinary differential equation* which is a widely studied topic in mathematics.

Some examples of discrete dynamical systems include: 
  * **Discrete Dynamical Systems**
    * Population Growth
      * $$p[k]$$ is the number of people in the $$k^{th}$$ generation
      * $$a$$ is the average number of babies per person per generation
      * Formula: $$p[k+1] =ap[k]$$
    * Disease Spread
      * $$p[k]$$ is the total number of infected people on the $$k^{th}$$ day
      * $$b$$ is the number of new infections per person per day
      * Formula: $$p[k+1] = b x[k] + p[k]$$
  * **Continuous Dynamical Systems**
    * Falling Ball
      * $$q$$ is the position of the ball
      * $$g$$ is the acceleration due to gravity
      * Formula: $$\ddot{q} = -g$$
    * Room Temperature
      * $$T$$ is the average temperature of the room
      * $$T_\textrm{out}$$ is the temperature outside
      * $$f$$ is a function relating the inside and outside temperatures to how the inside temperature is changing
      * Formula: $$\dot{T} = f(T, T_\textrm{out}) $$

If an **intial condition** is given for a dynamical system, it is often possible to find a solution. A solution to a dynamical system is some function $$x(t)$$ that relates time and state. 
> ***Initial Condition***: the state of a dynamical system at some initial time $$t_0$$

Returning to the fulling ball example, given the equation $$\ddot{q} = -g$$, we can determine how much fast***er*** the ball is moving after some amount of time, but we can't determine exactly how fast it is moving or where it is. For that we need an initial condition. Given an initial condition, finding the exact position and velocity of the ball can be done using the standard introductory physics formulas: 
<center>
$$\begin{align}
  x(t) & = x(t_0) + v_0(t-t_0) - \frac{1}{2} g (t- t_0)^2\\
  v(t) & = v_0 - g(t - t_0)
\end{align}$$
</center>

In summary, states describe a system and its history, a dynamical system is an equation which relates the current state to how it is changing, and the initial condition is the state at some known time $$t_0$$. Dynamical systems can be used to describe a wide range phenomenon from dynamic motion to population growth and if an initial condition is known solutions can be found which relate time and state.
<hr>
# Control 
Control extends the idea of dynamical systems by allowing us to apply an input to the system. This can be written mathematically by adding some input $$u$$ which we can choose later: 
<center>
  $$\begin{align}
    \underbrace{x[k+1] = f(x[k], u[k])} _{\textrm{discrete}},  \quad & \quad \underbrace{\dot{x} = f(x, u)}_{\textrm{continuous}}
    \end{align}$$
</center>
In terms of some of the examples mentioned above, these inputs can be things like: 
  * Disease Spread: human behavior (like wearing masks)
  * Falling Ball: external forces (like your arm throwing it)
  * Heating a Room: the building's heater

> ***Input***: An externally controlled value which can be altered to affect the behavior of the system

Control engineers are particularly concerned with how intelligent use of inputs can be used to force a system to have a desired behavior. Often this desired behavior is described via a particular state that we wish the system to have. For example, we might have a desired temperature $$T_\textrm{desired}$$ that we wish our room to have. We must then intelligently choose inputs so that our room temperature changes to $$T_\textrm{desired}$$ and then stays there. States that have the "staying put" property are called equilibrium points: 

> ***Equlibrium Points***: A state $$x_{eq}$$ is an equilibrium point if $$f(x_{eq}) = 0$$.

States that have both the "stay put" and the "move to" properties are called stable equlibrium points.

> ***Stability***: An equilibrium point $$x_{eq}$$ is stable if, for all initial conditions, $$x(t_0)$$, the trajectory $$x(t)$$ (or $$x[k]$$) approaches an $$x_{eq}$$ as $$t$$ (or $$k$$) increase.

Consider the common Control example of a segway. Naturally the segway wants to fall over. Control engineers are concerned with finding the input torques to apply to the wheels which will ensure that the segway stays upright. 

Let's assume that we can model the segway dynamics using some function $$f$$ such that the dynamical system can be written as: 
<center>
$$\dot{x} = f(x) + u $$
</center>
In this case, the Control engineer can use a technique called feedback linearization by choosing $$u=-f(x) - K(x - x_{eq})$$[^1] so that the equation becomes: 
<center>
$$\begin{align}
  \dot{x} & = f(x) - f(x) - K(x - x_{eq})\\
  & = - K(x - x_{eq})
\end{align}$$
</center>
The solution, $$x(t)$$, to this dynamical system is $$x(t) = (x(t_0) - x_{eq})e^{-K(t-t_0)} + x_{eq}$$. If we choose $$K>0$$, then as $$t$$ increases the exponential tends towards 0 and so $$x(t)$$ approaches our desired point: $$x_{eq}$$.

Thus we can set the desired state of our segway to be $$x_{eq}$$ and guide it there using our controller. The input becomes a way of interacting with the dynamics of the system and forcing it to behave differently than it naturally would. In this case, the segway naturally wants to fall over, but we can use control inputs to cancel gravity and make it stand upright.

In summary, Control theory is an extension of the study of dynamical systems that adds an input, $$u$$, to the system. Control theorists and engineers are concerned with determining how that input affects the states and often are focused on driving the system to particular equilibrium points and ensuring stability. 

[^1]: For practical use, I would not recommend this controller due to difficulties in exactly modeling $$f$$. It is just a very illustrative example.
