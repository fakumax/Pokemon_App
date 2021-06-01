import React from 'react';
import './Arrow.scss';
//----------Icons----------
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
//-------------------------

//const Arrow = ({ totalPages, currentPage, handlePageclick }) => {
const Arrow = ({ handlePageclick }) => {
  return (
    <div className='paged_pokemon'>
      {/* <label className='label-pagination'>{totalPages}</label>
      <label className='label-current-pagination'>[ {currentPage} ]</label> */}
      <div className='arrow_both'>
        <button className='arrow-left' name='prev' onClick={handlePageclick}>
          <VscChevronLeft className='icon-left' />
        </button>
        <button className='arrow-right' name='next' onClick={handlePageclick}>
          <VscChevronRight className='icon-right' />
        </button>
      </div>
    </div>
  );
};

export default Arrow;
