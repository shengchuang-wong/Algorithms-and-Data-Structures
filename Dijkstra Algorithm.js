class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, prior) {
        this.values.push({val, prior});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.prior - b.prior);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertext(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distance = {};
        const previos = {};
        let path = [];
        let smallest;

        // build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distance[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distance[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previos[vertex] = null;
        }

        // as long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {
                while(previos[smallest]) {
                    path.push(smallest);
                    smallest = previos[smallest];
                }
            }
            if(smallest || distance[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    let candidate = distance[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distance[nextNeighbor]) {
                        distance[nextNeighbor] = candidate;
                        previos[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}