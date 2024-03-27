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
    //각 nodes 인덱스는 노드번호이고 보유한값(배열)은 linked노드다. 
    const nodes = Array.from(Array(nodeMax+1), () => Array(0))
    console.log(nodes)
    //생성노드 찾기: 아무도 방문하지않으며 간선이 두개이상인 노드가 생성노드다. + nodes 정의하기
    for(let i in edges){
        const sNode = edges[i][0];
        const eNode = edges[i][1];
        nodes[sNode].push(eNode) //간선추가
        
        visitedArr[eNode] = true;
    }
    //아무도 방문하지않으나 간선은 1개이상이면 생성노드.
    for(let i =1; i <= nodeMax; i++){
        if(visitedArr[i] === false && nodes[i].length > 1){
            createNode = i;
            break;
        }
    }
    console.log(`생성정점은 ${createNode}`)
    //생성노드에 연결된 간선으로 그래프노드로 이동하여 해당그래프가 뭔지 찾기 
    nodes[createNode].forEach((el)=>{
        const graphType = circuit(nodes,el);
        if(graphType === 'eight') {
            eightGraph+=1;
        }else if(graphType ==='donut'){
            donutGraph+=1;
        }else if(graphType==='line'){
            lineGraph+=1;
        }
    })
    

    var answer = [createNode,donutGraph,lineGraph,eightGraph];
    console.log("정답, ", answer)
    return answer;
}

//start노드를 시작으로 nodes를 참고해 그래프 순회 
function circuit (nodes,startNode ) {
    console.log(nodes,startNode)
    let curNode = startNode;
    let visitedArr = new Array(nodes.length+1).fill(false);
    while(true){
        // 간선이 두개면 8그래프
        if( nodes[curNode].length >1){
            return 'eight';
        }
        if(visitedArr[curNode] === true  && nodes[curNode].length == 1){
            return 'donut';
        }
        if(nodes[curNode].length == 0){
            return 'line';
        }
        curNode = nodes[curNode][0];
        visitedArr[curNode] = true;
    }
}

solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]);