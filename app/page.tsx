import ListView from "./components/ListView";

const getNotes = async () => {
  const res = await fetch("http://localhost:3000/notes", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Error found in fetch api");
  }
  return res.json();
};

export default async function Home() {
  const { data } = await getNotes();
  return (
    <div className="flex justify-center mt-3 ">
      <ListView data={data} />
    </div>
  );
}
