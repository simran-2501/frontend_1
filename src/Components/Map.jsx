import React from 'react'

function Map() {
  return (
    <div>
        <div className="mapouter relative text-right h-full w-full">
            <div className="gmap_canvas overflow-hidden bg-none h-full w-full">
                <iframe className='h-[85vh] w-full' id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                </div>
    </div>
  )
}

export default Map