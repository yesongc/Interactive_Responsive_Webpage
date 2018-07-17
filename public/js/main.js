//constants for different elements
const dragWoman = document.querySelector('.dragWoman');
const dragMan = document.querySelector('.dragMan');
const quidEmpty = document.querySelector('.quidEmpty');
const hostileEmpty = document.querySelector('.hostileEmpty');
const quidText = document.querySelector('.quidText');
const hostileText = document.querySelector('.hostileText');


//dragWoman listeners
dragWoman.addEventListener('dragstart', dragStart);
//dragMan listeners
dragMan.addEventListener('dragstart', dragStart);

//quidEmpty listeners
quidEmpty.addEventListener('dragover', dragOver);
quidEmpty.addEventListener('drop', dragDrop);
//hostileEmpty listeners
hostileEmpty.addEventListener('dragover', dragOver);
hostileEmpty.addEventListener('drop', dragDrop);



//drag functions

//saves id of the drag target
function dragStart(e){
    e.dataTransfer.setData("img", e.target.id);
}
//prevent default to allow the use of dragdrop function
function dragOver(e){
    e.preventDefault();
    console.log("dragOver");
}
/*getes the id of the drag target
* if drag target is either dragWoman or dragMan
* and the drop target is either quidEmpty or hostileEmpty
* bring out appropriate text and image
*/
function dragDrop(e){
    const data = e.dataTransfer.getData("img");
    console.log("drag drop");
    //quidEmpty and dragWoman
    if(data == "dragWoman" && this.id == "quidEmpty"){
        quidEmpty.style.backgroundImage="url(./public/img/quid-withwoman.png)";
        hostileText.style.visibility="hidden";
        quidText.style.visibility="visible";
    }
    //quidEmpty and dragMan
    else if (data == "dragMan" && this.id == "quidEmpty"){
        quidEmpty.style.backgroundImage="url(./public/img/quid-withman.png)";
        hostileText.style.visibility="hidden";
        quidText.style.visibility="visible";
    }
    //hostileEmpty and dragWoman
    else if(data == "dragWoman" && this.id == "hostileEmpty"){
        hostileEmpty.style.backgroundImage="url(./public/img/hostile-withwoman.png)";
        hostileText.style.visibility="visible";
        quidText.style.visibility="hidden";
    }
    //hostileEmpty and dragMan
    else if (data == "dragMan" && this.id == "hostileEmpty"){
        hostileEmpty.style.backgroundImage="url(./public/img/hostile-withman.png)";
        hostileText.style.visibility="visible";
        quidText.style.visibility="hidden";
    }
}

//For mobile version touch controls
const quidEmptyMobile = document.querySelector('.quidEmptyMobile');
const hostileEmptyMobile = document.querySelector('.hostileEmptyMobile');  

//dragWoman listeners
dragWoman.addEventListener('touchstart', touchStart);

//dragMan listeners
dragMan.addEventListener('touchstart', touchStart);

//quidEmpty listeners


//store ids of objects we touch
var touchId = {};

//save the id of what we touch
function touchStart(e){
    //prevent from scrolling
    e.preventDefault();
    touchId["img"] = e.targetTouches[0].target.id;
    console.log("touch start");
}




