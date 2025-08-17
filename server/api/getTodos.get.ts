export default defineEventHandler( async () => {
  
  const db = hubDatabase()
  //const result = await db.exec('SELECT * FROM _hub_migrations')
  const result = await db.prepare('SELECT * FROM _my_table').all()

  return {
    todos: result
  }
})