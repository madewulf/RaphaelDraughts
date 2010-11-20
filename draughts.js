window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);

    var selectedPiece=null;
    function movePiece(){
        var at= this.attr();
        selectedPiece.animate({cx:at.x+25,cy:at.y+25},1500,"bounce");
    }
	for(var x = 0; x < 10; x++) {
        for (var y = 0 ; y <10 ; y++){

           var rect = paper.rect(x*50,y*50,50,50).click(movePiece);

           var attr;
           if ((x+y) %2!==0)
           {
             attr={fill: '#000', stroke: '#666', 'stroke-width': 1} ;
             if (y!=4 && y!=5)
             {
                 var c= paper.circle(x*50+25,y*50+25,20).click(function () {
                      if (selectedPiece)
                      {
                        selectedPiece.animate({stroke: '#666', 'stroke-width': 1},1000,'bounce');
                      }
                      selectedPiece=this;
                      this.animate({stroke: 'orange', 'stroke-width': 3},1500,"bounce");
                 });
                 c.i=x;
                 c.j=y;
                 if (y<5)
                 {
                    c.attr({fill:'red',stroke:'#666',id:x+''+y});
                    c.baseColor='red';

                 }
                 else
                 {
                    c.attr({fill:'yellow',stroke:'#666',id:x+''+y});
                    c.baseColor='yellow';

                 }
                 c.toFront();
                 $(c.node).dblclick( function(eventObject){
                    $(this).remove();
                 });
             }
           }
           else
           {
              attr = {fill: '#fff', stroke: '#666', 'stroke-width': 1};
           }

           rect.attr(attr);
           rect.toBack();
           
        }
    }
};
        