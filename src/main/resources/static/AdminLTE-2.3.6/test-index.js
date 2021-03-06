$(function() {

	$.ajax({
		type : "GET",
		url : "/browser/widget",
		success : function(data) {
			pieChart(data)
		}
	});

});
function pieChart(data) {
	// -------------
	// - PIE CHART -
	// -------------
	var PieData = data;
	var pieOptions = {
		// Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,
		// String - The colour of each segment stroke
		segmentStrokeColor : "#fff",
		// Number - The width of each segment stroke
		segmentStrokeWidth : 1,
		// Number - The percentage of the chart that we cut out of the middle
		percentageInnerCutout : 50, // This is 0 for Pie charts
		// Number - Amount of animation steps
		animationSteps : 100,
		// String - Animation easing effect
		animationEasing : "easeOutBounce",
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,
		// Boolean - whether to make the chart responsive to window resizing
		responsive : true,
		// Boolean - whether to maintain the starting aspect ratio or not when
		// responsive, if set to false, will take up entire container
		maintainAspectRatio : false,
		// String - A legend template
		legendTemplate : "<div class=\"col-md-4\"><ul class=\"chart-legend clearfix <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><i class=\"fa fa-circle-o\" style=\"color:<%=segments[i].fillColor%>\"></i><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
		// String - A tooltip template
		tooltipTemplate : "<%=value %> <%=label%> engine"
	};
	// Get context with jQuery - using jQuery's .get() method.
	var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
	var pieChart = new Chart(pieChartCanvas);
	// Create pie or douhnut chart
	// You can switch between pie and douhnut using the method below.
	var pie = pieChart.Pie(PieData, pieOptions);
	$("#pieChart").parent().parent().parent().children()[1].remove();
	$("#pieChart").parent().parent().parent().append(pie.generateLegend());
	// -----------------
	// - END PIE CHART -
	// -----------------
}