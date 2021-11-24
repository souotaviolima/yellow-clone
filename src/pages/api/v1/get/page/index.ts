import Routers from '@api/data/pages.json'

export default async function Page(req, res) {
  const { param } = req.query
  try {
    const pageFound = Routers
    if (pageFound) {
      return res.status(200).json(pageFound)
    }
    return res.status(200).json({
      code: 404,
      status: 'bad',
      message: {
        title: '404 Página Não Encontrada',
        small: 'Desculpe, esta página não pode ser encontrada.',
        span: 'A página que você está procurando não existe, não existe mais ou foi movido.'
      },
      details: {
        date: new Date()
      }
    })
  } catch (error) {
    res.status(error.status || 500).end(error.message)
  }
}
