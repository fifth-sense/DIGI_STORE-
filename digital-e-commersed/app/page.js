
import Hero from "./_components/Hero";
import Productlist from "./_components/productlist";

export default function Home() {
  return (
    <div >
      <Hero/>
      <div className="p-10 md:px-36 xl:px-48">
        <Productlist/>
      </div>

    </div>
  );
}
