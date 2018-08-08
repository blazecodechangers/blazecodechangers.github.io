var cookies = 0;

function cookieClick(){
    cookies = cookies + cUpgrade + 1;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

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
};

var cUp = 0;
function buycUp(){
    var cUpCost = Math.floor(25 * Math.pow(1.1,cUp));     //works out the cost of this cursor
    if(cookies >= cUpCost){                                   //checks that the player can afford the cursor
        cUp = cUp + 1;                                   //increases number of cursors
    	cookies = cookies - cUp;                          //removes the cookies spent
        document.getElementById('cUp').innerHTML = cUp;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCostcUp = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cUpCost').innerHTML = nextCostcUp;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);

