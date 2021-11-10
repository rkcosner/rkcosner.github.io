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
My research focuses on Controls, Robotics, and Safety. 

Checkout these blog posts for brief and high-level introductions on some of these topics:
  * [Control and Dynamical Systems](/blogs/Control-and-Dynamical-Systems)


{% for tag in site.tags %}
{% if ({tag[0]} == "Publications") or ({tag[0]} == "Projects") %}
<h2>{{tag[0]}}</h2>
<ul>
{% for post in tag[1] %}
<li>
<h3><a href="{{ post.url }}">{{ post.title }}</a> </h3>
{{post.excerpt}}</li>

{% endfor %}
</ul>
{% endif %}
{% endfor %}