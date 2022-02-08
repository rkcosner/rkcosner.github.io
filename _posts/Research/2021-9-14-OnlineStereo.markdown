---
layout: archive
title:  "ICRA 2022: Self-Supervised Online Learning for Safety-Critical Control using Stereo Vision"
date:   2021-9-14 4:35:00 -0800
categories: Research
tags: [Publications]
---


[**Ryan K. Cosner**](http://www.rkcosner.com/)<sup>&#42;</sup>, [**Ivan D. Jimenez-Rodriguez**](https://ivandariojr.io/)<sup>&#42;</sup>, [**Tamas G. Molner**](https://www.its.caltech.edu/~tmolnar/), **Wyatt Ubellacker**, [**Yisong Yu**](http://www.yisongyue.com/), [**Aaron D. Ames**](http://ames.caltech.edu/), [**Katherine L. Bouman**](http://users.cms.caltech.edu/~klbouman/)
<!-- {: .text-center} -->

California Institute of Technology
{: .text-center}



<!-- <center>
<img src="/assets/images/coding_meme.png" alt="applications" style="width:300px;"/>
</center> -->

![image](/assets/images/fig2_method.png)

<hr>
## Abstract
With the increasing prevalence of complex vision sensing methods for use in obstacle identification and state estimation, characterizing environment-dependent measurement errors has become a difficult and essential part of modern robotics.
This paper presents a self-supervised learning approach to safety-critical control.  In particular, the uncertainty associated with stereo vision is estimated, and adapted online to new visual environments, wherein this estimate is leveraged in a safety-critical controller in a robust fashion. 
To this end, we propose an algorithm that exploits the structure of stereo-vision to learn an uncertainty estimate without the need for ground-truth data. We then robustify existing Control Barrier Function-based controllers to provide safety in the presence of this uncertainty estimate. We demonstrate the efficacy of our method on a quadrupedal robot in a variety of environments. When not using our method safety is violated. With offline training alone we observe the robot is safe, but overly-conservative. With our online method the quadruped remains safe and conservatism is reduced. 

**paper** [**[pdf]**](/assets/files/2021_TripleCamera.pdf) **code** [**[github]**](https://github.com/rkcosner/selfsupervised_safetycritical.git)

<hr>


<iframe src="https://player.vimeo.com/video/605281037?h=28fb476545" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

<hr>

## Citation 

Ryan K. Cosner<sup>&#42;</sup>, Ivan D Rodriguez-Jimenez<sup>&#42;</sup>, Tamas G. Molnar, Wyatt Ubellacker, Yisong Yue, Aaron D. Ames, Katherine L. Bouman. "Self-Superversized Online Learning for Safety-Critical Control using Stereo-Vision." *International Conference on Robotics and Automation, 2022*. 
