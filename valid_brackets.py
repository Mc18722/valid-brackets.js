def is_valid_brackets(s):
    stack = []
    bracket_pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for char in s:
        if char in "({[":
            stack.append(char)
        elif char in ")}]":
            if not stack or stack.pop() != bracket_pairs[char]:
                return False

    return not stack

# Testing the is_valid_brackets function
print(is_valid_brackets("()"))       # Output: True
print(is_valid_brackets("()[]{}"))   # Output: True
print(is_valid_brackets("]"))        # Output: False
print(is_valid_brackets("[)]"))      # Output: False
print(is_valid_brackets("}[]{"))     # Output: False
