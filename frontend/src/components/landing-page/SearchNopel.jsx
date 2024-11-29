import { IoSearchSharp } from "react-icons/io5";

export default function SearchNopel() {
    return (
        <form className='flex items-center gap-2'>
            <input 
                type="text" 
                placeholder='Masukkan nopel...' 
                className='input input-bordered rounded-full w-64'
            />
            <button type="submit" className='btn btn-circle'>
                <IoSearchSharp className='w-6 h-6 outline-none'/>
            </button>
        </form>
    )
};