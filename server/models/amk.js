import mongoose from 'mongoose';

const Amk = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
})
  

const AmkSchema = mongoose.model('Amk', Amk);

export default AmkSchema;