import { Link } from "react-router-dom";
import RequirementNopel from "./RequirementNopel";
import SearchNopel from "./SearchNopel";

export default function NopelPage() {
    return (
        <div>
            <Link to={'/masuk'} className="flex justify-end">
                <div className="btn">Masuk</div>
            </Link>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-5">
                    <SearchNopel />
                </div>
                <div className="mt-5 w-full bg-gray-100 p-4 shadow-lg rounded-lg">
                    <h1 className="text-center">Persyaratan</h1>
                    <RequirementNopel />
                </div>
            </div>
        </div>
    )
};