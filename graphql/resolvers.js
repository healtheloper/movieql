const park = {
  name: "Park",
  age: 27,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => park,
  },
};

export default resolvers;
