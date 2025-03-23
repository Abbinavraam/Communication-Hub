import { useState } from "react";
import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Run", date: "2025-04-10", category: "Charity", location: "NYC", description: "A charity marathon for children." },
    { id: 2, title: "Interfaith Meetup", date: "2025-04-15", category: "Religious", location: "LA", description: "Dialogue between different faiths." },
  ]);
  const [filter, setFilter] = useState("");

  const addEvent = (newEvent) => setEvents([...events, newEvent]);

  const filteredEvents = filter ? events.filter((event) => event.category === filter) : events;

  return (
    <div>
      <Navbar />
      <h2>Event Listings</h2>
      <label>Filter by Category:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <EventList events={filteredEvents} />
      <EventForm addEvent={addEvent} />
    </div>
  );
};

export default Events;
