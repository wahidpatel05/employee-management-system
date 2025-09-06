import React from 'react'

function CreateTask() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="flex flex-wrap gap-5 bg-white/10 backdrop-blur-md p-10 rounded-lg items-start justify-between w-full max-w-4xl shadow-lg">
        {/* Left side */}
        <div className="w-full md:w-1/2 space-y-5">
          <div>
            <h3 className="mb-2 font-semibold">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Date</h3>
            <input
              type="date"
              className="w-full p-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Assign to</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="w-full p-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full p-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right side (Description only) */}
        <div className="w-full md:w-1/2 space-y-5">
          <div>
            <h3 className="mb-2 font-semibold">Description</h3>
            <textarea
              placeholder="Write task details here..."
              className="w-full h-40 p-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Submit button full width (unchanged) */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 font-semibold shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
