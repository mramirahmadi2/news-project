export default async function titls({url}:any) {
    const res = await fetch(`${url}/titls`, {
      cache: "force-cache",
    });
    return res.json();
  }