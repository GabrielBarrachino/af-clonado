const sortableListElement = document.getElementById("sortable-list");

const sortable = Sortable.create(sortableListElement, {
  animation: 150,
});

console.log(sortable);

export { sortable };
