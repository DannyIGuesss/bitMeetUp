import React from "react";

function MeetUpForm() {
  return (
    <div>
      <form className="flex flex-col w-1/4 justify-between">
        <label className="rounded-xl">Upload Image</label>
        <input type="file" />
        <label className="rounded-xl">Meetup Location Name</label>
        <input type="text" />
        <label>Meetup Date</label>
        <input type="date" />
        <label>Meetup Start Time</label>
        <input type="time" />
        <label>Meetup End Time</label>
        <input type="time" />
        <label>Meetup Description</label>
        <textarea />
        <button className="bg-gray px-3.5 py-1 rounded-md mt-2">Submit</button>
      </form>
    </div>
  );
}

export default MeetUpForm;
