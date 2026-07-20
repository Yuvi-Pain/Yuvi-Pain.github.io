export default function ChallengeLog({ challenges }) {
  return (
    <div className="challenge-log">
      {challenges.map((c) => (
        <article className="challenge-entry" key={c.title}>
          <h3>{c.title}</h3>
          <dl className="log-line">
            <dt>Issue</dt>
            <dd>{c.issue}</dd>
          </dl>
          <dl className="log-line">
            <dt>Fix</dt>
            <dd>{c.solution}</dd>
          </dl>
        </article>
      ))}
    </div>
  );
}
