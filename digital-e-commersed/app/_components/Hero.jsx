import { Button } from "@/components/ui/button";
import  Image  from "next/image";

const Hero = () =>{
    return(
        <div className="bg-green-700 p-10 md:px-28 lg:px-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
                <div>
                    <h2 className="text-extabold text-5xl text-white">Speed up your creative workflow </h2>
                    <p className="text-gray-200 mt-3">Join a growing family of 43,436 designers, creator 
                        and maker from around the world! </p>
                    <div className="flex gap-5 mt-8">
                        <Button>Explore</Button>
                        <Button className='bg-red-500'>Sell</Button>
                    </div>
                 </div>
                <div className="p-1 pr-10">
                    <Image  src={'/pc2.png'} alt={'pc'} width= {300} height={400}/>
                </div>

            </div>

        </div>
    )
}
export default Hero;