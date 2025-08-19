import { readFileSync } from 'fs'

export default defineEventHandler( async () => {
  
  const db = hubDatabase()
  //const result = await db.exec('SELECT * FROM _hub_migrations')
  
  //const seedSql = readFileSync('modules/admin/db-queries/seed-admin.sql', 'utf-8')
  //db.exec(seedSql)
  
  const result = await db.prepare('SELECT * FROM todos').all()
  return result
})