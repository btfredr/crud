const Item = (props) => {
  const { title, description, image_url, price } = props;
  return (
    <div className="product">
      <h2>{title}</h2>
      <img src={image_url} alt={title} style={{ width: "100%" }} />
      <h3>{price} kr</h3>
      <p>{description}</p>
    </div>
  );
};

export default Item;
