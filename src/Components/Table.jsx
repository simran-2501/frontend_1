import React from 'react'
import {Video, MapPin} from 'lucide-react'
function Table() {
  return (
    <div className='py-10'>
      <table className="border-collapse w-fit text-center m-auto">
  <tr className="font-bold bg-gray-400">
    <td className="border px-20 py-2 border-gray-300">S.no</td>
    <td className="border px-20 py-2 border-gray-300">Camera Id</td>
    <td className="border px-20 py-2 border-gray-300">Geo Location</td>
    <td className="border px-20 py-2 border-gray-300">Dangerous Objects</td>
    <td className="border px-20 py-2 border-gray-300">Clip</td>
  </tr>
  <tr className="bg-white">
    <td className="border px-20 py-2 border-gray-300">1.</td>
    <td className="border px-20 py-2 border-gray-300">XYZ123</td>
    <td className="border px-20 py-2 border-gray-300"><p>Preet vihar, 
Jaipur Rajasthan, 
482003</p>
<div className='flex bg-green-600 text-white text-sm font-bold m-auto mt-4 w-fit rounded-2xl py-2 px-3'>
    <p>Maps</p>
    <MapPin className='text-red-600 ml-2'/>
</div>
</td>
    <td className="border px-20 py-2 border-gray-300">
        <p>Knife: 1</p>
        <p>Guns: 0</p>
        <p>Sharp Objects: 6</p>
        <p>Explosive: 0</p>
    </td>
    <td className="border px-20 py-2 border-gray-300"><Video /></td>
  </tr>
</table>
    </div>
  )
}

export default Table