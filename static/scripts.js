// Toggle show element with elementID
function showElement(elementID) {
    var thisElement = document.getElementById(elementID);
    if (thisElement.classList.contains('certainrollinfo')) {
        clearInfos(thisElement);
    }
    thisElement.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
      }
    }
  }
}

// Make sure there's not more than one roll at a time
function clearInfos(someElement) {
    var infos = document.getElementsByClassName("certainrollinfo");
    var i;
    for (i = 0; i < infos.length; i++) {
        var shownInfo = infos[i];
        if (someElement.id != shownInfo.id && shownInfo.classList.contains('show')) {
            shownInfo.classList.remove('show');
        }
    }
}

function roll4d6k3() { 
    var statcells = document.getElementsByClassName('stat-val');
    var i;
    for (i = 0; i < 6; i++) {
        var die1 = 1 + Math.floor(6 * Math.random());
        var die2 = 1 + Math.floor(6 * Math.random());
        var die3 = 1 + Math.floor(6 * Math.random());
        var die4 = 1 + Math.floor(6 * Math.random());
        
        var todrop = Math.min(die1, die2, die3, die4)
        
        if (todrop == die1) {
            statcells[i].innerHTML = die2 + die3 + die4;
        } else if (todrop == die2) {
            statcells[i].innerHTML = die1 + die3 + die4;
        } else if (todrop == die3) {
            statcells[i].innerHTML = die1 + die2 + die4;
        } else {
            statcells[i].innerHTML = die2 + die3 + die4;
        }
    }
}

function roll3d10k2() {
    var statcells = document.getElementsByClassName('stat-val');
    var i;
    for (i = 0; i < 6; i++) {
        var die1 = 1 + Math.floor(10 * Math.random());
        var die2 = 1 + Math.floor(10 * Math.random());
        var die3 = 1 + Math.floor(10 * Math.random());
        
        var todrop = Math.min(die1, die2, die3)
        
        if (todrop == die1) {
            statcells[i].innerHTML = die2 + die3;
        } else if (todrop == die2) {
            statcells[i].innerHTML = die1 + die3;
        } else {
            statcells[i].innerHTML = die1 + die2;
        }
    }
}