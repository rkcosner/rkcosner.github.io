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


My research focuses on controls and machine learning for real-world robot safety. 

See below for a list of my publications and checkout my [Research Library](/library/research-library) for some of the my favorite papers written by others that have inspired my work.


{% for tag in site.tags %}
{% if ({tag[0]} == "Publications") or ({tag[0]} == "Projects") %}
<h2>{{tag[0]}}</h2>
<ul>
{% for post in tag[1] %}
<li>
<a href="{{ post.url }}" style="color:light_blue" ><font size=3>{{ post.title }}</font></a> 
<font size=3>{{post.excerpt}}</font></li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

<hr>
<hr>

<!-- Look [here](/blogs/Thesis) for an ever-evolving outline of my thesis direction.  -->

<!-- Checkout these blog posts for brief and high-level introductions on some of these topics:
  * [Control and Dynamical Systems](/blogs/Control-and-Dynamical-Systems)
  * More coming soon!

 -->
