---
title:  "Research"
layout: archive
permalink: /research/
author_profile: true
comments: true
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
---


At a high-level my research focuses on controls and machine learning for real-world robot safety. 

For an in-depth understanding of my research, check out my thesis: [***Dynamic Safety Under Uncertainty: A Control Barrier Function Approach***](https://thesis.library.caltech.edu/17351/) or the recording of my  thesis defense presentation:
<iframe width="560" height="315" src="https://www.youtube.com/embed/R_DD2IeDO9I?si=tZni-zilEXYuDICE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<hr>

Here is a list of selected works. Please see my [google scholar page](https://scholar.google.com/citations?user=9XSMo-AAAAAJ&hl=en) for the most up-to-date list of publications. 

{% for tag in site.tags %}
{% if ({tag[0]} == "Publications") or ({tag[0]} == "Projects") %}
<h2>{{tag[0]}}</h2>
<ul>
{% for post in tag[1] %}
<li><a href="{{ post.url }}">{{ post.title }}</a> — {{post.excerpt}}</li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

<hr>
