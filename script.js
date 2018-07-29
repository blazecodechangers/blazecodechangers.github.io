var cookies = 0;

function cookieClick(){
    cookies = cookies + 1 ;
    document.getElementById("cookies").innerHTML = cookies;
}
function findunixtime(){
unixtime = unixtime + 1 ;
if unixtime > 15
unixtime = 0;
}
function save(){
var savegame = {
    cookies: cookies,
    cursors: cursors,
    cookers: cookers
}; 
}
function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
if (typeof savegame.cookers !== "undefined") cookers = savegame.cookers;
}
var cursors = 0;
var cookers = 0;
var uc = 0;
var unixtime = 0;
function buyCursor(){
    var CursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
   cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    }
    var nextCursorCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCursorCost;  //updates the cursor cost for the user
}

function buyCooker(){
    var cookerCost = Math.floor(35 * Math.pow(1.1,cookers));     //works out the cost of this cursor
    if(cookies >= cookerCost){                                   //checks that the player can afford the cursor
        cookers = cookers + 1;                                   //increases number of cursors
   cookies = cookies - cookerCost;                          //removes the cookies spent
        document.getElementById('cookers').innerHTML = cookers;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    }
    var nextCookerCost = Math.floor(35 * Math.pow(1.1,cookers));       //works out the cost of the next cursor
    document.getElementById('cookerCost').innerHTML = nextCookerCost;  //updates the cursor cost for the user
}
function buyuc(){
    var ucCost = Math.floor(60 * Math.pow(1.1,uc));     //works out the cost of this cursor
    if(cookies >= ucCost){                                   //checks that the player can afford the cursor
        uc = uc + 1;                                   //increases number of cursors
   cookies = cookies - ucCost;                          //removes the cookies spent
        document.getElementById('uc').innerHTML = uc;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    }
    var nextucCost = Math.floor(60 * Math.pow(1.1,uc));       //works out the cost of the next cursor
    document.getElementById('ucCost').innerHTML = nextucCost;  //updates the cursor cost for the user
}
window.setInterval(function(){
  cookieClick(cursors);
  cookieClick(cookers * 3);
  cookieClick(uc * cookers * 3);
}, 1000);
