import { Schema, model, Document } from 'mongoose'
interface IPayer extends Document {
  name: string,
  documentNr: string,
  value: number,
  since: Date,
  isCompliant: boolean
}
const PayerSchema = new Schema({
  name: { type: String, required: true },
  documentNr: { type: String, index: true, required: true },
  value: { type: Number, required: true },
  since: { type: Date, required: true }
},
{ timestamps: true })

PayerSchema.methods.isCompliant = function (): boolean {
  return this.value > 0 || this.since === null
}

export default model<IPayer>('Payer', PayerSchema)
