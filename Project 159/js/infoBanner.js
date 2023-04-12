AFRAME.registerComponent("info-banner",{
    schema : {
        selectedItemId: { default: "", type: "string" }
    },

    init: function(){
        this.handleMouseLeaveEvent()
    },
    update: function(){
        const fadeBackgroundEl = document.querySelector("#fadeBackground")

        c = fadeBackgroundEl.children
        if(c.length > 0){
            var i;
            for(i = 0; i <= c.length; i++){
                fadeBackgroundEl.removeChild(c[i])
            }
        } else {
            this.handleMouseClickEvent
        }
    },
    handleMouseClickEvent: function(){
        
        const titleEl = document.querySelector("#posters-container")
        const cursorEl = document.querySelector("#posters-container")

        if(selectedItemId){
            fadeBackgroundEl.setAttribute("visivle",true)
            fadeBackgroundEl.setAttribute("info-banner",{
                itemId: selectedItemId,
            })
            titleEl.setAttribute("visible",false)
            cursorEl.setAttribute("position",{x:0,y:0,z:-1})
            cursorEl.setAttribute("geometry",{
                radiusInner: 0.03,
                radiusOuter: 0.04,
            })
        } else {
            fadeBackgroundEl.setAttribute("visible",false)
            titleEl.setAttribute("visible",true)
            cursorEl.setAttribute("position", {x:0,y:0,z:-3})
            cursorEl.setAttribute("geometry", {
                radiusInner : 0.08,
                radiusOuter: 0.12
            })
        }
    }
})