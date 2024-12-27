def play_rps(player1, player2):
    """
    Determine the winner of a rock, paper, scissors game.
    
    Args:
        player1: String representing player 1's move ('rock', 'paper', or 'scissors')
        player2: String representing player 2's move ('rock', 'paper', or 'scissors')
    
    Returns:
        String indicating the winner or if it's a tie
    """
    moves = {'rock', 'paper', 'scissors'}
    
    # Validate inputs
    if player1.lower() not in moves or player2.lower() not in moves:
        return "Invalid move! Please use 'rock', 'paper', or 'scissors'"
    
    # Convert to lowercase for comparison
    p1, p2 = player1.lower(), player2.lower()
    
    # Check for tie
    if p1 == p2:
        return "Tie!"
        
    # Define winning conditions
    if ((p1 == 'rock' and p2 == 'scissors') or 
        (p1 == 'paper' and p2 == 'rock') or 
        (p1 == 'scissors' and p2 == 'paper')):
        return "Player 1 wins!"
    else:
        return "Player 2 wins!"

print(play_rps('rock', 'scissors'))  # Output: "Player 1 wins!"
print(play_rps('paper', 'rock'))     # Output: "Player 1 wins!"
print(play_rps('rock', 'paper'))     # Output: "Player 2 wins!"
print(play_rps('rock', 'rock'))      # Output: "Tie!"
