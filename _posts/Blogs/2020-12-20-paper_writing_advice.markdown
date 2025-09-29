---
layout: archive
title:  "Advice for Writing Academic Papers"
date:   2020-12-20 4:35:00 -0800
categories: Blogs
tags : [Blog]
---

*date: September 25, 2025*

While academic writing need not be formulaic, I have found over the course of my time in academia that papers (especially conference submissions) tend to follow a very similar format. I wanted to write this guide to delineate that formatting in order to help younger students who might be staring at a daunting blank page as I did many times early in my academic career. Hopefully this will help provide structure and kick start your technical writing! 

It's important to note that academic fields vary wildly in their standards and expectations, so I should be clear that this advice is most applicable for researchers in fields similar to control theory, robotics, and machine learning. 

***I'm still working on this post, but I thought that some folks might still find it useful even before it's finished. Apologies for any errors or typos!***

# General Paper Formatting

In general papers tend to follow similar formats in their sections: 
- Section 0: *Abstract*
  - The abstract provides a high-level overview and should be a stand-alone piece of writing. The abstract often serves as the advertisement for your paper and should therefore be entirely self-contained. If a reader were to only read your abstract, they should be able to answer the questions of "what did you do and why did you do it?" 
- Section 1: *Introduction* 
  - The introduction provides a brief review of the relavent literature for the reader. It should expand on the abstract and provide a more indepth motivation while illustrating the gap in the literature that the work is trying to fill. 
  - The introduction generally ends with a *Contribution Paragraph* that explicitly enumerates the novel contributions of the manuscript. 
- Section 2: *Background* or *Related Work*
  - In math-heavy work, the *Background* section generally provides the necessary mathematical tools that the paper builds on and employs. These are generally not new ideas, but rather existing structures / definitions / theorems that this work will employ. The background section can provide a useful tutorial or point to important references for people who are new to the field whereas it can often be skipped by subject matter experts. 
  - In algorithm or application-heavy research, it is common to include a "related works" subsection in the background or introduction that provides more in-depth discussion on work that is very related. The methods introduced here are often the ones that will be directly compared against in the results section 
- Section 3: *Methods*
  - This section is where the novel contributions of the paper go. 
- Section 4: *Results*
  - This section describes the experiments that demonstrate the utility of the novel method. 
- Section 5: *Limitations + Conclusion*
  - This section discusses the realistic limitations of the method and points to potentially areas of future work. This can be incredibly useful for other researchers looking to implement or build on your work. 


# More In-Depth Info

## Figure Making
In general, I highly recommend that figures be vector graphics (.svg or .pdf format) whenever possible. These figures will remain lossless, editable, and allow infinite zoom. Alternatively, pixelized image formats like .png or .jpg cause data loss and have limited zoom capabilities. 

For editing vector graphics I recommend the open source package [Inkscape](https://inkscape.org/) and the [TexText](https://textext.github.io/textext/) extension for Inkscape that will allow you to import math text as vector graphics. 

## Section 0: the Abstract

<details>
  <summary>The abstract generally consists of the following components in this order: <b>(click to expand)</b></summary>
  <p></p>
    <ol>
      <li>Motivation (one sentence)</li>
      <li>Problem Statement (one sentence)</li>
      <li>Solution Method (two or three sentences)</li>
      <li>Motivation (key takeaways / utility) (one or two sentences)</li>
      <li>Demonstrations or Utility (one sentence)</li>
    </ol>
</details>

## Section 1: Introduction 

The introduction often has a "hero figure" which is figure number 1 and often 
- Two column format: in the top right of the second column next to the abstract or across the whole page above the abstract if you have a really cool visual to convey the work 
- One column format: generally all the way across the first page below the title and abstract or on the second page at the very top. 