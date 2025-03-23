const EventList = ({ events }) => {
    return (
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date} - {event.location}</p>
            <p>{event.description}</p>
            <small>Category: {event.category}</small>
          </li>
        ))}
      </ul>
    );
  };
  
  export default EventList;
  