import Widgets from '@api/data/widgets.json'

export default async function Widget(req, res) {
  const { param } = req.query

  try {
    const found = Widgets.find((pg: any) => pg.name === param)
    if (found) {
      return res.status(200).json(found)
    }
    return res.status(200).json({
      code: 404,
      status: 'bad',
      message: {
        title: '404 Widget Não Encontrado',
        small: 'Desculpe, este widget não pode ser encontrado.',
        span: 'O widget que você está procurando não existe, não existe mais ou foi movido.'
      },
      details: {
        date: new Date()
      }
    })
  } catch (error) {
    res.status(error.status || 500).end(error.message)
  }
}
