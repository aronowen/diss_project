var parseDate = d3.timeParse("%d/%m/%Y");
d3.csv("./js/data.csv")
    .row(function(d) { return { date:parseDate(d.date), value:Number(d.value)};})
    .get(function(error,data){

        var height = 400;
        var width = 800;

        var maxDate = d3.max(data, function(d){ return d.date; });
        var minDate = d3.min(data, function(d){ return d.date; });
        var maxValue = d3.max(data, function(d){ return d.value; });

        var y = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);

        var x = d3.scaleTime()
            .domain([minDate, maxDate])
            .range([0, width]);

        var yAxis = d3.axisLeft(y)
        var xAxis = d3.axisBottom(x);

        var area = d3.area()
            .x(function(d) { return x(d.date)})
            .y0(height)
            .y1(function(d){ return y(d.close)});

        var svg = d3.select('body').append('svg')
            .attr('height', '100%')
            .attr('width', '100%')
            .attr('class', 'area')
            .attr('d', 'area');

        var chartGroup = svg.append('g')
            .attr('transform', 'translate(375, 25)');

        var line = d3.line()
            .x(function(d){ return x(d.date);})
            .y(function(d){ return y(d.value);});

        chartGroup.append('path').attr('d', line(data));
        chartGroup.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' +height +')').call(xAxis);
        chartGroup.append('g').attr('class', 'y axis').call(yAxis);
    });
