$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie',
            width: 400,
            height: 300
        },
        plotOptions: {
            pie: {
                size: 300,
                dataLabels: {
                    style: {
                        color: '#999',
                        textShadow: '0px 0px 5px #EEE'
                    },
                    overflow: 'pushIn'
                }
            },
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y}'
                }
            }
        },

        series: [{
            data: [
                ['Firefox',   44.2],
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Other',    5.4]
            ]
        }]
    });
});