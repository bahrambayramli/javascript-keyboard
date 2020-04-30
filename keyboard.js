"use strict";
import {dom} from "./helper.js";
import {KeyboardLoader} from "./core.js";


let  keyboard = {
    _keys:{
        lower:["`","1","2","3","4","5","6","7","8","9","0","-","=","bksp",
               "tab","q","w","e","r","t","y","u","i","o","p","[","]","enter", "capslock",
               "a","s","d","f","g","h","j","k","l",";","'","shift","shift","z","x","c","v","b","n","m",",",
                ".","/"," "," "," ","del","ctrl","alt","space","alt","ctrl"],

        upper:["`","1","2","3","4","5","6","7","8","9","0","-","=","BKSP",
              "tab","Q","W","E","R","T","Y","U","I","O","P","[","]","ENTER", "CAPSLOCK",
              "A","S","D","F","G","H","J","K","L",";","'","SHIFT","SHIFT","Z","X","C","V","B","N","M",",",
              ".","/"," "," "," ","DEL","CTRL","ALT","SPACE","ALT","CTRL"],
    },
    _keysEvents:{
            _iskeyPressed:false,
        "tab":function () {
            // let txt = dom.getBy("");
            // txt.value+="test";

            let inp =dom.getBy("txtkeyboard")
            inp.innerHTML+= "       ";

        },
        "enter":function () {
            let inp =dom.getBy("txtkeyboard")
            inp.innerHTML+= "   ";
            alert("enter");
        },
        "bksp":function () {
            let txt = dom.getBy("txtkeyboard");
            let str = null;
            if(txt.innerHTML!=null||txt.innerHTML!=undefined){
                str = txt.innerHTML;
                let res = str.substring(0,str.length-1);
                txt.innerHTML=res;
            }
            else{
                txt.innerHTML="";
            }

        },
        "shift":function () {
            let cnt =dom.getBy("keyboardContainer");
            cnt.innerHTML="";
            KeyboardLoader.RenderKeys("upper");
        },
        "capslock":function () {
                if(!keyboard._keysEvents._iskeyPressed){
                    let cnt =dom.getBy("keyboardContainer");
                    cnt.remove();
                     KeyboardLoader.RenderKeys("upper");
                    keyboard._keysEvents._iskeyPressed=true;
                }
                else{
                    let cnt =dom.getBy("keyboardContainer");
                    cnt.remove();
                    KeyboardLoader.RenderKeys("lower");
                    keyboard._keysEvents._iskeyPressed=false;
                }

        },
        "space":function () {
            let inp =dom.getBy("txtkeyboard")
            inp.innerHTML+= "   ";
        }
    },
    getKeys:function () {
            return this._keys;
    },
    getEvets:function () {
            return this._keysEvents;
    }

}

export {keyboard}