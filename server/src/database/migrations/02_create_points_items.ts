import Knex from 'knex';

export async function up(knex: Knex) {
  // criar a tabela
  return knex.schema.createTable('point_items', (table) => {
    table.increments('id').primary();
    // prettier-ignore
    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points');
    // prettier-ignore
    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items');
  });
}
export async function down(knex: Knex) {
  // voltar atras (deletar a tabela)
  return knex.schema.dropTable('point_items');
}
