$(document).foundation();

u = new Utils();

$(document).ready(function(){


   u.addWindowResizeFunction( u.verticalCenter )
   u.addWindowResizeFunction( u.shareW )



   $(".imgLiquid.imgLiquidFill").imgLiquid();
   $(".imgLiquid.imgLiquidNoFill").imgLiquid({fill:false});

   console.log("Vientos!");

})
