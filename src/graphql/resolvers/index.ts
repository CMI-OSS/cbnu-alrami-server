import Cafeteria from "../../models/cafeteria";
import Restaurant from "../../models/restaurant";
import Schedule from "../../models/schedule";

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
    async restaurants(_, args) {
      try {
        let restaurants;
        if (!args.location) {
          restaurants = await Restaurant.find();
          return restaurants;
        }
        restaurants = await Restaurant.find({
          location: args.location,
        });
        return restaurants;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async restaurant(_, args) {
      try {
        const restaurant = await Restaurant.findOne({
          location: args.location,
          name: args.name,
        });
        return restaurant;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async schedule(_, args) {
      try {
        const regDate = new RegExp(
          `${args.year}-${args.month <= 9 ? "0" + args.month : args.month}`
        );
        const schedule = await Schedule.find({
          $or: [{ start_date: regDate }, { end_date: regDate }],
        });
        return schedule;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};

export default resolvers;
