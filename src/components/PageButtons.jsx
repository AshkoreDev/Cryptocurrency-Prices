
function PageButtons({ setPage, page }) {

  const handlePrev = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);

  return (

    <section className="text-center my-4">
      <button type="button" className="btn btn-primary" onClick={handlePrev}>Prev</button>
      <span className="mx-4">{page}</span>
      <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
    </section>

  );
};

export default PageButtons;