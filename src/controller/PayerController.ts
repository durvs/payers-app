import { Request, Response } from 'express'
import _ from 'lodash'
import Payer from '../model/Payer'

class PayerController {
  public async index (req: Request, res: Response): Promise<Response> {
    const payers = await Payer.aggregate([
      { $match: { value: { $gt: 0 } } },
      { $group: { _id: '$documentNr', total: { $sum: '$value' }, since: { $first: '$since' }, doc: { $last: '$$ROOT' } } }
    ])
    return res.json(payers)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const requiredKeys = ['name', 'documentNr', 'value', 'since']
      const params = req.body
      const isValidPayload = _.every(requiredKeys, _.partial(_.has, params))

      if (!isValidPayload) {
        return res.status(400).json({
          message: `Campos obrigatórios faltantes [${requiredKeys.toString()}]`
        })
      }

      const payer = await Payer.create(req.body)
      return res.json(payer)
    } catch (error) {
      return res.status(400).json({
        code: 400,
        message: 'Erro ao criar título de débito',
        detail: JSON.stringify(error)
      })
    }
  }
}

export default new PayerController()
