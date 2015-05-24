google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAnnotations);
function drawAnnotations() {
    
    var data = google.visualization.arrayToDataTable([
	['Seconds', 'Google API', 'YQL', 'Server', { role: 'annotation' }, 'Ruter API', { role: 'annotation' } ],
	['Google API', 173, 0, 0, '', 0, ''],
	['YQL', 0, 1370, 0, '', 0, ''],
	['Server & Ruter API', 0, 0, 254, 'Server', 849, 'Ruter API']
    ]);
    /*
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1, 2, 3, 4,
      { calc: "stringify",
      sourceColumn: 4,
      type: "string",
      role: "annotation",
      }/*,
      { calc: "stringify",
      sourceColumn: 2,
      type: "string",
      role: "annotation"
      },
      { calc: "stringify",
      sourceColumn: 3,
      type: "string",
      role: "annotation"
      },
      { calc: "stringify",
      sourceColumn: 4,
      type: "string",
      role: "annotation"
      },
      ]);
    */
    var options = {
	width: 600,
	height: 400,
	legend: { position: 'top', maxLines: 3 },
	bar: { groupWidth: '75%' },
	isStacked: true,
	vAxis: {
	    title: 'Milliseconds'
	}
    };
    var chart_div = document.getElementById('chart_div');
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

    google.visualization.events.addListener(chart, 'ready', function () {
	chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
	console.log(chart_div.innerHTML);
    });
    chart.draw(data, options);
}
