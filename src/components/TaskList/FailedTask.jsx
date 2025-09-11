import React from 'react'
import { XCircle, Calendar } from 'lucide-react'

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#0f172a] border border-slate-700 shadow-md hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600/30 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
          {data.category}
        </h3>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Calendar size={14} />
          {data.taskDate}
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-lg font-semibold text-white line-clamp-1">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm mt-2 text-gray-400 line-clamp-3">
        {data.taskDescription}
      </p>

      {/* Failed status */}
      <div className="mt-6 flex items-center justify-center gap-2 bg-red-600/20 text-red-400 rounded-lg py-2 text-sm font-medium">
        <XCircle size={16} />
        Failed
      </div>
    </div>
  )
}

export default FailedTask
