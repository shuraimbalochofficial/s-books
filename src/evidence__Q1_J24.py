#Summer 24
# Trees.txt 

def Initialise():
    global DataStored
    global NumberItems 
    NumberItems = int(input("Enter total number of item to insert: "))
    while NumberItems < 1 or NumberItems > 20:
        print("Input out of range (1-20)")
        NumberItems = int(input("Enter total Number of items to insert "))

    for i in range(NumberItems):
        DataStored.append(int(input("Enter an integer value to store")))

# global DataStored #Array[0:19] OF INTEGEER
# global NumberItems # INteger 
# DataStored= []
# NumberItems = 0

def BubbleSort(): 