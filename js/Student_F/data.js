var ICP3099 = 0;
var ICP3038 = 0;
var ICP3029 = 0;
var ICP3036 = 0;
var IED3064 = 0;

var Mon = 3;
var Tue = 1;
var Wed = 2;
var Thu = 2;
var Fri = 2;

var iterator = 0;

var monAttend = 0;
var tueAttend = 0;
var wedAttend = 0;
var thuAttend = 0;
var friAttend = 0;

var x = window.matchMedia("(max-width: 424px)")

if (x.matches)
{
    var margin = {top: 20, right: 20, bottom: 60, left: 30},
        width = 400 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
}
else
{
    var margin = {top: 20, right: 20, bottom: 60, left: 30},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
}

var parseDate = d3.timeParse("%d-%b-%y");

var x = d3.scaleTime().range([0, width])
var y = d3.scaleLinear().range([height, 0])

var svg = d3.select(".graph-content").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("style", "display: block; margin: 0 auto;")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("../js/Student_F/data.csv", function(error, data)
{
    if (error)
    {
        throw error;
    }

    // format the data
    data.forEach(function(d)
    {
        d.date = parseDate(d.date);
        d.module = +d.module;
        d.attendance = +d.attendance;

        if(d.date.getDay() == 1)
        {
            iterator += 1;
            if(d.module == 3099){ ICP3099 += d.attendance }
            if(d.module == 3038){ ICP3038 += d.attendance }

            if (iterator == Mon)
            {
                d.percent = (((ICP3099+ICP3038)/Mon)*100);
                monAttend = d.percent;

                iterator = 0;
                ICP3099 = 0;
                ICP3038 = 0;
            }
        }
        if(d.date.getDay() == 2)
        {
            iterator += 1;
            if(d.module == 3029){ ICP3029 += d.attendance }

            if(iterator == Tue)
            {
                d.percent = (((ICP3029)/Tue)*100);
                tueAttend = d.percent;

                iterator = 0;
                ICP3029 = 0;
            }
        }
        if(d.date.getDay() == 3)
        {
            iterator += 1;

            if(d.module == 3029){ ICP3029 += d.attendance }
            if(d.module == 3036){ ICP3036 += d.attendance }

            if(iterator == Wed)
            {
                d.percent = (((ICP3029+ICP3036)/Wed)*100);
                wedAttend = d.percent;

                iterator = 0;
                ICP3029 = 0;
                ICP3036 = 0;
            }
        }
        if(d.date.getDay() == 4)
        {
            iterator += 1;
            if(d.module == 3038){ ICP3038 += d.attendance }
            if(d.module == 3029){ ICP3029 += d.attendance }

            if(iterator == Thu)
            {
                d.percent = (((ICP3038+ICP3029)/Thu)*100);
                thuAttend = d.percent;

                iterator = 0;
                ICP3038 = 0;
                ICP3029 = 0;
            }

        }
        if(d.date.getDay() == 5)
        {
            iterator += 1;
            if(d.module == 3099){ ICP3099 += d.attendance }
            if(d.module == 3064){ IED3064 += d.attendance }

            if(iterator == Fri)
            {
                d.percent = (((ICP3099+IED3064)/Fri)*100);
                friAttend = d.percent;

                iterator = 0;
                ICP3099 = 0;
                IED3064 = 0;
            }
        }
    });

    data.forEach(function(d)
    {
        if(d.date.getDay() == 1)
        {
            d.percent = monAttend;
        }
        if(d.date.getDay() == 2)
        {
            d.percent = tueAttend;
        }
        if(d.date.getDay() == 3)
        {
            d.percent = wedAttend;
        }
        if(d.date.getDay() == 4)
        {
            d.percent = thuAttend;
        }
        if(d.date.getDay() == 5)
        {
            d.percent = friAttend;
        }
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, 100]);

    var line = d3.line()
        .curve(d3.curveStepAfter)
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.percent); });

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5))

    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Price ($)");

    // draw the data as an svg path
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("id", "line")
        .attr("d", line);

    svg.selectAll("circle")
        .data(data)
        .enter().append("svg:circle")
        .attr("cx", function(d) { return x(d.date) })
        .attr("cy", function(d) { return y(d.percent) })
        .attr("stroke-width", "none")
        .attr("fill", "orange" )
        .attr("fill-opacity", .5)
        //.attr("visibility", "hidden")
        .attr("r", 5);
});
