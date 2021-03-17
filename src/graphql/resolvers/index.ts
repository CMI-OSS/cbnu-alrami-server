import Cafeteria from "../../models/cafeteria";

const resolvers = {
  Query: {
    async cafeteria(_, args) {
      try {
        const cafeteria = await Cafeteria.findOne({
          name: args.name,
          date: args.date,
        });
        return cafeteria;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};

export default resolvers;
