class graph{
  private adjList: Map<number, number[]>;

  constructor(){
    this.adjList = new Map<number, number[]>();
  }

  addEdge(v: number, w: number): void{
    if(!this.adjList.has(v)){
      this.adjList.set(v, []);
    }

    getAdjLIst(): Map<number, number[]>{
      return this.adjList;
    }
  }
}
