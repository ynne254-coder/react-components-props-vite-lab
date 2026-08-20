function readingIndicator(minutes) {
  if (typeof minutes !== "number" || minutes <= 0) {
    return null;
  }

  const symbol = minutes < 30 ? "☕️" : "🍱";
  const interval = minutes < 30 ? 5 : 10;
  const count = Math.ceil(minutes / interval);

  return (
    <small className="reading-time" aria-label={`${minutes} minute read`}>
      {symbol.repeat(count)} {minutes} min read
    </small>
  );
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {readingIndicator(minutes)}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
