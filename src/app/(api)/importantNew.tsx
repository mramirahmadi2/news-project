export default async function importantNew({url}:any) {
    const res = await fetch(`${url}/importNew`, {
      cache: "force-cache",
    });
    return res.json();
  }