function pthFactor(n, p) {
  // Basic guard — keeps behavior predictable even with unexpected input
  if (!Number.isInteger(n) || !Number.isInteger(p) || n <= 0 || p <= 0) {
    return 0;
  }

  const lowerFactors = [];
  const upperFactors = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      lowerFactors.push(i);

      const paired = n / i;
       if (paired !== i) {
        upperFactors.push(paired);
      }
    }
  }
  
    const totalFactorsEstimate = lowerFactors.length + upperFactors.length;
       if (p > totalFactorsEstimate) return 0;

  let seen = 0;

  for (const val of lowerFactors) {
    if (++seen === p) return val;
  }

  for (let i = upperFactors.length - 1; i >= 0; i--) {
    if (++seen === p) return upperFactors[i];
  }

  return 0;
}
