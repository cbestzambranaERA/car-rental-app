

const Helmet = (props) => {
  document.title = "Car Rental Us" + props.title;
  return <div className="w-100">{props.children}</div>;
}

export default Helmet