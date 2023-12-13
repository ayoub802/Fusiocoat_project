import { Loader } from "@/components/ui/loader";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container">
      <div className="w-full h-screen flex justify-center items-center">
            <Loader />
      </div>
    </div>
  );
}
 
export default Loading;