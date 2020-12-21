---
title:  "Blogs"
layout: archive
permalink: /blogs/
author_profile: true
comments: true
---

{% for tag in site.tags %}
{% if {tag[0]} == "Blog" %}
<ul>
{% for post in tag[1] %}
<li>
<h2><a href="{{ post.url }}">{{ post.title }}</a> </h2>
{{post.excerpt}}</li>

{% endfor %}
</ul>
{% endif %}
{% endfor %}
