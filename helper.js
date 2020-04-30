let dom = {
    createElement :function (name,props) {
        let element = document.createElement(name);

        for(let f in props){
            element[f] = props[f]
        }
        return element;
    },
    appendTo:function (container,element) {
        container.appendChild(element)
    },
    appendById:function (id,element) {
            this.getBy(id).appendChild(element);
    },
    appendByTagName:function(tagName,element){
        this.getByTagName(tagName).appendChild(element);
    },
    appendToBody:function(element){
        document.body.appendChild(element);
    },
    getBy:function (id) {
            return document.getElementById(id)
    },
    getByTagName:function (tagName) {
        return document.getElementsByTagName(tagName);
    }
}



export {dom};