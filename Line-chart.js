var speedCanvas = document.getElementById("speedChart");



var Sick = {
    label: "Количество заболевши на данный момент",
    data: [7497, 8672, 10131, 11917, 13584, 15770, 18328],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
};

var Deaths = {
    label: "Умерло на данный момент",
    data: [58, 63, 76, 94, 106, 130, 148],
    lineTension: 0,
    fill: false,
    borderColor: 'blue'
};

var Data = {
    labels: ["07.04.2020", "08.04.2020", "09.04.2020", "10.04.2020", "11.04.2020", "12.04.2020", "13.04.2020"],
    datasets: [Sick, Deaths]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: Data,
    options: chartOptions
});
