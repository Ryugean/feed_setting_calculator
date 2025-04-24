import React from 'react'

function page() {
  return (
    <>
      <div className="flex flex-col items-center mt-15">
        <div className="my-8 text-center">
            <h1 className="font-bold text-6xl text-fuchsia-950">Instructions</h1>
        </div>
        <div className='w-1/4'>
            <ul className='list-disc'>
                <li className='p-1 bg-fuchsia-100'>
                    Ensure all settings are correctly adjusted to default F27 = 25,000 RPM and F24 = 20 TPI.
                </li>
                <li className='p-1 bg-fuchsia-100'>
                    Enter the required Feed (Ne), Output (Ne), and Delivery Setting (TPI) values in the calculator.
                </li>
                <li className='p-1 bg-fuchsia-100'>
                    Press the &quot;Calculate&quot; button to determine the feed and delivery settings.
                </li>
                <li className='p-1 bg-fuchsia-100'>
                    Use the calculated values to configure the microcontroller.
                </li>
                <li className='p-1 bg-fuchsia-100'>
                    Verify the microcontroller is functioning correctly by monitoring output.
                </li>
                <li className='p-1 bg-fuchsia-100'>
                    Adjust F27 and F24 if required based on material and production needs.
                </li>
                <li className='p-1 bg-fuchsia-100'>
                    Accuracy of the calculated feed setting is within ±1 if all defaults are maintained.
                </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default page
