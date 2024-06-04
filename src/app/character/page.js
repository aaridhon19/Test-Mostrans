import ListCharacter from "@/components/ListCharacter";

export default function CharacterPage() {
    return (
        <>
            <div className="w-full h-screen bg-base-200">
                <div className="p-4">
                    <h1 className="pl-3">
                    <span className="text-2xl font-bold" style={{fontFamily:"-moz-initial", fontSize:"28px"}}>List Character</span>
                        <hr className="mt-2 mb-4 border-blueGray-300 mx-auto" style={{ opacity: 0.6 }} />
                    </h1>
                    <ListCharacter />
                </div>
            </div >
        </>
    );
}
