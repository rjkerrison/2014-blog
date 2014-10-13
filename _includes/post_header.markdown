<div class="row">
	<div>
	![{{ page.title }}]({{ site.url }}{{ page.wideimg }}.jpg)
	</div>
</div>
<div class="row">
	<h1 class="col-md-8 col-sm-12" >{{ page.title }}</h1>
	<div class="col-md-4 col-sm-12">
	<span class="glyphicon glyphicon-calendar"></span>
		{% assign d = page.date | date: "%-d"  %}
		{% case d %}
			{% when '1' or '21' or '31' %}{{ d }}st
			{% when '2' or '22' %}{{ d }}nd
			{% when '3' or '23' %}{{ d }}rd
			{% else %}{{ d }}th
		{% endcase %}
		{{ page.date | date: "%B" }}
		{{ page.date | date: "%Y" }}
	</div>
</div>
<div class="btn-group">
		{% for tag in page.tags %}
			<a class="btn btn-primary" href="{{ site.url }}/tags/{{ tag }}"
				title="View posts tagged with &quot;{{ tag }}&quot;">
				{{ tag }}
			</a>
		{% endfor %}
	</div>
<ul class="pager row">
	<div class="col-md-4 col-sm-12 col-md-push-4">
		<span class="glyphicon glyphicon-calendar"></span>
		{% assign d = page.date | date: "%-d"  %}
		{% case d %}
			{% when '1' or '21' or '31' %}{{ d }}st
			{% when '2' or '22' %}{{ d }}nd
			{% when '3' or '23' %}{{ d }}rd
			{% else %}{{ d }}th
		{% endcase %}
		{{ page.date | date: "%B" }}
		{{ page.date | date: "%Y" }}
	</div>
	<li class="previous col-md-4 col-md-pull-4 col-sm-6">
	<a href="{{page.previous.url}}" title="Previous Post: {{page.previous.title}}">
	<span class="glyphicon glyphicon-chevron-left"></span>
	Something Old
	</a>
	</li>
	<li class="next col-md-4 col-sm-6">
	<a href="{{page.next.url}}" title="Next Post: {{page.next.title}}">
	<span class="glyphicon glyphicon-chevron-right"></span>
	Something New
	</a>
	</li>
</ul>
