import React from 'react'
// import { Button } from "flowbite-react";
import { Link } from "react-router-dom"; 
const confirm = () => {
  return (
    <div>
<section className="my-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
		<img src="/green-tick.gif" className="h-16 w-16"/>
		<p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-300">You are successfully Registered.</p>
	</div>
    <div className="flex justify-center items-center">
            <button>
              <Link to="/showstudent" >
                Back to homepage
              </Link>
            </button>
          </div>
</section>

    </div>
  )
}

export default confirm