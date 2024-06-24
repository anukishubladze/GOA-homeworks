choice = input("Please enter operation (+, -, *, /): ")

num1 = int(input("Please enter first number: "))
num2 = int(input("Please enter second number: "))

if choice == '+':
    print(num1 + num2)
elif choice == '-':
    print(num1 - num2)
elif choice == '*':
    print(num1 * num2)
elif choice == '/':
    print(num1 / num2)
else:
    print("Invalid Operation")