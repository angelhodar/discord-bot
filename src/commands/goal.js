module.exports = {
  name: "/goal",
  usage: "/goal <message>",
  description:
    "Shows the current project goal. If <message> is set, it updates the goal",
  canBeExecuted: ({ config, db }) => {
    return config.db_url && db;
  },
  handler: async ({ message, args, db }) => {
    let goal = args.join(" ");
    if (args.length) await db.set("goal", goal);
    else goal = await db.get("goal");
    message.channel.send(goal);
  },
};
