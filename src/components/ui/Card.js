const Card = ({ children, name, email, text }) => {
  return (
    <div className="c-card">
      <div className="card">
        <div className="card__content">
          <h5 className="card__title">{name}</h5>
          <p className="card__email">{email}</p>
          <p className="card__text">{text}</p>
        </div>
        <div className="card__button">{children}</div>
      </div>
    </div>
  );
};

export default Card;
