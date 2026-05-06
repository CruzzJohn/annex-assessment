function topStudents(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return [];
  }

  const sorted = [...students].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return a.id - b.id;
  });

  return sorted.slice(0, 3).map(({ id, name }) => ({ id, name }));
}
