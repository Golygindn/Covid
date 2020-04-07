var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['01.04.2020', '02.04.2020', '03.04.2020', '04.04.2020', '05.04.2020', '06.04.2020', '07.04.2020'],
        datasets: [{
            label: 'Заражённых в России',
            /*backgroundColor: 'rgb(255, 99, 132)',*/
            borderColor: 'rgb(255,64,84)',
            data: [2563, 3548, 3834, 4355, 5389, 6343, 7497]
        }]
    },

    // Configuration options go here
    options: {}
});
