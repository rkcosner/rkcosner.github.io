---
title:  "Misc."
layout: archive
permalink: /Misc./
author_profile: true
comments: true
---


Outside of my work I enjoy reading, playing trombone and guitar, and racing triathlons. Here is a collection of things that I've enjoyed. 


{% for tag in site.tags %}
{% if ({tag[0]} == "Triathlon and Other Outdoor Adventures") %}
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

{% for tag in site.tags %}
{% if ({tag[0]} == "Music") %}
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


<!-- {% for tag in site.tags %}
{% if ({tag[0]} == "Books") %}
<h2>{{tag[0]}}</h2>
<ul>
{% for post in tag[1] %}
<li>
<h3><a href="{{ post.url }}">{{ post.title }}</a> </h3>
{{post.excerpt}}</li>

{% endfor %}
</ul>
{% endif %}
{% endfor %} -->


<!-- {% for tag in site.tags %}
{% if ({tag[0]} == "Other") %}
<h2>{{tag[0]}}</h2>
<ul>
{% for post in tag[1] %}
<li>
<h3><a href="{{ post.url }}">{{ post.title }}</a> </h3>
{{post.excerpt}}</li>

{% endfor %}
</ul>
{% endif %}
{% endfor %} -->