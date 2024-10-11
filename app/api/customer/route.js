import Customer from '@/models/Customer';

export async function GET(req) {
  try {
    const customers = await Customer.find();
    return new Response(JSON.stringify(customers), { status: 200 });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return new Response("Failed to fetch customers", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const newCustomer = new Customer(data);
    await newCustomer.save();
    return new Response(JSON.stringify(newCustomer), { status: 201 });
  } catch (error) {
    console.error("Error adding customer:", error);
    return new Response("Failed to add customer", { status: 500 });
  }
}
