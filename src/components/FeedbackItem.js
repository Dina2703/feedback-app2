function FeedbackItem({ item }) {
  return (
    <div className="container-lg">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-7 text-center position-relative">
          <div className="rateStyle">{item.rating}</div>
          <div className="rounded bg-primary m-3 p-3">{item.text}</div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
