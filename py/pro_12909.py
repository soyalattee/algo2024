# url: https://school.programmers.co.kr/learn/courses/30/lessons/12909
# 스택/큐 문제 

#입출력 예제 
s = ["()()","(())()",")()()","(()())"]

def solution ( s ):
    answer = True
    arr = list(s)
    stack = [] #스택입니다.
    for value in arr:
        if value == '(':
            stack.append(value)
        elif value == ')' and len(stack) == 0 : 
            answer = False
            break
            #있으면 스택하나 빼기 
        elif value == ')' :
            stack.pop()
    # for문 다 돌았는데 스택에 뭔가 있으면 false  W
    if len(stack) > 0 :
        answer = False

    return answer


    # stack.append : 원소넣기
    # stack.pop : 위에꺼 빼기 
    # stack[]
    
print( solution(s[2]))