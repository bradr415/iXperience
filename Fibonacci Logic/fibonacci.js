function fibonacciSequence(){
    let list = [0, 1];
    
    for (let i = 2; i < 10; i++) {
      list[i] = list[i - 1] + list[i - 2];
    }
    
    return list;
}

