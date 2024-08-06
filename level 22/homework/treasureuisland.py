print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/[TomekK]
*******************************************************************************
''')
def welcome():
  print("Welcome to treasure island!")
  print("your mission is to find treasure on island")
  print("You grew up by the sea, dreaming of treasure and adventure. You ran away to become a sailor and eventually became a navigator. Unfortunately, a monstrous storm swallowed your ship. The shipwreck left you stranded. Now, you are searching for gold to rebuild your life.")
  print()
  
def crossroad():
    print('''You're on the crossroad. Where do you want to go?: 
    1. left
    2. right''')
    answer = input("type the answer here: ")
    print()
    if answer == "1":
      seashore()
    elif answer == "2":
      print("Oh no! You've fallen into a hole.")

def seashore(): 
    print('''You have arrived at the ocean seashore. There is an island in the distance across the ocean. what will you do?: 
    1. wait for a boat
    2. swim across''')
    answer = input("type the answer here: ")
    print()
    if answer == "1": 
      island()
    elif answer == "2":
      print("You've eaten by Shark. Game Over!")
      
def island():
    print('''You've reached the island. Where do you want to go?: 
    1. cave
    2. forest
    3. palm tree''')
    answer = input("type the answer here: ")
    print()
    if answer == "1":
      cave()
    elif answer == "2":
      forest()
    elif answer == "3":
      palm_tree()

def cave():
    print('''you are at the cave. you see 3 entrance. which one do you choose?:
    1. left
    2. forward
    3. right''')
    answer = input ("type the answer here: ")
    print()  
    if answer == "1":
      print("Oh no, you fell into the lava!")
    elif answer == "2":
      print("Oh no, ")  
    elif answer == "3":
      print("Congrats! you found the piece of map that leads to the forest")

def forest():
    print('''you are at the forest. you see 3 way. Where do you want to go?:
    1. left
    2. right
    3. forward''')
    answer = input("type the answer here: ")
    print()
    if answer == "1":
      print("You got to the puddle of the forest")
    elif answer == "2":
      print("You lost heart")
    elif answer == "3":
      print("Congrats! You found the hint")
      print("Cool! You found the piece of the map")

def palm_tree():
    print('''you are at the palm tree. you see 3 way. Where do you want to go?
    1. left
    2. right
    3. forward''')
    answer = input("type the answer here: ")
    print()
... (8 lines left)