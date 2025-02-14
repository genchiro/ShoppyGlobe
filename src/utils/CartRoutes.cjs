const express = require("express");
const router = express.Router();
const Cart = require("./Cart.cjs");
const Authorization = require("./Authorization.cjs");
router.post("/", Authorization, async (req, res) => {
  const { productId, quantity } = req.body;
  const ID = req.user.id;

  try {
    let cart = await Cart.findOne({ ID });

    if (!cart) {
      cart = new Cart({ ID, product: [] });
    }

    const productIndex = cart.product.findIndex(p => p.ProductID.toString() === productId);

    if (productIndex > -1) {
      cart.product[productIndex].Quantity += quantity;
    } else {
      cart.product.push({ ProductID: productId, Quantity: quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error Adding Items to the Cart" });
  }
});

router.put("/:id", Authorization, async (req, res) => {
  const { quantity } = req.body;
  const ID = req.user.id;

  try {
    const cart = await Cart.findOne({ ID });

    if (!cart) {
      return res.status(404).json({ message: "Cart Not Found" });
    }

    const product = cart.product.find(p => p.ProductID.toString() === req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found in Cart" });
    }

    product.Quantity = quantity;
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error Updating the Cart" });
  }
});

router.delete("/:id", Authorization, async (req, res) => {
  const ID = req.user.id;

  try {
    const cart = await Cart.findOne({ ID });

    if (!cart) {
      return res.status(404).json({ message: "Cart Not Found" });
    }

    cart.product = cart.product.filter(p => p.ProductID.toString() !== req.params.id);

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error Deleting the Item" });
  }
});

module.exports = router;
