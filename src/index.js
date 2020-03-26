let selector;
let obj;
let num = 0;

CheckButtons();

document.querySelector('.selector-find').onclick = function(){
    UnSelect();
    num = 0;
    selector = document.querySelector('.selector').value;
    if(document.querySelector(selector)){
        obj = document.querySelector(selector);
        Selection(obj);
        CheckButtons();
    }
}
document.querySelector('.nav-top').onclick = function(){
    UnSelect();
    obj = obj.parentElement;
    Selection(obj);
    CheckButtons();
}
document.querySelector('.nav-bottom').onclick = function(){
    UnSelect();
    for(let i = 0; i < obj.childNodes.length; i++){
        if(obj.childNodes[i].style){
            obj = obj.childNodes[i];
            break;
        }
    }
    Selection(obj);
    CheckButtons();
}
document.querySelector('.nav-left').onclick = function(){
    UnSelect();
    while(obj.previousSibling){
        obj = obj.previousSibling;
        if(obj.style){
            break;
        }
    }

    Selection(obj);
    CheckButtons();
}
document.querySelector('.nav-right').onclick = function(){
    UnSelect();
    while(obj.nextSibling){
        obj = obj.nextSibling;
        if(obj.style){
            break;
        }
    }
    Selection(obj);
    CheckButtons;
}

document.querySelector('.selector-next').onclick = function(){
    UnSelect();
    num = 0;
    for(let i = 0; i < document.querySelectorAll(obj.nodeName).length; i++){
        if(document.querySelectorAll(obj.nodeName)[i] === obj){
            break;
            }else(num++);
    }
    num++;
    obj = document.querySelectorAll(obj.nodeName)[num];
    Selection(obj);
    CheckButtons();
}
document.querySelector('.selector-prev').onclick = function(){
    UnSelect();
    num = 0;
    for(let i = 0; i < document.querySelectorAll(obj.nodeName).length; i++){
        if(document.querySelectorAll(obj.nodeName)[i] === obj){
            break;
            }else(num++);
    }
    num--;
    obj = document.querySelectorAll(obj.nodeName)[num];
    Selection(obj);
    CheckButtons();
}

function CheckButtons(){
    if(obj){
        if(obj.parentElement){
            document.querySelector('.nav-top').disabled = false;
        }else{document.querySelector('.nav-top').disabled = true;}
    
        if(obj.childNodes[1]){
            document.querySelector('.nav-bottom').disabled = false;
        }else{document.querySelector('.nav-bottom').disabled = true;}
    
        let CheckObject = obj;
        while(CheckObject.previousSibling){
            CheckObject = CheckObject.previousSibling;
            if(CheckObject.style){
                document.querySelector('.nav-left').disabled = false
                break;
            }else{document.querySelector('.nav-left').disabled = true;}
        }
        CheckObject = obj;
        while(CheckObject.nextSibling){
            CheckObject = CheckObject.nextSibling;
            if(CheckObject.style){
                document.querySelector('.nav-right').disabled = false;
                break;
            }else{document.querySelector('.nav-right').disabled = true;}
        }
        CheckObject = obj;
        num = 0;
        for(let i = 0; i < document.querySelectorAll(obj.nodeName).length; i++){
            if(document.querySelectorAll(obj.nodeName)[i] === obj){
                break;
            }else(num++);
        }
        if(document.querySelectorAll(selector)[num + 1]){
            document.querySelector('.selector-next').disabled = false;
        }else{document.querySelector('.selector-next').disabled = true;}
        if(document.querySelectorAll(selector)[num - 1]){
            document.querySelector('.selector-prev').disabled = false;
        }else{document.querySelector('.selector-prev').disabled = true;}
    }else{
        document.querySelector('.nav-top').disabled = true;
        document.querySelector('.nav-bottom').disabled = true;
        document.querySelector('.nav-left').disabled = true;
        document.querySelector('.nav-right').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        document.querySelector('.selector-prev').disabled = true;
    }
}

function UnSelect(){
    if(obj){
        obj.style.cssText = 
        `
        outline: 0px;
        background-color: rgba(0,0,0,0);
        `
    }
}
function Selection(Obj){
    Obj.style.cssText =
        `
        outline: solid red 5px;
        background-color: lightblue;
        `
    CheckButtons();
}