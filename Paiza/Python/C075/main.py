input_line = input()
input_list = input_line.split(" ")
n = int(input_list[0])
m = int(input_list[1])
p = 0

for i in range(m):
    input_line = input()
    price = int(input_line)
    if p < price:
        n = n - price
        point = int(price*0.1)
        p = p + point
    else:
        p = p - price
    print(n, p)
