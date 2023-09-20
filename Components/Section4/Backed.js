import BackedBrands from "./BackedBrands";

const Backed = () => {
  return (
    <>
      <div className="font-secondary backedData">
        <div className="backedTitle trustText_bold text-xl">Backed by best</div>
        <div className="backedSubTitle text-lg">Our Partners</div>
        <div>
            <BackedBrands/>
        </div>
      </div>
    </>
  );
};

export default Backed;
