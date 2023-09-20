import React from 'react';

function NextBtn(props) {
    const {onClick} = props;
    // console.log(props);
  return (
    <div className='next__btn' onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
    </div>
  );
}

export default NextBtn;
