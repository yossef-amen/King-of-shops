import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigater">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate
          vel molestias asperiores a quidem. Atque ullam doloremque adipisci,
          similique distinctio impedit illo aspernatur explicabo quibusdam illum
          fugit officia eveniet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sunt modi natus quae quisquam perspiciatis?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
