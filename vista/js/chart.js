
$(document).ready(function() {
    var data = [
        { name: 'Jill', y: 20 },
        {name: 'Eve', y: 10},
        {name: 'Adam', y: 5 },
     
    ];
       var data1 = [
        { name: 'Jill', y: 60 },
        {name: 'Eve', y: 15},
        {name: 'Adam', y: 25 },
     
    ];

       var data2 = [
        { name: 'limpiar', y: 60 },
        {name: 'lavar carros', y: 15},
        {name: 'limpiar ventanas', y: 25 },
     
    ];
    draw_chart('chart-container', data);
  draw_chart('chart-container1', data1);
  draw_chart('chart-container2', data2);
    debugger
});

function draw_chart(selector, data) {
    Highcharts.chart(selector, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'tareas'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data
        }]
    });
}
