function mergeRanges(meetings)
{
	//deep clone 
	let meetingsCopy = JSON.parse(JSON.stringify(meetings));

	//sort by start time 
	let sorted = meetingsCopy.slice().sort(function(a,b)
	{
		return a.startTime > b.startTime ? 1 : -1;
	});

	//initialize mergedMeetings with first meeting
	let mergedMeetings = [sorted[0]];

	for (let i = 1; i < sorted.length; i++)
	{
		let current = sorted[i];
		let last = mergedMeetings[mergedMeetings.length - 1];

		//if current overlaps with the last, use the later end time of the 2
		if (current.startTime <= last.endTime)
		{
			last.endTime = Math.max(last.endTime, current.endTime);
		}
		else
		{
			//add current meeting since it doesn't overlap
			mergedMeetings.push(current);
		}
	}
	return mergedMeetings;
}


teamMeetings = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]

console.log(mergeRanges(teamMeetings));