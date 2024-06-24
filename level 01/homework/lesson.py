from turtle import*


#we want to paint a house
speed(10)
#step 1: draw a square
width(7)
color("red")
forward(200)
left(90)

forward (200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawning a door

forward (70)
color("blue")
begin_fill()
left (90)   #height of door
forward (120)
right (90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color ("blue")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill ()


#drawning a window



penup()
left (45)
forward(30)
left(75)
forward(40)
pendown()
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
penup()
forward(110)
pendown()
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)

exitonclick()
