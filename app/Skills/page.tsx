import Navbar from "../component/navbar"
function Skills(){
    return(
        <div className="p-5">
        <Navbar/>
        <div className="p-9 flax flex-col gap-7">
            <h1 className="text-4xl font-bold text-orange-600">CSS
                <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700">
                    <div className="bg-blue-900 rounded-full w-3/5 justify-center text-center text-lg">50%</div>
                </div>
            </h1>
            <h1 className="text-4xl font-bold text-orange-600">HTML
                <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700">
                    <div className="bg-blue-900 rounded-full w-4/5 justify-center text-center text-lg">60%</div>
                </div>
                </h1>
                <h1 className="text-4xl font-bold text-orange-600">TYPESCRIPT
                <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700">
                    <div className="bg-blue-900 rounded-full w-4/5 justify-center text-center text-lg">90%</div>
                </div>
                </h1>
                <h1 className="text-4xl font-bold text-orange-600">MARKETING
                <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700">
                    <div className="bg-blue-900 rounded-full w-4/5 justify-center text-center text-lg">90%</div>
                </div>
                </h1>
                <h1 className="text-4xl font-bold text-orange-600">MS OFFICE
                <div className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-700">
                    <div className="bg-blue-900 rounded-full w-4/5 justify-center text-center text-lg">90%</div>
                </div>
                </h1>
                
        </div>


        </div>

    )
}
export default Skills