function openSM()
{
    var x = window.matchMedia("(max-width: 600px)")

    if (x.matches)
    {
        document.getElementById("mySidemenu").style.width = "100%";
        document.getElementById("pg-content").style.marginLeft = "100%";
    }
    else
    {
        document.getElementById("mySidemenu").style.width = "16%";
        document.getElementById("pg-content").style.marginLeft = "16%";
    }
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";

}

function closeSM()
{
    document.getElementById("mySidemenu").style.width = "0%";
    document.getElementById("pg-content").style.marginLeft = "0%";
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("open-btn").style.display = "block";
}
