import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: [true, 'Please provide SKU'],
    },
    name: {
      type: String,
      required: [true, 'Please provide name'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
    },
    category: {
      type: String,
    },
    dimensions: {
      height: {
        type: Number,
      },
      width: {
        type: Number,
      },
      length: {
        type: Number,
      },
    },
    weight: {
      type: Number,
    },
    size: {
      type: Number,
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Product',
    //   required: [true, 'Please provide user'],
    // },
    select: {
      type: Boolean,
      default: false,
    },
  }
  // {
  //   timestamps: true,
  // }
)

export default mongoose.model('Product', ProductSchema)
