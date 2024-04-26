AFRAME.registerComponent("turtlel", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        const id = `turtlel${i}`;
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };
        this.genrateturtlel(id, position);
      }
    },
    genrateturtlel: function (id, position) {
      const turtlelModelEntity = document.querySelector("#turtlelModels");
      var turtlelEl = document.createElement("a-entity");
      turtlelEl.setAttribute("id", id);
      turtlelEl.setAttribute("position", position);
      turtlelEl.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      turtlelEl.setAttribute("scale", { x: 0.003, y: 0.003, z: 0.003 });
      turtlelEl.setAttribute("gltf-model", "./assets/turtle/scene.gltf");
      turtlelEl.setAttribute("animation", {
        property: "position",
        to: "10 10 -10",
        loop: "true",
        dur: 20000
      });
      turtlelEl.setAttribute("animation-mixer", {});
      turtlelModelEntity.appendChild(turtlelEl);
    }
  })