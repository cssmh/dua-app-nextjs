import Home from "@/components/Home/Home";

 const   page = async () => {
  const data = await fetch("https://job-task-server-neon.vercel.app/dua");
  const dataDua = await data.json();
  return (
    <div>
      <Home dataDua={dataDua}/>
    </div>
  );
}
export default page
