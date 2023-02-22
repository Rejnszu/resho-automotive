export async function showOffers() {
  try {
    const response = await fetch(`http://localhost:3000/api/manage-offers`);
    if (response.ok) {
      const data = await response.json();

      const offers = data.offers;

      return offers;
    } else {
      const data = await response.json();
      throw new Error(
        data.message || "Someting went wrong while sending offer"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
