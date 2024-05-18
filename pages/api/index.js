import { exec } from 'child_process'

export default function handler(req, res) {
  const { query, start_date, end_date, paper_type, impact_factor } = req.query
  exec(`python scripts/search_papers.py "${query}" "${start_date}" "${end_date}" "${paper_type}" "${impact_factor}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return res.status(500).json({ error: 'Failed to search papers' })
    }
    res.status(200).json({ result: stdout })
  })
}