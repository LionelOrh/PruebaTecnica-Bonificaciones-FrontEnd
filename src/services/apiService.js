const API_URL = "http://localhost:8000/api/pedido/bonificaciones";

export async function simularBonificaciones(productos) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productos)
  });

  if (!response.ok) {
    throw new Error("Error al conectar con el backend");
  }

  const data = await response.json();
  return data;
}
