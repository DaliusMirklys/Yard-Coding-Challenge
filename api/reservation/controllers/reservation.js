
module.exports = {
//   async create(ctx) {
//     return await strapi.services.reservation.create({
//       ...ctx.request.body,
//       payUntil: new Date(),
//     });
//   },
  async updateStage(ctx) {
    const { id, stage } = ctx.params;
    return await strapi.services.reservation.update({ id }, { stage });
  },
};
