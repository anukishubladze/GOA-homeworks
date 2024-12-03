import math

def count_area(*args):
    if len(args) == 2:  # მართკუთხედი
        length, width = args
        return length * width
    elif len(args) == 1:  # წრე
        radius = args[0]
        return math.pi * radius ** 2
    elif len(args) == 3:  # სამკუთხედის ფართობი ჰერონის ფორმულით
        a, b, c = args
        # ჰერონის ფორმულა: ს = √(s(s-a)(s-b)(s-c)), სადაც s = (a+b+c)/2
        s = (a + b + c) / 2
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return area
    else:
        return ""

print(count_area(4, 5))  # მართკუთხედი: 4 * 5 = 20
print(count_area(7))     # წრე: π * 7^2
print(count_area(3, 4, 5))  # სამკუთხედის ფართობი ჰერონის ფორმულით