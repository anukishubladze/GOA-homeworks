def manual_count(string, count_char):
  """Counts the occurrences of a character in a string manually.

  Args:
    string: The input string to search in.
    count_char: The character to count.

  Returns:
    The number of occurrences of the character in the string.
  """

  count = 0
  for char in string:
    if char == count_char:
      count += 1
  return count

# Example usage:
my_string = "hello world"
char_to_count = "l"
result = manual_count(my_string, char_to_count)
print(f"The character '{char_to_count}' appears {result} times in the string.")