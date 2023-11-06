def transform_string(input_string):
    input_string = input_string.replace(" ","")
    result = ""
    length = len(input_string)
    last = length - 1
    if length % 2 == 0:
        for i in range(length // 2):
            result += input_string[i]
            result += input_string[last]
            last -= 1
    else:
    # if length % 2 == 1:
        length = length - 1
        for i in range(length // 2):
            result += input_string[i]
            result += input_string[last]
            last -= 1
            if i == length // 2 - 1:
                result += input_string[i + 1]
    arr.append(result)
    print(result)
    if result != check:
        transform_string(arr[-1])
arr = []
input_string = input("enter: ")
arr.append(input_string)
check = arr[-1].replace(" ", "")
transform_string(arr[-1])

