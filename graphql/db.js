export const people = [
  {
    id: "1",
    name: "Park",
    age: 27,
    gender: "male",
  },
  {
    id: "2",
    name: "Sang",
    age: 24,
    gender: "female",
  },
  {
    id: "3",
    name: "Jin",
    age: 22,
    gender: "male",
  },
  {
    id: "4",
    name: "Potato",
    age: 21,
    gender: "none",
  },
  {
    id: "5",
    name: "Kimchi",
    age: 25,
    gender: "ox",
  },
];

export const getById = (id) => {
  const filterPeople = people.filter((person) => person.id === String(id));
  return filterPeople[0];
};
