var overall_ICP_3099 = 0;
var overall_ICP_3029 = 0;
var overall_ICP_3038 = 0;
var overall_ICP_3036 = 0;
var overall_IED_3064 = 0;

var prev_Overall_ICP_3099 = 0;
var prev_Overall_ICP_3029 = 0;
var prev_Overall_ICP_3038 = 0;
var prev_Overall_ICP_3036 = 0;
var prev_Overall_IED_3064 = 0;

var overall_3099 = 3;
var overall_3029 = 3;
var overall_3038 = 2;
var overall_3036 = 1;
var overall_3064 = 1;

var attendance_3099 = 0;
var attendance_3029 = 0;
var attendance_3038 = 0;
var attendance_3036 = 0;
var attendance_3064 = 0;

var prev_Attendance_3099 = 0;
var prev_Attendance_3029 = 0;
var prev_Attendance_3038 = 0;
var prev_Attendance_3036 = 0;
var prev_Attendance_3064 = 0;

var overall = 0;
var prev_Overall = 0;

d3.csv("../js/Student_B/prev_data.csv", function(error, dataset)
{
    if (error)
    {
        throw error;
    }

    // format the data
    dataset.forEach(function(d)
    {
        d.date = parseDate(d.date);
        d.module = +d.module;
        d.attendance = +d.attendance;

        if(d.module == 3099)
        {
            if(d.attendance == 1)
            {
                prev_Overall_ICP_3099 += d.attendance;
            }
        }
        else if(d.module == 3038)
        {
            if(d.attendance == 1)
            {
                prev_Overall_ICP_3038 += d.attendance;
            }
        }
        else if(d.module == 3029)
        {
            if(d.attendance == 1)
            {
                prev_Overall_ICP_3029 += d.attendance;
            }
        }
        else if(d.module == 3036)
        {
            if(d.attendance == 1)
            {
                prev_Overall_ICP_3036 += d.attendance;
            }
        }
        else if(d.module == 3064)
        {
            if(d.attendance == 1)
            {
                prev_Overall_IED_3064 += d.attendance;
            }
        }
    });
});

