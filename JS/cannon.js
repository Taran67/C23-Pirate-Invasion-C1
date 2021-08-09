class Canon{
    constructor(x,y,w,h,ang){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.ang=ang;


    }
    display(){
        fill("#676e6a")
        push()
        translate(this.x, this.y);
        rotate(this.ang);
        rect(-10,-20, this.w, this.h)
        pop()

        
        arc(this.x-30, this.y+90, 140, 200,  PI, PI*2)
        
    }
}