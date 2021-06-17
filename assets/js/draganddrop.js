class Draggableone {

   constructor() {
       this.container = document.querySelector('.fillone');
       this.boxone = document.querySelectorAll('.startpointone,.emptyone');
       this._addEventListener();
   }

   _addEventListener() {
       this.boxone.forEach(element => {
           element.addEventListener('dragenter', this.dragenterone)
           element.addEventListener('dragleave', this.dragleaveone)
           element.addEventListener('dragover', this.dragoverone)
           element.addEventListener('drop', this.dropone)
       });

       this.container.addEventListener('dragstart', this.dragstartone);
       this.container.addEventListener('dragend', this.dragendone);
   }

   dragstartone(e) {
       this.classList.add('drag_startone');
      setTimeout(() => {
         this.classList.add('invisibleone');
      }, 0);
   }

   dragendone(e) {
       console.log('dragend')
       this.classList.remove('invisibleone');
       this.classList.remove('drag_startone');
   }

   dragenterone(e) {
       e.preventDefault();
       
       console.log('dragenterone')
        this.classList.add('drag_enterone');
   }

   dragleaveone(e) {
       console.log('dragleaveone')
       this.classList.remove('drag_enterone');
   }

   dragoverone(e) {
       e.preventDefault();
       console.log('dragoverone')
   }

   dropone(){ 
    let container = document.querySelector('.fillone'); 
    this.classList.remove('drag_enterone'); 
    this.append(container);
    var emptyone = document.getElementById("emptyone");   
    var fillone = document.getElementById("fillone");
    if  (emptyone.contains(fillone)){
        console.log('emptyone');
    }
}

   static init() {
    return new this();
    }
}
 
class Draggabletwo {

    constructor() {
        this.container = document.querySelector('.filltwo');
        
        this.boxtwo = document.querySelectorAll('.startpointtwo, .emptytwo');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxtwo.forEach(element => {
            element.addEventListener('dragenter', this.dragentertwo)
            element.addEventListener('dragleave', this.dragleavetwo)
            element.addEventListener('dragover', this.dragovertwo)
            element.addEventListener('drop', this.droptwo)
        });
 
        this.container.addEventListener('dragstart', this.dragstarttwo);
        this.container.addEventListener('dragend', this.dragendtwo);
    }
    dragstarttwo(e) {
        this.classList.add('drag_starttwo');
       setTimeout(() => {
          this.classList.add('invisibletwo');
       }, 0);
    }
 
    dragendtwo(e) {
        console.log('dragendtwo');
        this.classList.remove('invisibletwo');
        this.classList.remove('drag_starttwo');
    }
 
    dragentertwo(e) {
        e.preventDefault();
        
        console.log('dragentertwo');
         this.classList.add('drag_entertwo');
    }
 
    dragleavetwo(e) {
        console.log('dragleavetwo')
        this.classList.remove('drag_entertwo');
    }
 
    dragovertwo(e) {
        e.preventDefault();
        console.log('dragovertwo');
    }
 
    droptwo(){ 
    let container = document.querySelector('.filltwo'); 
    this.classList.remove('drag_entertwo'); 
    this.append(container);
    var emptytwo = document.getElementById("emptytwo");   
    var filltwo = document.getElementById("filltwo");
    if  (emptytwo.contains(filltwo)){
        console.log('emptytwo');
    }
}
    static init() {
     return new this();
     }
 }
 class Draggablethree {

    constructor() {
        this.container = document.querySelector('.fillthree');
        
        this.boxthree = document.querySelectorAll('.startpointthree, .emptythree');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxthree.forEach(element => {
            element.addEventListener('dragenter', this.dragenterthree)
            element.addEventListener('dragleave', this.dragleavethree)
            element.addEventListener('dragover', this.dragoverthree)
            element.addEventListener('drop', this.dropthree)
        });
 
        this.container.addEventListener('dragstart', this.dragstartthree);
        this.container.addEventListener('dragend', this.dragendthree);
    }
 
    dragstartthree(e) {
        this.classList.add('drag_startthree');
       setTimeout(() => {
          this.classList.add('invisiblethree');
       }, 0);
    }
 
    dragendthree(e) {
        console.log('dragendthree')
        this.classList.remove('invisiblethree');
        this.classList.remove('drag_startthree');
    }
 
    dragenterthree(e) {
        e.preventDefault();
        
        console.log('dragenterthree')
         this.classList.add('drag_enterthree');
    }
 
    dragleavethree(e) {
        console.log('dragleavethree')
        this.classList.remove('drag_enterthree');
    }
 
    dragoverthree(e) {
        e.preventDefault();
        console.log('dragoverthree')
    }
 
    dropthree(){ 
        let container = document.querySelector('.fillthree'); 
        this.classList.remove('drag_enterthree'); 
        this.append(container);
        var emptythree = document.getElementById("emptythree");   
        var fillthree = document.getElementById("fillthree"); 
        if (emptythree.contains(fillthree)){
            console.log('emptythree');
        }
    }
    static init() {
     return new this();
     }
 }
 class Draggablefour {

    constructor() {
        this.container = document.querySelector('.fillfour');
        
        this.boxfour = document.querySelectorAll('.startpointfour, .emptyfour');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxfour.forEach(element => {
            element.addEventListener('dragenter', this.dragenterfour)
            element.addEventListener('dragleave', this.dragleavefour)
            element.addEventListener('dragover', this.dragoverfour)
            element.addEventListener('drop', this.dropfour)
        });
 
        this.container.addEventListener('dragstart', this.dragstartfour);
        this.container.addEventListener('dragend', this.dragendfour);
    }
 
    dragstartfour(e) {
        this.classList.add('drag_startfour');
       setTimeout(() => {
          this.classList.add('invisiblefour');
       }, 0);
    }
 
    dragendfour(e) {
        console.log('dragendfour')
        this.classList.remove('invisiblefour');
        this.classList.remove('drag_startfour');
    }
 
    dragenterfour(e) {
        e.preventDefault();
        console.log('dragenterfour')
         this.classList.add('drag_enterfour');
    }
 
    dragleavefour(e) {
        console.log('dragleavefour')
        this.classList.remove('drag_enterfour');
    }
 
    dragoverfour(e) {
        e.preventDefault();
        console.log('dragoverfour')
    }
 
    dropfour(){ 
        let container = document.querySelector('.fillfour'); 
        this.classList.remove('drag_enterfour'); 
        this.append(container); 
        var emptyfour = document.getElementById('emptyfour');   
        var fillfour = document.getElementById('fillfour'); 
        var modal = document.getElementById('myModal');
        var btn = document.getElementById('myBtn');
        var closebtn = document.getElementById('close');
        if (emptyfour.contains(fillfour)){
            console.log('emptyfour');
            modal.style.display = "block";
            btn.onclick = function() {
            location.reload("../html/index.html")};
            closebtn.onclick = function() {
            modal.style.display = "none";
            }
        }
    }
    static init() {
     return new this();
     }
 }

document.addEventListener('load', Draggableone.init());
document.addEventListener('load', Draggabletwo.init());
document.addEventListener('load', Draggablethree.init());
document.addEventListener('load', Draggablefour.init());

