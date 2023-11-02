export async function GET() {
    const res = await fetch("https://www.jsonkeeper.com/b/VHHT");
    const cardData = await res.json();

    return Response.json(cardData);
}