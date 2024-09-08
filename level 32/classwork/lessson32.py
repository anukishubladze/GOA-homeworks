def find_short(s):
    words = s.split(" ")
    sizes = []
    
    for word in words:
        sizes.append(len(word))
    
    return min(sizes)