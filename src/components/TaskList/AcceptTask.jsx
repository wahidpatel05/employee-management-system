import React from 'react'
import { CheckCircle, XCircle, Calendar } from 'lucide-react'

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#0f172a] border border-slate-700 shadow-md hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-indigo-600/30 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full">
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

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onComplete}
          className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium py-1.5 px-3 text-xs text-white transition"
        >
          <CheckCircle size={14} />
          Complete
        </button>
        <button
          onClick={onFail}
          className="flex items-center gap-1 bg-rose-600 hover:bg-rose-700 rounded-lg font-medium py-1.5 px-3 text-xs text-white transition"
        >
          <XCircle size={14} />
          Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
