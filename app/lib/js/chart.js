import Highcharts from 'highcharts/highstock';
import $ from 'jquery';
import moment from 'moment';

import stocks from './fixtures/stocks.json';

$.getJSON(`http://${process.env.HOST}:${process.env.PORT}/api/values`, function(
    data
) {
    const series = data.reduce(
        (acc, datum) => {
            acc.value.push([+moment(datum.created_at), datum.value]);

            acc.deposit.push([+moment(datum.created_at), datum.deposit_total]);

            return acc;
        },
        {
            value: [],
            deposit: [],
        }
    );

    // Create the chart
    var chart = Highcharts.stockChart('chart', {
        chart: {
            height: 400,
        },

        title: {
            text: 'Highstock Responsive Chart',
        },

        subtitle: {
            text: 'Click small/large buttons or change window size to test responsiveness',
        },

        rangeSelector: {
            selected: 1,
        },

        series: [
            {
                name: 'Value',
                data: series.value,
                type: 'area',
                threshold: null,
                color: '#366F91',
                fillOpacity: 0.75,
            },
            {
                name: 'Deposits',
                data: series.deposit,
                type: 'area',
                threshold: null,
                color: '#ffffff',
                fillOpacity: 0.75,
            },
        ],

        tooltip: {
            shared: true,
            formatter: function() {
                console.log(this);

                let percentage = this.points[0].y / this.points[1].y - 1;
                let percentage_label = '';

                if (percentage >= 1) {
                    percentage_label = 'Gain';
                    percentage = percentage - 1;
                } else {
                    percentage_label = 'Loss';
                    percentage = 1 - percentage;
                }

                return `
                    <strong>${moment(this.x).format('MMM Do YY')}</strong>
                    <br/>
                    <span>${this.points[0].series.name}: </span> <strong>${formats.dollar(this.points[0].y)}</strong>
                    <br/>
                    <span>${this.points[1].series.name}: </span> <strong>${formats(this.points[1].y)}</strong>
                    <br/>
                    <span>${percentage_label} (%): </span> <strong>${formats(percentage)} %</strong>

                `;
            },
        },

        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        chart: {
                            height: 300,
                        },
                        subtitle: {
                            text: null,
                        },
                        navigator: {
                            enabled: false,
                        },
                    },
                },
            ],
        },
    });

    $('#small').click(function() {
        chart.setSize(400);
    });

    $('#large').click(function() {
        chart.setSize(800);
    });

    $('#auto').click(function() {
        chart.setSize(null);
    });
});
