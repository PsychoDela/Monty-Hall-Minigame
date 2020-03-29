var stage = 0;
var jackpot = 0;
var fail = 0;
var fail2 = 0;
var imageClicked = 0;
var profulano = 0;
var firstSelected = 0;
var winNotChange = 0;
var winChange = 0;

function random ()
{
    return Math.floor(Math.random() * 3) + 1;
}

function stageSelector (slika)
{  
    imageClicked = slika;

    if (stage == 0)
    {
        firstSelected = slika;
        stage1();
    }
    
    else if (stage == 1)
    {
        stage2(slika);
    }
}

function stage1 ()
{
    while (jackpot == fail || jackpot == fail2 || fail == fail2)
    {
        fail = random();
        fail2 = random();
        jackpot = random();
    }

    /*document.getElementById("correction").innerHTML = "jackpot: " + jackpot + " fail: " + fail + " fail2: " + fail2;*/

    document.getElementById("poruka").innerHTML = "Jedna vrata su se otvorila. Iza njih nema nista. Ako zelite da promijenite svoj izbor, sada je prilika. Ponovo odaberite zeljena vrata!";

    if (imageClicked != fail)
    {
        document.getElementById("slika" + fail.toString()).src = "images/opened door.png";
    }

    else if (imageClicked != fail2)
    {
        document.getElementById("slika" + fail2.toString()).src = "images/opened door.png";
    }

    stage++;
}

function stage2()
{
    document.getElementById("slika" + jackpot.toString()).src = "images/opened door treasure.png";
    document.getElementById("slika" + fail.toString()).src = "images/opened door.png";
    document.getElementById("slika" + fail2.toString()).src = "images/opened door.png";

    if (jackpot == imageClicked)
    {
        if (imageClicked == firstSelected)
        {
            winNotChange++;
        }

        else
        {
            winChange++;
        }

        document.getElementById("poruka").innerHTML = "Cestitam, osvojili ste blago!!!";
    }

    else
    {
        profulano++;
        document.getElementById("poruka").innerHTML = "Vise srece drugi put :(";
    }

    document.getElementById("stats").innerHTML = "Pobjeda uz promjenu: " + winChange + ", pobjeda bez promjene: " + winNotChange + ", gubitaka: " + profulano;
}

function begin()
{
    stage = 0;
    firstSelected = 0;
    jackpot = 0;
    fail = 0;
    fail2 = 0;

    document.getElementById("slika1").src = "images/closed door.png";
    document.getElementById("slika2").src = "images/closed door.png";
    document.getElementById("slika3").src = "images/closed door.png";

    return;
}