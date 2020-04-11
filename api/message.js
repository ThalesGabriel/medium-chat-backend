module.exports = (app, io) => {

  const get = (req, res) => {
    app.db('messages')
      .select('id', 'name', 'message')
      .then(users => res.json(users))
      .catch(err => res.status(500).send(err))
      
  }

  const create = (req, res) => {
    const message = { ...req.body }
    app.db('messages')
      .insert(message)
      .then(_ => res.status(204).send())
      .catch(err => res.status(500).send(err))
  }

  return { get, create }
}