d3.csv("../js/Student_B/data.csv", function(error, dataset)
{
    if (error)
    {
        throw error;
    }

    // format the data
    dataset.forEach(function(d)
    {
        d.date = parseDate(d.date);
        d.module = +d.module;
        d.attendance = +d.attendance;

        if(d.module == 3099)
        {
            if(d.attendance == 1)
            {
                overall_ICP_3099 += d.attendance;
            }
        }
        else if(d.module == 3038)
        {
            if(d.attendance == 1)
            {
                overall_ICP_3038 += d.attendance;
            }
        }
        else if(d.module == 3029)
        {
            if(d.attendance == 1)
            {
                overall_ICP_3029 += d.attendance;
            }
        }
        else if(d.module == 3036)
        {
            if(d.attendance == 1)
            {
                overall_ICP_3036 += d.attendance;
            }
        }
        else if(d.module == 3064)
        {
            if(d.attendance == 1)
            {
                overall_IED_3064 += d.attendance;
            }
        }
    });

    //Previous Week
    prev_Attendance_3099 = (((prev_Overall_ICP_3099)/overall_3099)*100);
    prev_Attendance_3038 = (((prev_Overall_ICP_3038)/overall_3038)*100);
    prev_Attendance_3029 = (((prev_Overall_ICP_3029)/overall_3029)*100);
    prev_Attendance_3036 = (((prev_Overall_ICP_3036)/overall_3036)*100);
    prev_Attendance_3064 = (((prev_Overall_IED_3064)/overall_3064)*100);
    prev_Overall = ((prev_Overall_ICP_3099+prev_Overall_ICP_3029+prev_Overall_ICP_3038+prev_Overall_ICP_3036+prev_Overall_IED_3064)/(overall_3099+overall_3029+overall_3038+overall_3036+overall_3064)*100);

    //Current Week
    attendance_3099 = (((overall_ICP_3099)/overall_3099)*100);
    attendance_3038 = (((overall_ICP_3038)/overall_3038)*100);
    attendance_3029 = (((overall_ICP_3029)/overall_3029)*100);
    attendance_3036 = (((overall_ICP_3036)/overall_3036)*100);
    attendance_3064 = (((overall_IED_3064)/overall_3064)*100);
    overall = ((overall_ICP_3099+overall_ICP_3029+overall_ICP_3038+overall_ICP_3036+overall_IED_3064)/(overall_3099+overall_3029+overall_3038+overall_3036+overall_3064)*100);

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Current Week~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("ICP-3099 - ", attendance_3099.toFixed(), "%", " | ", overall_ICP_3099, " / ", overall_3099, " X 100 = ", attendance_3099.toFixed(), "%");
    console.log("ICP-3038 - ", attendance_3038.toFixed(), "%", " | ", overall_ICP_3038, " / ", overall_3038, " X 100 = ", attendance_3038.toFixed() , "%");
    console.log("ICP-3029 - ", attendance_3029.toFixed(), "%", " | ", overall_ICP_3029, " / ", overall_3029, " X 100 = ", attendance_3029.toFixed() , "%");
    console.log("ICP-3036 - ", attendance_3036.toFixed(), "%", " | ", overall_ICP_3036, " / ", overall_3036, " X 100 = ", attendance_3036.toFixed() , "%");
    console.log("IED-3064 - ", attendance_3064.toFixed(), "%", " | ", overall_IED_3064, " / ", overall_3064, " X 100 = ", attendance_3064.toFixed() , "%");
    console.log("Overall Attendance - ", overall.toFixed() , "%", " | ", (overall_ICP_3099+overall_ICP_3029+overall_ICP_3038+overall_ICP_3036+overall_IED_3064), " / ", (overall_3099+overall_3029+overall_3038+overall_3036+overall_3064), " X 100 = ", overall.toFixed(), "%");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Previous Week~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("ICP-3099 - ", prev_Attendance_3099.toFixed(), "%", " | ", prev_Overall_ICP_3099, " / ", overall_3099, " X 100 = ", prev_Attendance_3099.toFixed(), "%");
    console.log("ICP-3038 - ", prev_Attendance_3038.toFixed(), "%", " | ", prev_Overall_ICP_3038, " / ", overall_3038, " X 100 = ", prev_Attendance_3038.toFixed() , "%");
    console.log("ICP-3029 - ", prev_Attendance_3029.toFixed(), "%", " | ", prev_Overall_ICP_3029, " / ", overall_3029, " X 100 = ", prev_Attendance_3029.toFixed() , "%");
    console.log("ICP-3036 - ", prev_Attendance_3036.toFixed(), "%", " | ", prev_Overall_ICP_3036, " / ", overall_3036, " X 100 = ", prev_Attendance_3036.toFixed() , "%");
    console.log("IED-3064 - ", prev_Attendance_3064.toFixed(), "%", " | ", prev_Overall_IED_3064, " / ", overall_3064, " X 100 = ", prev_Attendance_3064.toFixed() , "%");
    console.log("Previous Overall Attendance - ", prev_Overall.toFixed() , "%", " | ", (prev_Overall_ICP_3099+prev_Overall_ICP_3029+prev_Overall_ICP_3038+prev_Overall_ICP_3036+prev_Overall_IED_3064), " / ", (overall_3099+overall_3029+overall_3038+overall_3036+overall_3064), " X 100 = ", prev_Overall.toFixed(), "%");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    document.getElementById("3099").prepend(attendance_3099.toFixed());
    document.getElementById("3038").prepend(attendance_3038.toFixed());
    document.getElementById("3029").prepend(attendance_3029.toFixed());
    document.getElementById("3036").prepend(attendance_3036.toFixed());
    document.getElementById("3064").prepend(attendance_3064.toFixed());
    document.getElementById("overall").prepend(overall.toFixed());

    //Colour Change for 3099
    if(attendance_3099 <= 40)
    {
        document.getElementById("col_3099").style.background="#FF6961";
    }
    if(attendance_3099 > 40 && attendance_3099 <= 60)
    {
        document.getElementById("col_3099").style.background="#FFB347";
    }
    if(attendance_3099 > 60)
    {
        document.getElementById("col_3099").style.background="#77DD77";
    }

    //Colour Change for 3038
    if(attendance_3038 <= 40)
    {
        document.getElementById("col_3038").style.background="#FF6961";
    }
    if(attendance_3038 > 40 && attendance_3038 <= 60)
    {
        document.getElementById("col_3038").style.background="#FFB347";
    }
    if(attendance_3038 > 60)
    {
        document.getElementById("col_3038").style.background="#77DD77";
    }

    //Colour Change for 3029
    if(attendance_3029 <= 40)
    {
        document.getElementById("col_3029").style.background="#FF6961";
    }
    if(attendance_3029 > 40 && attendance_3029 <= 60)
    {
        document.getElementById("col_3029").style.background="#FFB347";
    }
    if(attendance_3029 > 60)
    {
        document.getElementById("col_3029").style.background="#77DD77";
    }

    //Colour Change for 3036
    if(attendance_3036 <= 40)
    {
        document.getElementById("col_3036").style.background="#FF6961";
    }
    if(attendance_3036 > 40 && attendance_3036 <= 60)
    {
        document.getElementById("col_3036").style.background="#FFB347";
    }
    if(attendance_3036 > 60)
    {
        document.getElementById("col_3036").style.background="#77DD77";
    }

    //Colour Change for 3064
    if(attendance_3064 <= 40)
    {
        document.getElementById("col_3064").style.background="#FF6961";
    }
    if(attendance_3064 > 40 && attendance_3064 <= 60)
    {
        document.getElementById("col_3064").style.background="#FFB347";
    }
    if(attendance_3064 > 60)
    {
        document.getElementById("col_3064").style.background="#77DD77";
    }

    //Colour Change for 3064
    if(overall <= 40)
    {
        document.getElementById("col_Overall").style.background="#FF6961";
        document.getElementById("face_Emoji").classList.add("fa-frown-open");

        if(overall <= prev_Overall)
        {
            document.getElementById("arrow").classList.add("fa-arrow-down");
            document.getElementById("col_Arrow").style.color="#FF6961";
        }
        else if(overall > prev_Overall)
        {
            document.getElementById("arrow").classList.add("fa-arrow-up");
            document.getElementById("col_Arrow").style.color="#77DD77";
        }

        document.getElementById("face").style.color="#FF6961";
        document.getElementById("line").style.stroke="#FF6961";
        //fa-arrow-up

    }
    if(overall > 40 && overall <= 60)
    {
        document.getElementById("col_Overall").style.background="#FFB347";
        document.getElementById("face_Emoji").classList.add("fa-meh fa-10x");

        if(overall <= prev_Overall)
        {
            document.getElementById("arrow").classList.add("fa-arrow-down");
            document.getElementById("col_Arrow").style.color="#FF6961";
        }
        else if(overall > prev_Overall)
        {
            document.getElementById("arrow").classList.add("fa-arrow-up");
            document.getElementById("col_Arrow").style.color="#77DD77";
        }

        document.getElementById("line").style.stroke="#FFB347";
    }
    if(overall > 60)
    {
        document.getElementById("col_Overall").style.background="#77DD77";
        document.getElementById("face_Emoji").classList.add("fa-smile");

        if(overall <= prev_Overall)
        {
            document.getElementById("arrow").classList.add("fa-arrow-down");
            document.getElementById("col_Arrow").style.color="#FF6961";
        }
        else if(overall > prev_Overall)
        {
            document.getElementById("arrow").classList.add("fa-arrow-up");
            document.getElementById("col_Arrow").style.color="#77DD77";
        }

        document.getElementById("face").style.color="#77DD77";
        document.getElementById("line").style.stroke="#77DD77";
    }

});
