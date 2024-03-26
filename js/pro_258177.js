//[[2, 3], [4, 3], [1, 1], [2, 1]]
function solution(edges) {
    let createNode = 0; 
    let donutGraph = 0;
    let lineGraph = 0;
    let eightGraph = 0;
    let nodeMax = 0; //가장 큰 노드번호가 노드 갯수
    
    //노드길이구하기 , 이차배열 1차로만들고 Math 써도될듯 
    for(let i in edges){
        if(edges[i][0] > nodeMax){
            nodeMax = edges[i][0]
        }
        if(edges[i][1] > nodeMax){
            nodeMax = edges[i][1]
        }
    }
    const visitedArr = new Array(nodeMax+1).fill(false);
    const nodes = Array.from(Array(nodeMax+1), () => Array(0))
    console.log(nodes)
    //생성노드 찾기. 아무도 방문하지않으며 간선이 두개이상인 노드가 생성노드다. + nodes 정의하기
    for(let i in edges){
        const sNode = edges[i][0];
        const eNode = edges[i][1];
        nodes[sNode].push(eNode) //간선추가
        
       visitedArr[eNode] = true;
    }
    for(let i =1; i <= nodeMax; i++){
        console.log(visitedArr)
        if(visitedArr[i] === false && nodes[i].length > 1){
            createNode = i;
            break;
        }
    }
    console.log(`생성정점은 ${createNode}`)
    //방문배열초기화 
    visitedArr.fill(false);
    
    const curNode = 1; // 1번노드부터 돌아보자 for문으로 
    const visiteNodeCnt = 1;
//     while(false){
//         visitedArr[curNode] = true;
//         const nextNode = nodes[curNode];
//         visiteNodeCnt += 1;
//         //원래노드로 돌아왔다. 
//         if(visitedArr[nextNode] === true){
//             //간선수 == 정점수면 도넛+1
//             //아니면 8자 +1 
//         }
        
//     }

    var answer = [];
    return answer;
}

solution([[2, 3], [4, 3], [1, 1], [2, 1]]);