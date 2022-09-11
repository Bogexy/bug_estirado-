 class terrain{
    constructor(x,y,w,h){
        //this.material = material;
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 100;
    }

    display(){
        
        rect(this.x,this.y,this.h,this.w);

       
    }

  /*  type(){
        if(this.material === "agua"){
            
        }
    }*/
}

