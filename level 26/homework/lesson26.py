def transform_list(numbers):
  new_list = []
  for num in numbers:
    if num % 2 == 0:
      new_list.append(num // 2)  # Integer division for even numbers
    else:
      new_list.append(num * 2)

  return new_list

