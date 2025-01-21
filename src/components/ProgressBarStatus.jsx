import React, { useMemo } from "react";

export default function ProgressBarStatus({
	count = 1,
	totalCount = 10,
	timer = "0:09",
}) {
	const countPercentage = useMemo(
		() => (count / totalCount) * 100,
		[count, totalCount],
	);
	return (
		<>
			<div className="w-full space-y-2">
				<div className="flex justify-between items-center w-full">
					<span className="text-xl">
						<span className="text-color-primary font-medium">{count}</span>/
						{totalCount}
					</span>
					<span className="bg-[#E9E8E3] rounded-md p-1 px-2 font-medium">
						0:09
					</span>
				</div>
				<div className="bg-gray-200 w-full h-[10px] relative overflow-hidden">
					<div
						className="bg-color-primary absolute left-0 top-0 w-full h-[10px]"
						style={{ maxWidth: `${countPercentage}%` }}></div>
				</div>
			</div>
		</>
	);
}
