def match_my_husband(abilities, months):
    # Calculate husband's usefulness (sum of abilities)
    usefulness = sum(abilities)
    
    # Calculate woman's needs after decay
    # N(t) = N₀(1 - r)^t
    initial_needs = 100
    decay_rate = 0.15
    current_needs = initial_needs * ((1 - decay_rate) ** months)
    
    # Return result based on comparison
    return "Match!" if usefulness >= current_needs else "No match!"

# Example 1: Fresh signup (0 months)
print(match_my_husband([15, 26, 19], 0))  # "No match!" (60 < 100)

# Example 2: After 6 months
print(match_my_husband([15, 26, 19], 6))  # "Match!" (60 > 37.974...)

# Example 3: Very low usefulness
print(match_my_husband([5, 5, 5], 12))    # "No match!" (15 < 14.409...)