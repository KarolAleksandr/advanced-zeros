module.exports = function getZerosCount(number, base) {
  // your implementation
  let primeFactors = [];
  for (let i = 2; i <= base; i++) {
      let countOfInd, N, ZeroCount;
      countOfInd = 0;
      ZeroCount = 0;
      if (base % i === 0) {
          while (base % i === 0) {
            countOfInd++;
              base = base / i;
          }    
          N = number;  
          while (N / i > 0) {
            ZeroCount += Math.floor(N / i);
              N = N / i;
          }
          primeFactors.push(ZeroCount / countOfInd);
          primeFactors.sort((a,b) => {
            return a-b;
          });
        }                
  }
  return Math.floor(primeFactors[0]);
}