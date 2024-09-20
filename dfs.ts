class graph extends graph{
  dfs(start: number, visited: Set<number> = new Set<number>()): void{
    visited.add(start);
    console.log(start);//

    const neighbor = this.getAdjList().get(start) || [];
    for(const neighbor of neighbors){
      if(!visisted.has(neighbor)){
        this.dfs(neighbor, visited);
      }
    }
  }
}
