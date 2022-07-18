function preload()
{
}

function setup()
{
    canvas = createCanvas(640, 480); 
    canvas.position(110, 250); 
    video = createCapture(VIDEO); 
    video.hide(); 
    tint_color = "";
}

function draw()
{
    image(video , 230 , 150, 220 , 200);

    fill(255, 0, 0);
    stoke(255, 229, 180);
    circle(50, 50, 80);

    circle(50, 430, 80);

    circle(590, 50 , 80);

    circle(590, 430 , 80);

    fill(0, 128, 0);
    stoke(0, 129, 0);
    rect(90, 40, 460 , 20);

    rect(90, 420, 460 , 20);

    rect(90, 290, 460 , 20);

    rect(290, 90, 460 , 20);
}

function take_snapshot()
{
    save('student_name.png');
}