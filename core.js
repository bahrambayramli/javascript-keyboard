import {keyboard} from "./keyboard.js"
import {dom} from "./helper.js"


let dataValueClass = {
    "enter":"col-2",
    "capslock":"col-2",
    "shift":"col-3 btn btn-success",
    "bksp":"col-3 btn btn-danger",
    "tab":"col-2",
    "ctrl":"col-1",
    "alt":"col-1",
    "space":"col-8 btn btn-dark",
    "del":"btn btn-warning"
};



function EventMaker(element,event,callback) {
    this._element = element;

    this.addevent = function () {
        let isFound = false;
        let isEvent = null;
        for (let f in event){
            let txt =this._element.innerText;
            if(txt.toLowerCase()==f){
                isFound = true;
                isEvent = event[f];
                break;
            }
        }

        if(isFound){
            this._element.removeEventListener("click",null);
            this._element.addEventListener("click",isEvent)
        }
        else{
            this._element.removeEventListener("click",null);
            this._element.addEventListener("click",()=>{
                let inp =dom.getBy("txtkeyboard")
                inp.innerHTML+=this._element.innerText;
            });
        }
        return this._element;
    }

}

function KeysInner(data,datavalue) {
        this._data = data;
        this._CssList ="btn btn-primary col border py-3 px-4 rounded";
        this._datavalue = datavalue;
        this.GenerateKey = function () {
            let btn = document.createElement("button");
            for (let f in this._datavalue){
                let dataTXT = this._data.toLowerCase();
                if(data.toLowerCase()==f){
                    this._CssList+=` ${this._datavalue[f]}`;
                }
            }
            btn.classList = this._CssList;
            btn.innerText = this._data;

            return  btn;
        }
}

function KeysMaker(keyboard,switcher) {
    this._keyboardEvents = keyboard.getEvets();
    this._keyboardKeys = keyboard.getKeys()[switcher];
    this.RenderKeys=function () {
        let rw = dom.createElement("div",{id:"keyboardContainer",className:"row"});
        for (let i = 0; i <this._keyboardKeys.length; i++) {
            let ky = new KeysInner(this._keyboardKeys[i],dataValueClass).GenerateKey();
            let final = new EventMaker(ky,this._keyboardEvents).addevent();
            dom.appendTo(rw,final);
        }
       return rw
    }


}

let KeyboardLoader = {

    _container:dom.createElement("div",{classList:"container my-2"}),

    LoadKeys:function(){

    },

    LoadTo:function () {
        dom.appendToBody(this._container);
    },

    RenderTextArea:function () {
        let textAreaContainer =dom.createElement("div",{className:"row"});
        let textArea = dom.createElement("textarea",
            {
                classList:"col-12 form-control my-2",
                rows:"0",width:"100%",
                "id":"txtkeyboard"}
        );
        textArea.addEventListener('keydown', function(event) {
            const key = event.key;
            if (key === "Backspace" || key === "Delete") {
                textArea.innerHTML="";
            }
        });
        dom.appendTo(textAreaContainer,textArea);
        dom.appendTo(this._container,textAreaContainer);
    },
    RenderKeys:function (switcher) {
        let keys = new KeysMaker(keyboard,switcher).RenderKeys();
        dom.appendTo(this._container,keys);
    }



}


KeyboardLoader.RenderTextArea();
KeyboardLoader.RenderKeys("lower");
KeyboardLoader.LoadTo();


export {KeyboardLoader};