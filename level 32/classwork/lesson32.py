def find_short(s):
    words = s.split(" ")
    min_length = len(words[0])
    min_index = 0
    
    for index in range(len(words) -1, -1, -1):
        if len(words[index]) <= min_length:
            min_length = len(words[index])
            min_index = index
    
    return [words[min_index], min_index]


print(find_short("the This sample the sentence the")) 

    

