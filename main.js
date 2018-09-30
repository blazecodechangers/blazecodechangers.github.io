var cookies = 0;
var t2 = 0;
var prestige = 0;
function cookieClick(){
    cookies = cookies + cUp + 1;
    document.getElementById("cookies").innerHTML = cookies;
};

function cookieClick1(n){
    cookies = cookies + n;
    document.getElementById("cookies").innerHTML = cookies;
};

function roundt1(){
	Math.round(cookies);
}

var cursors = 0;

function save(){
var save2 = {
    cookies: cookies,
    cursors: cursors,
    cUp: cUp,
    t2: t2,
    up1up: up1up,
    cursor2: cursor2
}	
}
function load(){
var savegame = JSON.parse(localStorage.getItem("save2"));
}
function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
    Math.round(cursorCost);
};

var cUp = 0;
function buycUp(){
    var cUpCost = Math.floor(30 * Math.pow(2,cUp));     //works out the cost of this cursor
    if(cookies >= cUpCost){                                   //checks that the player can afford the cursor
        cUp = cUp + 1;                                   //increases number of cursors
    	cookies = cookies - cUpCost;                          //removes the cookies spent
        document.getElementById('cUp').innerHTML = cUp;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCostcUp = Math.floor(30 * Math.pow(2,cUp));       //works out the cost of the next cursor
    document.getElementById('cUpCost').innerHTML = nextCostcUp;  //updates the cursor cost for the user
	Math.round(cUpCost);
};

var upgradeC = 0;
function buyupgradeC(){
    var uCost = Math.floor(50 * Math.pow(2,upgradeC));     //works out the cost of this cursor
    if(cookies >= uCost){                                   //checks that the player can afford the cursor
        upgradeC = upgradeC + 1;                                   //increases number of cursors
    	cookies = cookies - uCost;                          //removes the cookies spent
        document.getElementById('upgradeC').innerHTML = upgradeC;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCostc = Math.floor(50 * Math.pow(2,upgradeC));       //works out the cost of the next cursor
    document.getElementById('uCost').innerHTML = nextCostc;  //updates the cursor cost for the user
	Math.round(uCost);
};

up1up = 1;
function up1(){
    var up1Cost = 1000/up1up;     
    if(cookies >= up1Cost){                                  
        t2 = t2 + 1;                                   
    	cookies = cookies - up1Cost;                         
        document.getElementById('t2').innerHTML = t2;  
        document.getElementById('cookies').innerHTML = cookies;  
    };
    Math.round(up1Cost);
};
var cursor2 = 0;
function buyCursor2(){
    var cursor2Cost = Math.floor(10 * Math.pow(1.1,cursor2));     //works out the cost of this cursor
    if(t2 >= cursor2Cost){                                   //checks that the player can afford the cursor
        cursor2 = cursor2 + 1;                                   //increases number of cursors
    	t2 = t2 - cursor2Cost;                          //removes the cookies spent
        document.getElementById('cursor2').innerHTML = cursor2;  //updates the number of cursors for the user
        document.getElementById('t2').innerHTML = t2;  //updates the number of cookies for the user
    };
    var next2Cost = Math.floor(10 * Math.pow(1.1,cursor2));       //works out the cost of the next cursor
    document.getElementById('cursor2Cost').innerHTML = next2Cost;  //updates the cursor cost for the user
    Math.round(cursor2Cost);
};


window.setInterval(function(){
	
	cookieClick1(cursors * (upgradeC + 1));
 	cookieClick1(cursor2 * 25);
	var prestige = Math.round(Math.cbrt(cookies + (t2 * 1000)))
}, 1000);

