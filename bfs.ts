class graph extends Graph{
  bfs(start: number):void{
    const visited = new Set<number>();
    const queue: number[] =[];

    visited.add(start);
    visited.push(start);

    while(queue.lenght >0){
      const node = queie.shift();
      if(node !== undefined){
        console.log(node);

        const neighbors = this.getAdjList().get(node) || [];
        for(const neighbor of neighbors){
          if(!visited.has(neighbor)){
            visted.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
}
