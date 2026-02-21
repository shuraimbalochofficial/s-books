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



def BubbleSort(): 
    global DataStored
    global NumberItems
    for i in range(NumberItems):
        for j in range(NumberItems - i - 1):
            if DataStored[j] > DataStored[j + 1]:
                DataStored[j], DataStored[j+1] = DataStored[j + 1], DataStored[j]

global DataStored #Array[0:19] OF INTEGEER
global NumberItems # INteger 
# DataStored= []
NumberItems = 0
BubbleSort()

class Tree:
    #self.___TreeName: STRING
    #self.__HeightGrowth: INTEGER
    #self.__MaxHeight: INTEGER
    #self.__MaxWidth: INTEGER
    #self.__Evergreen: STRING

    def __init__(self, pTN, pHG, pMH, pMW, pEG):
        self.__TreeName = pTN
        self.__HeightGrowth = pHG
        self.__MaxHeight = pMH
        self.__MaxWidth = pMW
        self.__Evergreen = pEG