import mongoose, { Schema } from 'mongoose'

const usuario = new Schema({    
  email: { type: String, require: true, unique: true, index: true, validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ },
  password: { type: String, require: true },  
  status: { type: String, default: 'active', enum: ['active', 'inactive'] },
}, { timestamps: true })

export default usuario
