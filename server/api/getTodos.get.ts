export default defineEventHandler( async () => {
  
  const db = hubDatabase();
  const rows = await db.prepare('SELECT * FROM todos').raw();
  
  return {
    todos: "asd"
  }
})