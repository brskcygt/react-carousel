export const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item" style={{ width: "100%" }}>
      <div></div>
      <img src={item.icon} alt="" className="carousel-img" />
      <div className="caroseul-item-text">{item.description}</div>
    </div>
  );
};
