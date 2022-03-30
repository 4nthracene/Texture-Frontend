import pyperclip
with open("./post.md", "r") as f:
    text = f.read().replace("\n", r"\n")
    print(text)
    pyperclip.copy(text)
