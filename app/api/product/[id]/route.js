import Product from "@/models/Product"; 

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.price) {
    return new Response("Missing fields", { status: 400 });
  }
  const product = new Product(body);
  await product.save();
  return Response.json(product);
}

export async function PUT(request) {
  const body = await request.json();
  const product = await Product.findByIdAndUpdate(body._id, body, { new: true });
  return Response.json(product);
}

export async function DELETE(request, { params }) {
  const id = params.id;
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    return new Response("Product not found", { status: 404 });
  }
  return new Response(null, { status: 204 }); 
}

