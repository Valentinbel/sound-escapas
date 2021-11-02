class NeblumViewModel 
{

  // https://codepen.io/shane01101/pen/jOEKjXN

  
    constructor() {
      var myCarouselAlignan = document.querySelector('#carouselAlignan')
      var carouselAlignan = new bootstrap.Carousel(myCarouselAlignan, {
        interval: 5000
      })
      var myCarouselBassan = document.querySelector('#carouselBassan')
      var carouselAlignan = new bootstrap.Carousel(myCarouselBassan, {
        interval: 5000
      })

    }
  
    resizeportraits(){
        /* ALIGNAN */
        var divh = document.getElementById('sizeModelAlignan').offsetHeight;
        document.getElementById('toResizeal_p1').style.height = divh + 'px';

        /*  BASSAN */
         var divh = document.getElementById('sizeModelBassan').offsetHeight;
        // document.getElementById('toResizeBassan').style.height = divh + 'px';
        console.log("it works from here too")
    }

}

app.component('neblum',
    {
        templateUrl: './Scripts/Views/Home/Neblum/Neblum/NeblumView.html',
        controller: NeblumViewModel,
        controllerAs: "vm",
    })
    
    
    
 