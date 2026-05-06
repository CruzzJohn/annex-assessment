function pthFactor(n, p) {
  // Basic guard — keeps behavior predictable even with unexpected input
  if (!Number.isInteger(n) || !Number.isInteger(p) || n <= 0 || p <= 0) {
    return 0;
  }

  const lowerFactors = [];
  const upperFactors = [];

  // Iterate only up to sqrt(n) — reduces complexity significantly for large n (<= 1e15)
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      lowerFactors.push(i);

      const paired = n / i;

      // Avoid duplicating the square root when n is a perfect square
      if (paired !== i) {
        upperFactors.push(paired);
      }
    }
  }

  // Early exit if p is clearly larger than possible factors
  const totalFactorsEstimate = lowerFactors.length + upperFactors.length;
  if (p > totalFactorsEstimate) return 0;

  // Traverse in sorted order without explicit sort (already partially ordered)
  let seen = 0;

  for (const val of lowerFactors) {
    if (++seen === p) return val;
  }

  // upperFactors were collected in descending order → reverse traversal
  for (let i = upperFactors.length - 1; i >= 0; i--) {
    if (++seen === p) return upperFactors[i];
  }

  return 0;
}