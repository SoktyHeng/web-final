import Customer from '@/models/Customer';

export async function GET(req, { params }) {
  try {
    const customer = await Customer.findById(params.id);
    if (!customer) {
      return new Response("Customer not found", { status: 404 });
    }
    return new Response(JSON.stringify(customer), { status: 200 });
  } catch (error) {
    console.error("Error fetching customer:", error);
    return new Response("Failed to fetch customer", { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const updatedCustomer = await Customer.findByIdAndUpdate(params.id, data, { new: true });
    if (!updatedCustomer) {
      return new Response("Customer not found", { status: 404 });
    }
    return new Response(JSON.stringify(updatedCustomer), { status: 200 });
  } catch (error) {
    console.error("Error updating customer:", error);
    return new Response("Failed to update customer", { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(params.id);
    if (!deletedCustomer) {
      return new Response("Customer not found", { status: 404 });
    }
    return new Response("Customer deleted successfully", { status: 204 });
  } catch (error) {
    console.error("Error deleting customer:", error);
    return new Response("Failed to delete customer", { status: 500 });
  }
}
