import { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [eventData, setEventData] = useState({ title: "", date: "", category: "", location: "", description: "" });

  const handleChange = (e) => setEventData({ ...eventData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventData.title || !eventData.date || !eventData.category) return;
    addEvent({ ...eventData, id: Date.now() });
    setEventData({ title: "", date: "", category: "", location: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={eventData.title} onChange={handleChange} required />
      <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={eventData.location} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={eventData.description} onChange={handleChange} />
      <select name="category" value={eventData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
