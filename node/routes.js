const express = require('express')
const routes = express.Router()

routes.get('/:table', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`SELECT * FROM ${req.params.table}`, (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/:table', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`INSERT INTO ${req.params.table} set ?`, [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send({msg: 'Inserted succesfully!', value: rows})
        })
    })
})

routes.delete('/:table/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`DELETE FROM ${req.params.table} WHERE id = ${req.params.id}`, (err, rows)=>{
            if(err) return res.send(err)

            res.send('Deleted succesfully!')
        })
    })
})

routes.put('/:table/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`UPDATE ${req.params.table} set ? WHERE id = ${req.params.id}`, [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Updated succesfully')
        })
    })
})

module.exports = routes