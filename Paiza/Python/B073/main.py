# import fileinput
# nm = input().split(" ")
# n = int(nm[0])
# m = int(nm[1])
#
# trees = input().split(" ")
#
# for line in fileinput.input():
#     print(line)

    # 行数を取得
num_lines = int(input())

# 1行ずつ取り出し
for i in range(num_lines):
    line = input()
    print(i+1, "行目:" + line)
