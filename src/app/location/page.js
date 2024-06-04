import ListLocation from "@/components/ListLocation";

export default function LocationPage() {
  return (
    <>
      <div className="w-full h-screen bg-base-200">
        <div className="p-4">
          <h1 className="pl-3">
            <span className="text-2xl font-bold" style={{fontFamily:"-moz-initial", fontSize:"28px"}}>List Location</span>
            <hr className="my-2 border-blueGray-300 mx-auto" style={{ opacity: 0.6 }} />
          </h1>
          <ListLocation/>
        </div>
      </div >
    </>
  );
}
