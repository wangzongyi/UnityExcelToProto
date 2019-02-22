from collections.abc import Iterable
import os
import chardet


'''
def f1(a, b, c=3, *d, **e):
    print(a, b, c, d, e)


f1(1, 2, 3)


def fact(n):
    return fact_iter(n, 1)


def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)


table = list(range(0, 100))
print(table[0:11:2])
print(table[-10:-1])

classmate = {1001: '王宗义', 1002: '王允', 1003: '向伟铮'}

for mate_id, name in classmate.items():
    print(mate_id, name)

ids = [1001, 1002, 1003]

for mate in enumerate(classmate):
    print(mate)

print([x * x for x in range(1, 5)])
print([d for d in os.listdir('.')])

_temple = (1,)
print(type(_temple))
g = (x * x for x in range(10))
for tg in g:
    print(tg)
print("new:", [m + n for m in 'ABCD' for n in 'XYZ'])
'''


def odd():
    print('step 1')
    yield 1
    print('step 2')
    yield(3)
    print('step 3')
    yield(5)


o = odd()
next(o)
next(o)
next(o)



