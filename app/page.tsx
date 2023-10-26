export default async function Main() {
  const response = await fetch(`http://localhost:3000/api/passage/`, {
    cache: "force-cache",
  });
  const result = await response.json();
  return (
    <section className="flex flex-col justify-evenly">
      <div className="flex h-1/2 flex-col place-items-center justify-center p-3 pb-0 pt-0">
        <p className="text-lg">Today's Reading</p>
        <div className="flex h-2/3 w-full flex-col place-items-center justify-center rounded border-2 bg-muted">
          <p className="text-4xl">{result?.Passage}</p>
          <p className="text-muted-foreground">{result?.Date}</p>
        </div>
      </div>
      <div className="flex h-1/2 flex-col place-items-center justify-center p-3 pb-0 pt-0">
        <p className="text-lg">Previous Readings</p>
        <div className="flex h-2/3 w-full place-items-center justify-center rounded border-2">
          <p className="text-4xl text-muted-foreground">COMING SOON</p>
        </div>
      </div>
    </section>
  );
}
