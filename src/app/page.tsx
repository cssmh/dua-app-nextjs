import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

const page = async () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default page;
