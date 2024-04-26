AFRAME.registerComponent("coin",{
    init: function(){
       for(var i = 1; i<=10; i++){
           const id =`coin${i}`
           const posX=Math.random()*100+ - 50
           const posY=Math.random()*5+5
           const posZ=Math.random()*60 + -40
           const position = {x:posX,y:posY,z:posZ}
           this.generateCoin(id,position)
       }
    },
    generateCoin: function(id,position){
       const coinModelEntity = document.querySelector("#coin")
       var coinEl = document.createElement("a-entity")
       coinEl.setAttribute("id",id)
       coinEl.setAttribute("position",position)
       coinEl.setAttribute("material","color","yellow")
       coinEl.setAttribute("geometry",{primitive:"circle",radius:0.5})
       coinEl.setAttribute("animation",{
           propert:"position",
           to:"0 360 0",
           loop:"true",
           dur:999
       })

       coinModelEntity.appendChild(coinEl)
    }
   })