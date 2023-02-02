const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());

let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});
app.post("/products", (req, res) => {
  console.log(req.body);
  const newProduc = { ...req.body, id: products.length + 1 };
  products.push(newProduc);
  res.send(newProduc);
});

app.put("/products", (req, res) => {
    const newData=req.body
  const productLound = products.find((product) => {
    return product.id === parseInt(req.params.id);
  });
  if (!productLound)
    return res.status(404).json({
      message: "product not found",
    });
    products =products.map(p=>p.id===parent(req.params.id) ? {...p, ...newData} : p)
  res.json({
    message:"producto update"
  })
});

app.delete("/products/:id", (req, res) => {
  const productLound = products.find((product) => {
    return product.id === parseInt(req.params.id);
  });
  if (!productLound)
    return res.status(404).json({
      message: "product not found",
    });

  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  const productLound = products.find((product) => {
    return product.id === parseInt(req.params.id);
  });
  if (!productLound)
    return res.status(404).json({
      message: "product not found",
    });
  res.send(productLound);
});

app.listen(3000);
console.log("server corriendo en 3000");
