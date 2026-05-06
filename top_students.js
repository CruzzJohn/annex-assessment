function topStudents(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return [];
  }

  // Clone before sorting to avoid mutating original input (defensive practice)
  const sorted = [...students].sort((a, b) => {
    // Primary: higher scores first
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    // Secondary: smaller ID preferred for deterministic ordering
    return a.id - b.id;
  });

  // Only extract what's needed — avoids unnecessary data exposure
  return sorted.slice(0, 3).map(({ id, name }) => ({ id, name }));
}
