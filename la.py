page_number = 3
limit = 9

# Page 1 = 1 to 9
# Page 2 = 10 to 18

a = [i for i in range(100)]

#TODO:              From                        To
#TODO:                 1                        9
#TODO:                10                        18

start = ((page_number - 1) * limit)
for i in range(start, limit + start):
    print(a[i] + 1)