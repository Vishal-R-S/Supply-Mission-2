class sides
{
    constructor(x,y,width,height)
    {
        var sides_options = {isStatic : true}
        this.body = Bodies.rectangle(x,y,width,height,sides_options);
        fill("red");
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}