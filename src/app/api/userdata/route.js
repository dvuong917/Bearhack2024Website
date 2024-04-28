export const POST = async (req) => {
  const { state, city, zip, search } = await req.json();

  // fetch("", {
  //     method: "GET"
  // })

  return Response.json({ state, city, zip, search });
};
